var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	connect = require('gulp-connect'),
	port = process.env.port || 8280;

gulp.task('browserify',function(){
	gulp.src('./app/js/main.js')
	.pipe(browserify({
		transform: 'reactify'
	}))
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('basejs',function(){
	gulp.src('./app/base_js/*.js').
		pipe(gulp.dest('./dist/base_js/'))
})

gulp.task('html-reload',function(){
	gulp.src('./*.htm')
		.pipe(connect.reload())
});

gulp.task('css-reload',function(){
	gulp.src('./app/base_css/*.css')
		.pipe(connect.reload())
});

gulp.task('js-reload',function(){
	gulp.src('./dist/**/main.js')
		.pipe(connect.reload())
});

gulp.task('connect', function(){
	connect.server({
		port:port,
		livereload:true
	})
})

gulp.task('watch',function(){
	gulp.watch('./app/**/*.js', ['browserify']);
	// gulp.watch('./app/js/main.js', ['browserify']);
	// gulp.watch('./index.htm', ['html-reload']);
	// gulp.watch('./dist/**/main.js', ['js-reload']);
	// gulp.watch('./app/base_css/*.css', ['css-reload']);
	// gulp.watch('./app/base_js/*.js', ['basejs', 'browserify']);
})

gulp.task('default', ['browserify', 'basejs','watch', 'connect']);

gulp.task('dev', ['browserify', 'basejs','watch']);












