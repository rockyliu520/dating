<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favourite;
use Auth;

class ApiController extends Controller
{
    public function __construct()
    {

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
}
