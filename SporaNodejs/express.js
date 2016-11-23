//Для быстрого создания “скелета” приложения используется инструмент для генерации приложений express.
//
//    Установите express с помощью следующей команды:

    //
    //$ npm install express-generator -g

//Для просмотра опций команды воспользуйтесь опцией -h:


//$ express -h
//
//Usage: express [options][dir]
//
//Options:
//
//    -h, --help          output usage information
//-V, --version       output the version number
//-e, --ejs           add ejs engine support (defaults to jade)
//--hbs           add handlebars engine support
//-H, --hogan         add hogan.js engine support
//-c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
//--git           add .gitignore
//-f, --force         force on non-empty directory
//
//Например, следующая команда создает приложение Express с именем myapp в текущем рабочем каталоге:
//
//
//    $ express myapp

//create : myapp
//create : myapp/package.json
//create : myapp/app.js
//create : myapp/public
//create : myapp/public/javascripts
//create : myapp/public/images
//create : myapp/routes
//create : myapp/routes/index.js
//create : myapp/routes/users.js
//create : myapp/public/stylesheets
//create : myapp/public/stylesheets/style.css
//create : myapp/views
//create : myapp/views/index.jade
//create : myapp/views/layout.jade
//create : myapp/views/error.jade
//create : myapp/bin
//create : myapp/bin/www

//Затем установите зависимости:
//
//
//    $ cd myapp
//$ npm install

//В MacOS или Linux запустите приложение с помощью следующей команды:
//
//
//    $ DEBUG=myapp:* npm start

//В Windows используется следующая команда:
//
//
//    > set DEBUG=myapp:* & npm start

// и вот почему
//Возможно вы этого не знали, но npm содержит поле под
//названием scripts в файле package.json проекта для того, чтобы делать такие команды
//как npm start, вызывающая инструкции из поля scripts.start.
//    вот такая фигня прописана в package.json
//"scripts": {
//    "start": "node ./bin/www"
//}

//Затем откройте страницу http://localhost:3000/ в браузере для доступа к приложению.
//
//    Структура каталогов сгенерированного приложения выглядит следующим образом:
//
//
//    .
//??? app.js
//??? bin
//?   ??? www
//??? package.json
//??? public
//?   ??? images
//?   ??? javascripts
//?   ??? stylesheets
//?       ??? style.css
//??? routes
//?   ??? index.js
//?   ??? users.js
//??? views
//??? error.jade
//??? index.jade
//??? layout.jade
//
//7 directories, 9 files


// !!!!! скачать с гитхаба готовый воркфлоку:



/////////////////////////////////////////////объект express/////////////////////////////////////
//сначало подключаем модуль
var express = require('express');
//
//созлдоаем объект express с помощью конструктора express
var app = express();


///////////////////////////////////////////////Маршрутизация/////////////////////////////////////
//у express сть 5 методов соответствуют типам http завросов. Они нужны для того чтобы добавлять колбэки на
//соответствующие виды запросов. От сбда вытекает определение Маршрутизаци
//Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу.
//    Определение маршрута имеет следующую структуру:

    app.METHOD(PATH, HANDLER)
//Где:
//    app - это экземпляр express.
//    METHOD - метод запроса HTTP.
//    PATH - путь на сервере.
//    HANDLER - функция, выполняемая при сопоставлении маршрута.

//Приведенные ниже элементарные примеры иллюстрируют способ определения простых маршрутов.
//    Ответ Hello World! на домашней странице:
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
//Ответ на запрос POST в корневом маршруте (/), на домашней странице приложения:
    app.post('/', function (req, res) {
        res.send('Got a POST request');
    });
  //Ответ на запрос PUT, адресованный маршруту /user:
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
//Ответ на запрос DELETE, адресованный маршруту /user:
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
//В приведенном ниже примере обработчик будет запущен для запросов, адресованных “/secret”, независимо от того,
// используется ли GET, POST, PUT, DELETE или какой-либо другой метод запроса HTTP, поддерживаемый в модуле http.


    app.all('/secret', function (req, res, next) {
        console.log('Accessing the secret section ...');
        next(); // pass control to the next handler
    });
///////////////////////////пути маршрутизицции
//Это то чтто мы пишем в PATH - путь на сервере.  вот тут app.METHOD(PATH, HANDLER)
//Примеры
app.get('/', function (req, res) {
    res.send('root');
});
//Данный путь маршрута сопоставляет запросы с /about.
    app.get('/about', function (req, res) {
        res.send('about');
    });
