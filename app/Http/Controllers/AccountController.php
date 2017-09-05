<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\SendVerificationEmail;
use Hash;
use App\Models\User;
use App\Models\Visitor;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Hobby;
use Auth;
use DB;
use JavaScript;
use Carbon\Carbon;
use App\Models\Favourite;
use App\Logic\Image\ImageRepository;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Config;

class AccountController extends Controller
{
	protected $image;

	public function __construct()
	{
		// local
        // view()->share('url', '');
        // host
        view()->share('url', '/public/');
		$this->middleware('auth', ['except' => ['signin', 'signup', 'register', 'login', 'signout']]);
	}

	public function signin()
	{
		return view('front.account.signin');
	}

	public function login(Request $request)
	{
		$data = $request->all();

		if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
			
			$response = array(
				'code' => 1,
				'message' => '登陆成功，跳转...'
			);
			
			// return redirect()->back();
			return response()->json($response);
		}

		$response = array(
			'code' => 0,
			'message' => '登陆失败，账号密码不匹配...'
		);

		return response()->json($response);
		// return redirect()->back()->with('loginError', '账号邮箱不匹配');
	}

	public function signup(Request $request)
	{	

		return view('front.account.signup');
	}

	/**
	* Handle a registration request for the application.
	*
	* @param \Illuminate\Http\Request $request
	* @return \Illuminate\Http\Response
	*/
	public function register(Request $request)
	{
		$data = $request->all();

		if ($data['email'] == '' || $data['email'] == null || $data['password'] == '' || $data['password'] == null) {
			$response = array(
				'code' => 0,
				'message' => '请输入必要的信息...'
			);
			return response()->json($response);
			// return redirect()->back()->with('registerError', '请输入必要信息');
		}

		$checkDup = User::where('email', $data['email'])->get();
		if ($checkDup->count() != 0) {
			$response = array(
				'code' => 0,
				'message' => '您输入的邮箱已经被注册，请换个邮箱重试...'
			);
			return response()->json($response);
			// return redirect()->back()->with('registerError', '该邮箱已经被注册,请更换邮箱');
		}

		$user = User::create([
			'email' => $data['email'],
			'fname' => $data['fname'],
			'lname' => '',
			'password' => Hash::make($data['password']),
			'email_token' => base64_encode($data['email']),
			'sex' => $data['sex'],
			'date' => $data['day'],
			'month' => $data['month'],
			'year' => $data['year'],
			'height' => '-1',
			'weight' => '-1',
			'education' => '-1',
			'bodyType' => '-1',
			'status' => '-1',
			'lookfor' => $data['lookfor'],
			'job' => '其他',
		]);

		Auth::attempt(['email' => $data['email'], 'password' => $data['password']]);

		dispatch(new SendVerificationEmail($user));
		// return view('front.account.verification');

		$response = array(
			'code' => 1,
			'message' => '注册成功，正在跳转...'
		);
		return response()->json($response);
		// return redirect()->to('/account/profile');
	}

	/**
	* Handle a registration request for the application.
	*
	* @param $token
	* @return \Illuminate\Http\Response
	*/
	public function verify($token)
	{
		$user = User::where('email_token', $token)->first();
		$user->verified = 1;

		if($user->save()) {
			return redirect()->to('/account/dashboard')->with('successVerify', '邮箱验证成功');
		}
	}

	public function signout()
	{
		Auth::logout();
		return redirect()->to('/');
	}

	public function profile()
	{
		return view('front.account.profile.profile');
	}

	public function dashboard()
	{	
		// dd(Auth::user()->hasAvatar[0]->image);
		
		// dd(base_path());
		// dd(Config::get('images.full_size'));
		// dd(public_path('img/users'));
		// $full_size_dir = Config::get('images.full_size');
	 	// $store_path = $full_size_dir . '/'. sha1(Auth::user()->id).'/';
		// dd(File::exists($store_path));

		$hobby = Hobby::select('hobby')->where('userId', Auth::user()->id)->get();
		$h = array();
		foreach ($hobby as $key => $value) {
			array_push($h, $value->hobby);
		}
		$hobby = $hobby->keyBy('hobby')->toArray();

		$visitor = Auth::user()->visited()
			->select(DB::raw('da_users.id as id'), DB::raw('date(da_visitor.created_at) as c'), 'fname', 'image', 'location', 'sex', 'month', 'year', 'date', 'description', 'likes', 'visitCount')
			->orderBy(DB::raw('da_visitor.created_at'), 'DESC')
			->take(30)->get();

		// 我关注的
		$following = Auth::user()->following()
			->select(DB::raw('da_users.id as id'), DB::raw('date(da_favourite.created_at) as c'), 'fname', 'image', 'location', 'sex', 'month', 'year', 'date', 'description', 'likes', 'visitCount')
			->orderBy(DB::raw('da_favourite.created_at'), 'DESC')
			->take(30)->get();

		// 被关注
		$followed = Favourite::select('id')->where('followingId', Auth::user()->id)->get();

		$data = new Carbon;
		$last7days = $data->subDays(7)->toDateString();
		$today = Carbon::today()->toDateString();

		// 过去7天访问人数
		$last7 = Visitor::select(DB::raw('count(id) as total'), DB::raw('date(created_at) as d'))
			->where('userId', Auth::user()->id)
			->where(DB::raw('date(created_at)'), '>=', $last7days)
			->where(DB::raw('date(created_at)'), '<=', $today)
			->groupBy(DB::raw('date(created_at)'))
			->get();

		$questions = Question::join('answer', 'answer.questionId', '=', 'question.id')
			->select('questionId', DB::raw('da_answer.id as aid'), 'likes', 'question', 'answer')
			->where('userId', Auth::user()->id)->whereIn(DB::raw('da_question.id'), [1,2,3,4,5,6,7])->get();

		$listHobby = ['健美操','篮球','保龄球','露营','纸牌游戏','自行车','跳舞','钓鱼 / 狩猎','高尔夫球','远足','武术','乐器','攀岩','跑步','唱歌','滑雪 / 滑雪板','足球','游泳 / 水上运动','网球','旅游','排球','重量 / 健身房','瑜伽 / 普拉提','其他'];
		
		$avatar = User::find(Auth::user()->id)->hasAvatar;
		
		$data = array(
			'questions' => $questions,
			'last7' => $last7,
			'following' => $following,
			'followed' => $followed,
			'visitors' => $visitor,
			'hobby' => $h,
			'compareHobby' => $hobby,
			'listHobby' => $listHobby,
			'avatar' => $avatar
		);

		return view('front.account.dashboard.dashboard', $data);
	}

	public function detail()
	{
		return view('front.account.detail');
	}

	public function updateProfile(Request $request)
	{	
		$data = $request->all();

		User::where('id', Auth::user()->id)->update([
			'fname' => $data['fname'],
			'date' => $data['date'],
			'month' => $data['month'],
			'year' => $data['year'],
			'sex' => $data['sex'],
			'height' => $data['height'],
			'location' => $data['location'],
			'postcode' => $data['postcode'],
			'status' => $data['status'],
			'child' => $data['child'],
			'bodyType' => $data['bodyType'],
			'education' => $data['education'],
			'university' => $data['university'],
			'job' => $data['job'],
			'birthPlace' => $data['birthPlace'],
			'pr' => $data['pr'],
		]);

		Hobby::where('userId', Auth::user()->id)->delete();

		foreach ($data['hobby'] as $key => $value) {
			$h = new Hobby;
			$h->userId = Auth::user()->id;
			$h->hobby = $value;
			$h->save();
		}

		$response = array(
			'code' => 1,
			'message' => '更新成功...'
		);
		return response()->json($response);
	}

	public function updateWechat(Request $request)
	{

	}

	public function updateDescription(Request $request)
	{
		
	}

	public function resendVerifyEmail()
	{
		$user = User::find(Auth::user()->id);
		dispatch(new SendVerificationEmail($user));

		$response = array(
			'code' => 1,
			'message' => '验证邮件发送成功'
		);

		return response()->json($response);
	}

	public function answerQuestion(Request $request)
	{
		$data = $request->all();

		$check = Answer::where('questionId', $data['qid'])->where('userId', Auth::user()->id)->get();
		
		if ($check->count() != 0) {
			// update
			Answer::where('questionId', $data['qid'])->where('userId', Auth::user()->id)->update(['answer' => $data['answer']]);
		} else {
			// create
			$a = new Answer;
			$a->userId = Auth::user()->id;
			$a->questionId = $data['qid'];
			$a->likes = 0;
			$a->answer = $data['answer'];
			$a->save();
		}

		$response = array(
			'code' => 1,
			'message' => '更新成功'
		);

		return response()->json($response);
	}

	public function uploadImage(ImageRepository $imageRepository, Request $request)
	{
		$this->image = $imageRepository;

		$data = $request->all();
		
		$response = $this->image->upload($data, Auth::user()->id, 1);

        return $response;
	}

	public function deleteimage()
	{

	}
}
