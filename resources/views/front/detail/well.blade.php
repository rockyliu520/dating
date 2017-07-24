<div class="well"> 
	<p>
		<i class="fa fa-user" aria-hidden="true"></i>
		@if($user->sex == 1)
			男,
		@else
			女,
		@endif
		@if($user->height != '-1')
			{{ $user->height }}
		@endif

		@if($user->weight != '-1')
			{{ $user->weight }}
		@endif
		
		@if($user->bodyType != -1)
			@if($user->bodyType == 1)
				偏瘦,
			@elseif($user->bodyType == 2)
				运动型,
			@elseif($user->bodyType == 3)
				匀称,
			@elseif($user->bodyType == 4)
				魁梧,
			@endif
		@endif
		@if($user->location != null || $user->location != '')
			{{ $user->location }},
		@endif
		@if($user->child != -1)
			@if($user->child == 1)
				有孩子,
			@else
				没有孩子,
			@endif											
		@endif
		@if($user->status != -1)
			@if($user->status == 0)
				没结婚,
			@elseif($user->status == 1)
				离婚,
			@elseif($user->status == 2)
				丧偶,
			@elseif($user->status == 3)
				分居,
			@endif
		@endif
	</p>
	<p>
		<i class="fa fa-suitcase" aria-hidden="true"></i>
		<?php $count = 0; ?>

		@if($user->education != -1)
			@if($user->education == 0)
				高中,
			@elseif($user->education == 1)
				本科,
			@elseif($user->education == 2)
				硕士,
			@elseif($user->education == 3)
				博士,
			@endif
		@else
			<?php $count++; ?>
		@endif

		@if($user->university  != '' || $user->university != null)
			{{ $user->university }}
		@else
			<?php $count++; ?>
		@endif

		@if($user->job != -1)
			(工作)&nbsp;{{ $user->job }}
		@else
			<?php $count++; ?>
		@endif

		@if($count == 3)
			<i>估计TA还没有想好怎么说</i>
		@endif
	</p>
	<p>
		<i class="fa fa-globe" aria-hidden="true"></i>
		@if($user->birthPlace != null || $user->birthPlace != '')
			{{ $user->birthPlace }},
		@else
			<i>估计TA还没有想好怎么说</i>
		@endif
	</p>
	<p>
		<i class="fa fa-leaf" aria-hidden="true"></i>
		<?php $count = 0; ?>
		@if($user->smoke != -1)
			@if($user->smoke == 1)
				抽烟,
			@else
				不抽烟,
			@endif
		@else
			<?php $count++; ?>
		@endif

		@if($user->drinking != -1)
			@if($user->drinking == 1)
				偶尔喝酒,
			@endif
			@if($user->dreaking == 2)
				经常喝酒,
			@endif
			@if($user->dreaking == 0)
				不喝酒,
			@endif
		@else
			<?php $count++; ?>
		@endif

		@if($count == 2)
			<i>估计TA还没有想好怎么说</i>
		@endif
	</p>
	<p>
		<i class="fa fa-tasks" aria-hidden="true"></i>
		@if($user->language != null || $user->language != '')
			{{ $user->language }},
		@else
			<i>估计TA还没有想好怎么说</i>
		@endif
	</p>
	<!-- <p>
		<i class="fa fa-folder" aria-hidden="true"></i>
		@if($user->description == null || $user->description == '')
		@else
			{{ $user->description }}
		@endif
	</p> -->
</div>