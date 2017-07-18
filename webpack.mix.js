let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.babel([
		'resources/assets/script/jquery-2.1.4.min.js',
		'resources/assets/script/jquery-ui.min.js',
		// 'resources/assets/script/jquery.canvasjs.min.js',
		'resources/assets/script/bootstrap.min.js',
		'resources/assets/script/chartjs.min.js',
		'resources/assets/script/idangerous.swiper.min.js',
		'resources/assets/script/jquery.mixitup.js',
		'resources/assets/script/jquery.viewportchecker.min.js',
		// 'resources/assets/script/charts.js',
		// 'resources/assets/script/isotope.pkgd.min.js',
		'resources/assets/script/colors.js',
		'resources/assets/script/jqColorPicker.js',
		'resources/assets/script/jquery.countTo.js',
		'resources/assets/script/jquery.easy-autocomplete.min.js',
		'resources/assets/script/magnific.js',
		// 'resources/assets/script/map.js',
		// 'resources/assets/script/script.js',
		// 'resources/assets/script/sorttable.js',
		// 'resources/assets/script/wow.js',
		'resources/assets/script/filters.js',
		'resources/assets/script/global.js',
	], 'public/js/asset.js')
	.js('resources/assets/js/app.js', 'public/js/app.js')
	.styles([
		'resources/assets/style/bootstrap.min.css',
		'resources/assets/style/colorpicker.css',
		'resources/assets/style/font-awesome.min.css',
		'resources/assets/style/icon.css',
		'resources/assets/style/idangerous.swiper.css',
		'resources/assets/style/ie-9.css',
		'resources/assets/style/loader.css',
		'resources/assets/style/magnific.css',
		'resources/assets/style/stylesheet.css',
	], 'public/css/asset.css')
	.sass('resources/assets/sass/app.scss', 'public/css/app.css');