//Данный путь маршрута сопоставляет запросы с /random.text.
    app.get('/random.text', function (req, res) {
        res.send('random.text');
    });

////////////////////////////обработчик маршрутов- по сути функции обратного вызова
//обработчик маршрутов - по сути функции обратного вызова
app.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});
//Один маршрут может обрабатываться несколькими функциями обратного вызова (обязательно укажите объект next).
//Например:
    app.get('/example/b', function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    }, function (req, res) {
        res.send('Hello from B!');
    });
//Массив функций обратного вызова может обрабатывать один маршрут.
//Например:
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}
var cb2 = function (req, res) {
    res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);

///////////////////////////Методы в объекте ответа (res)
//Методы в объекте ответа (res), перечисленные в таблице ниже, могут передавать
//ответ клиенту и завершать цикл “запрос-ответ”.
//Если ни один из этих методов не будет вызван из обработчика маршрута, клиентский запрос зависнет.
    res.download()	//Приглашение загрузки файла.
    res.end()	//Завершение процесса ответа.
    res.json()	//Отправка ответа JSON.
    res.jsonp()	//Отправка ответа JSON с поддержкой JSONP.
    res.redirect()	//Перенаправление ответа.
    res.render()	//Вывод шаблона представления.
    res.send()	//Отправка ответа различных типов.
    res.sendFile	//Отправка файла в виде потока октетов.
    res.sendStatus()	//Установка кода состояния ответа и отправка представления в виде строки в качестве тела ответа.

//////////////////////////////////////app.route()
//Метод app.route() позволяет создавать обработчики маршрутов, образующие цепочки.
//    Ниже приведен пример объединенных в цепочку обработчиков маршрутов, определенных с помощью функции app.route().
    app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });
///////////////////////////////////////express.Router
//express.Router С помощью класса express.Router можно создавать модульные, монтируемые обработчики маршрутов.
//    Экземпляр Router представляет собой комплексную систему промежуточных обработчиков и маршрутизации;
//по этой причине его часто называют “мини-приложением”.
//
//т.е. в отдельном файле можно создать роутер с маршрутизаторами и подключать его в основной app  очень
//удобно пример

//Создайте файл маршрутизатора с именем birds.js в каталоге приложения со следующим содержанием:


    var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;


//Потом загрузите модуль маршрутизации в приложение:


   var birds = require('./birds');
   //...
  app.use('/birds', birds);
//результат
//Данное приложение теперь сможет обрабатывать запросы, адресованные ресурсам /birds и /birds/about,
//    а также вызывать специальную функцию промежуточной обработки timeLog данного маршрута.


/////////////////////////////////////////////middleware//////////////////////////////////////////////////
//middleware(Функции промежуточной обработки) - Это колбэки которые имеют доступ как к req так к res. МОжно составлять целые цепочки из колбэков
//т.е ву чем разница
//
//на обычном ноде так
var http = require('http'),
    server = new http.Server();
server.listen(80)
server.on('request', function(req,res){  //вот событие request(запрос)
    res.writeHead(200,{
        'Counter-Type': 'text/plain'
    });
    res.write("Hellow world!");
    res.end();
})

//а вот так в express

var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
server.listen('3000');
app.use(function(req, res, next) {
    console.log('LOGGED'); // обрати веннимание на next()
    next()
});
//
//!!! обрати веннимание на next(), его неужно сатвить обезательно чтобы началось чтение следующего
//миделвера если его в следующем нет то дальше чтение не пойдет!!!
//
//Функции промежуточной обработки могут выполнять следующие задачи:
//
//    Выполнение любого кода.
//    Внесение изменений в объекты запросов и ответов.
//    Завершение цикла “запрос-ответ”.
//Вызов следующего промежуточного обработчика из стека.

//////////////////////////////////app.use()
//Для того чтобы загрузить функцию промежуточного обработчика вызовите app.use()
//с указанием соответствующей функции. Например, приведенный ниже код загружает функцию промежуточного
//обработчика myLogger перед маршрутом к корневому расположению (/).

var express = require('express');
var app = express();
var myLogger = function (req, res, next) {// Промежуточный обработчик myLogger всего лишь выводит сообщение,
                                           //затем передает запрос далее, следующему промежуточному обработчику в стеке, путем вызова функции next().
    console.log('LOGGED');
    next();
};
app.use(myLogger);                        // загружает функцию промкжутточного обработчика событий
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000);
//
//резельтат
//Каждый раз при получении запроса приложение выводит на терминал сообщение “LOGGED”.


