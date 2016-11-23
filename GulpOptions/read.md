Приступим:

Создадим папку под наш проект, например «habr». Откроем ее в консоли и выполним команду:

npm init

Можно просто нажать Enter на все вопросы установщика, т.к. сейчас это не принципиально.
В итоге в папке с проектом у нас сгенерируется файл package.json, примерно такого содержания:

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

Немного видоизменим его под наши нужды:

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

В блоке dependencies мы указали что нам нужен gulp и тут же будем прописывать все наши плагины.

Плагины:

gulp-autoprefixer — автоматически добавляет вендорные префиксы к CSS свойствам (пару лет назад я бы убил за такую тулзу)
gulp-minify-css — нужен для сжатия CSS кода
browser-sync — с помощью этого плагина мы можем легко развернуть локальный dev сервер с блэкджеком и livereload, а так же с его помощью мы сможем сделать тунель на наш localhost, что бы легко демонстрировать верстку заказчику
gulp-imagemin — для сжатия картинок
imagemin-pngquant — дополнения к предыдущему плагину, для работы с PNG
gulp-uglify — будет сжимать наш JS
gulp-sass — для компиляции нашего SCSS кода
Не холивара ради
gulp-sourcemaps — возьмем для генерации css sourscemaps, которые будут помогать нам при отладке кода
gulp-rigger — это просто киллер фича. Плагин позволяет импортировать один файл в другой простой конструкцией
//= footer.html

и эта строка при компиляции будет заменена на содержимое файла footer.html
gulp-watch — Будет нужен для наблюдения за изменениями файлов. Знаю что в Gulp есть встроенный watch, но у меня возникли с ним некоторые проблемы
rimraf — rm -rf для ноды

Установим все плагины и на выходе получим такой package.json:

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

Я уже не мыслю своей работы без пакетного менеджера Bower и надеюсь вы тоже. Если нет, то почитать о том что это и с чем его едят можно тут.
Давайте добавим его к нашему проекту. Для этого выполним в консоли команду:

bower init

Можно так же Enter на все вопросы.
В конце мы получаем примерно такой файл bower.json:

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

И модифицируем его до нужного нам состояния:

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

В блоке dependencies мы будем указывать зависимости нашего проекта. Сейчас просто для теста это normalize и jQuery (хотя я уже не помню
когда начинал проект без этих вещей).
Ну и конечно установим их командой:

bower i

Ну а теперь самое интересное. Создадим структуру нашего проекта и настроим сборщик.

Структура проекта:

Это очень спорный момент. Конечно проекты бывают разные, так же как и предпочтения разработчиков. Стоит только взглянуть на сайт
yeoman.io (кстати это очень классный инструмент, который предоставляет большое кол-во заготовленных основ для проекта
со всякими плюшками. Однозначно стоит присмотреться к нему). Мы не будем ничего выдумывать и сделаем самую простую структуру.



В папке src создадим типичную структуру среднестатистического проекта. Сделаем main файлы в папках js/ и style/ и
 создадим первую html страничку такого содержания.

index.html
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>Я собираю проекты как рок звезда</title>
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

Структура папки src теперь будет выглядеть так:



Тут все тривиально:
fonts — шрифты
img — картинки
js — скрипты. В корне этой папки будет только файл main.js, который пригодится нам для сборки. Все свои js файлы — надо будет класть в папку partials
style — стили. Тут так же в корне только main.scss, а рабочие файлы в папке partials
template — тут будем хранить повторяющиеся куски html кода
Все html страницы которые мы верстаем — будут лежать в корне src/
Добавим в partials первые js и scss файлы и напоследок — перейдем в корень нашего проекта и создадим там файл gulpfile.js.
Вся папка проекта сейчас выглядит так:



Теперь все готово к настройке нашего сборщика, так что let's rock!

Gulpfile.js

Вся магия будет заключена в этом файле. Для начала мы импортируем все наши плагины и сам gulp

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


Конечно, не обязательно делать это именно так. Существует плагин gulp-load-plugins который позволяет не писать всю эту лапшу
из require. Но мне нравится когда я четко вижу что и где подключается, и при желании могу это отключить. По этому пишу по старинке.

Так же создадим js объект в который пропишем все нужные нам пути, чтобы при необходимости легко в одном месте их редактировать:

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


Создадим переменную с настройками нашего dev сервера:

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};


Собираем html

Напишем таск для сборки html:

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

Напомню, что rigger это наш плагин, позволяющий использовать такую конструкцию для импорта файлов:

//= template/footer.html

Давай те же применим его в деле!
В папке src/template/ — создадим файлы header.html и footer.html следующего содержания

header.html
<section class="header">
    Header
</section>


footer.html
<section class="header">
    Footer
</section>


а наш файл index.html изменим вот так:
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>Я собираю проекты как рок звезда</title>
</head>
<body>
    //= template/header.html

    <section class="content">
        Content
    </section>

    //= template/footer.html
</body>
</html>


Осталось перейти в консоль и запустить наш таск командой:

gulp html:build

После того как она отработает — идем в папку build и видим там наш файл index.html, который превратился в это:

<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <title>Я собираю проекты как рок звезда</title>
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

Это же просто восхитительно!

Помню как много неудобств доставляло бегать по всем сверстанным страничкам и вносить изменения в какую-то повторяющуюся
на них часть. Теперь это делается удобно в одном месте.

