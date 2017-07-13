<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 noPaddingLeft" id="sidemenu">
	<div class="dashboardTop">
		@if(Auth::user()->image == '')
			<img src="{{ URL::to('/images/user.png') }}" class="img-responsive" />
		@else
			<img src="{{ URL::to('/images/user.png') }}" class="img-responsive" />
		@endif
		<p>
			@if(Auth::user()->name == '')
				您还没有设定昵称
			@else
				{{ Auth::user()->name }}
			@endif
		</p>
	</div>
	<ul>
		<li>
			<p class="dashboardIcon"><i class="fa fa-address-card" aria-hidden="true"></i></p>
			<p class="dashboardLink">
				<a href="/account/dashboard">个人档案</a>
			</p>
		</li>

		<li>
			<p class="dashboardIcon"><i class="fa fa-picture-o" aria-hidden="true"></i></p>
			<p class="dashboardLink">
				<a href="">照片管理</a>
			</p>
		</li>

		<li>
			<p class="dashboardIcon"><i class="fa fa-cogs" aria-hidden="true"></i></p>
			<p class="dashboardLink">
				<a href="/account/social">社交绑定</a>
			</p>
		</li>
		<li>
			<p class="dashboardIcon"><i class="fa fa-crosshairs" aria-hidden="true"></i></p>
			<p class="dashboardLink">
				<a href="">高级设置</a>
			</p>
		</li>

		<li>
			<p class="dashboardIcon"><i class="fa fa-sign-out" aria-hidden="true"></i></p>
			<p class="dashboardLink">
				<a href="">账号登出</a>
			</p>
		</li>
	</ul>
</div>