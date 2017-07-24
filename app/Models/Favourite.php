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

    		return '<i class="fa fa-plus"></i>&nbsp;&nbsp;关注 TA';
    	}
    }
}
