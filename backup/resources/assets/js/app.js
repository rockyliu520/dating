/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });


$(function () {

	var _token = $('meta[name="csrf-token"]').attr('content');

	$('#r_top_profile').css('top', $('header').height() - 18 + 'px');

	var vue = new Vue({
		el: '#r_account_modal',
		data: {
			loginEmail:'',
			loginPassword: '',
			loginError: 0,
			loginErrorMessage: '',
			loginSuccess: 0,
			loginSuccessMessage: '',
			running:0
		}, 
		methods: {
			signin: function() {
				var self = this;
				self.running = 1;
				self.loginError = 0;
				self.loginSuccess = 0;
				
				if (self.loginEmail == '' || self.loginEmail == null || self.loginPassword == '' || self.loginPassword == null) {
					this.loginError = 1;
					this.loginErrorMessage = '请输入邮箱及密码';
					self.running = 0;
					return;
				}
				
				$.post('/account/login', {
					_token:_token,
					email: self.loginEmail,
					password: self.loginPassword
				}, function(data) {
					
					if (data.code == 0) {
						self.loginError = 1;
						self.loginErrorMessage = data.message;
						self.running = 0;
					}

					if (data.code == 1) {
						self.loginSuccess = 1;
						self.loginSuccessMessage = data.message;
						self.running = 0;
						setTimeout(function(){ window.location.href = "/account/dashboard"; }, 2000);
					} 

					
				})
			}, 
			signup: function() {

			}
		},
		created: function() {
			console.log('你妈嗨');
		}
	})
	
	if (location.pathname == '/') {
		
	}

	if (location.pathname.indexOf('/account/profile') != -1) {

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
		$(function() {
			$("#r_state_select").on("click", function(){
				$(this).toggleClass("be-dropdown-active");
				$(this).find(".drop-down-list").stop().slideToggle();
			});	

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

	}

	if (location.pathname.indexOf('/detail') != -1) {
		
		// $('.left-feild').affix({
	 //        offset: {
	 //        	top: function () { return (this.top = $('.left-feild').offset().top-85)},
	 //        	bottom: 464
	 //        }
	 //    });
	}

	if (location.pathname.indexOf('/account/dashboard') != -1) {
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
		    options:options
		});
	}
});