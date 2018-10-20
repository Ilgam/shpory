//��� �������� �������� ��������� ���������� ������������ ���������� ��� ��������� ���������� express.
//
//    ���������� express � ������� ��������� �������:

    //
    //$ npm install express-generator -g

//��� ��������� ����� ������� �������������� ������ -h:


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
//��������, ��������� ������� ������� ���������� Express � ������ myapp � ������� ������� ��������:
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

//����� ���������� �����������:
//
//
//    $ cd myapp
//$ npm install

//� MacOS ��� Linux ��������� ���������� � ������� ��������� �������:
//
//
//    $ DEBUG=myapp:* npm start

//� Windows ������������ ��������� �������:
//
//
//    > set DEBUG=myapp:* & npm start

// � ��� ������
//�������� �� ����� �� �����, �� npm �������� ���� ���
//��������� scripts � ����� package.json ������� ��� ����, ����� ������ ����� �������
//��� npm start, ���������� ���������� �� ���� scripts.start.
//    ��� ����� ����� ��������� � package.json
//"scripts": {
//    "start": "node ./bin/www"
//}

//����� �������� �������� http://localhost:3000/ � �������� ��� ������� � ����������.
//
//    ��������� ��������� ���������������� ���������� �������� ��������� �������:
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


// !!!!! ������� � ������� ������� ���������:



/////////////////////////////////////////////������ express/////////////////////////////////////
//������� ���������� ������
var express = require('express');
//
//��������� ������ express � ������� ������������ express
var app = express();


///////////////////////////////////////////////�������������/////////////////////////////////////
//� express ��� 5 ������� ������������� ����� http ��������. ��� ����� ��� ���� ����� ��������� ������� ��
//��������������� ���� ��������. �� ���� �������� ����������� ������������
//������������� ����������, ��� ���������� �������� �� ���������� ������ � ����������� ������.
//    ����������� �������� ����� ��������� ���������:

    app.METHOD(PATH, HANDLER)
//���:
//    app - ��� ��������� express.
//    METHOD - ����� ������� HTTP.
//    PATH - ���� �� �������.
//    HANDLER - �������, ����������� ��� ������������� ��������.

//����������� ���� ������������ ������� ������������ ������ ����������� ������� ���������.
//    ����� Hello World! �� �������� ��������:
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
//����� �� ������ POST � �������� �������� (/), �� �������� �������� ����������:
    app.post('/', function (req, res) {
        res.send('Got a POST request');
    });
  //����� �� ������ PUT, ������������ �������� /user:
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
//����� �� ������ DELETE, ������������ �������� /user:
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
//� ����������� ���� ������� ���������� ����� ������� ��� ��������, ������������ �/secret�, ���������� �� ����,
// ������������ �� GET, POST, PUT, DELETE ��� �����-���� ������ ����� ������� HTTP, �������������� � ������ http.


    app.all('/secret', function (req, res, next) {
        console.log('Accessing the secret section ...');
        next(); // pass control to the next handler
    });
///////////////////////////���� ��������������
//��� �� ���� �� ����� � PATH - ���� �� �������.  ��� ��� app.METHOD(PATH, HANDLER)
//�������
app.get('/', function (req, res) {
    res.send('root');
});
//������ ���� �������� ������������ ������� � /about.
    app.get('/about', function (req, res) {
        res.send('about');
    });
//������ ���� �������� ������������ ������� � /random.text.
    app.get('/random.text', function (req, res) {
        res.send('random.text');
    });

////////////////////////////���������� ���������- �� ���� ������� ��������� ������
//���������� ��������� - �� ���� ������� ��������� ������
app.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});
//���� ������� ����� �������������� ����������� ��������� ��������� ������ (����������� ������� ������ next).
//��������:
    app.get('/example/b', function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    }, function (req, res) {
        res.send('Hello from B!');
    });
//������ ������� ��������� ������ ����� ������������ ���� �������.
//��������:
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

