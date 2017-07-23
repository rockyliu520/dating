@extends('front.layouts.main')

@section('index')
<!-- MAIN CONTENT -->
<div class="container custom-container be-detail-container" id="r_detail">
	<div class="row">
		<div class="col-md-9 col-md-push-3">
			<div class="be-large-post">
				<div class="info-block">
					<div class="be-large-post-align">
						<span><i class="fa fa-thumbs-o-up"></i> {{ $user->likes }}</span>
						<span><i class="fa fa-eye"></i> {{ $user->visitCount }}</span>
					</div>
				</div>
				<div class="blog-content popup-gallery be-large-post-align">
					<h5 class="be-post-title to">
						{{ $user->fname }}的介绍
					</h5>
					
					<div class="clear"></div>
					<div class="post-text">
						<div class="be-large-post-slider type-wide">
							<div class="swiper-container thumbnails-preview" data-autoplay="0" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
				                <div class="swiper-wrapper">
			                    	<div class="swiper-slide active" data-val="0">
			                    		 <img class="img-responsive img-full" src="/img/sample/1.jpg" alt="">
			                    		 <div class="slider-text">{{ $user->description }}</div>
			                    	</div>
			                    	<div class="swiper-slide" data-val="1">
			                    		 <img class="img-responsive img-full" src="/img/sample/2.jpg" alt="">
			                    		 <div class="slider-text">{{ $user->description }}</div>			                    		 
			                    	</div>
			                    	<div class="swiper-slide" data-val="2">
			                    		 <img class="img-responsive img-full" src="/img/sample/1.jpg" alt="">
			                    		 <div class="slider-text">{{ $user->description }}</div>			                    		 
			                    	</div>
			                    	<div class="swiper-slide" data-val="3">
			                    		 <img class="img-responsive img-full" src="/img/sample/1.jpg" alt="">
			                    		 <div class="slider-text">{{ $user->description }}</div>			                    		 
			                    	</div>
			                    	<div class="swiper-slide" data-val="4">
			                    		 <img class="img-responsive img-full" src="/img/sample/5.jpg" alt="">
			                    		 <div class="slider-text">{{ $user->description }}</div>			                    		 
			                    	</div>
			                    </div>
				                <div class="pagination hidden"></div>
				                <div class="swiper-arrow-left type-2"></div>
				                <div class="swiper-arrow-right type-2"></div>
				            </div>
				            <div class="swiper-container thumbnails" data-autoplay="0" 
				            data-loop="0" data-speed="500" data-center="0" 
				            data-slides-per-view="responsive" data-xs-slides="3" 
				            data-sm-slides="5" data-md-slides="5" data-lg-slides="5" 
				            data-add-slides="5">
				                <div class="swiper-wrapper">
									<div class="swiper-slide current active" data-val="0">
										<img src="/img/sample/1.jpg" alt="">
									</div>
									<div class="swiper-slide" data-val="1">
										<img src="/img/sample/2.jpg" alt="">
									</div>
									<div class="swiper-slide" data-val="2">
										<img src="/img/sample/3.jpg" alt="">
									</div>
									<div class="swiper-slide" data-val="3">
										<img src="/img/sample/4.jpg" alt="">
									</div>
									<div class="swiper-slide" data-val="4">
										<img src="/img/sample/5.jpg" alt="">
									</div>
								</div>
								<div class="pagination hidden"></div>
							</div>
						</div>
						
					</div>
					<div class="post-text">
						<p>
							{{ $user->description }}
						</p>

						<div class="image-block">
						    <a class="popup-a" href="/img/sample/1.jpg">
								<img src="/img/sample/1.jpg" alt="">
							</a>
							<div class="image-text">{{ $user->description }}</div>
						</div>
					    <a class="popup-a" href="/img/sample/2.jpg">
							<img src="/img/sample/2.jpg" alt="">
						</a>								
						<br>
						<br>
						<p>{{ $user->description }}</p>								
					</div>
				</div>
				<div class="be-large-post-align">
					<h3 class="letf-menu-article">
						Tags
					</h3>
					<div class="tags_block clearfix">
						<ul>
							<li><a href="blog-detail-2.html">photoshop</a></li>
							<li><a href="blog-detail-2.html">national geographic</a></li>
							<li><a href="blog-detail-2.html">nature</a></li>
							<li><a href="blog-detail-2.html">responsive web design</a></li>
							<li><a href="blog-detail-2.html">animals</a></li>
							<li><a href="blog-detail-2.html">digital photography</a></li>
						</ul>
					</div>
				</div>						
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p3.jpg" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">Colors of Ramadan</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Interaction Design</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">UI/UX</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>
						</span>
						<div class="author-post">
							<img src="/img/a5.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 360</span>
							<span><i class="fa fa-eye"></i> 789</span>
							<span><i class="fa fa-comment-o"></i> 20</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p4.jpg" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">Leaving Home - L'Officiel Ukraine</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Interaction Design</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">UI/UX</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>
						</span>
						<div class="author-post">
							<img src="/img/a5.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 360</span>
							<span><i class="fa fa-eye"></i> 789</span>
							<span><i class="fa fa-comment-o"></i> 20</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p5.jpg" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">Drive Your World</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Interaction Design</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">UI/UX</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>
						</span>
						<div class="author-post">
							<img src="/img/a9.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 360</span>
							<span><i class="fa fa-eye"></i> 789</span>
							<span><i class="fa fa-comment-o"></i> 20</span>
						</div>
					</div>
				</div>
			</div>
			<!-- @include('front.detail.comment') -->
		</div>
		@include('front.detail.left')
	</div>
</div>
@stop