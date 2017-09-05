<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favourite;
use App\Models\Like;
use Auth;

class ApiController extends Controller
{
    public function __construct()
    {
        // local
        // view()->share('url', '');
        // host
        view()->share('url', '/public/');
    }

    public function addOrRmFav(Request $request)
    {
    	$data = $request->all();

    	$message = Favourite::addOrRmFav(Auth::user()->id, $data['likeId']);
        
    	$response = array(
    		'code' => 1,
    		'message' => $message
    	);

    	return response()->json($response);
    }

    public function like(Request $request)
    {
        $data = $request->all();

        $check = Like::where('userId', Auth::user()->id)->where('likeId', $data['likeId'])->get();

        if ($check->count() != 0) {
            // delete like
            Like::where('userId', Auth::user()->id)->where('likeId', $data['likeId'])->delete();
            $message = '取消点赞';
            $html = '<i class="fa fa-thumbs-o-up"></i>&nbsp;&nbsp;给&nbsp;TA&nbsp;一个赞';
            User::where('id', $data['likeId'])->decrement('likes');

        } else {
            // add like
            $l = new Like;
            $l->userId = Auth::user()->id;
            $l->likeId = $data['likeId'];
            $l->save();
            User::where('id', $data['likeId'])->increment('likes');
            $html = $message = '已经点赞';
        }

        $response = array(
            'code' => 1,
            'message' => $message,
            'html' => $html
        );

        return response()->json($response);
    }
}