///////////////////////////������ � ������� ������ (res)
//������ � ������� ������ (res), ������������� � ������� ����, ����� ����������
//����� ������� � ��������� ���� �������-�����.
//���� �� ���� �� ���� ������� �� ����� ������ �� ����������� ��������, ���������� ������ ��������.
    res.download()	//����������� �������� �����.
    res.end()	//���������� �������� ������.
    res.json()	//�������� ������ JSON.
    res.jsonp()	//�������� ������ JSON � ���������� JSONP.
    res.redirect()	//��������������� ������.
    res.render()	//����� ������� �������������.
    res.send()	//�������� ������ ��������� �����.
    res.sendFile	//�������� ����� � ���� ������ �������.
    res.sendStatus()	//��������� ���� ��������� ������ � �������� ������������� � ���� ������ � �������� ���� ������.

//////////////////////////////////////app.route()
//����� app.route() ��������� ��������� ����������� ���������, ���������� �������.
//    ���� �������� ������ ������������ � ������� ������������ ���������, ������������ � ������� ������� app.route().
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
//express.Router � ������� ������ express.Router ����� ��������� ���������, ����������� ����������� ���������.
//    ��������� Router ������������ ����� ����������� ������� ������������� ������������ � �������������;
//�� ���� ������� ��� ����� �������� �����-�����������.
//
//�.�. � ��������� ����� ����� ������� ������ � ���������������� � ���������� ��� � �������� app  �����
//������ ������

//�������� ���� �������������� � ������ birds.js � �������� ���������� �� ��������� �����������:


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


//����� ��������� ������ ������������� � ����������:


   var birds = require('./birds');
   //...
  app.use('/birds', birds);
//���������
//������ ���������� ������ ������ ������������ �������, ������������ �������� /birds � /birds/about,
//    � ����� �������� ����������� ������� ������������� ��������� timeLog ������� ��������.


/////////////////////////////////////////////middleware//////////////////////////////////////////////////
//middleware(������� ������������� ���������) - ��� ������� ������� ����� ������ ��� � req ��� � res. ����� ���������� ����� ������� �� ��������
//�.� �� ��� �������
//
//�� ������� ���� ���
var http = require('http'),
    server = new http.Server();
server.listen(80)
server.on('request', function(req,res){  //��� ������� request(������)
    res.writeHead(200,{
        'Counter-Type': 'text/plain'
    });
    res.write("Hellow world!");
    res.end();
})

//� ��� ��� � express

var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
server.listen('3000');
app.use(function(req, res, next) {
    console.log('LOGGED'); // ������ ���������� �� next()
    next()
});
//
//!!! ������ ���������� �� next(), ��� ������ ������� ����������� ����� �������� ������ ����������
//��������� ���� ��� � ��������� ��� �� ������ ������ �� ������!!!
//
//������� ������������� ��������� ����� ��������� ��������� ������:
//
//    ���������� ������ ����.
//    �������� ��������� � ������� �������� � �������.
//    ���������� ����� �������-�����.
//����� ���������� �������������� ����������� �� �����.

//////////////////////////////////app.use()
//��� ���� ����� ��������� ������� �������������� ����������� �������� app.use()
//� ��������� ��������������� �������. ��������, ����������� ���� ��� ��������� ������� ��������������
//����������� myLogger ����� ��������� � ��������� ������������ (/).

var express = require('express');
var app = express();
var myLogger = function (req, res, next) {// ������������� ���������� myLogger ����� ���� ������� ���������,
                                           //����� �������� ������ �����, ���������� �������������� ����������� � �����, ����� ������ ������� next().
    console.log('LOGGED');
    next();
};
app.use(myLogger);                        // ��������� ������� ��������������� ����������� �������
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000);
//
//���������
//������ ��� ��� ��������� ������� ���������� ������� �� �������� ��������� �LOGGED�.


//������ ������ � req

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
//���� ������ ��������� ��������� �������� ����������, ���������� ������� �� ����� ��������� ����� ������� � ��������.

