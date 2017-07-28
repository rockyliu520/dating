<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('fname')->nullable();
            $table->string('lname')->nullable();
            $table->string('email', 250)->unique();
            $table->string('password');
            $table->string('mobile')->nullable();
            $table->string('date')->nullable();
            $table->string('month')->nullable();
            $table->string('year')->nullable();
            $table->string('location')->nullable();
            $table->string('postcode')->nullable();
            $table->integer('bodyType')->default(-1);
            $table->string('seekType')->nullable();
            $table->integer('status')->default(-1);
            $table->integer('sex');
            $table->string('wechatId')->nullable();
            $table->tinyInteger('verified')->default(0);
            $table->string('email_token')->nullable();
            $table->string('image')->nullable();
            $table->string('wechatid')->nullable();
            $table->integer('education')->default(-1); // 0高中 1本科 2硕士 3博士
            $table->string('university')->nullable();
            $table->string('job')->default(-1);
            $table->string('birthPlace')->nullable();
            $table->integer('smoke')->default(-1);
            $table->integer('drinking')->default(-1);
            $table->string('description')->nullable();
            $table->integer('likes')->default(0);
            $table->integer('visitCount')->default(0);
            $table->string('weight')->nullable();
            $table->string('height')->nullable();
            $table->string('language')->nullable();
            $table->integer('child')->default(-1);
            $table->integer('pr')->default(-1);
            $table->integer('lookfor')->default(-1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
