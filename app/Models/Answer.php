<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Answer extends Model
{
    protected $table = 'answer';

    public function hasQuestion()
    {
    	return $this->belongsTo('App\Models\Question', 'questionId');
    }
}