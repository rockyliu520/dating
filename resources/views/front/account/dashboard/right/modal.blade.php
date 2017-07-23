<div class="modal fade r_custom_modal" id="r_change_profile">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">资料管理</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="r_signin_modal_form_part">
						<div class="r_require_login_message"></div>
						<div role="tabpanel" class="full-width-tabs tabbable">
							<!-- Nav tabs -->
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active">
									<a href="#basic" aria-controls="basic" role="tab" data-toggle="tab">基本资料</a>
								</li>
								<li role="presentation">
									<a href="#detail" aria-controls="detail" role="tab" data-toggle="tab">详情修改</a>
								</li>
								<li role="presentation">
									<a href="#background" aria-controls="background" role="tab" data-toggle="tab">背景</a>
								</li>
								<li role="presentation">
									<a href="#habit" aria-controls="habit" role="tab" data-toggle="tab">喜好</a>
								</li>
							</ul>
							
							<!-- Tab panes -->
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane active" id="basic">
									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>名字</label>
										<input class="input-signtype" type="text" required="required" placeholder="名字" v-model="updateName">
									</div>
									<div class="col-md-12 be-date-block noPadding r_dashboard_update_block">
										<label class="large-popup-text" style="margin-bottom: 5px">
											出生日期
										</label>
										<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 noPaddingLeft">
											<div class="be-custom-select-block mounth">
												<select class="be-custom-select" v-model="updateMonth">
													<option value="-1" disabled selected="selected" required="required">
														月份
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
												</select>
											</div>
										</div>
										<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 noPadding">
											<div class="be-custom-select-block">
												<select class="be-custom-select" name="day" v-model="updateDay">
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
										</div>
										<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 noPaddingRight">
											<div class="be-custom-select-block">
												<select class="be-custom-select" required="required" v-model="updateYear">
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
									</div>
									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											性别
										</label>
										<select class="be-custom-select" v-model="updateSex">
											<option value="1">男</option>	
											<option value="0">女</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											选择身高
										</label>
										<select class="be-custom-select" v-model="updateHeight">
											<option value="-1">选择身高</option>
											<option value="140cm">140cm</option>
											<option value="141cm">141cm</option>
											<option value="142cm">142cm</option>
											<option value="143cm">143cm</option>
											<option value="144cm">144cm</option>
											<option value="145cm">145cm</option>
											<option value="146cm">146cm</option>
											<option value="147cm">147cm</option>
											<option value="148cm">148cm</option>
											<option value="149cm">149cm</option>
											<option value="150cm">150cm</option>
											<option value="151cm">151cm</option>
											<option value="152cm">152cm</option>
											<option value="153cm">153cm</option>
											<option value="154cm">154cm</option>
											<option value="155cm">155cm</option>
											<option value="156cm">156cm</option>
											<option value="157cm">157cm</option>
											<option value="158cm">158cm</option>
											<option value="159cm">159cm</option>
											<option value="160cm">160cm</option>
											<option value="161cm">161cm</option>
											<option value="162cm">162cm</option>
											<option value="163cm">163cm</option>
											<option value="164cm">164cm</option>
											<option value="165cm">165cm</option>
											<option value="166cm">166cm</option>
											<option value="167cm">167cm</option>
											<option value="168cm">168cm</option>
											<option value="169cm">169cm</option>
											<option value="170cm">170cm</option>
											<option value="171cm">171cm</option>
											<option value="172cm">172cm</option>
											<option value="173cm">173cm</option>
											<option value="174cm">174cm</option>
											<option value="175cm">175cm</option>
											<option value="176cm">176cm</option>
											<option value="177cm">177cm</option>
											<option value="178cm">178cm</option>
											<option value="179cm">179cm</option>
											<option value="180cm">180cm</option>
											<option value="181cm">181cm</option>
											<option value="182cm">182cm</option>
											<option value="183cm">183cm</option>
											<option value="184cm">184cm</option>
											<option value="185cm">185cm</option>
											<option value="186cm">186cm</option>
											<option value="187cm">187cm</option>
											<option value="188cm">188cm</option>
											<option value="189cm">189cm</option>
											<option value="190cm">190cm</option>
											<option value="191cm">191cm</option>
											<option value="192cm">192cm</option>
											<option value="193cm">193cm</option>
											<option value="194cm">194cm</option>
											<option value="195cm">195cm</option>
											<option value="196cm">196cm</option>
											<option value="197cm">197cm</option>
											<option value="198cm">198cm</option>
											<option value="199cm">199cm</option>
											<option value="200cm">200cm</option>
											<option value="200cm+">200cm+</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											区域
										</label>
										<select class="be-custom-select" v-model="updateLocation">
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
									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>邮编/区号</label>
										<input class="input-signtype" type="text" required="required" placeholder="区号" v-model="updatePostcode">
									</div>
								</div>
								<div role="tabpanel" class="tab-pane" id="detail">
									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											体型/身材
										</label>
										<select class="be-custom-select" v-model="updateBodyType">
											<option value="-1">选择身材</option>
											<option value="1">偏瘦</option>	
											<option value="2">运动型</option>
											<option value="3">匀称</option>
											<option value="4">魁梧</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											婚姻状况
										</label>
										<select class="be-custom-select" v-model="updateStatus">
											<option value="-1">选择婚姻状况</option>
											<option value="0">没结过婚</option>	
											<option value="1">离婚</option>
											<option value="2">丧偶</option>
											<option value="3">分居</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											有没有孩子
										</label>
										<select class="be-custom-select" v-model="updateChild">
											<option value="-1">选择是否有孩子</option>
											<option value="0">没有</option>	
											<option value="1">有</option>
										</select>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane" id="background">
									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											最高学历
										</label>
										<select class="be-custom-select" v-model="updateEducation">
											<option value="-1">选择学历</option>
											<option value="0">高中</option>	
											<option value="1">本科</option>
											<option value="2">硕士</option>
											<option value="3">博士</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>毕业院校</label>
										<input class="input-signtype" type="text" required="required" v-model="updateUniversity">
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											工作
										</label>
										<select class="be-custom-select" v-model="updateJob">
											<option value="-1">选择工作</option>
											<option value="财务">财务</option>	
											<option value="艺术">艺术</option>
											<option value="教育">教育</option>
											<option value="工程/科学">工程/科学</option>
											<option value="管理">管理</option>
											<option value="行政">行政</option>
											<option value="法律">法律</option>
											<option value="医疗">医疗</option>
											<option value="军事">军事</option>
											<option value="政府">政府</option>
											<option value="零售/餐饮">零售/餐饮</option>
											<option value="学生">学生</option>
											<option value="市场/销售">市场/销售</option>
											<option value="退休">退休</option>
											<option value="其他">其他</option>
										</select>
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>出生地</label>
										<input class="input-signtype" type="text" required="required" v-model="updateBirthPlace">
									</div>

									<div class="col-md-12 noPadding r_dashboard_update_block">
										<label>
											澳洲身份
										</label>
										<select class="be-custom-select" v-model="updatePr">
											<option value="-1">选择身份</option>
											<option value="1">有PR</option>	
											<option value="0">没有</option>
										</select>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane" id="habit">
								</div>
							</div>
						</div>
						<button class="be-popup-sign-button btn-block" type="button" v-on:click="update()">
							更新资料
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
