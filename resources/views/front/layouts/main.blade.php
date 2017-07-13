@include('front.layouts.header')
@include('front.layouts.nav')

<div id="app">
	<div id="loader-wrapper" style="display:none">
	    <div id="loader"></div>
	    <!-- <div class="loader-section section-left"></div> -->
	    <div class="loader-section section-right"></div>
	</div>
@yield('index')
</div>
@include('front.layouts.footer')