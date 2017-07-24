<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Visitor;
use App\Models\Question;
use App\Models\Answer;
use Auth;
use DB;

class IndexController extends Controller
{
    public function __construct()
    {

    }

    public function index()
    {   
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

        // $questions = Question::join('answer','answer.questionId', '=', 'question.id')->where('userId', $id)->get()->toArray();
        $questions = Question::all();

        $user = User::find($id);
        
        $data = array(
            'user' => $user,
            'questions' => $questions
        );
        
        return view('front.detail.detail', $data);
    }
}
