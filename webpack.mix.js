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
		// 'resources/assets/script/colors.js',
		// 'resources/assets/script/jqColorPicker.js',
		'resources/assets/script/jquery.countTo.js',
		'resources/assets/script/jquery.easy-autocomplete.min.js',
		'resources/assets/script/magnific.js',
		'resources/assets/script/toastr.min.js',
		'resources/assets/script/dropzone.min.js',
		'resources/assets/script/cropper.min.js',
		// 'resources/assets/script/map.js',
		// 'resources/assets/script/script.js',
		// 'resources/assets/script/sorttable.js',
		// 'resources/assets/script/wow.js',
		// 'resources/assets/script/filters.js',
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
		'resources/assets/style/animate.css',
		'resources/assets/style/toastr.min.css',
		'resources/assets/style/dropzone.min.css',
		'resources/assets/style/cropper.min.css',
		'resources/assets/style/stylesheet.css',
	], 'public/css/asset.css')
	.sass('resources/assets/sass/app.scss', 'public/css/app.css');


// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
