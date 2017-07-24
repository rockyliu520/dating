<div class="col-xs-12 col-md-8">
    <div class="tab-wrapper style-1">
        <div class="tab-nav-wrapper">
            <div  class="nav-tab  clearfix">
            	<div class="nav-tab-item active">
                    <span>我的资料</span>
                </div>    
                <div class="nav-tab-item ">
                    <span>最近来访</span>
                </div>
                <div class="nav-tab-item ">
                    <span>看过我的</span>
                </div>
                <div class="nav-tab-item ">
                    <span>我的关注</span>
                </div> 
                                                                           
            </div>
        </div>
        <div class="tabs-content clearfix">
            <div class="tab-info active">
            	<div class="row">
            		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="r_basic_info">
            			<h4 data-toggle="modal" href='#r_change_profile'>
							<i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:20px;"></i>&nbsp;基本信息
						</h4>
						@include('front.account.dashboard.right.well')
						<div class="r_profile_question">
							@foreach($questions as $q)
								<h4>{{ $q->question }}&nbsp;&nbsp;<i class="fa fa-pencil-square-o" aria-hidden="true"></i></h4>
								<div class="r_profile_qna">
									<p class="r_profile_nonedit_qna">{{ $q->answer }}</p>
									<div class="r_profile_edit_qna disappear">
										<textarea class="form-control">{{ $q->answer }}</textarea>
										<div class="r_profile_qna_button">
											<button class="btn color-3 size-1 hover-6 r_profile_qna_cancel">取消</button>
											<button class="btn color-1 size-1 hover-1 r_profile_qna_save" v-on:click="answer({{ $q->questionId }})">更新</button>
											<div class="clearfix"></div>
										</div>
									</div>
								</div>
							@endforeach
						</div>
						@include('front.account.dashboard.right.modal')
            		</div>
            	</div>
            </div>   
            <div class="tab-info "> 
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<canvas id="myChart" style="height:450; width: 100%;"></canvas>
					</div>
				</div>
            </div>
            <div class="tab-info">
				<div class="row">
					@foreach($visitors as $v)
						<div class="col-ml-12 col-xs-6 col-sm-4">
							<div class="be-post">
								<a href="/detail/{{ $v->id }}" class="be-img-block" target="_blank">
									<img src="{{ $v->image }}" alt="omg">
								</a>

								<?php 
									$year = date('Y');
									$age = $year - $v->year; 
								?>
								<a href="/detail/{{ $v->id }}" class="be-post-title" target="_blank">
									{{ $v->fname }}, {{ $age }}岁
								</a>
								<div class="author-post">
									<p>
										{{ $v->location }}&nbsp;{{ $v->postcode }}
									</p>
									<p>
										澳大利亚
									</p>
									<p>来访时间：{{ $v->c }}</p>
								</div>
								<div class="info-block">
									<span><i class="fa fa-thumbs-o-up"></i> {{ $v->likes }}</span>
									<span><i class="fa fa-eye"></i> {{ $v->visitCount}}</span>
								</div>
							</div>									
						</div>								
					@endforeach
				</div>
            </div>
            <div class="tab-info">
				<div class="row">
					@foreach($following as $v)
						<div class="col-ml-12 col-xs-6 col-sm-4">
							<div class="be-post">
								<a href="/detail/{{ $v->id }}" class="be-img-block" target="_blank">
									<img src="{{ $v->image }}" alt="omg">
								</a>

								<?php 
									$year = date('Y');
									$age = $year - $v->year; 
								?>
								<a href="/detail/{{ $v->id }}" class="be-post-title" target="_blank">
									{{ $v->fname }}, {{ $age }}岁
								</a>
								<div class="author-post">
									<p>
										{{ $v->location }}&nbsp;{{ $v->postcode }}
									</p>
									<p>
										澳大利亚
									</p>
									<p>关注时间：{{ $v->c }}</p>
								</div>
								<div class="info-block">
									<span><i class="fa fa-thumbs-o-up"></i> {{ $v->likes }}</span>
									<span><i class="fa fa-eye"></i> {{ $v->visitCount}}</span>
								</div>
							</div>									
						</div>								
					@endforeach
				</div>                                                                 
            </div>                       
        </div>
    </div> 				
</div>