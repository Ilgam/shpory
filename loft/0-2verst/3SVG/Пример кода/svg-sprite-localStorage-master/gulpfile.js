var cheerio = require('gulp-cheerio');
var gulp = require('gulp');
var replace = require('gulp-replace');
var svgmin = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprites');

gulp.task('svgSpriteBuild', () => {
	return gulp.src('./assets/animals/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: ($) => {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
			},
			parserOptions: {
				xmlMode: true
			}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
				mode: "symbols",
				preview: false,
				selector: "icon-%f",
				svg: {
					symbols: 'symbol_sprite.html'
				}
			}
		))
		.pipe(gulp.dest('./dest/'));
});