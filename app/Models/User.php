<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'email_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function incVisitCount($id)
    {
        static::whereId($id)->increment('visitCount');
    }

    public function visiting()
    {
        return $this->belongsToMany('App\Models\User', 'visitor', 'visitorId', 'userId');
    }

    public function visited()
    {
        return $this->belongsToMany('App\Models\User', 'visitor', 'userId', 'visitorId');
    }

    public function following()
    {
        return $this->belongsToMany('App\Models\User', 'favourite', 'followerId', 'followingId');
    }

    public function followed()
    {
        return $this->belongsToMany('App\Models\User', 'favourite', 'followingId', 'followerId');
    }

    public function hasAvatar()
    {
        return $this->hasMany('App\Models\Image', 'userId')->where('isMain', 1);
    }
}
