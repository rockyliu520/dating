<form class="popup-input-search">
	<div class="col-md-12 noPadding">
		<input class="input-signtype" type="email" name="email" required="required" placeholder="邮箱" v-model="loginEmail">
	</div>
	<div class="col-md-12 noPadding">
		<input class="input-signtype" type="password" name="password" required="required" placeholder="密码" v-model="loginPassword">
	</div>
	<div class="col-xs-12 noPadding">
		<div class="be-checkbox">
		<label class="check-box">
			    <input class="checkbox-input" type="checkbox" value=""> <span class="check-box-sign"></span>
			</label>
			<span class="large-popup-text">
				保持登录
			</span>
		</div>
		<div class="r_forget_password">
			<a href="/account/forget" class="link-large-popup">忘记密码?</a>
		</div>
		<div class="clearfix"></div>
	</div>
	@if(Session::has('loginError'))
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding">
		<div class="alert alert-danger">
			{{ Session::get('loginError') }}
		</div>
	</div>
	@endif
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding" v-if="loginError == 1">
		<div class="alert alert-danger">@{{ loginErrorMessage }}</div>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding" v-if="loginSuccess == 1">
		<div class="alert alert-success">@{{ loginSuccessMessage }}</div>
	</div>
	<div class="col-md-12 for-signin noPadding">
		<!-- <input type="button" class="be-popup-sign-button btn-block" value="现在登录" v-on:click="signin()"> -->
		<button class="be-popup-sign-button btn-block" type="button" v-on:click="signin()" v-if="running == 0">现在登录</button>
		<button class="be-popup-sign-button btn-block" disabled="disabled" v-if="running == 1">
			<img src="/img/loader/rolling.gif" />
		</button>
	</div>
</form>
