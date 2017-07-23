<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class IndexController extends Controller
{
    public function __construct()
    {

    }

    public function index()
    {
        $user = User::select('id', 'fname', 'location', 'sex', 'image', 'year')->inRandomOrder()->take(25)->get();
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
        $user = User::find($id);
        
        $data = array(
            'user' => $user
        );
        
        return view('front.detail.detail', $data);
    }
}
