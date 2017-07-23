<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Favourite extends Model
{
    protected $table = 'favourite';

    public static function addOrRmFav($followerId, $followingId)
    {
    	$check = Favourite::where('followerId', $followerId)->where('followingId', $followingId);

    	if ($check->get()->count() == 0) {
	    	// add to favourite
	    	$f = new Favourite;
	    	$f->followerId = $followerId;
	    	$f->followingId = $followingId;
	    	$f->save();

    		return '已经关注用户';
    	} else {
    		// remove favourite
    		$check->delete();

    		return '已经取消关注';
    	}
    }
}
