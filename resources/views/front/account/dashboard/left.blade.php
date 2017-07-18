<div class="col-xs-12 col-md-4 left-feild">
	<div class="be-user-block style-3">
		<div class="be-user-detail">
			<a class="be-ava-user style-2" href="/detail/{{ Auth::user()->id }}">
				<img src="{{ Auth::user()->image }}" alt=""> 
			</a>
			<!-- <a class="be-ava-center btn color-1 size-1 btn-block hover-1" href="/account/profile"><i class="fa fa-plus"></i>修改资料</a> -->
			<!-- <a class="be-ava-left btn color-1 size-2 hover-1" href="/account/profile"><i class="fa fa-plus"></i>修改资料</a>
			<div class="be-ava-right btn btn-message color-4 size-2 hover-7">
				<i class="fa fa-envelope-o"></i>message
				<div class="message-popup">
					<div class="message-popup-inner container">
						<div class="row">
							<div class="col-xs-12 col-sm-8 col-sm-offset-2">
								<i class="fa fa-times close-button"></i>
								<h5 class="large-popup-title">Send Message To DaVinchi</h5>
								<div class="form-group">
									<textarea class="form-input" required="" placeholder="Your text"></textarea>
								</div>
								<a class="btn btn-right color-1 size-1 hover-1">send message</a>	
							</div>
						</div>
					</div>
				</div>
			</div> -->
			<p class="be-use-name">{{ Auth::user()->fname }}</p>
			<div class="be-user-info">
				{{ Auth::user()->location }}, {{ Auth::user()->postcode }}, 澳大利亚
			</div>
			<a class="be-ava-center btn color-1 size-1 btn-block hover-1" href="/account/profile" style="margin-bottom: 5px;">
				<i class="fa fa-plus"></i>修改资料
			</a>
			<div class="be-ava-center btn btn-message color-4 size-1 hover-7 btn-block">
				<i class="fa fa-envelope-o"></i>我的信息
			</div>

			<div class="be-user-social">
				<a class="social-btn color-1"><i class="fa fa-weixin"></i></a>
				&nbsp;&nbsp;&nbsp;
				@if(Auth::user()->wechatid != null)
					{{ Auth::user()->wechatid }}
				@else
					还没有设置微信号, <a href="/account/profile">去设置</a>
				@endif
			</div>
			<!-- <a class="be-user-site" href="http://www.phoenix.cool"><i class="fa fa-link"></i> www.phoenix.cool</a> -->
		</div>
		<div class="be-user-statistic">
			<div class="stat-row clearfix"><i class="stat-icon icon-views-b"></i> 总访问我的<span class="stat-counter">218098</span></div>
			<div class="stat-row clearfix"><i class="stat-icon icon-views-b"></i> 最近访问我的<span class="stat-counter">218098</span></div>
			<div class="stat-row clearfix"><i class="stat-icon icon-like-b"></i> 我收藏的<span class="stat-counter">14335</span></div>
			<!-- <div class="stat-row clearfix"><i class="stat-icon icon-followers-b"></i>Followers<span class="stat-counter">2208</span></div> -->
			<!-- <div class="stat-row clearfix"><i class="stat-icon icon-following-b"></i>Following<span class="stat-counter">0</span></div> -->
		</div>
	</div>
	<div class="be-desc-block">
		<div class="be-desc-author">
			<div class="be-desc-label">关于我</div>
			<div class="clearfix"></div>
			<div class="be-desc-text">
				{{ Auth::user()->description }}
			</div>
		</div>
		<!-- <div class="be-desc-author">
			<div class="be-desc-label">My Values</div>
			<div class="clearfix"></div>
			<div class="be-desc-text">
				Sed dignissim scelerisque pretium. Vestibulum vel lacus laoreet nunc fermentum maximus. Proin id sodales sem, at consectetur urna. Proin vestibulum, erat a hendrerit sodales, nulla libero ornare dolor.
			</div>
		</div>
		<div class="be-desc-author">
			<div class="be-desc-label">My Skills</div>
			<div class="clearfix"></div>
			<div class="be-desc-text">
				Praesent pharetra eget ante nec sodales. Sed et orci sit amet justo lobortis luctus. Curabitur sit amet congue purus. Sed arcu lectus, suscipit in finibus id, consequat sagittis arcu.
			</div>
		</div> -->
	</div>										
</div>