<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\SendVerificationEmail;
use Hash;
use App\Models\User;
use Auth;

class AccountController extends Controller
{
	public function __construct()
	{

	}

	public function signin() 
	{
		if (Auth::check()) {
			return redirect()->back();
		}

		return view('front.account.signin');
	}

	public function login(Request $request)
	{
		$data = $request->all();

		if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
			return redirect()->to('/account/dashboard');
		}

		return redirect()->back()->with('errorMessage', '账号邮箱不匹配');
	}

	public function signup(Request $request)
	{	
		if (Auth::check()) {
			return redirect()->back();
		}

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
			return redirect()->back()->with('errorMessage', '请输入必要信息');
		}

		$checkDup = User::where('email', $data['email'])->get();
		if ($checkDup->count() != 0) {
			return redirect()->back()->with('errorMessage', '该邮箱已经被注册,请更换邮箱');
		}

		$user = User::create([
			'email' => $data['email'],
			'password' => Hash::make($data['password']),
			'email_token' => base64_encode($data['email'])
		]);

		Auth::attempt(['email' => $data['email'], 'password' => $data['password']]);

		dispatch(new SendVerificationEmail($user));
		// return view('front.account.verification');
		return redirect()->to('/account/dashboard');
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

	public function dashboard()
	{	
		if (!Auth::check()) {
			return redirect()->to('/account/signin');
		}
		return view('front.account.dashboard');
	}

	public function detail()
	{
		if (!Auth::check()) {
			return redirect()->to('/account/signin');
		}
		return view('front.account.detail');
	}

	public function updateBasic(Request $request)
	{
		
	}
}
