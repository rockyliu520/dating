@include('front.layouts.header')
@include('front.layouts.nav')

<div id="app">
	<!-- MAIN CONTENT -->
	<div id="content-block">
		@yield('index')
	</div>
</div>
@include('front.layouts.footer')