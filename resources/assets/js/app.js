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
	$(".single-item").slick({
		dots: true,
		arrows: false,
		centerMode: true,
		centerPadding: '0',
	});

	$('#selectBirth').datetimepicker({
		viewMode: 'years',
        // format: 'yyyy-mm-dd',
        // keepOpen: true
        format: 'DD/MM/YYYY'
	});
	if (location.pathname.indexOf('/account/dashboard') != -1) {
		var heightarray = [];
	}

	if (location.pathname.indexOf('/account/signup') != -1) {

		var email = document.getElementById("userEmail")
		, reemail = document.getElementById("reUserEmail");

		function validateEmail(){
		  if(email.value != reemail.value) {
				reemail.setCustomValidity("您两次输入的邮箱不一致");
			} else {
				reemail.setCustomValidity('');
			}
		}

		email.onchange = validateEmail;
		reemail.onkeyup = validateEmail;

		// function submitForm() {
		// 	console.log('access');
		// 	document.getElementById('loader-wrapper').style.display = 'block';
		// }

		$("#signupform").on("submit", function(e) {
		    // event.preventDefault();
			document.getElementById('loader-wrapper').style.display = 'block';
	    });
	}

	if (location.pathname.indexOf('/account/signin') != -1) {
		
		window.onload = function() {
	  		Particles.init({
		    	selector: '#app'
		  	});
		};
		
		window.onload = function(){$("#showPassword").hide();}

		$("#txtPassword").on('change',function() {  
			if($("#txtPassword").val())
			{
				$("#showPassword").show();
			}
			else
			{
				$("#showPassword").hide();
			}
		});

		$(".reveal").on('click',function() {
		    var $pwd = $("#txtPassword");
		    if ($pwd.attr('type') === 'password') 
				{
		        $pwd.attr('type', 'text');
		    } 
				else 
				{
		        $pwd.attr('type', 'password');
		    }
		});

		$("#signin").on("submit", function(e) {
		    // event.preventDefault();
			document.getElementById('loader-wrapper').style.display = 'block';
	    });
	}
});