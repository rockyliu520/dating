@extends('front.layouts.main')
<style>
	@import url(https://fonts.googleapis.com/css?family=Exo:400,500,500italic,400italic,600,600italic,700,700italic,800,800italic,300,300italic);
	body {
		/*The below background is just to add some color, you can set this to anything*/
	  	background: url('/images/bg3.jpg') center center no-repeat;
	}
	#navbar {
		background: none;
	}
</style>
@section('index')
<div id="dashboard">
	<div class="container">
		<div class="row">
			@include('front.account.include.info')
			@include('front.account.include.sidebar')
			<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
				<form method="post" action="/account/basic" class="basicform">
					<legend>账号基本信息设置</legend>
					{{ csrf_field() }}
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
								<input id="txtName" type="text" class="form-control " name="name" placeholder="输入您的名字" required="required">
							</div>
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
								<input id="selectBirth" type="text" class="form-control " name="dob" placeholder="选择您的出生日" required="required">
							</div>					
						</div>
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-lamp"></span></span>
								<select class="form-control" id="txtHeight">
									<option value="-1">选择您的身高</option>
									<option value="1.45">1.45 m</option>
									<option value="1.46">1.46 m</option>
									<option value="1.47">1.47 m</option>
									<option value="1.48">1.48 m</option>
									<option value="1.49">1.49 m</option>
									<option value="1.50">1.50 m</option>
									<option value="1.51">1.51 m</option>
									<option value="1.52">1.52 m</option>
									<option value="1.53">1.53 m</option>
									<option value="1.54">1.54 m</option>
									<option value="1.55">1.55 m</option>
									<option value="1.56">1.56 m</option>
									<option value="1.57">1.57 m</option>
									<option value="1.58">1.58 m</option>
									<option value="1.59">1.59 m</option>
									<option value="1.60">1.60 m</option>
									<option value="1.61">1.61 m</option>
									<option value="1.62">1.62 m</option>
									<option value="1.63">1.63 m</option>
									<option value="1.64">1.64 m</option>
									<option value="1.65">1.65 m</option>
									<option value="1.66">1.66 m</option>
									<option value="1.67">1.67 m</option>
									<option value="1.68">1.68 m</option>
									<option value="1.69">1.69 m</option>
									<option value="1.70">1.70 m</option>
									<option value="1.71">1.71 m</option>
									<option value="1.72">1.72 m</option>
									<option value="1.73">1.73 m</option>
									<option value="1.74">1.74 m</option>
									<option value="1.75">1.75 m</option>
									<option value="1.76">1.76 m</option>
									<option value="1.77">1.77 m</option>
									<option value="1.78">1.78 m</option>
									<option value="1.79">1.79 m</option>
									<option value="1.80">1.80 m</option>
									<option value="1.81">1.81 m</option>
									<option value="1.82">1.82 m</option>
									<option value="1.83">1.83 m</option>
									<option value="1.84">1.84 m</option>
									<option value="1.85">1.85 m</option>
									<option value="1.86">1.86 m</option>
									<option value="1.87">1.87 m</option>
									<option value="1.88">1.88 m</option>
									<option value="1.89">1.89 m</option>
									<option value="1.90">1.90 m</option>
									<option value="1.91">1.91 m</option>
									<option value="1.92">1.92 m</option>
									<option value="1.93">1.93 m</option>
									<option value="1.94">1.94 m</option>
									<option value="1.95">1.95 m</option>
									<option value="1.96">1.96 m</option>
									<option value="1.97">1.97 m</option>
									<option value="1.98">1.98 m</option>
									<option value="1.99">1.99 m</option>
									<option value="2.00">2.00m+</option>

								</select>
							</div>
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-bed"></span></span>
								<select class="form-control" id="txtWeight">
									<option value="-1">选择您的体重</option>
									<option value="35">35 kg</option>
									<option value="36">36 kg</option>
									<option value="37">37 kg</option>
									<option value="38">38 kg</option>
									<option value="39">39 kg</option>
									<option value="40">40 kg</option>
									<option value="41">41 kg</option>
									<option value="42">42 kg</option>
									<option value="43">43 kg</option>
									<option value="44">44 kg</option>
									<option value="45">45 kg</option>
									<option value="46">46 kg</option>
									<option value="47">47 kg</option>
									<option value="48">48 kg</option>
									<option value="49">49 kg</option>
									<option value="50">50 kg</option>
									<option value="51">51 kg</option>
									<option value="52">52 kg</option>
									<option value="53">53 kg</option>
									<option value="54">54 kg</option>
									<option value="55">55 kg</option>
									<option value="56">56 kg</option>
									<option value="57">57 kg</option>
									<option value="58">58 kg</option>
									<option value="59">59 kg</option>
									<option value="60">60 kg</option>
									<option value="61">61 kg</option>
									<option value="62">62 kg</option>
									<option value="63">63 kg</option>
									<option value="64">64 kg</option>
									<option value="65">65 kg</option>
									<option value="66">66 kg</option>
									<option value="67">67 kg</option>
									<option value="68">68 kg</option>
									<option value="69">69 kg</option>
									<option value="70">70 kg</option>
									<option value="71">71 kg</option>
									<option value="72">72 kg</option>
									<option value="73">73 kg</option>
									<option value="74">74 kg</option>
									<option value="75">75 kg</option>
									<option value="76">76 kg</option>
									<option value="77">77 kg</option>
									<option value="78">78 kg</option>
									<option value="79">79 kg</option>
									<option value="80">80 kg</option>
									<option value="81">81 kg</option>
									<option value="82">82 kg</option>
									<option value="83">83 kg</option>
									<option value="84">84 kg</option>
									<option value="85">85 kg</option>
									<option value="86">86 kg</option>
									<option value="87">87 kg</option>
									<option value="88">88 kg</option>
									<option value="89">89 kg</option>
									<option value="90">90 kg</option>
									<option value="91">91 kg</option>
									<option value="92">92 kg</option>
									<option value="93">93 kg</option>
									<option value="94">94 kg</option>
									<option value="95">95 kg</option>
									<option value="96">96 kg</option>
									<option value="97">97 kg</option>
									<option value="98">98 kg</option>
									<option value="99">99 kg</option>
									<option value="100">100 kg</option>
									<option value="101">101 kg</option>
									<option value="102">102 kg</option>
									<option value="103">103 kg</option>
									<option value="104">104 kg</option>
									<option value="105">105 kg</option>
									<option value="106">106 kg</option>
									<option value="107">107 kg</option>
									<option value="108">108 kg</option>
									<option value="109">109 kg</option>
									<option value="110">110 kg</option>
									<option value="111">111 kg</option>
									<option value="112">112 kg</option>
									<option value="113">113 kg</option>
									<option value="114">114 kg</option>
									<option value="115">115 kg</option>
									<option value="116">116 kg</option>
									<option value="117">117 kg</option>
									<option value="118">118 kg</option>
									<option value="119">119 kg</option>
									<option value="120">120 kg</option>
									<option value="121">121 kg</option>
									<option value="122">122 kg</option>
									<option value="123">123 kg</option>
									<option value="124">124 kg</option>
									<option value="125">125 kg</option>
									<option value="126">126 kg</option>
									<option value="127">127 kg</option>
									<option value="128">128 kg</option>
									<option value="129">129 kg</option>
									<option value="130">130 kg</option>
									<option value="131">131 kg</option>
									<option value="132">132 kg</option>
									<option value="133">133 kg</option>
								</select>
							</div>
						</div>
					</div>
					<hr />
					<div class="row">
						<!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-earphone"></span></span>
								<input id="txtMobile" type="text" class="form-control " name="mobile" placeholder="您的电话, Eg: 04或61开头" required="required">
								<span id="authMessage" class="input-group-btn">
			            			<button class="btn btn-default reveal" type="button"><i class="glyphicon glyphicon-envelope"></i> &nbsp;&nbsp;发送验证码</button>
			          			</span>  
							</div>

							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-flag"></span></span>
								<input id="txtMessage" type="text" class="form-control " name="message" placeholder="输入验证码" required="required">
							</div>
						</div> -->
						<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-send"></span></span>
								<!-- <input id="txtLocation" type="text" class="form-control " name="location" placeholder="常住区" required="required"> -->
								<select class="form-control" id="txtLocation">
								<option value="default" selected="">-选择常住地-</option>
									<option value="Australian Capital Territory">Australian Capital Territory</option>
									<option value="New South Wales">New South Wales</option>
									<option value="Northern Territory">Northern Territory</option>
									<option value="Queensland">Queensland</option>
									<option value="South Australia">South Australia</option>
									<option value="Tasmania">Tasmania</option>
									<option value="Victoria">Victoria</option>
									<option value="Western Australia">Western Australia</option>
								</select>
							</div>
							
							<div class="input-group login-userinput">
								<span class="input-group-addon"><span class="glyphicon glyphicon-globe"></span></span>
								<input id="txtPostcode" type="text" class="form-control " name="postcode" placeholder="PostCode, Eg: 2000" required="required">
							</div>
						</div>
					</div>

					@if(Session::has('errorMessage'))
						<div class="alert alert-danger">
							{{ Session::get('errorMessage') }}
						</div>
					@endif
					<div class="row">
						<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<button class="btn btn-primary btn-block login-button" type="submit"><i class="fa fa-sign-in"></i> 更新资料</button>
						</div>
					</div>
				</form>		
			</div>	
		</div>
	</div>
</div>
@stop