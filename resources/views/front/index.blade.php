@extends('front.layouts.main')
<style type="text/css">
	#navbar {
		background: transparent;
		border: none;
		position: fixed;
		width: 100%;
	}
</style>
@section('index')
	<div class="container-fluid" id="homebanner">
		<div class="row">
			<!-- <div class="col-md-3 col-md-offset-6 noPadding" id="banner_login">
				<form action="" method="POST" role="form">
					<legend>注册账号</legend>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding bl_p1">
						<div class="form-group">
							<label>我的性别</label>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<label class="radio-inline">
								<input type="radio" name="sex" id="input" value="male" checked="checked">
								男
							</label>
							<label class="radio-inline">
								<input type="radio" name="sex" id="input" value="female">
								女
							</label>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding bl_p2">
						<div class="form-group">
							<label for="select-birth" class="col-sm-2 control-label">
								出生日期
							</label>
							<div class="col-sm-10 noPaddingRight">
								<input type="email" class="form-control custom_input" id="select-birth" placeholder="选择出生日期">
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding bl_p3">
						<div class="form-group">
							<label for="select-place" class="col-sm-2 control-label">
								常住地区
							</label>
							<div class="col-sm-10 noPaddingRight">
								<select name="State" id="State" class="form-control custom_input">
									<option value="default" selected="">-选择常住地区-</option>
									<option value="Australian Capital Territory">Australian Capital Territory</option>
									<option value="New South Wales">New South Wales</option>
									<option value="Northern Territory">Northern Territory</option>
									<option value="Queensland">Queensland</option>
									<option value="South Australia">South Australia</option>
									<option value="Tasmania">Tasmania</option>
									<option value="Victoria">Victoria</option>
									<option value="Western Australia">Western Australia</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bl_p4 noPadding">
						<div class="form-group">
							<label>当前状态</label>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<label class="radio-inline">
								<input type="radio" name="status" id="input" value="nomarry" checked="checked">
								未婚
							</label>
							<label class="radio-inline">
								<input type="radio" name="status" id="input" value="divorce">
								离婚
							</label>
						</div>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadding bl_p5">
						<div class="form-group ">
							<button type="submit" class="btn btn-primary btn-block btn-lg">免费注册</button>
						</div>
					</div>
				</form>
			</div> -->
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 center" id="homeslug">
				<h1><span>珍爱红娘婚恋婚介交友征婚服务</span></h1>
				<h1><span>交友社区</span></h1>
				<a href="" class="btn btn-default btn-primary startbutton">开始浏览</a>
			</div>
		</div>
	</div>
@stop