Собираем javascript

Таск по сборке скриптов будет выглядеть так:

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

Помните наш файл main.js?
Вся идея тут состоит в том, чтобы с помощью rigger'a инклюдить в него все нужные нам js файлы в нужном нам порядке.
 Именно ради контроля над порядком подключения — я и делаю это именно так, вместо того что бы попросить gulp найти все *.js файлы и склеить их.

Часто, при поиске места ошибки я по очереди выключаю какие то файлы из сборки, что бы локализовать место проблемы.
В случае если бездумно склеивать все .js — дебаг будет усложнен.

Заполним наш main.js:

/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js

Именно так я делаю на боевых проектах. Вверху этого файла всегда идет подключение зависимостей, ниже подключение моих собственных скриптов.

Кстати, bower пакеты можно подключать через такой плагин как gulp-bower. Но я опять же не делаю этого, потому что хочу
самостоятельно определять что, где и как будет подключаться.

Осталось только запустить наш таск из консоли командой:

gulp js:build

И в папке build/js — мы увидим наш скомпилированный и сжатый файл.

Собираем стили

Напишем задачу для сборки нашего SCSS:

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});

Здесь все просто, но вас могут заинтересовать настройки автопрификсера. По умолчанию он пишет префиксы необходимые
для последних двух версий браузеров. В моем случае этого достаточно, но если вам нужны другие настройки — вы можете найти их тут.

Со стилями я поступаю так же как и с js, но только вместо rigger'a — использую встроенный в SCSS импорт.
UPD (13 марта 2015): У некоторых людей возникла проблема с импортом css файлов инлайн. Как оказалось, gulp-sass
не умеет этого делать, и на выходе дает простой CSS импорт. Но этот вопрос решает наш плагин gulp-minify-css,
который заменяет CSS импорт на содержимое файла.
Наш main.scss будет выглядеть так:
/*
* Third Party
*/
@import "../../bower_components/normalize.css/normalize.css";

/*
* Custom
*/
@import "partials/app";

Таким способом получается легко управлять порядком подключения стилей.
Проверим наш таск, запустив
gulp style:build


Собираем картинки

Таск по картинкам будет выглядеть так:

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

Я использую дефолтные настройки imagemin, за исключением interlaced. Подробнее об API этого плагина можно прочесть тут.

Теперь, если мы положим какую-нибудь картинку в src/img и запустим команду:

gulp image:build

то увидим в build нашу оптимизированную картинку. Так же gulp любезно напишет в консоли сколько места
он сэкономил для пользователей нашего сайта.

Шрифты

Со шрифтами мне обычно не нужно проводить никаких манипуляций, но что бы не рушить парадигму «Работаем в src/
и собираем в build/» — я просто копирую файлы из src/fonts и вставляю в build/fonts. Вот таск:

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


Теперь давайте определим таск с именем «build», который будет запускать все что мы с вами тут накодили:

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


Изменения файлов

Чтобы не лазить все время в консоль давайте попросим gulp каждый раз при изменении какого то файла
запускать нужную задачу. Для этого напишет такой таск:

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

С понимаем не должно возникнуть проблем. Мы просто идем по нашим путям определенным в переменной path, и
 в функции вызывающейся при изменении файла — просим запустить нужный нам таск.

Попробуйте запустить в консоли:

gulp watch

И поменяйте разные файлы.
Ну не круто ли?

Веб сервер

Что бы насладиться чудом livereload — нам необходимо создать себе локальный веб-сервер.
Для этого напишем следующий простой таск:

gulp.task('webserver', function () {
    browserSync(config);
});

Тут даже нечего комментировать. Мы просто запустим livereload сервер с настройками, которые мы определили
в объекте config. К тому же gulp вежливо откроет наш проект в браузере, а в консоль напишет ссылки на локальный
сервер, и на тунель, который мы можем скинуть заказчику для демонстрации.

Очистка

Если вы добавите какую-нибудь картинку, потом запустите задачу image:build и потом картинку удалите — она останется в
 папке build. Так что было бы удобно — периодически подчищать ее. Создадим для этого простой таск

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

Теперь при запуске команды
gulp clean

просто будет удаляться папка build.

Финальный аккорд

Последним делом — мы определим дефолтный таск, который будет запускать всю нашу сборку.

gulp.task('default', ['build', 'webserver', 'watch']);


Окончательно ваш gulpfile.js будет выглядеть примерно вот так.
Теперь выполним в консоли
gulp

И вуаля. Заготовка для вашего проекта готова и ждет вас.

Пара слов в заключение

Эта статья задумывалась как способ еще раз освежить в памяти тонкости сборки frontend проектов, и для легкости
передачи этого опыта новым разработчикам. Вам не обязательно использовать на своих проектах именно такой вариант сборки.
 Есть yeoman.io, на котором вы найдете генераторы почти под любые нужды.
Я написал этот сборщик по трём причинам.
— Мне нравится использовать rigger в своем html коде
— Почти во всех сборках что я встречал — используется временная папка (обычно .tmp/), для записи промежуточных
результатов сборки. Мне не нравится такой подход и я хотел избавиться от временных папок.
— И я хотел что бы все это было у меня из коробки.

Мою рабочую версию сборщика вы можете скачать на моем github.

Надеюсь, статья оказалась полезной для вас.

P.S. Обо всех ошибках, недочетах и косяках — пожалуйста пишите в личку.