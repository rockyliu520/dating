@extends('front.layouts.main')
<style type="text/css">
	#content-block {
		margin-bottom: 0px !important;
	}
	.footer_slider {
		background: #2e3542;
	}
</style>

@section('index')
	
	<div class="head-bg">
		<div class="head-bg-img"></div>
		<div class="head-bg-content">
			<h1>单身男女</h1>
			<p>每个人都有属于自己的<strong>幸福</strong></p>
			@if(!Auth::check())
				<a class=" btn color-3 size-1 hover-6" data-toggle="modal" href='#r_account_modal'>
					<i class="fa fa-lock"></i>现在注册账号
				</a>
			@endif
		</div>
	</div>
	
	@include('front.home.search')
	<div class="container-fluid custom-container">
		<div class="row">
			@include('front.home.leftfilter')
			<div class="col-md-10">
				<div id="container-mix"  class="row _post-container_">
					@foreach($users as $u)
						<div class="category-1 mix custom-column-5">
							<div class="be-post">
								@if(Auth::check())
									<a href="/detail/{{ $u->id }}" class="be-img-block">
										@if($u->image == '')
											<img src="{{ $url }}/img/users/1.jpg" alt="omg">
										@else
											<img src="{{ $url }}/{{ $u->image }}" alt="omg">
										@endif
									</a>
								@else
									<a class="be-img-block r_home_require_login" data-toggle="modal" href='#r_account_modal' data-message="请先登录后查看">
										@if($u->image == '')
											<img src="{{ $url }}/img/users/1.jpg" alt="omg">
										@else
											<img src="{{ $url }}/{{ $u->image }}" alt="omg">
										@endif
									</a>
								@endif
									<?php 
										$year = date('Y');
										$age = $year - $u->year; 
									?>
								@if(Auth::check())
									<a href="/detail/{{ $u->id }}" class="be-post-title">{{ $u->fname }}, {{ $age }}岁</a>
								@else
									<a class="be-post-title r_home_require_login" data-toggle="modal" href='#r_account_modal' data-message="请先登录后查看">
										{{ $u->fname }}, {{ $age }}岁
									</a>
								@endif	
								<span>
									@if($u->sex == 1)
										男
									@else
										女
									@endif
									, {{ $u->location }}, 澳大利亚
								</span>
								<div class="info-block">
									<span><i class="fa fa-eye"></i> 789</span>
								</div>
							</div>
						</div>
					@endforeach
				</div>
			</div>

		</div>
	</div>

	<div class="footer_slider">
		<div class="swiper-container" data-autoplay="0" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="4" data-sm-slides="8" data-md-slides="14" data-lg-slides="19" data-add-slides="19">
            <div class="swiper-wrapper">
            	@foreach($random as $r)
	            	<div class="swiper-slide active" data-val="0">
	            		@if(Auth::check())
						<a href="/detail/{{ $r->id }}">
						@else
						<a href="#" data-toggle="modal" href='#r_account_modal' data-message="请先登录后查看">
						@endif
							<img src="{{ $url }}/{{ $r->image }}" class="img-responsive img-full" alt="">
	            	 	</a>
            	 	</div>
        	 	@endforeach
            </div>
            <div class="pagination hidden"></div>
        </div>
    </div>
@stop