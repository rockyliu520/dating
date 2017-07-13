@if(Auth::user()->verified == 0)
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	<div class="alert alert-warning">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<h4>您还没有激活邮箱,请去邮箱激活</h4>
	</div>	
</div>
@endif
