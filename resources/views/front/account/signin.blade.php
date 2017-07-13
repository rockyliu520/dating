@extends('front.layouts.main')
<style>
	@import url(https://fonts.googleapis.com/css?family=Exo:400,500,500italic,400italic,600,600italic,700,700italic,800,800italic,300,300italic);
	body {
		/*The below background is just to add some color, you can set this to anything*/
	  	background: url('/images/bg3.jpg') center center no-repeat;
	}
	#navbar {
		background: none;
	}
</style>
@section('index')
<div class="container login-form" id="signin">
	<h2 class="login-title">- 账号登录 -</h2>
	<div class="panel panel-default">
		<div class="panel-body">
			<form method="post" action="/account/login" id="signinform">
				{{ csrf_field() }}
				<div class="input-group login-userinput">
					<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
					<input id="txtUser" type="email" class="form-control " name="email" placeholder="输入你的邮箱" required="required">
				</div>
				<div class="input-group login-userinput">
					<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
					<input  id="txtPassword" type="password" class="form-control " name="password" placeholder="输入您的密码" required="required">
					<span id="showPassword" class="input-group-btn">
            			<button class="btn btn-default reveal" type="button"><i class="glyphicon glyphicon-eye-open"></i></button>
          			</span>  
				</div>
				@if(Session::has('errorMessage'))
					<div class="alert alert-danger">
						{{ Session::get('errorMessage') }}
					</div>
				@endif
				<button class="btn btn-primary btn-block login-button" type="submit"><i class="fa fa-sign-in"></i> 现在登录</button>
				<div class="checkbox login-options">
					<label><input type="checkbox"/>记住我</label>
					<a href="#" class="login-forgot">忘记密码</a>
				</div>		
			</form>			
		</div>
	</div>
</div>
@stop