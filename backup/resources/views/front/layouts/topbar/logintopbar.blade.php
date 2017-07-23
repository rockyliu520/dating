<div class="login-header-block">
	<div class="login_block">							
		
		@include('front.layouts.topbar.notification')
		<!-- @include('front.layouts.topbar.message') -->
		
		<div class="be-drop-down login-user-down">
			@if(Auth::user()->image == '')
				<img class="login-user" src="/img/login.jpg" alt="">
			@else
				<img class="login-user" src="{{ Auth::user()->image }}" alt="" style="width:40px;height:40px;">
			@endif
			&nbsp;&nbsp;&nbsp;
			<span class="be-dropdown-content">Hi, <span>{{ Auth::user()->fname }}&nbsp;{{ Auth::user()->lname }}</span></span>
			<div class="drop-down-list a-list" id="r_top_profile">
				<a href="/account/dashboard">我的资料</a>
				<!-- <a href="about-us.html">Work Experience</a> -->
				<a href="/account/profile">账户设置</a>
				<a href="/account/signout">登出账号</a>
			</div>
		</div>
	</div>
</div>