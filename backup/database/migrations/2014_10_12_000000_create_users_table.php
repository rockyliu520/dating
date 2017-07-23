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
            $table->string('bodytype')->nullable();
            $table->string('seekType')->nullable();
            $table->string('status')->nullable();
            $table->string('sex')->nullable();
            $table->string('wechatId')->nullable();
            $table->tinyInteger('verified')->default(0);
            $table->string('email_token')->nullable();
            $table->string('image')->nullable();
            $table->string('wechatid')->nullable();
            $table->string('description')->nullable();
            $table->integer('likes')->default(0);
            $table->integer('visitCount')->default(0);
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
