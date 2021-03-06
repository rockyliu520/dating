@extends('front.layouts.main')

@section('index')
<!-- MAIN CONTENT -->
<div class="head-bg style-2">
	<div class="head-bg-img"><img class="center-image" src="{{ $url }}/img/bg-4.jpg" alt=""></div>
	<div class="head-bg-content">
		<h1>联系我们</h1>
		<p>提出您宝贵的意见, 您的意见是我们前进的动力</p>
	</div>	
</div>	
<div class="container be-detail-container">
	<div class="block">
		<h2 class="content-title">联系信息</h2>
		<!-- <div class="block-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra</div>			 -->
		<div class="contact-info block">
			<div class="contact-header">
				<div class="row">
					<div class="col-xs-12 col-sm-4">
						<div class="contact-entry">
							<h4 class="contact-label"><img src="{{ $url }}/img/marker.png" alt=""> 地址</h4>
							<div class="contact-text">
								<p>New York, BRONX, Morris Park Ave 13</p>
								<p>New York, Guerlain Street 87</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4">
						<div class="contact-entry">
							<h4 class="contact-label"><img src="{{ $url }}/img/phone-ico.png" alt=""> 电话</h4>
							<div class="contact-text">
								<p><a href="tel:+99123456789001">+99 (123) 456 789 001</a></p>
								<p><a href="tel:+1234556789">+1 (23) 45 567 89</a></p>
							</div>
						</div>						
					</div>						
					<div class="col-xs-12 col-sm-4">
						<div class="contact-entry">
							<h4 class="contact-label"><img src="{{ $url }}/img/mail-ico.png" alt=""> 邮箱</h4>
							<div class="contact-text">
								<p><a href="mailto:NRGNetwork@contact.com">NRGNetwork@contact.com</a></p>
								<p><a href="mailto:Support@gmail.com">Support@gmail.com</a></p>
							</div>
						</div>						
					</div>			
				</div>				
			</div>
            <div id="map-canvas" data-lat="40.669096" data-lng="-73.987733" data-zoom="15"></div>
            <div class="addresses-block">
                <a data-lat="40.669096" data-lng="-73.987733" data-string="1. Here is some address or email or phone or something else..."></a>
            </div>					
		</div>
	</div>

	<div class="block">
		<h2 class="content-title">给我们留言</h2>
		<!-- <div class="block-subtitle"></div> -->
		<div class="contect-form">
			<form class="form-block">
				<div class="row">
					<div class="col-xs-12 col-sm-6">
						<div class="form-group fl_icon">
							<div class="icon"><img src="{{ $url }}/img/user-g-ico.png" alt=""></div>
							<input class="form-input" type="text" required="" placeholder="您的名字">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 fl_icon">
						<div class="form-group fl_icon">
							<div class="icon"><img src="{{ $url }}/img/subject-ico.png" alt=""></div>
							<input class="form-input" type="text" required="" placeholder="意见标题">
						</div>
					</div>						
					<div class="col-xs-12 col-sm-6 fl_icon">
						<div class="form-group fl_icon">
							<div class="icon"><img src="{{ $url }}/img/mail-g-ico.png" alt=""></div>
							<input class="form-input" type="text" required="" placeholder="您的邮箱">
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 fl_icon">
						<div class="form-group fl_icon">
							<div class="icon"><img src="{{ $url }}/img/phone-g-ico.png" alt=""></div>
							<input class="form-input" type="text" required="" placeholder="您的电话">
						</div>
					</div>						
					<div class="col-xs-12">									
						<div class="form-group">
							<textarea class="form-input" required="" placeholder="描述您碰到的问题或者意见反馈..."></textarea>
						</div>
					</div>
					<button class="btn color-1 size-2 hover-1 pull-right">提交意见</button>
				</div>
			</form>
		</div>
	</div>
</div>
@stop