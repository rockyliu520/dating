<div class="col-md-3 col-md-pull-9 left-feild">
	<div class="be-user-block">
		<div class="be-user-detail">
			<a class="be-ava-user" href="blog-detail-2.html">
				<img src="{{ $user->image }}" alt=""> 
			</a>
			<?php 
				$year = date('Y');
				$age = $year - $user->year; 
			?>
			<p class="be-use-name">{{ $user->fname }}, {{ $age }}</p>
			<span class="be-user-info">
				{{ $user->location }}, 澳大利亚
			</span>
		</div>
		<!-- <div class="be-user-activity-block">
			<div class="row">
				<div class="col-lg-12 center">
					<a href="blog-detail-2.html" class="be-user-activity-button be-follow-type" style="margin-bottom: 10px !important;"><i class="fa fa-plus"></i>关注&nbsp;TA</a>
				</div>
				<div class="col-lg-12 center">
					<a href="blog-detail-2.html" class="col-lg-6 be-user-activity-button send-btn be-message-type"><i class="fa fa-envelope-o"></i>发送消息</a>
				</div>
			</div>
		</div> -->
		<h5 class="be-title">
			关于我
		</h5>
		<p class="be-text-userblock">
			{{ $user->description }}
		</p>
	</div>
	
	<a href="javascript:void(0)" class="be-button-vidget like-btn blue-style" v-on:click="addToFav({{ $user->id }})">
		@if($isFav == 0)
			<i class="fa fa-plus"></i>&nbsp;&nbsp;关注 TA
		@else
			已经关注用户
		@endif
	</a>

	<a href="javascript:void(0)" class="be-button-vidget like-btn blue-style" v-on:click="like({{ $user->id }})">
		@if($isFav == 0)
		<i class="fa fa-thumbs-o-up"></i>&nbsp;&nbsp;给&nbsp;TA&nbsp;一个赞
		@else
		已经点赞
		@endif
	</a>
	
	<!-- <a href="blog-detail-2.html" class="be-button-vidget like-btn blue-style">
		<i class="fa fa-envelope-o"></i>&nbsp;&nbsp;给&nbsp;TA&nbsp;发送消息
	</a> -->

	<!-- <a href="blog-detail-2.html" class="be-button-vidget add-btn grey-style"><i class="fa fa-file-o"></i>ADD TO COLLECTION</a> -->
	
	<!-- <h3 class="letf-menu-article text-center">Recent Works</h3>					
	<div  class="swiper-container" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
        <div class="swiper-wrapper">
            	<div class="swiper-slide">
                	<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p9.jpg" height="202" width="269" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Art direction</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Interactiob design</a>
						</span>
						<div class="author-post">
							<img src="/img/ava.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Daniel Ng</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 253</span>
							<span><i class="fa fa-eye"></i> 753</span>
							<span><i class="fa fa-comment-o"></i> 50</span>
						</div>
					</div>
                </div>
                <div class="swiper-slide">
                	<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p9.jpg" height="202" width="269" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Art direction</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Interactiob design</a>
						</span>
						<div class="author-post">
							<img src="/img/ava.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Daniel Ng</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 253</span>
							<span><i class="fa fa-eye"></i> 753</span>
							<span><i class="fa fa-comment-o"></i> 50</span>
						</div>
					</div>
                </div>
                <div class="swiper-slide">
                	<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p9.jpg" height="202" width="269" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Art direction</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Interactiob design</a>
						</span>
						<div class="author-post">
							<img src="/img/ava.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Daniel Ng</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 253</span>
							<span><i class="fa fa-eye"></i> 753</span>
							<span><i class="fa fa-comment-o"></i> 50</span>
						</div>
					</div>
                </div>
                <div class="swiper-slide">
                	<div class="be-post">
						<a href="blog-detail-2.html" class="be-img-block">
						<img src="/img/p9.jpg" height="202" width="269" alt="omg">
						</a>
						<a href="blog-detail-2.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
						<span>
							<a href="blog-detail-2.html" class="be-post-tag">Art direction</a>, 
							<a href="blog-detail-2.html" class="be-post-tag">Web Design</a>,  
							<a href="blog-detail-2.html" class="be-post-tag">Interactiob design</a>
						</span>
						<div class="author-post">
							<img src="/img/ava.png" alt="" class="ava-author">
							<span>by <a href="blog-detail-2.html">Daniel Ng</a></span>
						</div>
						<div class="info-block">
							<span><i class="fa fa-thumbs-o-up"></i> 253</span>
							<span><i class="fa fa-eye"></i> 753</span>
							<span><i class="fa fa-comment-o"></i> 50</span>
						</div>
					</div>
                </div>
        </div>
        <div class="pagination">
        	
        </div>
    </div> -->
</div>