'use strict';

const fs = require('fs');

/* --------- plugins --------- */
const gulp        	= require('gulp');
const jade        	= require('gulp-jade');
const sass			= require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const browserSync 	= require('browser-sync').create();
const uglify      	= require('gulp-uglify');
const rename      	= require("gulp-rename");
const browserify  	= require('gulp-browserify');
const plumber     	= require('gulp-plumber');
const useref      	= require('gulp-useref');
const gulpif      	= require('gulp-if');
const cssnano     	= require('gulp-cssnano');
const autoprefixer 	= require('gulp-autoprefixer');
const sourcemaps 	= require('gulp-sourcemaps');
const shell			= require('gulp-shell');
const imagemin      = require('gulp-imagemin');
const pngquant      = require('imagemin-pngquant');
const urlAdjuster   = require('gulp-css-url-adjuster');
const reload        = browserSync.reload;

/* --------- paths --------- */
const SRC_PATH = 'app';
const DIST_PATH = 'dist';

var	paths = {
	jade : {
		src     : SRC_PATH + '/html/**/*.jade',
		pages   : SRC_PATH + '/html/pages/*.jade',
		dist    : DIST_PATH + '/pages'
	},

	scss : {
		src     : SRC_PATH + '/css/**/*.scss',
		entry   : SRC_PATH + '/css/main.scss',
		dist    : DIST_PATH + '/css'
	},

	js : {
		src     : SRC_PATH + '/js/**/*.js',
		entry   : SRC_PATH + '/js/main.js',
		dist    : DIST_PATH + 'js'
	},

	img : {
		src : SRC_PATH + '/img/**/*.*',
		dist : DIST_PATH + '/img'
	},

	fonts : {
		src : SRC_PATH + '/fonts/**/*.*',
		dist : DIST_PATH + '/fonts'
	},

	browserSync : {
		baseDir : './' + DIST_PATH,
		watchPaths : [SRC_PATH + '/html/pages/*.jade', DIST_PATH + 'css/*.css', DIST_PATH + 'js/*.js']
	},

	indexBuilder : {
		location : SRC_PATH + '/index/index.js'
	}
}

// jade
gulp.task('jade', function() {
	const YOUR_LOCALS = './content.json';

	gulp.src(paths.jade.pages)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t',
			// locals: JSON.parse(fs.readFileSync(YOUR_LOCALS, 'utf8')),
			basedir : './'
		}))
		.pipe(useref())
		.pipe(sourcemaps.init())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.jade.dist))
		.pipe(reload({stream: true}));
});

// sass
gulp.task('sass', function() {
	return gulp.src(paths.scss.entry)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['> 5%'],
			cascade: false
		}))
		.pipe(urlAdjuster({
			replace:  ['../../','../'],
		}))
		.pipe(sourcemaps.write())
		.pipe(cssnano())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(paths.scss.dist))
		.pipe(reload({stream: true}));
});

// server
gulp.task('sync', function() {
	browserSync.init({
		server: {
			baseDir: paths.browserSync.baseDir
		}
	});
});

// scripts
gulp.task('scripts', function() {
	return gulp.src(paths.js.entry)
		.pipe(plumber())
		.pipe(browserify({
			insertGlobals : true,
			debug : true,
			transform : ['require-globify']
		}))
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest(paths.js.dist))
		.pipe(reload({stream: true}));
});

// images
gulp.task('images', function () {
	gulp.src(paths.img.src)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(paths.img.dist))
		.pipe(reload({stream: true}));
});

// fonts
gulp.task('fonts', function () {
	gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dist))
});


// watch
gulp.task('watch', function(){
	gulp.watch(paths.jade.src, ['jade']);
	gulp.watch(paths.scss.src, ['sass']);
	gulp.watch(paths.js.src, ['scripts']);
	gulp.watch(paths.fonts.src, ['fonts']);
	gulp.watch([paths.img.src], function(event, cb) {
		gulp.start('image:build');
	});
});


/* --------- default --------- */
gulp.task('default', ['jade', 'sass', 'images', 'sync', 'fonts', 'watch']);