//пример работы с req

var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});

app.listen(3000);
//
//Если запрос адресован корневому каталогу приложения, приложение выводит на экран системное время запроса в браузере.

//Приложение Express может использовать следующие типы промежуточных обработчиков:
//
//Промежуточный обработчик уровня приложения
//Промежуточный обработчик уровня маршрутизатора
//Промежуточный обработчик для обработки ошибок
//Встроенные промежуточные обработчики
//Промежуточные обработчики сторонних поставщиков ПО

///////////////////Промежуточный обработчик уровня приложения

//В данном примере представлена функция промежуточной обработки без пути монтирования.
// Эта функция выполняется при каждом получении запроса приложением.

    var app = express();

    app.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    });

//В данном примере представлена функция промежуточной обработки, монтируемая в путь /user/:id.
//Эта функция выполняется для всех типов запросов HTTP в пути /user/:id.


    app.use('/user/:id', function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    });
//
//В данном примере представлен маршрут и функция его обработки (система промежуточных обработчиков).
//Эта функция обрабатывает запросы GET, адресованные ресурсам в пути /user/:id.


    app.get('/user/:id', function (req, res, next) {
        res.send('USER');
    });
//Этот пример иллюстрирует создание вспомогательного стека промежуточных обработчиков, с выводом информации
//о запросе для всех типов запросов HTTP, адресованных ресурсам в пути /user/:id.


    app.use('/user/:id', function(req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    }, function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    });

//НЕПРАВИЛЬНО!!!!!!!!!!!!!!!!

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('User Info');
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id);
});
//результат  - Второй маршрут никогда не будет выполнен, поскольку первый маршрут завершает цикл “запрос-ответ”.

//
//Для того чтобы пропустить остальные функции дополнительной обработки в стеке промежуточных обработчиков
//маршрутизатора, вызовите next('route') для передачи управления следующему маршруту. ПРИМЕЧАНИЕ: next('route')
//работает только в функциях промежуточной обработки, загруженных с помощью функций app.METHOD() или router.METHOD().
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id == 0) next('route');
    else next(); //
}, function (req, res, next) {
    res.render('regular');
});
app.get('/user/:id', function (req, res, next) {
    res.render('special');
});

///////////////////////Промежуточный обработчик уровня маршрутизатора

//Это нам уже знакомы express.Router().(и его методы router.use() и router.METHOD().)
//О нем все было сказано ривиду лишь пример

var app = express();
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
router.get('/user/:id', function (req, res, next) {
    if (req.params.id == 0) next('route');
    else next(); //
}, function (req, res, next) {
    // render a regular page
    res.render('regular');
});
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.render('special');
});
app.use('/', router);


////////////////////////////Промежуточный обработчик для обработки ошибок
//
//Функции промежуточного обработчика для обработки ошибок определяются так же, как и
//другие функции промежуточной обработки,
//    но с указанием для функции обработки ошибок не трех,
//    а четырех аргументов: (err, req, res, next). Например:


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
//
//Промежуточный обработчик для обработки ошибок должен быть определен последним,
// после указания всех app.use() и вызовов маршрутов;
//у express есть встроенная обработака ошибок но  он выдатк полностью ошибку
// поэтому лучше прописывать самому
//для начало после всех мидлверов(и роутеров) нужно прописывать замыкающуб обработку ошибок
app.use(function(req, res) {
   res.send(404, 'Page not found')
});


//или так, но тогда это не будет завершающей функции а объект ошибки (err) передаться (next(err) ) миделвером ошибок

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//не забудте - Для запуска приложения в рабочем режиме необходимо задать для переменной среды NODE_ENV значение production.
//    или development если разработка


//Можно присвать в таком виде(но устаревший метод)

app.use(errorHandler);//пшием в самом конце
app.use(function(req, res) {
    res.send(404, 'Page not found')
});

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

////

////////////////////////////////Встроенные промежуточные обработчики

//Единственной встроенной функцией промежуточной обработки в Express является express.static. Эта функция
//отвечает за предоставление статических ресурсов приложения Express.(то есть html)
//    пример
app.use(express.static('public'));

//или

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}

app.use(express.static('public', options));

