@extends('front.layouts.main')
@section('index')

<!-- MAIN CONTENT -->
<div class="container be-detail-container">
	<div class="row">
	
		@include('front.account.dashboard.left')

		<div class="col-xs-12 col-md-8">
            <div class="tab-wrapper style-1">
                <div class="tab-nav-wrapper">
                    <div  class="nav-tab  clearfix">
                        <div class="nav-tab-item active">
                            <span>最近来访</span>
                        </div>
                        <div class="nav-tab-item ">
                            <span>看过我的</span>
                        </div>
                        <div class="nav-tab-item ">
                            <span>我的收藏</span>
                        </div> 
                        <div class="nav-tab-item ">
                            <span>会员专区</span>
                        </div>                                                               
                    </div>
                </div>
                <div class="tabs-content clearfix">
                    <div class="tab-info active"> 
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<canvas id="myChart" style="height:450; width: 100%;"></canvas>
							</div>
							
							<!-- <div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p1.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">The kitsch destruction of our world</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div> -->
						</div>
                    </div>
                    <div class="tab-info">
						<div class="row">
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p8.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Racing Queensland</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a7.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>								
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p12.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Face</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a6.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>								
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p2.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Treebeard</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p3.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Colors of Ramadan</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a2.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>										
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p4.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Leaving Home - L'Officiel Ukraine</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a3.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p7.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">raindrops monochrome</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a6.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p9.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a7.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p13.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Stay Ahead Series</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a5.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p14.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Faber-Castell / Psychological Problems</a>
									<span>
										<a href="page1.html" class="be-post-tag">Interaction Design</a>, 
										<a href="page1.html" class="be-post-tag">UI/UX</a>,  
										<a href="page1.html" class="be-post-tag">Web Design</a>
									</span>
									<div class="author-post">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
									</div>
									<div class="info-block">
										<span><i class="fa fa-thumbs-o-up"></i> 360</span>
										<span><i class="fa fa-eye"></i> 789</span>
										<span><i class="fa fa-comment-o"></i> 20</span>
									</div>
								</div>									
							</div>
						</div>
                    </div>
                    <div class="tab-info">
						<div class="row">
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p16.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Wisdom For My Children, Life Lessons Through</a>

									<div class="author-post clearfix">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p17.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Créations Namale</a>
									<div class="author-post clearfix">
										<img src="/img/a2.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>												
									</div>
								</div>										
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p18.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Crossfit : 15.4 Open Workout</a>
									<div class="author-post clearfix">
										<img src="/img/a3.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p15.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Garry Simpson - Bridges - Intelligent Life Magazine</a>
									<div class="author-post clearfix">
										<img src="/img/a6.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p14.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Faber-Castell / Psychological Problems</a>
									<div class="author-post clearfix">
										<img src="/img/a7.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p13.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Stay Ahead Series</a>
									<div class="author-post clearfix">
										<img src="/img/a7.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p12.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Face</a>
									<div class="author-post clearfix">
										<img src="/img/a6.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p19.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Promoção Facas Extra</a>
									<div class="author-post clearfix">
										<img src="/img/a5.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p11.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Tropicalia</a>
									<div class="author-post clearfix">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p10.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">tomorrow</a>
									<div class="author-post clearfix">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p9.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
									<div class="author-post clearfix">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>
							<div class="col-ml-12 col-xs-6 col-sm-4">
								<div class="be-post style-4">
									<a href="page1.html" class="be-img-block">
									<img src="/img/p8.jpg" alt="omg">
									</a>
									<a href="page1.html" class="be-post-title">Racing Queensland</a>
									<div class="author-post clearfix">
										<img src="/img/a1.png" alt="" class="ava-author">
										<span>by <a href="page1.html">Hoang Nguyen</a></span>
										<span class="like-counter"><i class="fa fa-thumbs-o-up"></i> 405</span>
									</div>
								</div>									
							</div>																											
						</div>                                                                 
                    </div>
                    <div class="tab-info">
                    	<div class="collection">
                    		<h3 class="menu-article">Creative Ideas</h3>
                    		<div class="collection-header">
                    			<span><i class="fa fa-user"></i>by <a href="page1.html">Leigh Taylor</a> </span>
                    			<span><i class="fa fa-thumbs-o-up"></i> 360</span>
                    			<span><i class="fa fa-eye"></i> 789</span>
                    		</div>
                    		<div class="collection-entry">
                        		<a href="page1.html" class="portfolio-link type-2 clearfix">
                        			<img src="/img/collection_1.jpg" alt="">
                        			<img src="/img/collection_2.jpg" alt="">
                        			<img src="/img/collection_3.jpg" alt="">
                        			<img src="/img/collection_4.jpg" alt="">
                        			<img src="/img/collection_5.jpg" alt="">
                        			<div class="color_bg">
										<span>view gallery</span>
										<span class="child"></span>
									</div>
                        		</a>
                    		</div>
                    	</div>
                    	<div class="collection">
                    		<h3 class="menu-article">Creative Agency</h3>
                    		<div class="collection-header">
                    			<span><i class="fa fa-user"></i>by <a href="page1.html">Leigh Taylor</a> </span>
                    			<span><i class="fa fa-thumbs-o-up"></i> 360</span>
                    			<span><i class="fa fa-eye"></i> 789</span>
                    		</div>
                    		<div class="collection-entry">
                        		<a href="page1.html" class="portfolio-link type-2 clearfix">
                        			<img src="/img/collection_6.jpg" alt="">
                        			<img src="/img/collection_7.jpg" alt="">
                        			<img src="/img/collection_8.jpg" alt="">
                        			<img src="/img/collection_9.jpg" alt="">
                        			<img src="/img/collection_10.jpg" alt="">
                        			<div class="color_bg">
										<span>view gallery</span>
										<span class="child"></span>
									</div>
                        		</a>
                    		</div>
                    	</div>
                    	<div class="collection">
                    		<h3 class="menu-article">Creative Agency</h3>
                    		<div class="collection-header">
                    			<span><i class="fa fa-user"></i>by <a href="page1.html">Inspiration Art</a> </span>
                    			<span><i class="fa fa-thumbs-o-up"></i> 360</span>
                    			<span><i class="fa fa-eye"></i> 789</span>
                    		</div>
                    		<div class="collection-entry">
                        		<a href="page1.html" class="portfolio-link type-2 clearfix">
                        			<img src="/img/collection_11.jpg" alt="">
                        			<img src="/img/collection_12.jpg" alt="">
                        			<img src="/img/collection_13.jpg" alt="">
                        			<img src="/img/collection_14.jpg" alt="">
                        			<img src="/img/collection_15.jpg" alt="">
                        			<div class="color_bg">
										<span>view gallery</span>
										<span class="child"></span>
									</div>
                        		</a>
                    		</div>
                    	</div>
                    	<div class="collection">
                    		<h3 class="menu-article">Ideas For Personal Site</h3>
                    		<div class="collection-header">
                    			<span><i class="fa fa-user"></i>by <a href="page1.html">Inspiration Art</a> </span>
                    			<span><i class="fa fa-thumbs-o-up"></i> 360</span>
                    			<span><i class="fa fa-eye"></i> 789</span>
                    		</div>
                    		<div class="collection-entry">
                        		<a href="page1.html" class="portfolio-link type-2 clearfix">
                        			<img src="/img/collection_16.jpg" alt="">
                        			<img src="/img/collection_17.jpg" alt="">
                        			<img src="/img/collection_18.jpg" alt="">
                        			<img src="/img/collection_19.jpg" alt="">
                        			<img src="/img/collection_20.jpg" alt="">
                        			<div class="color_bg">
										<span>view gallery</span>
										<span class="child"></span>
									</div>
                        		</a>
                    		</div>
                    	</div> 
                    	<div class="collection">
                    		<h3 class="menu-article">Inspiration Photos</h3>
                    		<div class="collection-header">
                    			<span><i class="fa fa-user"></i>by <a href="page1.html">Inspiration Art</a> </span>
                    			<span><i class="fa fa-thumbs-o-up"></i> 360</span>
                    			<span><i class="fa fa-eye"></i> 789</span>
                    		</div>
                    		<div class="collection-entry">
                        		<a href="page1.html" class="portfolio-link type-2 clearfix">
                        			<img src="/img/collection_16.jpg" alt="">
                        			<img src="/img/collection_17.jpg" alt="">
                        			<img src="/img/collection_18.jpg" alt="">
                        			<img src="/img/collection_19.jpg" alt="">
                        			<img src="/img/collection_20.jpg" alt="">
                        			<div class="color_bg">
										<span>view gallery</span>
										<span class="child"></span>
									</div>
                        		</a>
                    		</div>
                    	</div>                        	                            	
                    </div>                          
                </div>
            </div> 				
		</div>				
	</div>
</div>
<script type="text/javascript">
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