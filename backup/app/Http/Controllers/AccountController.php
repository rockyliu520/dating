<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\SendVerificationEmail;
use Hash;
use App\Models\User;
use App\Models\Visitor;
use Auth;
use DB;
use JavaScript;
use Carbon\Carbon;

class AccountController extends Controller
{
	public function __construct()
	{
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
			'code' => 1,
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
			return redirect()->back()->with('registerError', '请输入必要信息');
		}

		$checkDup = User::where('email', $data['email'])->get();
		if ($checkDup->count() != 0) {
			return redirect()->back()->with('registerError', '该邮箱已经被注册,请更换邮箱');
		}

		$user = User::create([
			'email' => $data['email'],
			'fname' => $data['fname'],
			'lname' => $data['lname'],
			'password' => Hash::make($data['password']),
			'email_token' => base64_encode($data['email']),
			'sex' => $data['sex'],
			'date' => $data['day'],
			'month' => $data['month'],
			'year' => $data['year'],
		]);

		Auth::attempt(['email' => $data['email'], 'password' => $data['password']]);

		dispatch(new SendVerificationEmail($user));
		// return view('front.account.verification');
		return redirect()->to('/account/profile');
		// return view('front.account.dashboard');
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
			return view('front.account.emailconfirm', ['user' => $user]);
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
		$data = new Carbon;
		$last7days = $data->subDays(7)->toDateString();
		$today = Carbon::today()->toDateString();

		$last7 = Visitor::select(DB::raw('count(id) as total'), DB::raw('date(created_at) as d'))
			->where('userId', Auth::user()->id)
			->where(DB::raw('date(created_at)'), '>=', $last7days)
			->where(DB::raw('date(created_at)'), '<=', $today)
			->groupBy(DB::raw('date(created_at)'))
			->get();
		
		$data = array(
			'last7' => $last7
		);

		return view('front.account.dashboard.dashboard', $data);
	}

	public function detail()
	{
		
		return view('front.account.detail');
	}

	public function updateProfile(Request $request)
	{
		return 'hello world';
	}

	public function updateWechat(Request $request)
	{

	}

	public function updateDescription(Request $request)
	{
		
	}
}
