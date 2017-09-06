<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Visitor;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Hobby;
use App\Models\Favourite;
use App\Models\Like;
use Auth;
use DB;

class IndexController extends Controller
{
    public function __construct()
    {
        // local
        view()->share('url', '');
        // host
        // view()->share('url', '/public/');
    }

    public function index()
    {   
        // $user = User::all();
        // foreach ($user as $key => $value) {
        //     $result = substr($value->image, 1);
        //     User::where('id', $value->id)->update(['image' => $result]);
        // }
        
        if (Auth::check()) {
            $user = User::select('id', 'fname', 'location', 'sex', 'image', 'year')
                ->where('id', '!=', Auth::user()->id)
                ->inRandomOrder()->take(25)->get();
        } else {
            $user = User::select('id', 'fname', 'location', 'sex', 'image', 'year')
                ->inRandomOrder()->take(25)->get();
        }

        $random = User::select('id', 'image')->inRandomOrder()->take(19)->get();

        $data = array(
            'users' => $user,
            'random' => $random
        );

    	return view('front.home.index', $data);
    }

    public function contactus()
    {
        return view('front.contact');
    }

    public function detail($id)
    {
        User::incVisitCount($id);
        
        Visitor::newVisitor(Auth::user()->id, $id);
        
        $favourite = Favourite::where('followingId', $id)->where('followerId', Auth::user()->id)->get();
        $likes = Like::where('userId', Auth::user()->id)->where('likeId', $id)->get();

        $questions = Question::all();

        $answer = Answer::where('userId', $id)->get();
        $answer = $answer->keyBy('questionId');
        
        $user = User::find($id);
        $hobby = Hobby::where('userId', $id)->get();

        $data = array(
            'hobby' => $hobby,
            'answer' => $answer,
            'user' => $user,
            'questions' => $questions,
            'isFav' => $favourite->count(),
            'isLike' => $likes->count(),
        );
        
        return view('front.detail.detail', $data);
    }
}