//���������� Express ����� ������������ ��������� ���� ������������� ������������:
//
//������������� ���������� ������ ����������
//������������� ���������� ������ ��������������
//������������� ���������� ��� ��������� ������
//���������� ������������� �����������
//������������� ����������� ��������� ����������� ��

///////////////////������������� ���������� ������ ����������

//� ������ ������� ������������ ������� ������������� ��������� ��� ���� ������������.
// ��� ������� ����������� ��� ������ ��������� ������� �����������.

    var app = express();

    app.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    });

//� ������ ������� ������������ ������� ������������� ���������, ����������� � ���� /user/:id.
//��� ������� ����������� ��� ���� ����� �������� HTTP � ���� /user/:id.


    app.use('/user/:id', function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    });
//
//� ������ ������� ����������� ������� � ������� ��� ��������� (������� ������������� ������������).
//��� ������� ������������ ������� GET, ������������ �������� � ���� /user/:id.


    app.get('/user/:id', function (req, res, next) {
        res.send('USER');
    });
//���� ������ ������������ �������� ���������������� ����� ������������� ������������, � ������� ����������
//� ������� ��� ���� ����� �������� HTTP, ������������ �������� � ���� /user/:id.


    app.use('/user/:id', function(req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    }, function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    });

//�����������!!!!!!!!!!!!!!!!

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
//���������  - ������ ������� ������� �� ����� ��������, ��������� ������ ������� ��������� ���� �������-�����.

//
//��� ���� ����� ���������� ��������� ������� �������������� ��������� � ����� ������������� ������������
//��������������, �������� next('route') ��� �������� ���������� ���������� ��������. ����������: next('route')
//�������� ������ � �������� ������������� ���������, ����������� � ������� ������� app.METHOD() ��� router.METHOD().
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

///////////////////////������������� ���������� ������ ��������������

//��� ��� ��� ������� express.Router().(� ��� ������ router.use() � router.METHOD().)
//� ��� ��� ���� ������� ������ ���� ������

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


////////////////////////////������������� ���������� ��� ��������� ������
//
//������� �������������� ����������� ��� ��������� ������ ������������ ��� ��, ��� �
//������ ������� ������������� ���������,
//    �� � ��������� ��� ������� ��������� ������ �� ����,
//    � ������� ����������: (err, req, res, next). ��������:


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
//
//������������� ���������� ��� ��������� ������ ������ ���� ��������� ���������,
// ����� �������� ���� app.use() � ������� ���������;
//� express ���� ���������� ���������� ������ ��  �� ������ ��������� ������
// ������� ����� ����������� ������
//��� ������ ����� ���� ���������(� ��������) ����� ����������� ���������� ��������� ������
app.use(function(req, res) {
   res.send(404, 'Page not found')
});


//��� ���, �� ����� ��� �� ����� ����������� ������� � ������ ������ (err) ���������� (next(err) ) ���������� ������

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
//�� ������� - ��� ������� ���������� � ������� ������ ���������� ������ ��� ���������� ����� NODE_ENV �������� production.
//    ��� development ���� ����������


//����� �������� � ����� ����(�� ���������� �����)

app.use(errorHandler);//����� � ����� �����
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

////////////////////////////////���������� ������������� �����������

//������������ ���������� �������� ������������� ��������� � Express �������� express.static. ��� �������
//�������� �� �������������� ����������� �������� ���������� Express.(�� ���� html)
//    ������
app.use(express.static('public'));

//���

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

dotfiles	//����� ��� �������������� ������ � ������. ��������� �������� - �allow�, �deny�, �ignore�
//    ��� - ������	�� ���������- �ignore�
etag	//��������� ��� ���������� ��������� etag	 ��� - ���������	�� ��������� -true
extensions	//��������� �������������� ��������� ���������� ������.	��� - ������	�� ���������- []
index	//�������� ����� ������� ��������. ���������� �������� false, ����� ��������� ���������� ��������.
     //��� -���������	 �� ���������- �index.html�
