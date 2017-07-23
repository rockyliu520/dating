<!-- THE LOADER -->
<div class="be-loader">
	<div class="spinner">
		<img src="/img/logo-loader.png"  alt="">
		<p class="circle">
		  <span class="ouro">
		    <span class="left"><span class="anim"></span></span>
		    <span class="right"><span class="anim"></span></span>
		  </span>
		</p>
	</div>
</div>
<!-- THE HEADER -->
<header>
	<div class="container-fluid custom-container">
		<div class="row no_row row-header">
			<div class="brand-be">
				<a href="/">
					<img class="logo-c active be_logo"  src="/img/logo.png" alt="logo">
					<img class="logo-c be_logo" src="/img/logo-green.png" alt="logo2">
					<img  class="logo-c be_logo" src="/img/logo-orang.png" alt="logo3">
					<img class="logo-c be_logo" src="/img/logo-red.png" alt="logo4">
				</a>
			</div>

			@if(Auth::check())
				@include('front.layouts.topbar.logintopbar')
			@endif

			<div class="header-menu-block">
				<button class="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
				<ul class="header-menu" id="one">
					<li><a href="/">首页</a></li>
					<li><a href="/contact-us">意见反馈</a></li>
					<li><a href="/contact-us">帮助</a></li>
					<li><a href="/about-us">关于我们</a></li>

					@if(Auth::check())
					<li><a href="/account/profile">我的资料</a></li>
					@endif
					<!-- <li><a href="activity.html">Activity</a></li>
					<li><a href="search.html">Discover</a>
						<ul>
							<li><a href="search.html">Explore</a></li>
							<li><a href="people.html">People</a></li>
							<li><a href="gallery.html">Galleries</a></li>
						</ul>
					</li>
					<li><a href="author-login.html">My Portfolio</a></li>
					<li><a href="site-map.html">Site Map</a></li>
					<li><a href="organization.html">Organization</a></li>
					<li id="ad-work-li"><a id="add-work-btn" class="btn color-1" href="work.html">Add Work </a></li> -->

				</ul>
			</div>

			@if(!Auth::check())
				<div class="login-header-block">
					<div class="login_block">
						<!-- <a class="btn-login btn color-1 size-2 hover-2" data-toggle="modal" href='#signinModal'> -->
						<a class="btn color-1 size-2 hover-2" id="r_account_modal_button" data-toggle="modal" href='#r_account_modal'>
							<i class="fa fa-user"></i>
							账号登录
						</a>
					</div>	
				</div>
			@endif
		</div>
	</div>
</header>