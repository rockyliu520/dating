	<!-- THE FOOTER -->
	<footer>
		<div class="footer-main">
			<div class="container-fluid custom-container">
				<div class="row">	
					<div class="col-md-3 col-xl-3">
						<div class="footer-block">
							<h1 class="footer-title">关于我们</h1>
							<p>
							Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。
							</p>
							
						</div>
					</div>
					<div class="col-md-3 col-xl-3">
						<div class="footer-block">
							<h1 class="footer-title">网站链接</h1>
							<div class="row footer-list-footer">
							<div class="col-md-6">
							<ul class="link-list">
								<li><a href="/about-us">关于我们</a></li>
								<li><a href="/contact-us">帮助</a></li>
								<li><a href="/contact-us">联系我们</a></li>
							</ul></div>
							<div class="col-md-6">
							<ul class="link-list">
								<li><a href="/faq">相关问题</a></li>
							</ul>
							</div>
							</div>
						</div>
					</div>				
					<div class="col-md-3 galerry">
						<div class="footer-block">					
							<h1 class="footer-title">关注我们</h1>
							<ul class="soc_buttons">
								<li><a href=""><i class="fa fa-weixin"></i></a></li>
								<li><a href=""><i class="fa fa-weibo"></i></a></li>
								<li><a href=""><i class="fa fa-tencent-weibo"></i></a></li>
								<li><a href=""><i class="fa fa-qq"></i></a></li>
							</ul>
							
						</div>
					</div>
					<div class="col-md-3">
						<div class="footer-block">
							<h1 class="footer-title">订阅我们</h1>
							<form action="./" class="subscribe-form">
								<input type="text" placeholder="您的邮箱" required>
								<div class="submit-block">
									<i class="fa fa-envelope-o"></i>
									<input type="submit" value="">
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container-fluid custom-container">
				<div class="col-md-12 footer-end clearfix">
					<div class="left">
						<span class="copy">© 2017. All rights reserved. <span class="white"><a href="#"> 单身男女</a></span></span>
					</div>
					<div class="right">
						<a class="btn color-7 size-2 hover-9" href="/about-us">关于我们</a>
						<a class="btn color-7 size-2 hover-9" href="/contact-us">联系我们</a>
						<a class="btn color-7 size-2 hover-9">相关政策</a>
					</div>
				</div>			
			</div>
		</div>		
	</footer>

	<div class="be-fixed-filter"></div>
	
	<div class="modal fade r_custom_modal" id="r_account_modal">
		
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 class="modal-title">账号管理</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="r_signin_modal_form_part">
							<div class="r_require_login_message"></div>
							<div role="tabpanel" class="full-width-tabs tabbable">
								<!-- Nav tabs -->
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active">
										<a href="#signin" aria-controls="signin" role="tab" data-toggle="tab">账号登录</a>
									</li>
									<li role="presentation">
										<a href="#signup" aria-controls="signup" role="tab" data-toggle="tab">账号注册</a>
									</li>
								</ul>
								
								<!-- Tab panes -->
								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active" id="signin">
										@include('front.layouts.modal.signin')
									</div>
									<div role="tabpanel" class="tab-pane" id="signup">
										@include('front.layouts.modal.signup')
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>

		
	<!-- <script src="https://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script> -->
	<script type="text/javascript" src="{{ URL::asset('js/asset.js') }}"></script>
	<script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
	<script type="text/javascript">
		var _token = $('meta[name="csrf-token"]').attr('content');
		Dropzone.autoDiscover = false;

		if (location.pathname.indexOf('/account/dashboard') != -1) {
			var vue = new Vue({
				el: '#r_dashboard',
				data: {
					updateName:updateName,
					updateDay:updateDay,
					updateMonth:updateMonth,
					updateYear:updateYear,
					updateSex:updateSex,
					updateHeight:updateHeight,
					updateLocation:updateLocation,
					updatePostcode:updatePostcode,
					updateStatus:updateStatus,
					updateChild:updateChild,
					updateBodyType:updateBodyType,
					updateEducation:updateEducation,
					updateUniversity:updateUniversity,
					updateJob:updateJob,
					updateBirthPlace:updateBirthPlace,
					updatePr:updatePr,
					updateHobby:updateHobby
				},
				methods: {
					addHobby: function(hobby) {
						var el = event.target;
						var self = this;
						if ($(el).hasClass('r_profile_hl_selected')) {
							// this.updateHobby.push(hobby);

							$(el).removeClass('r_profile_hl_selected');
							var index = this.updateHobby.indexOf(hobby);    // <-- Not supported in <IE9
							if (index !== -1) {
							    this.updateHobby.splice(index, 1);
							}
						} else {
							this.updateHobby.push(hobby);
							$(el).addClass('r_profile_hl_selected');
						}
					},
					resend: function() {
						$('.r_loader').removeClass('disappear');
						
						$.post('/account/resend-verify-email', {
							_token:_token
						}, function(data) {
							$('.r_loader').addClass('disappear');
							if (data.code == 1) {
								// for success - green box
								toastr.success(data.message);
							}
						})

					},
					update: function() {
						$('.r_loader').removeClass('disappear');
						var self = this;

						$.post('/account/update-profile', {
							_token:_token,
							fname:self.updateName,
							date:self.updateDay,
							month:self.updateMonth,
							year:self.updateYear,
							sex:self.updateSex,
							height:self.updateHeight,
							location:self.updateLocation,
							postcode:self.updatePostcode,
							status: self.updateStatus,
							child: self.updateChild,
							bodyType:self.updateBodyType,
							education:self.updateEducation,
							university:self.updateUniversity,
							job:self.updateJob,
							birthPlace:self.updateBirthPlace,
							pr:self.updatePr,
							hobby:self.updateHobby
						}, function(data) {
							console.log(data);
							$('.r_loader').addClass('disappear');

							if (data.code == 1) {
								// for success - green box
								toastr.success(data.message);
							}
						})
					},
					answer:function(qid){
						$('.r_loader').removeClass('disappear');
						var el = event.target;
						var answer = $(event.target).parent().prev().val();
						
						$(el).parent().prev().val(answer);
						$(el).parent().parent().prev().val(answer);

						$.post('/account/answer-question', {
							_token:_token,
							qid:qid,
							answer:answer
						}, function(data) {
							$('.r_loader').addClass('disappear');
							if (data.code == 1) {
								toastr.success(data.message);
							}
						})
					},
					changeImage: function() {

						var myDropzone = new Dropzone("div#myDropzone", { 
							uploadMultiple: false,
						    parallelUploads: 100,
						    maxFilesize: 5,
						    acceptedFiles: 'image/*',
							url: "/account/upload-image",
							dictDefaultMessage: '<p>将图片拖拽至此</p><div id="r_dropzone_icons"><i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-laptop fa-3x" aria-hidden="true"></i></div><p>或者</p><p>从电脑上拖入您要上传的照片</p>',
						    addRemoveLinks: true,
						    dictRemoveFile: '取消',
						    dictFileTooBig: '图片太大, 不能大于5MB',
						    headers: {
  								'x-csrf-token': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
							},
							method: 'post',
							// Prevents Dropzone from uploading dropped files immediately
							autoProcessQueue: false,
							thumbnailWidth: 269,
						    thumbnailHeight: 202,
							init: function() {
							    var submitButton = document.querySelector("#r_profile_image_upload_button")
							        myDropzone = this; // closure

							    submitButton.addEventListener("click", function() {
						      		myDropzone.processQueue(); // Tell Dropzone to process all queued files.
							    });

							    this.on("thumbnail", function(file, dataUrl) {
						            $('.dz-image').last().find('img').attr({width: '100%', height: '100%'});
						        }),
							    // You might want to show the submit button only when 
							    // files are dropped here:
							    this.on("addedfile", function() {
						      		// Show submit button here and/or inform user to click it.
							    });

						  	}
						});

						myDropzone.on('success', function(file, resp, data) {

						})
					}
				}, 	
				created: function() {
					console.log(this.updateHobby );
				}
			})

			var ctx = document.getElementById('myChart').getContext('2d');

			var options = {
				title: {
					display:true,
					text: '最近7天来访记录'
				},
			    scaleFontColor : "rgba(0,0,0,1)",
			    scaleLineColor : "rgba(0,0,0,0.1)",
			    scaleGridLineColor : "rgba(0,0,0,0.1)",
			    scaleShowLabels : false,
			    scaleShowHorizontalLines : false,
			    bezierCurve : false,
			    pointDot : true,
			    pointDotRadius : 5,
			    pointDotStrokeWidth : 2,
			    scaleOverride : true,
			    scaleSteps : 6,
			    scaleStepWidth : 100,
			    responsive : true,
			    showTooltips: true,
			    tooltipTemplate: "<%= value %> " + "Students",
			    tooltipFontSize: 16,
			    tooltipYPadding: 12,
			    tooltipXPadding: 12,
			    tooltipCornerRadius: 3,
			    tooltipFillColor: "#3797d3",
			    onAnimationComplete : function() {
			        var arrSelector = [];
			        this.datasets[0].points.forEach(function(point){
			            if(point.label == 'WED'){
			                arrSelector.push(point);
			            }
			        });

			        this.showTooltip(arrSelector, true);          
			    },
			    tooltipEvents: []
			}

			var myBarChart = new Chart(ctx, {
			    type: 'line',
			    data: data,
			    options: options
			});

			var tabFinish = 0;
			$('.nav-tab-item').on('click',  function(){
			    var $t = $(this);
			    if(tabFinish || $t.hasClass('active')) return false;
			    tabFinish = 1;
			    $t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
			    $t.addClass('active');
			    var index = $t.parent().parent().find('.nav-tab-item').index(this);
			    $t.closest('.tab-wrapper').find('.tab-info:visible').fadeOut(200, function(){
			        $t.closest('.tab-wrapper').find('.tab-info').eq(index).fadeIn(200, function() {
			            tabFinish = 0;
			        });
			    });
			});

			$('.r_profile_nonedit_qna').on('click', function() {
				$(this).addClass('disappear');
				$(this).next().removeClass('disappear');
			})

			$('.r_profile_qna_cancel').on('click', function() {
				$(this).parent().parent().prev().removeClass('disappear');
				$(this).closest('.r_profile_edit_qna').addClass('disappear');
			})
		}
		
		if (location.pathname.indexOf('/detail') != -1) {
			$('.popup-gallery').length && $('.popup-gallery').magnificPopup({
				delegate: 'a.popup-a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
					}
				}
			});

			var vue = new Vue({
				el:'#r_detail',
				data: {

				},
				methods: {
					addToFav:function(id) {
						$('.r_loader').removeClass('disappear');
						var el = event.target;

						$.post('/api/add-favourite', {
							_token:_token,
							likeId:id
						}, function(data) {
							if (data.code == 1) {
								$('.r_loader').addClass('disappear');
								$(el).html(data.message);
								toastr.success(data.message);
							}
						})
					},
					like: function(id) {
						$('.r_loader').removeClass('disappear');
						var el = event.target;

						$.post('/api/likes', {
							_token:_token,
							likeId:id
						}, function(data) {
							if (data.code == 1) {
								$('.r_loader').addClass('disappear');
								$(el).html(data.html);
								toastr.success(data.message);
							}
						})
					}
				},
				created:function() {

				}
			})
		}

		if (location.pathname.indexOf('/account/profile') != -1) {
			$("#r_state_select").on("click", function(){
				$(this).toggleClass("be-dropdown-active");
				$(this).find(".drop-down-list").stop().slideToggle();
			});
			$(function() {
				var nameClickCount = 0;
				$('.login-user-down').on('click', function() {
					if (nameClickCount == 0) {
						$('#r_top_profile').css('display', 'block');
						nameClickCount++;
						console.log('a1');
					} else {
						$('#r_top_profile').css('display', 'none');
						console.log('a2');
						nameClickCount=0;
					}
				})

				$('.drop-down-list li a').on('click', function() {
					$('#r_profile_state').val($(this).attr('area'));
					$('#r_profile_select_title').empty().text($(this).attr('area'));
					$('#r_state_select').removeClass('be-dropdown-active');
					$('.drop-down-list').css('display', 'none');
				})

				// - > Scroll_nav_click 
				$('.edit-ln > a').on('click', function(e) {
				    e.preventDefault();
					$(this).parent().siblings().find('a').removeClass('active');
				    showSection($(this).attr('href'), true);
				});
			})

			//scroll left menu
		   	$('#scrollspy').affix({
		        offset: {
	          		top: function () { return (this.top = $('#scrollspy').offset().top-85)},
	          		bottom: 464
		        }
		    });
		    
			$(window).on('scroll', function() {
			    checkSection();
			});// - > scroll_end

			showSection(window.location.hash, false);

			function showSection(section, isAnimate) {
			    var direction =  section.replace(/#/,''),
			        reqSection = $('.sec').filter('[data-sec="' + direction + '"]'),
			        reqSectionPos;

			    if(reqSection.length) {
			        reqSectionPos = reqSection.offset().top - 70;
			    }
			        
			    if(isAnimate) {
			        $('body, html').animate({scrollTop: reqSectionPos},500);
			    } else {
			        $('body, html').scrollTop(reqSectionPos);
			    }
			};// - > showSection_end

			function checkSection() {
			    $('.sec').each(function() {
			        var $this = $(this),
			            topEdge = $this.offset().top - 70,
			            boottomEdge = topEdge + $this.height(),
			            wScroll = $(window).scrollTop();

			        if(topEdge < wScroll && boottomEdge > wScroll) {
			            var currentId = $this.data('sec'),
			                reqLink = $('.edit-ln > a').filter('[href="#' + currentId + '"]');

			            reqLink.parent('.edit-ln').addClass('ac').siblings().removeClass('ac');

			            window.location.hash = currentId;
			        }
			    });
			}; // - > checkSection_end

			var vue = new Vue({
				el: '#r_vue_profile',
				data: {
					fname:fname,
					postcode:postcode,
					description:desc,
					state:state,
				},
				methods: {
					updateProfile: function() {
						var self = this;
						$.post('/account/update-profile', {
							_token:_token
						}, function(data) {

						})
					},
					updateWechat: function() {
						var self = this;
						$.post('/account/update-wechat', {
							_token:_token
						}, function(data) {

						})
					},
					updateDesc: function() {
						var self = this;
						$.post('/account/update-description', {
							_token:_token
						}, function(data) {

						})
					}
				},
				created: function() {

				}
			})	
		}
	</script>
	</body>
</html>