lastModified	//��������� � ��������� Last-Modified ���� ���������� ��������� ����� � ��.
    //��������� ��������: true ��� false. ��� -���������	�� ���������- true
maxAge	//��������� �������� �������� max-age � ��������� Cache-Control, � �������������,
    //��� � ���� ������ � ������� ms	��� - ����� �� ���������-	0
redirect//��������������� � ��������������� ������� �/�, ���� ��� ���� - ��� �������.��� -��������� �� ���������-true
setHeaders	//������� ��� ��������� ���������� HTTP, ��������������� � ������.	��� -�������

///////////////////////////������������� ����������� ��������� ����������� ��

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLess = require('express-less');
// uncomment after placing your favicon in /public   //����� ���� ������, ������ ��� �� ������� ������
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));  // ������� ������ ��� �� ������ ������ get post � � � dev - ��� ������ �����������
// ��� development, ��� production ������ ����������� ����� ������� default (��� ���� �� ������� ����� �����
// � connect logger)
app.use(bodyParser.json());
//���� �� ������ ������������ POST �������, �� ������ ���������� ���������� ������������
//����������� middleware � bodyParser. ������������ �� ����� �����: app.use(express.bodyParser()).
// BodyParser ������������ ���� application/x-www-form-urlencoded � application/json
//�������� � ���������� ��� ��� req.body. ��� ������:
//
//    app.use(express.bodyParser());
//
//app.post('/', function(req, res){
//    console.log(req.body.foo);
//    res.send('ok');
//});
// ����� ������ ���� ������ ���� ������ �� �������� ����� �  ������ ������ � ������ ����� �������� � req.body....
app.use(bodyParser.urlencoded({ extended: false })); // ��������� ����������� ��������� � ������ qs( �� ���������: true))
app.use(cookieParser());// ��������� ��������� cookie, � ������ ��������������� �������� ������� req.cookies,
//����� ����� ������� �������������� ����, ������� ���� ����� ������������� ��������  app.use(cookieParser('key'));

app.use(express.static(path.join(__dirname, 'public')));// ���� ������ �� ��� ��������� �� ����������� �������

app.use('/stylesheets', expressLess(__dirname + '/public/stylesheets/common', { compress: true })); // ����������� less


////////////////////////////////������������� �������������� � Express///////////////////////////////////////////////

//��� ���� ����� ���������� � Express ����� ��������, ���������� ������ ��������� ��������� ����������:
//
//views, �������, � ������� ��������� ����� ��������. ��������: app.set('views', './views')
//view engine, ������������ ������������. ��������: app.set('view engine', 'jade')
//
//�������� ���� ������� Jade � ������ index.jade � �������� views �� ��������� �����������:

    html
head
title!= title
body
h1!= message

//����� �������� ������� ��� ������ ����� index.jade.
//���� �������� view engine �� ������, ���������� ������� ���������� ����� view.
// � ��������� ������, ����� �� ��������� ����������.

    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

//��� ���������� ������� � �������� �������� ���� index.jade ����� ������������ ��� HTML.

/////////////////////���������� ����������� �������������� ��� Express

//��� �������� ������������ ������������� �������������� ������� app.engine(ext, callback). ext
//������������� ���������� ����� �����, � callback �������� �������� �������������, �����������
//� �������� ���������� ��������� ��������: ������������ �����, ������ ����� � ������� ��������� ������.
//
//    ����������� ���� ��� ������ �������� ���������� ������ �������� ������������� ��� ������ ������ .ntl.


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

//������ ���� ���������� ������ ���������� ����� .ntl. �������� ���� � ������ index.ntl
//� �������� views �� ��������� ����������.

//#title#
//#message#

//����� �������� ��������� ������� � ����� ����������.


    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

//��� ���������� ������� � �������� �������� ���� index.ntl ����� ������������ ��� HTML.