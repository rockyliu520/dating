<div class="col-xs-12 col-md-4 left-feild">
	<div class="be-user-block style-3">
		<div class="be-user-detail">
			<!-- <a class="be-ava-user style-2" href="/detail/{{ Auth::user()->id }}" target="_blank"> -->
			<a class="be-ava-user style-2" data-toggle="modal" href='#r_profile_image_modal' v-on:click="changeImage()">
				@if(Auth::user()->image == '' || Auth::user()->image == null)
					<img src="/img/user.png" alt="omg">
				@else
					<img src="{{ Auth::user()->image }}" alt=""> 
				@endif
			</a>
			
			<p data-toggle="modal" href='#r_profile_image_modal' v-on:click="changeImage()">点击更换头像</p>
			<div class="modal fade r_custom_modal" id="r_profile_image_modal">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h4 class="modal-title">更换头像</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<div id="myDropzone" class="dropzone"></div> <!-- This is the dropzone element -->
									<div id="dropzonePreview">
										<h5>
											<i class="fa fa-info-circle fa-4x" aria-hidden="true"></i>
											<br>
											提示：
										</h5>
										<p>推荐头像大小 269 x 202</p>
									</div>
									<div class="clearfix"></div>
								</div>
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 20px;">
									<button class="be-popup-sign-button btn-block" id="r_profile_image_upload_button" type="button">上传照片</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p class="be-use-name">{{ Auth::user()->fname }}</p>
			<div class="be-user-info">
				{{ Auth::user()->location }}, {{ Auth::user()->postcode }}, 澳大利亚
			</div>
			<a class="be-ava-center btn color-1 size-1 btn-block hover-1 r_left_change_profile_btn" data-toggle="modal" href='#r_change_profile' style="margin-bottom: 5px;" target="_blank">
				<i class="fa fa-plus"></i>修改资料
			</a>
			<a href="/detail/{{ Auth::user()->id }}" target="_blank" class="be-ava-center btn btn-message color-4 size-1 hover-7 btn-block">
				<i class="fa fa-envelope-o"></i>查看我的首页
			</a>
			<!-- <div class="be-ava-center btn btn-message color-4 size-1 hover-7 btn-block">
				<i class="fa fa-envelope-o"></i>我的信息
			</div> -->

			<div class="be-user-social">
				<a class="social-btn color-1"><i class="fa fa-weixin"></i></a>
				&nbsp;&nbsp;&nbsp;
				@if(Auth::user()->wechatid != null)
					{{ Auth::user()->wechatid }}
				@else
					还没有设置微信号, <a href="/account/profile" target="_blank">去设置</a>
				@endif
			</div>
		</div>
		<div class="be-user-statistic">
			<div class="stat-row clearfix"><i class="stat-icon icon-views"></i> 总访问我的<span class="stat-counter">{{ Auth::user()->visitCount }}</span></div>
			<div class="stat-row clearfix"><i class="stat-icon icon-like"></i> 我的赞<span class="stat-counter">{{ Auth::user()->likes }}</span></div>
			<div class="stat-row clearfix"><i class="stat-icon icon-following"></i> 我收藏的<span class="stat-counter">{{ $following->count() }}</span></div>
			<div class="stat-row clearfix"><i class="stat-icon icon-features"></i> 被收藏次数<span class="stat-counter">{{ $followed->count() }}</span></div>
		</div>
	</div>
	<!-- <div class="be-desc-block">
		<div class="be-desc-author">
			<div class="be-desc-label">关于我</div>
			<div class="clearfix"></div>
			<div class="be-desc-text">
				{{ Auth::user()->description }}
			</div>
		</div>
	</div>	 -->
</div>