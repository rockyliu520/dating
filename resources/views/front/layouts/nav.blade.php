<nav class="navbar navbar-default" role="navigation" id="navbar">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/"><img src="{{ URL::to('images/logo.png') }}" class="img-responsive" style="width: 140px"></a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse navbar-ex1-collapse">
			<ul class="nav navbar-nav navbar-right">
				@if(Auth::check())
					<li>
						<a href="/account/dashboard">账号资料</a>
					</li>
				@else
					<li>
						<a href="/account/signup">账号注册</a>
					</li>
					<li class="navspecial">
						<a href="/account/signin" class="btn bt-default btn-danger">账号登录</a>
					</li>
				@endif
			</ul>
		</div><!-- /.navbar-collapse -->
	</div>
</nav>