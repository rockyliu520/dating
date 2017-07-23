@if(Session::has('registerError'))
<div class="large-popup register" style="display:block;">
@else
<div class="large-popup register">
@endif
	<div class="large-popup-fixed"></div>
	<div class="container large-popup-container">
		<div class="row">
			<div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 large-popup-content">
				<div class="row">
					<div class="col-md-12">
						<i class="fa fa-times close-button"></i>
						<h5 class="large-popup-title">账号注册</h5>
					</div>
					<form action="/account/register" method="post" class="popup-input-search r_signup_form">
						{{ csrf_field() }}
						<div class="col-md-6">
							<input class="input-signtype" type="text" name="fname" required="" placeholder="名字">
						</div>
						<input type="hidden" name="lname" value="">
						<!-- <div class="col-md-6">
							<input class="input-signtype" type="text" name="fname" required="" placeholder="名">
						</div> -->
						<input type="hidden" value="australia" name="country">
						<div class="col-md-6">
							<input class="input-signtype" type="email" name="email" required="required" placeholder="邮箱">
						</div>
						<div class="col-md-6">
							<input class="input-signtype" type="email" name="reemail" required="required" placeholder="确认重复邮箱">
						</div>
						<div class="col-md-6">
							<input class="input-signtype" type="password" name="password" required="required" placeholder="密码">
						</div>
						<div class="col-md-6">
							<!-- <span class="large-popup-text" style="display: block;margin-bottom: 20px;">我是</span> -->
							<div class="be-custom-select-block">
								<select class="be-custom-select" name="sex" required="required">
									<option value="-1" disabled selected="selected">
										性别
									</option>
									<option value="male">男</option>	
									<option value="female">女</option>
								</select>
							</div>
						</div>

						<div class="col-md-12 be-date-block">
							<span class="large-popup-text">
								出生日期
							</span>
							<div class="be-custom-select-block mounth">
								<select class="be-custom-select" name="month">
									<option value="-1" disabled selected="selected" required="required">
										月份
									</option>
									<option value="01">01</option>	
									<option value="02">02</option>	
									<option value="03">03</option>	
									<option value="04">04</option>	
									<option value="05">05</option>	
									<option value="06">06</option>	
									<option value="07">07</option>	
									<option value="08">08</option>	
									<option value="09">09</option>	
									<option value="10">10</option>	
									<option value="11">11</option>	
									<option value="12">12</option>
								</select>
							</div>
							<div class="be-custom-select-block">
								<select class="be-custom-select" name="day">
									<option value="-1" disabled selected="selected" required="required">
										日
									</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
									<option value="13">13</option>
									<option value="14">14</option>
									<option value="15">15</option>
									<option value="16">16</option>
									<option value="17">17</option>
									<option value="18">18</option>
									<option value="19">19</option>
									<option value="20">20</option>
									<option value="21">21</option>
									<option value="22">22</option>
									<option value="23">23</option>
									<option value="24">24</option>
									<option value="25">25</option>
									<option value="26">26</option>
									<option value="27">27</option>
									<option value="28">28</option>
									<option value="29">29</option>
									<option value="30">30</option>
									<option value="31">31</option>
								</select>
							</div>
							<div class="be-custom-select-block">
								<select class="be-custom-select" required="required" name="year">
									<option value="-1" disabled selected="selected">
										年
									</option>
									<option value="1940">1940</option>
									<option value="1941">1941</option>
									<option value="1942">1942</option>
									<option value="1943">1943</option>
									<option value="1944">1944</option>
									<option value="1945">1945</option>
									<option value="1946">1946</option>
									<option value="1947">1947</option>
									<option value="1948">1948</option>
									<option value="1949">1949</option>
									<option value="1950">1950</option>
									<option value="1951">1951</option>
									<option value="1952">1952</option>
									<option value="1953">1953</option>
									<option value="1954">1954</option>
									<option value="1955">1955</option>
									<option value="1956">1956</option>
									<option value="1957">1957</option>
									<option value="1958">1958</option>
									<option value="1959">1959</option>
									<option value="1960">1960</option>
									<option value="1961">1961</option>
									<option value="1962">1962</option>
									<option value="1963">1963</option>
									<option value="1964">1964</option>
									<option value="1965">1965</option>
									<option value="1966">1966</option>
									<option value="1967">1967</option>
									<option value="1968">1968</option>
									<option value="1969">1969</option>
									<option value="1970">1970</option>
									<option value="1971">1971</option>
									<option value="1972">1972</option>
									<option value="1973">1973</option>
									<option value="1974">1974</option>
									<option value="1975">1975</option>
									<option value="1976">1976</option>
									<option value="1977">1977</option>
									<option value="1978">1978</option>
									<option value="1979">1979</option>
									<option value="1980">1980</option>
									<option value="1981">1981</option>
									<option value="1982">1982</option>
									<option value="1983">1983</option>
									<option value="1984">1984</option>
									<option value="1985">1985</option>
									<option value="1986">1986</option>
									<option value="1987">1987</option>
									<option value="1988">1988</option>
									<option value="1989">1989</option>
									<option value="1990">1990</option>
									<option value="1991">1991</option>
									<option value="1992">1992</option>
									<option value="1993">1993</option>
									<option value="1994">1994</option>
									<option value="1995">1995</option>
									<option value="1996">1996</option>
									<option value="1997">1997</option>
									<option value="1998">1998</option>
									<option value="1999">1999</option>
									<option value="2000">2000</option>
									<option value="2001">2001</option>
									<option value="2002">2002</option>
									<option value="2003">2003</option>
									<option value="2004">2004</option>
									<option value="2005">2005</option>
									<option value="2006">2006</option>
									<option value="2007">2007</option>
									<option value="2008">2008</option>
									<option value="2009">2009</option>
									<option value="2010">2010</option>
									<option value="2011">2011</option>
									<option value="2012">2012</option>
									<option value="2013">2013</option>

								</select>
							</div>
						</div>
						
						<div class="col-md-6">
							<div class="be-checkbox">
								<label class="check-box">
								    <input class="checkbox-input" type="checkbox" required="required" value="" > <span class="check-box-sign"></span>
								</label>
								<span class="large-popup-text">
									我同意并且已经阅读 <a class="be-popup-terms" href="blog-detail-2.html">网站使用</a> 及 <a class="be-popup-terms" href="blog-detail-2.html">相关条例</a>.
								</span>
							</div>
							<!-- <div class="be-checkbox">
								<label class="check-box">
								    <input class="checkbox-input" type="checkbox" value="" > <span class="check-box-sign"></span>
								</label>
								<span class="large-popup-text">
									Send me notifications
								</span>
							</div> -->
						</div>
						@if(Session::has('registerError'))
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div class="alert alert-danger">
									{{ Session::get('registerError') }}
								</div>
							</div>
						@endif
						<div class="col-md-6 for-signin" style="text-align:left">
							<input type="submit" class="be-popup-sign-button" value="现在注册">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>