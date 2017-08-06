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
	</script>
	</body>
</html>