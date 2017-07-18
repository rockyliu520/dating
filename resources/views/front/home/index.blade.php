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
			<h1>寂寞先生</h1>
			<p>每个人都有属于自己的艳遇</p>
			<!-- <a class="btn color-1 size-1 hover-1" ><i class="fa fa-facebook"></i>sign up via facebook</a> -->
			@if(!Auth::check())
				<a class="be-register btn color-3 size-1 hover-6"><i class="fa fa-lock"></i>现在注册账号</a>
			@endif
		</div>
	</div>
	<!-- @include('front.home.search') -->
	<div class="container-fluid custom-container">
		<div class="row">
			
			@include('front.home.leftfilter')

			<div class="col-md-10">
				<div id="container-mix"  class="row _post-container_">
					@foreach($users as $u)
						<div class="category-1 mix custom-column-5">
							<div class="be-post">
								<a href="/detail/{{ $u->id }}" class="be-img-block">
									@if($u->image == '')
										<img src="/img/users/1.jpg" alt="omg">
									@else
										<img src="{{ $u->image }}" alt="omg">
									@endif
								</a>
								<?php 
									$year = date('Y');
									$age = $year - $u->year; 
								?>
								<a href="/detail/{{ $u->id }}" class="be-post-title">{{ $u->fname }}, {{ $age }}岁</a>
								
								<span>
									@if($u->sex == 'male')
										男
									@else
										女
									@endif
									, {{ $u->location }}, 澳大利亚
									<!-- <a href="blog-detail-2.html" class="be-post-tag">Interaction Design</a>, 
									<a href="blog-detail-2.html" class="be-post-tag">UI/UX</a>,  
									<a href="blog-detail-2.html" class="be-post-tag">Web Design</a> -->
								</span>
								<!-- <div class="author-post">
									<img src="/img/a1.png" alt="" class="ava-author">
									<span>by <a href="page1.html">Hoang Nguyen</a></span>
								</div> -->
								<div class="info-block">
									<!-- <span><i class="fa fa-thumbs-o-up"></i> 360</span> -->
									<span><i class="fa fa-eye"></i> 789</span>
									<!-- <span><i class="fa fa-comment-o"></i> 20</span> -->
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
						<a href="/detail/{{ $r->id }}">
							<img class="img-responsive img-full" src="{{ $r->image }}" alt="">
	            	 	</a>
            	 	</div>
        	 	@endforeach
            </div>
            <div class="pagination hidden"></div>
        </div>
    </div>
@stop