//MongoDB (от англ. humongous — огромный) — документоориентированная система управления базами данных (СУБД)
//с открытым исходным кодом, не требующая описания схемы таблиц.

//ObjectID
//507f191e810c19729de860ea
//a 4-byte value representing the seconds since the Unix epoch,
//    a 3-byte machine identifier,
//    a 2-byte process id, and
//a 3-byte counter, starting with a random value.--- последнии 3 байтв(e860ea)


//Mongoose.js - это орм позволяющая общатся с базой данныз с помощью языка с которого вы пишите

//////////////Schema - типизироание данных в монго
const schema = new Schema({
    name:    String,
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now }, // default: Date.now - это сейчас
    age:     { type: Number, min: 18, max: 65 },
    mixed:   Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array:      [],
    ofString:   [String],
    ofNumber:   [Number],
    ofDates:    [Date],
    ofBuffer:   [Buffer],
    ofBoolean:  [Boolean],
    ofMixed:    [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    nested: {
        stuff: { type: String, lowercase: true, trim: true }

    }
})

////////////////Query - запросы

//////////Person.
    find({         //поиcк
        occupation: /host/, //по полю авное /host/
        'name.last': 'Ghost', //по вложенному полю
        age: { $gt: 17, $lt: 66 },  //больше  17  меншь 66
        likes: { $in: ['vaporizing', 'talking'] }// в likes вот это vaporizing или вот это talking
    }).
    limit(10). //сортировка
    sort({ occupation: -1 }). //по убыванию
    select({ name: 1, occupation: 1 }); //берм тодлько два поля

///////////////////https://mlab.com/ - хостинг для БД монго!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


///////////////////   Cursor
const cursor = Pet
    .find({ type: 'cat' })
    .cursor();

cursor.on('data', function(doc) {
    // Called once for every document
});
cursor.on('close', function() {
    // Called when done
});


/////////////////////////Hooks

schema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    this.password = hashPassword(this.password);

    next();
});

schema.pre('validation', function(next) {
    // do stuff
    next();
});

//////////////////////////Populate
///функция с помощью которой можно работать с связью один ко многои или многие ко многим

Story
    .find(/*...*/)
    .populate({  // вот она - что ты найдешь в стори
        path: 'fans', // еще найди мне в них фанатов
        match: { age: { $gte: 21 }}, //возраст которых выше 21
        select: 'name',    // мне нужны их только имена
        options: { limit: 5 } // и довай их только мне 5
    })

///////////////////////http://mongoosejs.com/docs/guide.html!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    //////////////Express.js

//Hello World

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//Request

req.app
req.baseUrl
req.body  //понадобиться
req.cookies //понадобиться
req.fresh
req.hostname
req.ip //понадобиться
req.ips
req.method
req.originalUrl
req.params //понадобиться
req.path
req.protocol //понадобиться
req.query //понадобиться
req.route //понадобиться
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr

//Response

    res.download()	//Prompt a file to be downloaded.
    res.end()	//End the response process.
    res.json()	//Send a JSON response.
    res.jsonp()	//Send a JSON response with JSONP support.
    res.redirect()	//Redirect a request.
    res.render()	//Render a view template.
    res.send()	//Send a response of various types.
    res.sendFile()	//Send a file as an octet stream.
    res.sendStatus() //Set the response status code and send its string representation as the response body.



////////////Middlewares
const myLogger = (req, res, next) => {
    console.log('Log something');
    next();
};

const myBadLogger = (req, res, next) => {
    console.log('Do domething');
};



/////////////Middlewares

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        next('no access');
    }
    console.log('Do domething');
};


/////////////Catch-middleware

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return next('no access');
    }
    console.log('Do domething');
};

const catchErrors = (err, req, res, next) => {
    res.json({err});
};

///////////How to use
//вычислить дату загрузки стриницы не обязательно

app.use(requestTime);
app.use(myLogger);

app.get('/', function (req, res) {


    responseText +=
        'Generate time: ' +
        (Date.now() - req.requestTime) + 'ms';

    res.send(responseText);
});

app.listen(3000);


/////////////////////////Cookies

//$ npm install cookie-parser

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

///////////////////////////Routes
//можно писать в RegExp
app.get('/hello', function (req, res) {
    res.send('hello world')
})

app.get('/ab?cd', callback );

app.get('/ab+cd', callback );

app.get('/ab(cd)?e', callback );

app.get(/.*fly$/, callback);

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})



//////////////////Sub apps

//можно делать 2 объекта express
var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app


//NPM
//самые популярные покуты express
express
express-async-router
express-graphql
express-jwt
express-ws
express-xml-bodyparser
express-winston

//
//RESTful JSON API
//это огранчения если соответствует всем ограничением то это RESTful
//
//REST ( Representational State Transfer ) — архитектурный стиль взаимодействия
//компонентов распределённого приложения в сети.
//
//REST представляет собой согласованный набор ограничений, учитываемых при проектировании
//распределённой гипермедиа-системы.
//
//
//Web приложение, не нарушающее накладываемые ограничения REST называют  «RESTful»


//Ограничения
//Отсутствие состояния
//Единообразие интерфейса
//
////////////////////////////Status Codes


//200 OK («хорошо»)
//201 Created («создано»)
//202 Accepted («принято»)
//301 Moved Permanently («перемещено навсегда»)
//302 Moved Temporarily («перемещено временно»)
//302 Found («найдено»)
//400 Bad Request («плохой, неверный запрос»)
//401 Unauthorized («не авторизован»)
//402 Payment Required («необходима оплата»)
//403 Forbidden («запрещено»)
//404 Not Found («не найдено»)
//301 Moved Permanently («перемещено навсегда»)
//302 Moved Temporarily («перемещено временно»)
//302 Found («найдено»)
//500 Internal Server Error («внутренняя ошибка сервера»)
//501 Not Implemented («не реализовано»)
//502 Bad Gateway («плохой, ошибочный шлюз»)
//503 Service Unavailable («сервис недоступен»)
//504 Gateway Timeout («шлюз не отвечает»)


///////////////////////postman - расширение!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//нужно установить чтобы проверять запросы пост и гет
///////////////////////MongoChef - работа с базой данных!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