dotfiles	//Опция для предоставления файлов с точкой. Возможные значения - “allow”, “deny”, “ignore”
//    Тип - Строка	По умолчанию- “ignore”
etag	//Включение или отключение генерации etag	 Тип - Булевский	По умолчанию -true
extensions	//Установка альтернативных вариантов расширений файлов.	Тип - Массив	По умолчанию- []
index	//Отправка файла индекса каталога. Установите значение false, чтобы отключить индексацию каталога.
     //Тип -Смешанный	 По умолчанию- “index.html”
lastModified	//Установка в заголовке Last-Modified даты последнего изменения файла в ОС.
    //Возможные значения: true или false. Тип -Булевский	По умолчанию- true
maxAge	//Установка значения свойства max-age в заголовке Cache-Control, в миллисекундах,
    //или в виде строки в формате ms	Тип - Число По умолчанию-	0
redirect//Перенаправление к заключительному символу “/”, если имя пути - это каталог.Тип -Булевский По умолчанию-true
setHeaders	//Функция для установки заголовков HTTP, предоставляемых с файлом.	Тип -Функция

///////////////////////////Промежуточные обработчики сторонних поставщиков ПО

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLess = require('express-less');
// uncomment after placing your favicon in /public   //тищет фаил иконку, еслиее нет то передае дальше
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));  // выводит запись что за запрос пришел get post и т д dev - это формаь логирования
// при development, при production формат логирования нужно указать default (всю инфу на инглише можно найти
// в connect logger)
app.use(bodyParser.json());
//Если вы хотите обрабатывать POST запросы, то вашему приложению необходимо использовать
//специальный middleware — bodyParser. Подключается он очень легко: app.use(express.bodyParser()).
// BodyParser обрабатывает тела application/x-www-form-urlencoded и application/json
//запросов и выставляет для них req.body. Вот пример:
//
//    app.use(express.bodyParser());
//
//app.post('/', function(req, res){
//    console.log(req.body.foo);
//    res.send('ok');
//});
// грубо говоря если пришел пост запрос он запускае поток и  парсит данные и данные будут доступны в req.body....
app.use(bodyParser.urlencoded({ extended: false })); // разбирать расширенный синтаксис с модуем qs( по умолчанию: true))
app.use(cookieParser());// разбирает заголовок cookie, и днлает соответствующее свойство объекта req.cookies,
//здесь можно указать необязательный ключ, которым куки будут подписываться например  app.use(cookieParser('key'));

app.use(express.static(path.join(__dirname, 'public')));// если запрос не был обработан то подключится статика

app.use('/stylesheets', expressLess(__dirname + '/public/stylesheets/common', { compress: true })); // подключения less


////////////////////////////////Использование шаблонизаторов в Express///////////////////////////////////////////////

//Для того чтобы отображать в Express файлы шаблонов, необходимо задать следующие параметры приложения:
//
//views, каталог, в котором находятся файлы шаблонов. Например: app.set('views', './views')
//view engine, используемый шаблонизатор. Например: app.set('view engine', 'jade')
//
//Создайте файл шаблона Jade с именем index.jade в каталоге views со следующим содержанием:

    html
head
title!= title
body
h1!= message

//Затем создайте маршрут для вывода файла index.jade.
//Если свойство view engine не задано, необходимо указать расширение файла view.
// В противном случае, можно не указывать расширение.

    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

//При выполнении запроса к домашней странице файл index.jade будет отображаться как HTML.

/////////////////////Разработка собсьвенных шаблонизаторов для Express

//Для создания собственного шаблонизатора воспользуйтесь методом app.engine(ext, callback). ext
//соответствует расширению имени файла, а callback является функцией шаблонизатора, принимающей
//в качестве параметров следующие элементы: расположение файла, объект опций и функцию обратного вызова.
//
//    Приведенный ниже код служит примером реализации самого простого шаблонизатора для вывода файлов .ntl.


    var fs = require('fs'); // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        // this is an extremely simple template engine
        var rendered = content.toString().replace('#title#', ''+ options.title +'')
            .replace('#message#', ''+ options.message +'');
        return callback(null, rendered);
    });
});
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine

//Теперь ваше приложение сможет отображать файлы .ntl. Создайте файл с именем index.ntl
//в каталоге views со следующим содержимым.

//#title#
//#message#

//Затем создайте следующий маршрут в своем приложении.


    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

//При выполнении запроса к домашней странице файл index.ntl будет отображаться как HTML.