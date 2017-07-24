@extends('front.layouts.main')

@section('index')
<!-- MAIN CONTENT -->
<div class="container custom-container be-detail-container" id="r_detail">
	<div class="row">
		@include('front.detail.right')

		@include('front.detail.left')
	</div>
</div>
@stop