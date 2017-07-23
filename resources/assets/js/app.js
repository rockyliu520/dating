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

	$('.r_home_require_login').on('click', function() {
		var requireLoginMessage="<div class='alert alert-warning alert-white rounded'><button type='button' data-dismiss='alert' aria-hidden='true' class='close'>×</button><div class='icon'><i class='fa fa-warning'></i></div><strong>提示: </strong>请先登录进行查看</div>";
		$('.r_require_login_message').html(requireLoginMessage);
	})

	var vue = new Vue({
		el: '#r_account_modal',
		data: {
			loginEmail:'',
			loginPassword: '',
			loginError: 0,
			loginErrorMessage: '',
			loginSuccess: 0,
			loginSuccessMessage: '',
			running:0,
			registerName:'',
			registerEmail:'',
			registerReEmail:'',
			registerMonth:-1,
			registerDay:-1,
			registerYear:-1,
			registerSex:-1,
			registerPassword: '',
			registerError: 0,
			registerErrorMessage: '',
			registerSuccess: 0,
			registerSuccessMessage: '',
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
						window.location.href = "/account/dashboard"; 
					} 
				})
			}, 
			signup: function() {
				var self = this;
				self.running = 1;
				self.registerError = 0;
				self.registerSuccess = 0;

				if (
					self.registerEmail == '' || self.registerEmail == null ||
					self.registerReEmail == '' || self.registerReEmail == null ||
					self.registerName == '' || self.registerName == null ||
					self.registerPassword == '' || self.registerPassword == null ||
					self.registerSex == -1 || self.registerMonth == -1 ||
					self.registerDay == -1 || self.registerYear == -1
					) {
					self.registerError = 1;
					self.registerErrorMessage = '请输入必要的信息';
					self.running = 0;
					return;
				}
				if (self.registerEmail != self.registerReEmail) {
					self.registerError = 1;
					self.registerErrorMessage = '两次输入的Email不相同';
					self.running = 0;
					return;
				}

				$.post('/account/register', {
					_token:_token,
					email: self.registerEmail,
					fname: self.registerName,
					password: self.registerPassword,
					sex: self.registerSex,
					day: self.registerDay,
					month: self.registerMonth,
					year: self.registerYear
				}, function(data) {
					if (data.code == 1) {
						self.registerSuccess = 1;
						self.registerSuccessMessage = data.message;
						window.location.href = "/account/dashboard";
						self.running = 0;
					}

					if (data.code == 0) {
						self.registerError = 1;
						self.registerErrorMessage = data.message;
						self.running = 0;
					}
				})
			}
		},
		created: function() {

		}
	})
	
	if (location.pathname.indexOf('/account/profile') != -1) {
		
	}
	if (location.pathname == '/') {
		
	}

	// if (location.pathname.indexOf('/account/dashboard') != -1) {

	// 	var vue = new Vue({
	// 		el: '#r_dashboard',
	// 		data: {

	// 		},
	// 		methods: {
	// 			resend: function() {
	// 				$('.r_loader').removeClass('disappear');
					
	// 				$.post('/account/resend-verify-email', {
	// 					_token:_token
	// 				}, function(data) {
	// 					$('.r_loader').addClass('disappear');
	// 					if (data.code == 1) {
	// 						// for success - green box
	// 						toastr.success(data.message);
	// 					}
	// 				})

	// 			}
	// 		}, 	
	// 		created: function() {
				
	// 		}
	// 	})
	// 	var ctx = document.getElementById('myChart').getContext('2d');

	// 	var options = {
	// 		title: {
	// 			display:true,
	// 			text: '最近7天来访记录'
	// 		},
	// 	    scaleFontColor : "rgba(0,0,0,1)",
	// 	    scaleLineColor : "rgba(0,0,0,0.1)",
	// 	    scaleGridLineColor : "rgba(0,0,0,0.1)",
	// 	    scaleShowLabels : false,
	// 	    scaleShowHorizontalLines : false,
	// 	    bezierCurve : false,
	// 	    pointDot : true,
	// 	    pointDotRadius : 5,
	// 	    pointDotStrokeWidth : 2,
	// 	    scaleOverride : true,
	// 	    scaleSteps : 6,
	// 	    scaleStepWidth : 100,
	// 	    responsive : true,
	// 	    showTooltips: true,
	// 	    tooltipTemplate: "<%= value %> " + "Students",
	// 	    tooltipFontSize: 16,
	// 	    tooltipYPadding: 12,
	// 	    tooltipXPadding: 12,
	// 	    tooltipCornerRadius: 3,
	// 	    tooltipFillColor: "#3797d3",
	// 	    onAnimationComplete : function() {
	// 	        var arrSelector = [];
	// 	        this.datasets[0].points.forEach(function(point){
	// 	            if(point.label == 'WED'){
	// 	                arrSelector.push(point);
	// 	            }
	// 	        });

	// 	        this.showTooltip(arrSelector, true);          
	// 	    },
	// 	    tooltipEvents: []
	// 	}

	// 	var myBarChart = new Chart(ctx, {
	// 	    type: 'line',
	// 	    data: data,
	// 	    options: options
	// 	});

	// 	var tabFinish = 0;
	// 	$('.nav-tab-item').on('click',  function(){
	// 	    var $t = $(this);
	// 	    if(tabFinish || $t.hasClass('active')) return false;
	// 	    tabFinish = 1;
	// 	    $t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
	// 	    $t.addClass('active');
	// 	    var index = $t.parent().parent().find('.nav-tab-item').index(this);
	// 	    $t.closest('.tab-wrapper').find('.tab-info:visible').fadeOut(500, function(){
	// 	        $t.closest('.tab-wrapper').find('.tab-info').eq(index).fadeIn(500, function() {
	// 	            tabFinish = 0;
	// 	        });
	// 	    });
	// 	});
	// }
});