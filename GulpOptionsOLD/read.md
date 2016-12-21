���������:

�������� ����� ��� ��� ������, �������� �habr�. ������� �� � ������� � �������� �������:

npm init

����� ������ ������ Enter �� ��� ������� �����������, �.�. ������ ��� �� �������������.
� ����� � ����� � �������� � ��� ������������� ���� package.json, �������� ������ ����������:

{
  "name": "habr",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

������� ����������� ��� ��� ���� �����:

{
  "name": "habr",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "license": "ISC",
  "dependencies": {
      "gulp": "^3.8.11"
   }
}

� ����� dependencies �� ������� ��� ��� ����� gulp � ��� �� ����� ����������� ��� ���� �������.

�������:

gulp-autoprefixer � ������������� ��������� ��������� �������� � CSS ��������� (���� ��� ����� � �� ���� �� ����� �����)
gulp-minify-css � ����� ��� ������ CSS ����
browser-sync � � ������� ����� ������� �� ����� ����� ���������� ��������� dev ������ � ���������� � livereload, � ��� �� � ��� ������� �� ������ ������� ������ �� ��� localhost, ��� �� ����� ��������������� ������� ���������
gulp-imagemin � ��� ������ ��������
imagemin-pngquant � ���������� � ����������� �������, ��� ������ � PNG
gulp-uglify � ����� ������� ��� JS
gulp-sass � ��� ���������� ������ SCSS ����
�� �������� ����
gulp-sourcemaps � ������� ��� ��������� css sourscemaps, ������� ����� �������� ��� ��� ������� ����
gulp-rigger � ��� ������ ������ ����. ������ ��������� ������������� ���� ���� � ������ ������� ������������
//= footer.html

� ��� ������ ��� ���������� ����� �������� �� ���������� ����� footer.html
gulp-watch � ����� ����� ��� ���������� �� ����������� ������. ���� ��� � Gulp ���� ���������� watch, �� � ���� �������� � ��� ��������� ��������
rimraf � rm -rf ��� ����

��������� ��� ������� � �� ������ ������� ����� package.json:

{
  "name": "habr",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "license": "ISC",
 "dependencies": {
    "browser-sync": "^2.2.3",
    "gulp": "^3.8.11",
    "gulp-autoprefixer": "^2.1.0",
    "gulp-imagemin": "^2.2.1",
    "gulp-minify-css": "^1.0.0",
    "gulp-rigger": "^0.5.8",
    "gulp-sass": "^1.3.3",
    "gulp-sourcemaps": "^1.5.0",
    "gulp-uglify": "^1.1.0",
    "gulp-watch": "^4.1.1",
    "imagemin-pngquant": "^4.0.0",
    "rimraf": "^2.3.1"
  }
}


Bower

� ��� �� ����� ����� ������ ��� ��������� ��������� Bower � ������� �� ����. ���� ���, �� �������� � ��� ��� ��� � � ��� ��� ���� ����� ���.
������� ������� ��� � ������ �������. ��� ����� �������� � ������� �������:

bower init

����� ��� �� Enter �� ��� �������.
� ����� �� �������� �������� ����� ���� bower.json:

{
  "name": "habr",
  "version": "0.0.0",
  "authors": [
    "Insayt <insait.rostov@ya.ru>"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}

� ������������ ��� �� ������� ��� ���������:

{
  "name": "habr",
  "version": "0.0.0",
  "authors": [
    "Insayt <insait.rostov@ya.ru>"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "normalize.css": "*",
    "jquery": "2.*"
  }
}

� ����� dependencies �� ����� ��������� ����������� ������ �������. ������ ������ ��� ����� ��� normalize � jQuery (���� � ��� �� �����
����� ������� ������ ��� ���� �����).
�� � ������� ��������� �� ��������:

bower i

�� � ������ ����� ����������. �������� ��������� ������ ������� � �������� �������.

��������� �������:

��� ����� ������� ������. ������� ������� ������ ������, ��� �� ��� � ������������ �������������. ����� ������ ��������� �� ����
yeoman.io (������ ��� ����� �������� ����������, ������� ������������� ������� ���-�� ������������� ����� ��� �������
�� ������� ��������. ���������� ����� ������������� � ����). �� �� ����� ������ ���������� � ������� ����� ������� ���������.



� ����� src �������� �������� ��������� ��������������������� �������. ������� main ����� � ������ js/ � style/ �
 �������� ������ html ��������� ������ ����������.

index.html
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>� ������� ������� ��� ��� ������</title>
</head>
<body>
    <section class="header">
        Header
    </section>
    <section class="content">
        Content
    </section>
    <section class="footer">
        Footer
    </section>
</body>
</html>

��������� ����� src ������ ����� ��������� ���:



��� ��� ����������:
fonts � ������
img � ��������
js � �������. � ����� ���� ����� ����� ������ ���� main.js, ������� ���������� ��� ��� ������. ��� ���� js ����� � ���� ����� ������ � ����� partials
style � �����. ��� ��� �� � ����� ������ main.scss, � ������� ����� � ����� partials
template � ��� ����� ������� ������������� ����� html ����
��� html �������� ������� �� �������� � ����� ������ � ����� src/
������� � partials ������ js � scss ����� � ���������� � �������� � ������ ������ ������� � �������� ��� ���� gulpfile.js.
��� ����� ������� ������ �������� ���:



������ ��� ������ � ��������� ������ ��������, ��� ��� let's rock!

Gulpfile.js

��� ����� ����� ��������� � ���� �����. ��� ������ �� ����������� ��� ���� ������� � ��� gulp

gulpfile.js
'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


�������, �� ����������� ������ ��� ������ ���. ���������� ������ gulp-load-plugins ������� ��������� �� ������ ��� ��� �����
�� require. �� ��� �������� ����� � ����� ���� ��� � ��� ������������, � ��� ������� ���� ��� ���������. �� ����� ���� �� ��������.

��� �� �������� js ������ � ������� �������� ��� ������ ��� ����, ����� ��� ������������� ����� � ����� ����� �� �������������:

var path = {
    build: { //��� �� ������ ���� ���������� ������� ����� ������ �����
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //���� ������ ����� ���������
        html: 'src/*.html', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        js: 'src/js/main.js',//� ������ � �������� ��� ����������� ������ main �����
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //��������� img/**/*.* �������� - ����� ��� ����� ���� ���������� �� ����� � �� ��������� ���������
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //��� �� ������, �� ���������� ����� ������ �� ����� ���������
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


�������� ���������� � ����������� ������ dev �������:

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};


�������� html

������� ���� ��� ������ html:

gulp.task('html:build', function () {
    gulp.src(path.src.html) //������� ����� �� ������� ����
        .pipe(rigger()) //�������� ����� rigger
        .pipe(gulp.dest(path.build.html)) //�������� �� � ����� build
        .pipe(reload({stream: true})); //� ������������ ��� ������ ��� ����������
});

�������, ��� rigger ��� ��� ������, ����������� ������������ ����� ����������� ��� ������� ������:

//= template/footer.html

����� �� �� �������� ��� � ����!
� ����� src/template/ � �������� ����� header.html � footer.html ���������� ����������

header.html
<section class="header">
    Header
</section>


footer.html
<section class="header">
    Footer
</section>


� ��� ���� index.html ������� ��� ���:
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>� ������� ������� ��� ��� ������</title>
</head>
<body>
    //= template/header.html

    <section class="content">
        Content
    </section>

    //= template/footer.html
</body>
</html>


�������� ������� � ������� � ��������� ��� ���� ��������:

gulp html:build

����� ���� ��� ��� ���������� � ���� � ����� build � ����� ��� ��� ���� index.html, ������� ����������� � ���:

<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>� ������� ������� ��� ��� ������</title>
</head>
<body>
    <section class="header">
        Header
    </section>
    <section class="content">
        Content
    </section>
    <section class="footer">
        Footer
    </section>
</body>
</html>

��� �� ������ �������������!

����� ��� ����� ��������� ���������� ������ �� ���� ����������� ���������� � ������� ��������� � �����-�� �������������
�� ��� �����. ������ ��� �������� ������ � ����� �����.

�������� javascript

���� �� ������ �������� ����� ��������� ���:

gulp.task('js:build', function () {
    gulp.src(path.src.js) //������ ��� main ����
        .pipe(rigger()) //�������� ����� rigger
        .pipe(sourcemaps.init()) //�������������� sourcemap
        .pipe(uglify()) //������ ��� js
        .pipe(sourcemaps.write()) //�������� �����
        .pipe(gulp.dest(path.build.js)) //�������� ������� ���� � build
        .pipe(reload({stream: true})); //� ������������ ������
});

������� ��� ���� main.js?
��� ���� ��� ������� � ���, ����� � ������� rigger'a ��������� � ���� ��� ������ ��� js ����� � ������ ��� �������.
 ������ ���� �������� ��� �������� ����������� � � � ����� ��� ������ ���, ������ ���� ��� �� ��������� gulp ����� ��� *.js ����� � ������� ��.

�����, ��� ������ ����� ������ � �� ������� �������� ����� �� ����� �� ������, ��� �� ������������ ����� ��������.
� ������ ���� �������� ��������� ��� .js � ����� ����� ��������.

�������� ��� main.js:

/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js

������ ��� � ����� �� ������ ��������. ������ ����� ����� ������ ���� ����������� ������������, ���� ����������� ���� ����������� ��������.

������, bower ������ ����� ���������� ����� ����� ������ ��� gulp-bower. �� � ����� �� �� ����� �����, ������ ��� ����
�������������� ���������� ���, ��� � ��� ����� ������������.

�������� ������ ��������� ��� ���� �� ������� ��������:

gulp js:build

� � ����� build/js � �� ������ ��� ���������������� � ������ ����.

�������� �����

������� ������ ��� ������ ������ SCSS:

gulp.task('style:build', function () {
    gulp.src(path.src.style) //������� ��� main.scss
        .pipe(sourcemaps.init()) //�� �� ����� ��� � � js
        .pipe(sass()) //������������
        .pipe(prefixer()) //������� ��������� ��������
        .pipe(cssmin()) //������
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //� � build
        .pipe(reload({stream: true}));
});

����� ��� ������, �� ��� ����� �������������� ��������� ��������������. �� ��������� �� ����� �������� �����������
��� ��������� ���� ������ ���������. � ���� ������ ����� ����������, �� ���� ��� ����� ������ ��������� � �� ������ ����� �� ���.

�� ������� � �������� ��� �� ��� � � js, �� ������ ������ rigger'a � ��������� ���������� � SCSS ������.
UPD (13 ����� 2015): � ��������� ����� �������� �������� � �������� css ������ ������. ��� ���������, gulp-sass
�� ����� ����� ������, � �� ������ ���� ������� CSS ������. �� ���� ������ ������ ��� ������ gulp-minify-css,
������� �������� CSS ������ �� ���������� �����.
��� main.scss ����� ��������� ���:
/*
* Third Party
*/
@import "../../bower_components/normalize.css/normalize.css";

/*
* Custom
*/
@import "partials/app";

����� �������� ���������� ����� ��������� �������� ����������� ������.
�������� ��� ����, ��������
gulp style:build


�������� ��������

���� �� ��������� ����� ��������� ���:

gulp.task('image:build', function () {
    gulp.src(path.src.img) //������� ���� ��������
        .pipe(imagemin({ //������ ��
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //� ������ � build
        .pipe(reload({stream: true}));
});

� ��������� ��������� ��������� imagemin, �� ����������� interlaced. ��������� �� API ����� ������� ����� �������� ���.

������, ���� �� ������� �����-������ �������� � src/img � �������� �������:

gulp image:build

�� ������ � build ���� ���������������� ��������. ��� �� gulp ������� ������� � ������� ������� �����
�� ��������� ��� ������������� ������ �����.

������

�� �������� ��� ������ �� ����� ��������� ������� �����������, �� ��� �� �� ������ ��������� ��������� � src/
� �������� � build/� � � ������ ������� ����� �� src/fonts � �������� � build/fonts. ��� ����:

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


������ ������� ��������� ���� � ������ �build�, ������� ����� ��������� ��� ��� �� � ���� ��� ��������:

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


��������� ������

����� �� ������ ��� ����� � ������� ������� �������� gulp ������ ��� ��� ��������� ������ �� �����
��������� ������ ������. ��� ����� ������� ����� ����:

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

� �������� �� ������ ���������� �������. �� ������ ���� �� ����� ����� ������������ � ���������� path, �
 � ������� ������������ ��� ��������� ����� � ������ ��������� ������ ��� ����.

���������� ��������� � �������:

gulp watch

� ��������� ������ �����.
�� �� ����� ��?

��� ������

��� �� ����������� ����� livereload � ��� ���������� ������� ���� ��������� ���-������.
��� ����� ������� ��������� ������� ����:

gulp.task('webserver', function () {
    browserSync(config);
});

��� ���� ������ ��������������. �� ������ �������� livereload ������ � �����������, ������� �� ����������
� ������� config. � ���� �� gulp ������� ������� ��� ������ � ��������, � � ������� ������� ������ �� ���������
������, � �� ������, ������� �� ����� ������� ��������� ��� ������������.

�������

���� �� �������� �����-������ ��������, ����� ��������� ������ image:build � ����� �������� ������� � ��� ��������� �
 ����� build. ��� ��� ���� �� ������ � ������������ ��������� ��. �������� ��� ����� ������� ����

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

������ ��� ������� �������
gulp clean

������ ����� ��������� ����� build.

��������� ������

��������� ����� � �� ��������� ��������� ����, ������� ����� ��������� ��� ���� ������.

gulp.task('default', ['build', 'webserver', 'watch']);


������������ ��� gulpfile.js ����� ��������� �������� ��� ���.
������ �������� � �������
gulp

� �����. ��������� ��� ������ ������� ������ � ���� ���.

���� ���� � ����������

��� ������ ������������ ��� ������ ��� ��� �������� � ������ �������� ������ frontend ��������, � ��� ��������
�������� ����� ����� ����� �������������. ��� �� ����������� ������������ �� ����� �������� ������ ����� ������� ������.
 ���� yeoman.io, �� ������� �� ������� ���������� ����� ��� ����� �����.
� ������� ���� ������� �� ��� ��������.
� ��� �������� ������������ rigger � ����� html ����
� ����� �� ���� ������� ��� � �������� � ������������ ��������� ����� (������ .tmp/), ��� ������ �������������
����������� ������. ��� �� �������� ����� ������ � � ����� ���������� �� ��������� �����.
� � � ����� ��� �� ��� ��� ���� � ���� �� �������.

��� ������� ������ �������� �� ������ ������� �� ���� github.

�������, ������ ��������� �������� ��� ���.

P.S. ��� ���� �������, ��������� � ������� � ���������� ������ � �����.