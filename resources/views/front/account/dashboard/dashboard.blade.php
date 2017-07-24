@extends('front.layouts.main')
@section('index')

<!-- MAIN CONTENT -->
<div class="container be-detail-container" id="r_dashboard">
	<div class="row">
		
		@if(Auth::user()->verified == 0)
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom: 15px;">
				<div class='alert alert-warning alert-white rounded'>
					<button type='button' data-dismiss='alert' aria-hidden='true' class='close'>×</button>
					<div class='icon'><i class='fa fa-warning'></i></div>
					<strong>提示: </strong>您还没有验证邮箱，请登录邮箱进行验证。点击<a href="#" v-on:click="resend()" id="r_resend_email_link">重新发送</a>验证邮件。
				</div>
			</div>
		@endif

		@include('front.account.dashboard.left.left')

		@include('front.account.dashboard.right.right')
	</div>
</div>
<script type="text/javascript">

	var updateName = '{{ Auth::user()->fname }}';
	var updateDay = '{{ Auth::user()->date }}';
	var updateMonth = '{{ Auth::user()->month }}';
	var updateYear = '{{ Auth::user()->year }}';
	var updateSex = '{{ Auth::user()->sex }}';
	var updateHeight = '{{ Auth::user()->height }}';
	var updateLocation = '{{ Auth::user()->location }}';
	var updatePostcode = '{{ Auth::user()->postcode }}';
	var updateBodyType = '{{ Auth::user()->bodyType }}';
	var updateStatus = '{{ Auth::user()->status }}';
	var updateChild = '{{ Auth::user()->child }}';
	var updateEducation = '{{ Auth::user()->education }}';
	var updateUniversity = '{{ Auth::user()->university }}';
	var updateJob = '{{ Auth::user()->job }}';
	var updateBirthPlace = '{{ Auth::user()->birthPlace }}';
	var updatePr = '{{ Auth::user()->pr }}';
	<?php 
		$jsArray = json_encode($hobby);
		// var_dump(gettype($hobby));
		echo "var updateHobby = ".$jsArray.";\n"
	?>

	var data = {
		    labels : ["SUN","MON","TUE","WED","THU","FRI","SAT"],
		    datasets : [
		        {
		            fillColor : "rgba(255,255,255,0.1)",
		            strokeColor : "rgba(0,0,0,0.25)",
		            pointColor : "rgba(255,255,255,1)",
		            pointStrokeColor : "#fe9d37",
		            data : [135,185,225,385,275,215,265]
		        }
		    ]
		}
</script>
@stop