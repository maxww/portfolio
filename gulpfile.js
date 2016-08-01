// All used modules.
var gulp = require('gulp');
// var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
// var minifyCSS = require('gulp-minify-css');
// var ngAnnotate = require('gulp-ng-annotate');
// var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
// var mocha = require('gulp-mocha');
// var karma = require('karma').server;
// var istanbul = require('gulp-istanbul');
var notify = require('gulp-notify');

// Development tasks
// --------------------------------------------------------------

// Live reload business.
gulp.task('reload', function () {
	livereload.reload();
});

gulp.task('reloadCSS', function () {
	return gulp.src('./public/stl.css').pipe(livereload());
});

gulp.task('lintJS', function () {

	return gulp.src(['./browser/js/**/*.js'])
		.pipe(plumber({
			errorHandler: notify.onError('Linting FAILED! Check your gulp process.')
		}))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());

});

gulp.task('buildJS', ['lintJS'], function () {
	return gulp.src(['./browser/js/**/*.js'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public'));
});

gulp.task('buildCSS', function () {

	var sassCompilation = sass();
	sassCompilation.on('error', console.error.bind(console));

	return gulp.src('./browser/style.scss')
		.pipe(plumber({
			errorHandler: notify.onError('SASS processing failed! Check your gulp process.')
		}))
		.pipe(sourcemaps.init())
		.pipe(sassCompilation)
		.pipe(sourcemaps.write())
		.pipe(rename('stl.css'))
		.pipe(gulp.dest('./public'));
});


// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
	if (process.env.NODE_ENV === 'production') {
		runSeq(['buildJSProduction', 'buildCSSProduction']);
	} else {
		runSeq(['buildJS']);
	}
});

gulp.task('default', function () {

	gulp.start('build');

	// Run when anything inside of browser/js changes.
	gulp.watch(['./browser/js/**/*.js'], function () {
		runSeq('buildJS', 'reload');
	});

	// Run when anything inside of browser / scss changes.
	gulp.watch('./browser/*.scss', function () {
		runSeq('buildCSS', 'reloadCSS');
	});

	gulp.watch('./server/**/*.js', ['lintJS']);

	// Reload when a template (.html) file changes.
	gulp.watch(['./browser/js/**/*.html'], ['reload']);

	livereload.listen();
});
