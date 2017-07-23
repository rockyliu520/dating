<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Question extends Model
{
    protected $table = 'question';

    public function hasAnswer()
    {
    	return $this->hasMany('App\Models\Answer', 'questionId', 'id');
    }
}