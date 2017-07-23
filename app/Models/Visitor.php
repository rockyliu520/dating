<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $table='visitor';

    // public function belongsToManyUser()
    // {
    // 	return $this->belongsToMany('App\Models\User', 'userId', 'id');
    // }

    public static function newVisitor($visitorId, $id)
    {
    	$v = new Visitor;
    	$v->visitorId = $visitorId;
    	$v->userId = $id;
    	$v->save();
    }
}
