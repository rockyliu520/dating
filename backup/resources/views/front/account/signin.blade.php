@if(Session::has('loginError'))
<div class="large-popup login" style="display:block;">
@else
<div class="large-popup login">
@endif
	<div class="large-popup-fixed"></div>
	<div class="container large-popup-container">
		<div class="row">
			<div class="col-md-8 col-md-push-2 col-lg-6 col-lg-push-3  large-popup-content">
				<div class="row">
					<div class="col-md-12">
						<i class="fa fa-times close-button"></i>
						<h5 class="large-popup-title">账号登录</h5>
					</div>
					<form action="/account/login" method="post" class="popup-input-search">
						{{ csrf_field() }}
						<div class="col-md-6">
							<input class="input-signtype" type="email" name="email" required="required" placeholder="邮箱">
						</div>
						<div class="col-md-6">
							<input class="input-signtype" type="password" name="password" required="required" placeholder="密码">
						</div>
						<div class="col-xs-6">
							<div class="be-checkbox">
							<label class="check-box">
								    <input class="checkbox-input" type="checkbox" value=""> <span class="check-box-sign"></span>
								</label>
								<span class="large-popup-text">
									保持登录
								</span>
							</div>
							
							<a href="blog-detail-2.html" class="link-large-popup">忘记密码?</a>
						</div>
						@if(Session::has('loginError'))
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div class="alert alert-danger">
								{{ Session::get('loginError') }}
							</div>
						</div>
						@endif
						<div class="col-xs-6 for-signin">
							<input type="submit" class="be-popup-sign-button" value="现在登录">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

