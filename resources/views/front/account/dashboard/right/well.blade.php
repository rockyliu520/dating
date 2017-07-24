<div class="well" data-toggle="modal" href='#r_change_profile'> 
	<p>
		<i class="fa fa-user" aria-hidden="true"></i>
		@if(Auth::user()->sex == 1)
			男,
		@else
			女,
		@endif
		@if(Auth::user()->height == '-1')
			<i>身高?</i>
		@else
			{{ Auth::user()->height }}
		@endif

		@if(Auth::user()->weight == '-1')
			<i>体重?</i>
		@else
			{{ Auth::user()->weight }}
		@endif
		
		@if(Auth::user()->bodyType == -1)
			<i>身材?</i>
		@else
			@if(Auth::user()->bodyType == 1)
				偏瘦,
			@elseif(Auth::user()->bodyType == 2)
				运动型,
			@elseif(Auth::user()->bodyType == 3)
				匀称,
			@elseif(Auth::user()->bodyType == 4)
				魁梧,
			@endif
		@endif
		@if(Auth::user()->location != null || Auth::user()->location != '')
			{{ Auth::user()->location }},
		@endif
		@if(Auth::user()->child != -1)
			@if(Auth::user()->child == 1)
				有孩子,
			@else
				没有孩子,
			@endif											
		@endif
		@if(Auth::user()->status != -1)
			@if(Auth::user()->status == 0)
				没结婚,
			@elseif(Auth::user()->status == 1)
				离婚,
			@elseif(Auth::user()->status == 2)
				丧偶,
			@elseif(Auth::user()->status == 3)
				分居,
			@endif
		@endif
	</p>
	<p>
		<i class="fa fa-suitcase" aria-hidden="true"></i>
		@if(Auth::user()->education != -1)
			@if(Auth::user()->education == 0)
				高中,
			@elseif(Auth::user()->education == 1)
				本科,
			@elseif(Auth::user()->education == 2)
				硕士,
			@elseif(Auth::user()->education == 3)
				博士,
			@endif
		@else
			<i>您还没有填写学历,</i>
		@endif
		@if(Auth::user()->university  == '' || Auth::user()->university == null)
			<i>毕业院校?</i>
		@else
			{{ Auth::user()->university }}
		@endif
		@if(Auth::user()->job != -1)
			{{ Auth::user()->job }}
		@endif
	</p>
	<p>
		<i class="fa fa-globe" aria-hidden="true"></i>
		@if(Auth::user()->birthPlace != null || Auth::user()->birthPlace != '')
			{{ Auth::user()->birthPlace }},
		@else
			<i>出生地</i>
		@endif
	</p>
	<p>
		<i class="fa fa-leaf" aria-hidden="true"></i>
		@if(Auth::user()->smoke != -1)
			@if(Auth::user()->smoke == 1)
				抽烟,
			@else
				不抽烟,
			@endif
		@else
			<i>抽烟?</i>
		@endif
		@if(Auth::user()->drinking != -1)
			@if(Auth::user()->drinking == 1)
				偶尔喝酒,
			@endif
			@if(Auth::user()->dreaking == 2)
				经常喝酒,
			@endif
			@if(Auth::user()->dreaking == 0)
				不喝酒,
			@endif
		@else
			<i>喝酒?</i>
		@endif
	</p>
	<p>
		<i class="fa fa-tasks" aria-hidden="true"></i>
		@if(Auth::user()->language != null || Auth::user()->language != '')
			{{ Auth::user()->language }},
		@else
			<i>语言?</i>
		@endif
	</p>
	<p>
		<i class="fa fa-folder" aria-hidden="true"></i>
		@if(Auth::user()->description == null || Auth::user()->description == '')
			<i>关于我的介绍?</i>
		@else
			{{ Auth::user()->description }}
		@endif
	</p>
</div>