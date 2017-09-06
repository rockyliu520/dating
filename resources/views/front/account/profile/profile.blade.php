@extends('front.layouts.main')
@section('index')
<div class="container be-detail-container" id="r_vue_profile">
	<div class="row">
		
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom: 15px;">
			<div class='alert alert-warning alert-white rounded'>
				<button type='button' data-dismiss='alert' aria-hidden='true' class='close'>×</button>
				<div class='icon'><i class='fa fa-warning'></i></div>
				<strong>提示: </strong>您还没有验证邮箱，请登录邮箱进行验证。点击<a href="#" v-on:click="resend()" id="r_resend_email_link">重新发送</a>验证邮件。
			</div>
		</div>

		<div class="col-xs-12 col-md-3 left-feild">
			<div class="be-vidget back-block">
				<a class="btn full color-1 size-1 hover-1" href="/account/dashboard"><i class="fa fa-chevron-left"></i>返回我的首页</a>
			</div>
			<div class="be-vidget hidden-xs hidden-sm" id="scrollspy">
				<h3 class="letf-menu-article">
					选择编辑条目
				</h3>
				<div class="creative_filds_block">
					<ul class="ul nav">
						<li class="edit-ln"><a href="#basic-information">基本信息</a></li>
						<li class="edit-ln"><a href="#edit-password">更换密码</a></li>
						<li class="edit-ln"><a href="#on-the-web">社交网络</a></li>
						<li class="edit-ln"><a href="#about-me">关于我</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-md-9 _editor-content_">
			<div class="sec"  data-sec="basic-information">
				<div class="be-large-post">
					<div class="info-block style-2">
						<div class="be-large-post-align "><h3 class="info-block-label">基本信息</h3></div>
					</div>
					<form>
						<div class="be-large-post-align">
							<div class="be-change-ava">
								<a class="be-ava-user style-2" href="blog-detail-2.html">
									@if(Auth::user()->image == '')
									<img src="{{ $url }}/img/ava_10.jpg" alt=""> 
									@else
									<img src="{{ $url }}{{ Auth::user()->image }}" alt=""> 
									@endif
								</a>
								<a class="btn color-4 size-2 hover-7">更换头像</a>
							</div>
						</div>
						<div class="be-large-post-align">
							<div class="row">
								<div class="input-col col-xs-12 col-sm-12">
									<div class="form-group fg_icon focus-2">
										<div class="form-label">姓名</div>
										<input class="form-input" name="fname" type="text" value="{{ Auth::user()->fname }}" v-model="fname">
									</div>							
								</div>
								<!-- <div class="input-col col-xs-12 col-sm-6">
									<div class="form-group focus-2">
										<div class="form-label">姓(Last Name)</div>		
										<input class="form-input" name="lname" type="text" value="Leight">
									</div>								
								</div>
								<div class="input-col col-xs-12">
									<div class="form-group focus-2">
										<div class="form-label">职业</div>									
										<input class="form-input" type="text" value="">
									</div>								
								</div>
								<div class="input-col col-xs-12">
									<div class="form-group focus-2">
										<div class="form-label">公司</div>									
										<input class="form-input" type="text" placeholder="">
									</div>								
								</div> -->
								<div class="input-col col-xs-12 col-sm-6" id="r_profile_state_part">
									<div class="form-label">州</div>
									<div class="be-drop-down icon-none" id="r_state_select">
										<span class="be-dropdown-content" id="r_profile_select_title"> 选择州 </span>
										<ul class="drop-down-list">
											<li><a area="Australian Capital Territory">Australian Capital Territory</a></li>
											<li><a area="New South Wales">New South Wales</a></li>
											<li><a area="Northern Territory">Northern Territory</a></li>
											<li><a area="Queensland">Queensland</a></li>
											<li><a area="South Australia">South Australia</a></li>
											<li><a area="Tasmania">Tasmania</a></li>
											<li><a area="Victoria">Victoria</a></li>
											<li><a area="Western Australia">Western Australia</a></li>
										</ul>
									</div>
								</div>
								<input type="hidden" id="r_profile_state" name="" value="{{ Auth::user()->location }}" v-model="state">
								
								<div class="input-col col-xs-12 col-sm-6">
									<div class="form-group focus-2">
										<div class="form-label">区号(Postcode)</div>									
										<input class="form-input" type="text" name="postcode" value="" placeholder="Eg: 2000" v-model="postcode">
									</div>								
								</div>
								<div class="col-xs-12">
									<a class="btn color-1 size-2 hover-1 btn-right" v-on:click="updateProfile()">更新信息</a>
								</div>	
							</div>
						</div>
						
					</form>
				</div>
			</div>
			<div class="sec"  data-sec="edit-password">
				<div class="be-large-post">
					<div class="info-block style-2">
						<div class="be-large-post-align"><h3 class="info-block-label">密码更换</h3></div>
					</div>
					<div class="be-large-post-align">
						<div class="row">
							<div class="input-col col-xs-12 col-sm-4">
								<div class="form-group focus-2">
									<div class="form-label">旧密码</div>									
									<input class="form-input" type="password" name="oldpassword" placeholder="">
								</div>								
							</div>
							<div class="input-col col-xs-12 col-sm-4">
								<div class="form-group focus-2">
									<div class="form-label">新密码</div>									
									<input class="form-input" type="password" name="password" placeholder="">
								</div>								
							</div>
							<div class="input-col col-xs-12 col-sm-4">
								<div class="form-group focus-2">
									<div class="form-label">重复新密码</div>									
									<input class="form-input" type="password" name="repassword" placeholder="">
								</div>								
							</div>
							<div class="col-xs-12">
								<a class="btn color-1 size-2 hover-1 btn-right">更换密码</a>
							</div>																
						</div>
					</div>
				</div>
			</div>
			<div class="sec" data-sec="on-the-web">
				<div class="be-large-post m-social">
					<div class="info-block style-2">
						<div class="be-large-post-align"><h3 class="info-block-label">社交账号</h3></div>
					</div>
					<div class="be-large-post-align">
						<div class="row">
							<div class="input-col col-xs-12 col-sm-12">
								<div class="form-group fg_icon focus-2">
									<div class="form-label">微信ID</div>
									<input class="form-input" name="fname" type="text" value="" placeholder="添加微信ID">
								</div>							
							</div>
							<div class="col-xs-12">
								<a class="btn color-1 size-2 hover-1 btn-right">添加微信</a>
							</div>
						</div>
					</div>

					<!-- <div class="be-large-post-align">
						<div class="social-input form-group focus-2">
							<div class="s_icon">
								<div class="social-bars"><i class="fa fa-bars"></i></div>
								<a class="social-btn color-1" href="blog-detail-2.html"><i class="fa fa-weixin"></i></a>
							</div>
							<div class="s_input">
								<input class="form-input" type="text" value="" placeholder="您的微信ID">
							</div>
						</div>	
					</div> -->
				</div>
			</div>

			<div class="sec"  data-sec="about-me" >
				<div class="be-large-post">
					<div class="info-block style-2">
						<div class="be-large-post-align"><h3 class="info-block-label">关于我</h3></div>
					</div>
					<div class="be-large-post-align">
						<div class="row">
							<!-- <div class="input-col col-xs-12">
								<div class="form-group focus-2">
									<div class="form-label">Section Title</div>									
									<input class="form-input" type="text" placeholder="About Me">
								</div>								
							</div> -->
							<div class="input-col col-xs-12">
								<div class="form-group focus-2">
									<div class="form-label">关于我</div>
									<textarea class="form-input" required="" placeholder="Something about you" v-model="description"></textarea>
								</div>
							</div>
						</div>
					</div>						
				</div>
			</div>

			<!-- <div class=" sec" data-sec="web-references">
				<div class="be-large-post">
					<div class="info-block style-2">
						<div class="be-large-post-align"><h3 class="info-block-label">Web References</h3></div>
					</div>
					<div class="be-large-post-align">
						<div class="row">
							<div class="input-col col-xs-12 col-sm-5">
								<div class="form-group focus-2">
									<div class="form-label">Link Title</div>									
									<input class="form-input" type="text" placeholder="Enter title">
								</div>								
							</div>
							<div class="input-col col-xs-12 col-sm-5">
								<div class="form-group focus-2">
									<div class="form-label">Link descriprion</div>									
									<input class="form-input" type="text" placeholder="Enter descriprion">
								</div>								
							</div>
							<div class="col-xs-12 col-sm-2">								
								<a href="blog-detail-2.html" class="btn full btn-input color-1 size-4 hover-1">add</a>
							</div>
						</div>							
					</div>
				</div>
			</div>
			<a class="btn full color-1 size-1 hover-1 add_section"><i class="fa fa-plus"></i>add sections</a> -->																				
		</div>				
	</div>
</div>
<script type="text/javascript">
	var fname='{{ Auth::user()->fname }}';
	var postcode='{{ Auth::user()->postcode }}';
	var desc='{{ Auth::user()->description }}';
	var state='{{ Auth::user()->location }}';
</script>
@stop