@include('front.layouts.header')
@include('front.layouts.nav')

<div id="app">
	<!-- <div id="loader-wrapper" style="display:none">
	    <div id="loader"></div>
	    <div class="loader-section section-left"></div>
	    <div class="loader-section section-right"></div>
	</div> -->

	<!-- MAIN CONTENT -->
	<div id="content-block">
		@yield('index')
	</div>

</div>
@include('front.layouts.footer')