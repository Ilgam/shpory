
        //Express: ���-��������� ��� Node.js. ����������� ������������
        //�����������
        //���������
        //������� �����
        //�������� �������
        //�������� HTTPS-�������
        //����������������
        //���������
        //�������������
        //�������� ���������� �� ������ �������
        //���������
        //��������-���������
        //HTTP-������
        //��������� ������
        //����-��������� ���������� ��������
        //��������� �������������
        //��������� �������������
        //����� �������������
        //�������������
        //��������� ������
        //����������� �� ��������
        //Request
                //req.header(key[, defaultValue])
                //req.accepts(type)
                //req.is(type)
                //req.param(name[, default])
                //req.get(field, param)
                //req.flash(type[, msg])
                //req.isXMLHttpRequest
        //Response
                //res.header(key[, val])
                //res.charset
                //res.contentType(type)
                //res.attachment([filename])
                //res.sendfile(path[, options[, callback]])
                //res.download(file[, filename[, callback[, callback2]]])
                //res.send(body|status[, headers|status[, status]])
                //res.json(obj[, headers|status[, status]])
                //res.redirect(url[, status])
                //res.cookie(name, val[, options])
                //res.clearCookie(name[, options])
                //res.render(view[, options[, fn]])
                //res.partial(view[, options])
                //res.local(name[, val])
                //res.locals(obj)
        //Server
                //app.set(name[, val])
                //app.enable(name)
                //app.enabled(name)
                //app.disable(name)
                //app.disabled(name)
                //app.configure(env|function[, function])
                //app.redirect(name, val)
                //app.error(function)
                //app.helpers(obj)
                //app.dynamicHelpers(obj) {#app.dynamic-helpers}
                //app.lookup
                //app.match
                //app.mounted(fn)
                //app.register(ext, exports)
                //app.listen([port[, host]])
        //��������� ������
        //������ ����������

//������� �������
        var app = express.createServer();
        app.get('/', function(req, res) {
            res.send('Hello World');
        });
        app.listen(3000);
///////////////////////////////////////////////�����������//////////////////////////////////////////////
//�������� �������������
//��������� ��������������� (redirect helpers)
//������������ ��������� �������������
//����� ������������� ������ ����������
//�������������� � ���������
//������������ ����������
//����������������� �� ������� ������������������
//��������� �������� � ��������� ����������� �������� (view partials)
//������������, ������ ������������� ��� ������ ������ (development, production, � �.�.)
//�������� � ������ ����������� ��������� (flash messages)
//������� �� ������ Connect
//������ express ��� ������� ��������� ������� ����������
//������� �������� �������
//////////////////////////////////////////////////���������(������)/////////////////////////////////////

        //$ npm install express
//���, ����� ����� ������ � ������� express, ���������� ���������:

        //$ npm install -g express
/////////////////////////////////////////////////������� �����//////////////////////////////////////////
//����� ����� ������ ������ � Express ����� �������� ������� express, ������� ����������� ����������:

//�������� ����������:
        //$ npm install -g express
        //$ express /tmp/foo && cd /tmp/foo

//��������� ������������:

        //$ npm install -d

//������ �������:

        //$ node app.js
//////////////////////////////////////////////////�������� �������///////////////////////////////////////////

//����� ������� ��������� express.HTTPServer, ������ �������� ����� createServer(). � ������� ������ ���������� ����������
// �� ����� �������� ��������, ���������� �� HTTP-�������, � ������ ������� app.get().

         var app = require('express').createServer();
        app.get('/', function(req, res){
            res.send('hello world');
        });
        app.listen(3000);
///////////////////////////////////////////////�������� HTTPS-�������///////////////////////////////////////////////

//����� ���������������� express.HTTPSServer, �� ��������� �� �� ��������, ��� � ����, �� � ���� �� �������� ������ �����,
//���������� ����, ���������� � ������ ���������, � ������� �������� � ������������ ������ https NodeJS.

    var app = require('express').createServer({ key: sumekey });

//////////////////////////////////////////////////����������������//////////////////////////////////////////////////////
//Express ������������ ������������ ��������� (environments), ��� ��������, production � development.
//������������ ����� ������������ ����� configure(), ����� �������� ������ ��� ������� ��������� �������.
// ����� configure() ���������� ��� ����� ���������, �� ����� ����������� � ����� ��������� ������ ��� ���������
//����� configure, � ������� ��������� ������.
//
//� ����������� ���� ������� �� ������ ���������� ����� dumpExceptions � � ������ ���������� ������ ������� � �����
//����-����� ����������. � ����� �� ������� �� ���������� ��������� methodOverride � bodyParser. �������� ��������
//�� ������������� app.router, ������� ��� �� ���� ��������� ����������� �������� - � ��������� ������ ��� �����������
//��� ������ ������ app.get(), app.post() � �.�.

                app.configure(function(){
                    app.use(express.methodOverride());
                    app.use(express.bodyParser());
                    app.use(app.router);
                });

                app.configure('development', function(){
                    app.use(express.static(__dirname + '/public'));
                    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
                });

                app.configure('production', function(){
                    var oneYear = 31557600000;
                    app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
                    app.use(express.errorHandler());
                });
//��� ���������� �� ������� ����������� ����� ���������� ��������� ���� ���������:

    app.configure('stage', 'prod', function(){
        // config
    });
//��� ���������� � ������������ �������� � Express ���� ������ set(key[, val]), enable(key), disable(key):

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('views');
    // => "/absolute/path/to/views"
    app.enable('some feature');
    // ��� ����� ��� app.set('some feature', true);
    app.disable('some feature');
    // ��� ����� ��� app.set('some feature', false);
    app.enabled('some feature')
    // => false
});
//����� ������ ��������� �� ����� ���������� ���������� ��������� NODE_ENV. ��������:

//$ NODE_ENV=production node app.js

//��� ����� �����, ������ ��� ��������� ���������� ����������� ���������� ������ � ��������� production.

////////////////////////////////////////////////// ���������////////////////////////////////////////////////////////

//�� ������� Express ������������ ��������� ���������:
//
//home - ������� ���� ����������, ������� ������������ ��� res.redirect(),
//            � ����� ��� ���������� ��������� ���������������� ����������.
//views �������� ���������� �������������. �� ��������� �������_�����/views
//view engine - ������������ �� ��������� ��� �������������, ���������� ��� ���������� �����.
//view options - ������, ���������� ���������� ����� �������������
//view cache - �������� ����������� ������������� (���������� � ��������� production)
//case sensitive routes - �������� ��������, �������������� � ��������
//strict routing - ���� ��������, �� ����������� ����� ������ �� �������������
//jsonp callback - ��������� ������ res.send() ���������� ��������� JSONP

///////////////////////////////////////////////////////////�������������/////////////////////////////////////////////////

//Express ���������� HTTP-������ ��� ����������� ������������, �������������� API �������������. ��������, �� �����,
//����� �� ������� /user/12 ����������� ������� ������������ � id=12. ��� ����� �� ���������� ������������
//���� �������. ��������, ��������� � ������������ ������, �������� � ������� res.params.

            app.get('/user/:id', function(req, res){
                res.send('user ' + req.params.id);
            });
//������� ��� ������ ������, ������� ������ ������ ������������� � ���������� ���������.
//��������, ����� ������������� /user/:id, �� ���������� ���������� ��������� ����� ������:

            // \/user\/([^\/]+)\/?

//����� ����� ����� ���������� ���������� ���������. �� ��������� ������ � ���������� ���������� �� ���������,
//� ��� ����� ��������� � req.params �� �������. ��� ������ ������ �������� � req.params[0], ������ � req.params[1] � �.�.

            app.get(/^\/users?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){
                res.send(req.params);
            });

//������ ������� curl � ������ ������ �� �������������� �������:

            //$ curl http://dev:3000/user
            //    [null,null]
            //$ curl http://dev:3000/users
            //    [null,null]
            //$ curl http://dev:3000/users/1
            //    ["1",null]
            //$ curl http://dev:3000/users/1..15
            //    ["1","15"]
//���� ��������� ��������� �������� ��������� � ����, ������� ����� �� ���������������:

            // "/user/:id"
            ///user/12
            //"/users/:id?"
            ///users/5
            ///users
            //"/files/*"
            ///files/jquery.js
            ///files/javascripts/jquery.js
            //"/file/*.*"
            ///files/jquery.js
            ///files/javascripts/jquery.js
            //"/user/:id/:operation?"
            ///user/1
            ///user/1/edit
            //"/products.:format"
            ///products.json
            ///products.xml
            //"/products.:format?"
            ///products.json
            ///products.xml
            ///products
            //"/user/:id.:format?"
            ///user/12
            ///user/12.json

//��������, �� ����� ������� POST-�� ��������� JSON � �������� ��� �� JSON-��, ��������� ��������� bodyParser,
// ������� ����� ������� JSON ������ (��� ������� � ������ �������) � �������� ����� � req.body:

            var express = require('express'),
                app = express.createServer();
            app.use(express.bodyParser());
            app.post('/', function(req, res) {
                res.send(req.body);
            });
            app.listen(3000);

//��� ������� �� ���������� ������� ���� (��������, /user/:id), � �������� ��� �����������. �� ���� ��, � �������,
// ����� ���������� ID ������������ ������ ��������� ���������, ����� ������������ /user/:id([0-9]+).
//����� ����������� �� ����� �����������, ���� �������� ���� �������� ���������� �������.

//////////////////////////////�������� ���������� �� ������ �������///////////////////////////////////////////////////////
//������ ������ �������� - next(), ����� �������� ���������� �� ��������� �������. ���� ������������ �� �������,
//���������� ���������� ����� � Connect, � ��������� ���������� ���������� � �������, � �������
//��� ���� �������� � ������� use(). ��� �� �������� ��������� ���������, ������� ���� � ��� �� ����.
//��� ������ ���������� �� �������, �� ���� �������, ����� ���� �� ��� ������� ������ ����, ����� ������� next().

            app.get('/users/:id?', function(req, res, next) {
                var id = req.params.id;
                if (id) {
                    // ������ ���-��
                } else {
                    next();
                }
            });
            app.get('/users', function(req, res) {
                // ������ ���-�� ������
            });

//����� app.all() �������, ���� ����� ��������� ���� � �� �� ������ ��� ���� HTTP-�������. ���� �� ����������
//���� ����� ��� ���������� ����� �� ���� ������ � ���������� ��� � req.user.

            var express = require('express'),
            app = express.createServer();
            var users = [{
                name: 'tj'
            }];
            app.all('/user/:id/:op?', function(req, res, next) {
                req.user = users[req.params.id];
                if (req.user) {
                    next();
                } else {
                    next(new Error('cannot find user ' + req.params.id));
                }
            });

            app.get('/user/:id', function(req, res) {
                res.send('viewing ' + req.user.name);
            });

            app.get('/user/:id/edit', function(req, res) {
                res.send('editing ' + req.user.name);
            });

            app.put('/user/:id', function(req, res) {
                res.send('updating ' + req.user.name);
            });

            app.get('*', function(req, res) {
                res.send('what???', 404);
            });

            app.listen(3000);

//////////////////////////////////////////////////���������/////////////////////////////////////////////////////////////

//��������� ���������� Connect ����� ���������� � express.createServer() ����� ��� ��, ��� ���� �� �������������
// ������� Connect-������. ��������:

            var express = require('express');
            var app = express.createServer(
                express.logger(),
                express.bodyParser());

//��� �� ����� ������������ use(). ��� ������� ��������� ��������� ������ ������ configure(), ��� ����� ������������.

             app.use(express.logger({ format: ':method :url' }));

//������ � ����������� Connect �� ����� ���������� Connect ��������� �������:

            var connect = require('connect');
            app.use(connect.logger());
            app.use(connect.bodyParser());

//��� �� ������ ������, ������� Express �������� ������������ Connect-������ ���������:

            app.use(express.logger());
            app.use(express.bodyParser());

//������� �������� ����� ��������. ���, ����� Connect �������� ������, ����������� ������ ���������, �����������
//����� createServer() ��� use(). ��� ���������� � ����� �����������: request, response � callback-�������,
//������ ���������� next. ����� ���������� next(), ���������� ���������� �� ������ ��������� � �.�.
//��� ����� ���������, ��� ��� ��������� �������� ������� ���� �� �����. �������� methodOverride() ����������
//� req.body.method ��� ���������� HTTP-������, � bodyParser() ������ ���� �������, ����� ��������� req.body.
//������ ������ - ������� cookies � ��������� ������ - ������� ���������� �������� use() ��� cookieParser(),
//����� ��� session().
//
//��������� Express-���������� ����� ����� ������� app.use(app.router). ��� ����� ���������� ��������,
//�� ��� ����� ������ ��� ����, ����� ����� ������� ������� ���������, ������� �������� � ���� ��� ���������
//���� ��������. ��� ��������� ����� �������� � ����� �������, ���� �� ��������� ��� ���������� � �����. �������
//�� �������, ����� ��������� ������������ �� ����������. ��������, ��� ����� ���������� ������, ������� �����
//����������� ����� ���� ������ �������� � ���������� ����� ����������, ���������� � ���� � ������� next().
//��� �� ����� ������������ �������� ����������� ���������� ���������, ������������� ����������� �����,
//����� ��������� ������ ��������� ������������� ������� � ����� ������ �, ��������, ������� ����������
//���������� � �.�. ��� ��� ��� ����� ���������:

                app.use(express.logger());
                app.use(express.bodyParser());
                app.use(express.cookieParser());
                app.use(express.session());
                app.use(app.router);
                app.use(express.static());
                app.use(express.errorHandler());
//������� �� ��������� logger() - �� ����� ����������� ����� req.end(),
//����� ������������� ��� ������ � �������� ������. ����� �� ������ ���� �������
//(���� ������� �������), ����� ����, ����� ������, ����� req.session ��� ��� ���������, ����� �� ���������
// �� ��������� � app.router. ����, ��������, ������ GET /javascripts/jquery.js ����� �������������� ����������,
//� �� �� ������� next(), �� �������� static() ������� �� ������� ���� ������. ������, ���� �� ���������
//�������, ��� �������� ����, ����� ����� ���������� ����������, ��������� ��������, ��������� ������ �� ��������, � �.�.

                var downloads = {};
            app.use(app.router);
            app.use(express.static(__dirname + '/public'));
            app.get('/*', function(req, res, next) {
                var file = req.params[0];
                downloads[file] = downloads[file] || 0;
                downloads[file]++;
                next();
            });

////////////////////////////////////////////��������-���������///////////////////////////////////////////////////////
//�������� ����� ������������ ���������� ��������� ����� �������� ������ �������������� ��������� (��� ��������).
//��� �������, ���� ����� ���������� ������ ���� ���������� �����-���� ������ ����� �������������� ��������, � �.�.
//������ ����������� ��������� ������ ����� ��������� �������� ��� �������� ����
//(��� �� ����� �������� :id � ������ ������ �����).

            app.get('/user/:id', function(req, res, next) {
                loadUser(req.params.id, function(err, user) {
                    if (err) return next(err);
                    res.send('Viewing user ' + user.name);
                });
            });
//����� �������������� �������� DRY � �������� ������������� ����, ����� ������������ ����� ������ � ������� ��������.
//��� ����� ��������, ����������� ������ � ������� ��������, ����� ��� �������� ���������� ������������� ��������,
// ��� � ������� ��� �������� ����� ��������.

            function loadUser(req, res, next) {
            // ��� �� ������ ����� �� ���� ������
            var user = users[req.params.id];
            if (user) {
                req.user = user;
                next();
            } else {
                next(new Error('Failed to load user ' + req.params.id));
            }
        }
        app.get('/user/:id', loadUser, function(req, res) {
            res.send('Viewing user ' + req.user.name);
        });
//����� ��������� ��������� ���������� ��������, � ��� ����� ����������� ���������������, ����� ���������� ��������� ������,
//���, ��������, ����������� ������� � ����������������� ��������. � ��������������� ������� ������ ��������������
//���� ����� ������������� ���� �������.

    function andRestrictToSelf(req, res, next) {
    req.authenticatedUser.id == req.user.id ? next() : next(new Error('Unauthorized'));
}
app.get('/user/:id/edit', loadUser, andRestrictToSelf, function(req, res) {
    res.send('Editing user ' + req.user.name);
});
//�������� �� �������� ��� ����, ��� ��������� - ��� ������ �������, ����� �������� �������, ������� �� ����������
//��������� (����� ���������� ��� ����� ������������� � ������ �������), ��� �������� ����.

    function andRestrictTo(role) {
    return function(req, res, next) {
        req.authenticatedUser.role == role ? next() : next(new Error('Unauthorized'));
    }
}
app.del('/user/:id', loadUser, andRestrictTo('admin'), function(req, res) {
    res.send('Deleted user ' + req.user.name);
});
//����� ������������ ������ �������� ����� ���������� ��� ������� ������������ ������� � �������������
//(��� ����� ����������� ����������):

var a = [middleware1, middleware2],
    b = [middleware3, middleware4],
    all = [a, b];
app.get('/foo', a, function() {});
app.get('/bar', a, function() {});
app.get('/', a, middleware3, middleware4, function() {});
app.get('/', a, b, function() {});
app.get('/', all, function() {});

//������ ������ ����� ���������� � �����������.
//������ ������, ����� ���� ���������� ��������� ��������� �������� � �����, �� ���������� ����������
//��������� ���������. ��� ����� ���� �������� next() � ���������� route: next("route"). ���� �� �������� ��������� ���
//����������, Express ������� ������� 404 Not Found.

/////////////////////////////////////////////////////HTTP-������//////////////////////////////////////////////////////////

//�� ��� ������������ ������������ app.get(), ������ Express ����� ������������� ������ HTTP-������ - app.post(), app.del() � �.�.
//����� ���������������� ������ ������������� POST - ��� �������� �����. � ������� ���� �� ������ ������ HTML-�����.
//� ����� ���������� ����� ������������ ��������, ������� �� ��������� � ��������� �������.

            //<form method="post" action="/">
            //    <input type="text" name="user[name]" />
            //    <input type="text" name="user[email]" />
            //    <input type="submit" value="Submit" />
            //    </form>
//�� ��������� Express �� �����, ��� ��� ������ � ����� �������, ������� �� ������ �������� ��������� bodyParser(),
//������� ����� ������� ���� �������, �������������� � application/x-www-form-urlencoded ��� application/json,
//� �������� ���������� �������� � req.body. ��� ����� �� ������ ������� use(), ��� �������� ����:

    app.use(express.bodyParser());

//������ ��������������� ������� ����� ����� ������ � ������� req.body.user, � �������� ����� �������� name � email:

            app.post('/', function(req, res) {
                console.log(req.body.user);
                res.redirect('back');
            });

//� ������ ������������� ������ ����� ������� ��� PUT, ����� ������������ ������� ����� �� ����� _method, ������� ���������
//�������� HTTP-�����. ����� ����� ��������, ����� ������� ������������� ��������� methodOverride(), ������� �����
//�������� ����� bodyParser(), ��� �������� �� ������������ req.body, ���������� ���� ���������� �����.

            app.use(express.bodyParser());
            app.use(express.methodOverride());

//��� ��������� �� ������������� �� ���������, ������ ��� Express �� ����������� ������ ����� �������� ������ ������������.
//� ����������� �� ���� ����������, ����� � �� ������������ ��. � ����� ������ PUT � DELETE ��� ��� �� �����
//��������, �� ��� ��������. � �� �� ����� methodOverride - ��� �������� ������� ��� HTML-����.
//���� ������� ������ ������������� ������ PUT:

            //<form method="post" action="/">
            //<input type="hidden" name="_method" value="put" />
            //<input type="text" name="user[name]" />
            //<input type="text" name="user[email]" />
            //<input type="submit" value="Submit" />
            //</form>

            app.put('/', function() {
                console.log(req.body.user);
                res.redirect('back');
            });
//////////////////////////////////////////////��������� ������///////////////////////////////////////////////////////////
//� Express ���� ����� app.error(), ������� ��������� ��� ����������, ��������� ����������, ��� ���������� � ���� next(err).
//���� ������, ��� ����������� ��������� ������� � �������������� ������������ ���������� NotFound:

                function NotFound(msg) {
                    this.name = 'NotFound';
                    Error.call(this, msg);
                    Error.captureStackTrace(this, arguments.callee);
                }
            NotFound.prototype.__proto__ = Error.prototype;
            app.get('/404', function(req, res) {
                throw new NotFound;
            });
            app.get('/500', function(req, res) {
                throw new Error('keyboard cat!');
            });

//����� �������� app.error() ��������� ���, ��� �������� ����. ��� �� ��������� instanceof NotFound � ���������� ��������
//404, ��� �� �������� ���������� ���������� ����������� ������.��������, ��� ��� ����������� ����� ���� ���������� ���
//������, ��������� ��� ��� ����� ����� �������� ���� ������������ ��������� � listen(). ��� ��������� �� ����������
//������ ������ configure(), ��� ��� ����� ������������ ���������� ��-������� � ����������� �� �������� ���������.

            app.error(function(err, req, res, next) {
                if (err instanceof NotFound) {
                    res.render('404.jade');
                } else {
                    next(err);
                }
            });

//��� ������ �� �� ��������� �����, ��� ��� ������ ����� ��� 500, �� �� ������ ��� �������� ��� ������. �������� �����
//Node ������ �������� � �������� ��������, ����� �������� ������ ������ � ����� error.code = ENOENT, ��� ��������
//��� ������ ���� ��� �����������, �� ����� ������������ ��� � ����������� ������ � ���������� ��������������� ��������.

            app.error(function(err, req, res) {
                res.render('500.jade', {
                    error: err
                });
            });

//����� ���������� ����� ������������ ��� ��������� ���������� Connect-������ ��������� errorHander. ��������, ���� �����
//� ��������� development ���������� ���������� � stderr, ����� ������� ���:

            app.use(express.errorHandler({ dumpExceptions: true }));

//����� � ���� ���������� ��� ����� ������������ ������ HTML-���������, ������������ ���������� ��� ��������� ����������.
// � ����� ������ ����� ���������� showStack � true:

            app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));

//��������� errorHandler ����� �������� � JSON, ���� �������� ������� ��������� Accept: application/json,
//��� ������� ��� ���������� AJAX-����������.

////////////////////////////////////����-��������� ���������� ��������//////////////////////////////////////////////////

//����-��������� ���������� �������� ����� ����������� �������� ������������� ����������, ����� ����� �������� ������
//� ��������� URL �������. ��������, ���� �� ��������� ���������� �����-�� ������ ��� ������������ ��������
//(�������� ������� ���������������� ������ ��� /user/:id), ����� ������� ���-�� ����� �����:

            app.get('/user/:userId', function(req, res, next) {
                User.get(req.params.userId, function(err, user) {
                    if (err) return next(err);
                    res.send('user ' + user.name);
                });
            });

//� ����-��������� �� ���� ��������� ������� ����� �������� callback-�������, ������� �� ��������� ���������, ����������
//�������, ��� ���� �������� ������ �� ���� ������. � ������� ���� �� �������� app.param() � ������ ���������, �� �������
//����� �������� callback. ��� ����� �������� �� �������� �������� id, ������� �������� ��� ����. ����� ������� �� ���������
//������ ������������ � ��������� ������� ��������� ������ � ������� ����� next(), ����� �������� ���������� �� ���������
//����-������� ���� ��� �� ���������� ��������.

            app.param('userId', function(req, res, next, id) {
                User.get(id, function(err, user) {
                    if (err) return next(err);
                    if (!user) return next(new Error('failed to find user'));
                    req.user = user;
                    next();
                });
            });
//
//������������� ��������, ��� ��� ����������, ����������� �������� ������������� ���� � ��������� �����
//������������ ���� ������ � ������ ������ ����������:

            app.get('/user/:userId', function(req, res) {
                res.send('user ' + req.user.name);
            });

//////////////////////////////////////////////��������� �������������///////////////////////////////////////////////////

//����� ������ ������������� ���������� �� ����� {���}.{������}, ��� {������} - ��� �������� ������ �������������,
//������� ������ ���� ���������. �������� ������������� layout.ejs ������� ������� �������������, ��� ���� �������
//require('ejs'). ����� ��������������� � Express, ����������� ������ ������ ��������������
// ����� exports.compile(str, options),� ���������� �������. ����� �������� ��� ���������, ����� ������������
// ������� app.register() - �� ��������� ���������������� ���������� ������ � ������������� ��������.
// �������� ����� �������, ����� foo.html ���������� ������� ejs.

// ���� - ������, ������������ Jade ��� ���������� index.html. � ��������� �� �� ���������� layout:false,
//������������� ������� ������������� index.jade ����� ������� ��� ��������� ���������� body � ������������� layout.jade.

            app.get('/', function(req, res) {
                res.render('index.jade', {
                    title: 'My Site'
                });
            });
//��������� view engine ��������� ������� ������������ �� ���������.
// ��� �������� ��� ������������� Jade ����� ������� ���:

            app.set('view engine', 'jade');

//��� �������� ��� ��������� ���:

            res.render('index');

//, � �� ���:

            res.render('index.jade');

//����� ������������ ���������� ����� view engine, ���������� ������ �� �����. ������ �� ��-�������� ����� ������������
//����� ��������� ��������������:

            res.render('another-page.ejs');

//� Express ����� ���� ��������� view options, ������� ����� ������������� ��� ������ ���������� �������������.
//�������� ���� �� �� ��� ����� ����������� �������, ����� �������� ���:

            app.set('view options', {
                layout: false
            });

//��� ����� ��� ������������� ����� ����������� � ������ res.render():

            res.render('myview.ejs', { layout: true });

//����� �� ����� ������ ������, ����� ����� ������� ����. ��������, ���� � ��� view engine ���������� � jade,
//� ���� ������� ���������� ./views/mylayout.jade, ����� ������ ��������:

            res.render('page', { layout: 'mylayout' });

//� ��������� ������ ����� �������� ���������� �����:

            res.render('page', { layout: 'mylayout.jade' });

//���� ����� ���� ����� �����������:

            res.render('page', { layout: __dirname + '/../../mylayout.jade' });

//������� ������ - ��� �������� ������������� ����������� � ����������� ����� ������ ejs:

            app.set('view options', {
                open: '{{',
                close: '}}'
            });
////////////////////////////////////////////��������� �������������///////////////////////////////////////////////

//������� ������������� Express ����� ���������� ��������� ���������� � ���������, ������ ���� ����-�������������.
//��������, ������ ����, ����� ����������� � ������������� ������ ��� ����������� ������ ������������,
//����� ������ ������������ �������� collection:

    partial('comment', { collection: comments });

//���� ������ ����� ��� ��������� ���������� �� �����, �� ����� ���������� ������ � ������ �������� ������ ������.
//������ ���� ���������� �����������:

    partial('comment', comments);

//� ������ ������������� ��������� �� ����� ��������� ����������� ��������� ����������:
//
//firstInCollection - true, ���� ��� ������ ������
//indexInCollection - ������ ������� � ���������
//lastInCollection - true, ���� ��� ��������� ������
//collectionLength - ����� ���������

//���������� ��� ��������������� ��������� ���������� ����� ����� ������� ���������, ������ ��������� ����������,
//���������� � ������������ �������������, ����� �������� � � ��������. ��� ��������, ���� �� ��������
//������������� � ������� partial('blog/post', post) � ��� ������� ��������� ���������� post, � �������������,
//��������� ��� �������, ����� ��������� ���������� user, �� user ����� ����� ����� � ������������� blog/post.
//
//�������������� ������������ �� � ������� res.partial().
//
//����������: ����������� ��������� ���������, ��� ��� ��������� ������� � 100 ��������� ��������
//��������� 100 �������������. ��� ������� ��������� ����� ����������� ������ ������ �������������,
//            � �� ������������ ���������. ��� �������� ����� ������.

///////////////////////////////////////����� �������������////////////////////////////////////////////

//����� ������������� ������������ ������������ ������������� ������������. �������� ���� � ��� ����
//������������� views/user/list.jade � ������ ���� �� �������� �������� partial('edit'), �������
//���������� ��������� ������������� views/user/edit.jade, ����� ��� partial('../messages') ��������
//� �������� views/messages.jade
//
//������� ������������� ����� ��������� ������ index-�����. ��������, �� ����� ������� res.render('users'),
//� ��� ����� ��������� ��� views/users.jade, ��� � views/users/index.jade.
//
//������������ index-����� ����� ����� �� ������������� � ��� �� ����������. ��� ������� partial('users')
//����� ���������� � ������������� ../users/index ������ ���� ����� �������� partial('index').

/////////////////////////////////////////�������������///////////////////////////////////////////////////

//���� ������������ ��������� ��������������, ����� ������������ � Express:
//Haml
//Jade
//EJS - ���������� JavaScript
//CoffeeKup - ������������ �� ������ CoffeeScript
//jQuery Templates ��� Node
//////////////////////////////////////////��������� ������/////////////////////////////////////////////////////

//��������� ������ ����� �������� ��������� Connect-������ ��������� session. ����� ��� ����� ��� ����� �����������
//��������� cookieParser, ������� ����� ������� ���� � �������� �� � req.cookies.

            app.use(express.cookieParser());
            app.use(express.session({ secret: "keyboard cat" }));

//�� ��������� ��������� session ���������� Connect-������ ��������� � ������, ������ ���������� ��������� ������ �������.
// �������� connect-redis ������������ ��������� ������ � Redis. ��� ��� �� ������������:

                var RedisStore = require('connect-redis')(express);
            app.use(express.cookieParser());
            app.use(express.session({
                secret: "keyboard cat",
                store: new RedisStore
            }));

//������ �������� req.session � req.sessionStore ����� �������� �� ���� ��������� � ����������� ��������.
//�������� req.session ������������� ����������� ��� ������. ��� ��� ����� ������������ �������:

                var RedisStore = require('connect-redis')(express);
            app.use(express.bodyParser());
            app.use(express.cookieParser());
            app.use(express.session({
                secret: "keyboard cat",
                store: new RedisStore
            }));
            app.post('/add-to-cart', function(req, res) {
                // �������� �� �������� �� ����� ��������� ��������
                // ���������� ��� ����� bodyParser()
                var items = req.body.items;
                req.session.items = items;
                res.redirect('back');
            });
            app.get('/add-to-cart', function(req, res) {
                // ����� �� ���������� ����� �� GET /add-to-cart
                // �� ����� ��������� req.session.items && req.session.items.length
                // ����� ����������� ���� ���������
                if (req.session.items && req.session.items.length) {
                    req.flash('info', 'You have %s items in your cart', req.session.items.length);
                }
                res.render('shopping-cart');
            });
//������ req.session ����� ����� ������ Session.touch(), Session.destroy(), Session.regenerate() ��� ����������� ��������.
//��� ����� ������ ���������� ��. ������������ Connect Session.

 //////////////////////////////////////////////////Request////////////////////////////////////////////////////////////////

////////////////////////////////////req.header(key[, defaultValue])

//�������� ��������� ������� key (��������������� � ��������) � �������������� ��������� �� ��������� DefaultValue:

             req.header('Host');
            req.header('host');
            req.header('Accept', '*/*');

//��������� Referrer � Referer - ������ ������, ��� ����������� ����� ��������:

            // ������ ��������� "Referrer: http://google.com"
            req.header('Referer');
            // => "http://google.com"
            req.header('Referrer');
            // => "http://google.com"

 ////////////////////////////////req.accepts(type)

//��������� ������� �� ��������� Accept, � �������� �� �� ��� ������ ���.

//����� ��������� Accept �����������, ������������ true. � ��������� ������ ����������� ������������ ����, �
//����� ��������. ����� ���������� 'html' ������� ��������� �������������� � 'text/html',
//��������� ������� ������������ MIME.

            // Accept: text/html
                req.accepts('html');
            // => true
            // Accept: text/*; application/json
            req.accepts('html');
            req.accepts('text/html');
            req.accepts('text/plain');
            req.accepts('application/json');
            // => true
            req.accepts('image/png');
            req.accepts('png');
            // => false

/////////////////////////////////////req.is(type)

//��������� �������� ������ �� ������� ��������� Content-Type � ������������ ��������� MIME-����.

            // ����� Content-Type: text/html; charset=utf-8
                req.is('html');
            req.is('text/html');
            // => true
            // ����� Content-Type ������ application/json
            req.is('json');
            req.is('application/json');
            // => true
            req.is('html');
            // => false

//� Express ����� �������������� ����������� �������� ��� ��������� �������� �������. ��������, ����� ��� ����� �������
//�������� �������� �������� �� �������� ������ ������������. ��� ����� ����� ���������������� ������� 'an image':

            app.is('an image', function(req) {
                return 0 == req.headers['content-type'].indexOf('image');
            });

//������ ������ ������������ ��������� ����� ������������ ���, ����� ��������� Content-Type ����
 //'image/jpeg', 'image/png' � �.�.

            app.post('/image/upload', function(req, res, next) {
                if (req.is('an image')) {
                    // ��������� ������������ ��������
                } else {
                    next();
                }
            });

//�� ���������, ��� ���� ����� ���������������� �� ������ �� Content-Type - �� ������ ������ ����� ��������.
//����� ����� ������������ �������������� �������. ��� �������� ��� ������ � ������������.
//��� �� ����� ��������� ������ ���:

            req.is('image/*');

//�� ����� ����� ����� ��������� ������, ��� �������� ����. ��� �������� ������ true � �������
//'application/json', � 'text/json'.

        req.is('*/json');

///////////////////////////////////req.param(name[, default])

//���������� �������� ��������� name ��� - ���� ��� �� ���������� - default.

//��������� ��������� �������� (req.params), ��������, /user/:id

//��������� ��������� ������ ������� (req.query), ��������, ?id=12

 //��������� urlencoded-��������� ���� ������� (req.body), ��������, id=12
//����� �������� urlencoded-��������� ���� �������, ������ ������������ ������ req.body.
//��� ����� �������� ��������� bodyParser().

///////////////////////////////////req.get(field, param)

//�������� �������� ���� ���������. �� ��������� - ������ ������.

        req.get('content-disposition', 'filename');
        // => "something.png"
        req.get('Content-Type', 'boundary');
        // => "--foo-bar-baz"

//////////////////////////////////////req.flash(type[, msg])

//�������� ����������� ��������� � �������.

        req.flash('info', 'email sent');
        req.flash('error', 'email delivery failed');
        req.flash('info', 'email re-sent');
        // => 2
        req.flash('info');
        // => ['email sent', 'email re-sent']
        req.flash('info');
        // => []
        req.flash();
        // => { error: ['email delivery failed'], info: [] }

//����������� ��������� ����� ����� ������������ ��������� ������. �� ��������� �������� ������ '%s':
req.flash('info', 'email delivery to _%s_ from _%s_ failed.', toUser, fromUser);

  //////////////////////////////////////////req.isXMLHttpRequest

//����� ����� ���������� req.xhr. ��������� ��������� X-Requested-With �� ������� ����,
//��� ������ ������ � ������� XMLHttpRequest:

                                req.xhr
                                req.isXMLHttpRequest

//////////////////////////////////////////Response////////////////////////////////////////////////////////////////

////////////////////////////////////////////res.header(key[, val])

//�������� ��� ������������� ��������� ������.

        res.header('Content-Length');
        // => undefined
        res.header('Content-Length', 123);
        // => 123
        res.header('Content-Length');
        // => 123

        res.charset

//������������� ��������� ��������� ���������� Content-Type. ��������, res.send() � res.render() �� ��������� �����
//"utf8", � �� ����� ���� ������ ��������� ����� ��� ��� ��������� ������:

       res.charset = 'ISO-8859-1';
        res.render('users');

//��� ����� ���, ��� �������� � ������� res.send():

        res.charset = 'ISO-8859-1';
        res.send(str);

//��� � ������� ����������� � Node res.end():

        res.charset = 'ISO-8859-1';
        res.header('Content-Type', 'text/plain');
        res.end(str);

////////////////////////////////////////////res.contentType(type)

//������������� ��������� ������ Content-Type.

        var filename = 'path/to/image.png';
        res.contentType(filename);
        // Content-Type ������ "image/png"

//����� �������� Content-Type � �������:

        res.contentType('application/json');

//��� ������ ����������� ����� (��� ������� �����):

        res.contentType('json');

////////////////////////////////////////////res.attachment([filename])

//������������� ��������� ������ Content-Disposition � "attachment". ����������� ����� ���� �������� ��� �����.

        res.attachment('path/to/my/image.png');

/////////////////////////////////////////////res.sendfile(path[, options[, callback]])

//������������ � res.download() ��� �������� ������������� �����.

        res.sendfile('path/to/my.file');

//���� ����� ��������� �������������� �������� callback, ������� ���������� � ������ ������ ��� ������ �������� �����.
//�� ��������� ���������� next(err), ������ ���� ������� callback, �� ���� ��� ������ ����, ��� ������������ ������.

            res.sendfile(path, function(err) {
                if (err) {
                    next(err);
                } else {
                    console.log('transferred %s', path);
                }
            });

//����� ����� ���������� ����� ������ fs.createReadStream(). ��������, ����� �������� ������ ������:

            res.sendfile(path, {
                bufferSize: 1024
            }, function(err) {
                // ���������...
            });

////////////////////////////////////////////res.download(file[, filename[, callback[, callback2]]])

//�������� ������ ���� ��� �������� (����� ������ �������������� �������������� ��� �����).

        res.download('path/to/image.png');
        res.download('path/to/image.png', 'foo.png');

//��� ������������ ����������:

        res.attachment(file);
        res.sendfile(file);

//����������� ����� ������ callback ������ ��� ������� ���������� res.sendfile(). ������ ���� �� ������ ��������,
//��� ���� �� ��������� ��� �� ��� �������.

        res.download(path, 'expenses.doc', function(err) {
            // ���������...
        });

//����� ����� ����������� �������� ������ ������� - callback2. � ��� �������������� ������, ��������� � �����������.
//������ � ��� �� ������� �������� �������� �����.

        res.download(path, function(err) {
            // ������ ��� ����������
        }, function(err) {
            // ������ ����������
        });

///////////////////////////////////res.send(body|status[, headers|status[, status]])

//����� res.send() - ��������������� �������� ������, ����������� ���������� ������� (��� JSON-������), ������
//(��� HTML-������), ���������� Buffer, ��� ����� �����, ������������ ������-��� (404, 500 � �.�.).
  //      ��� ��� ��� ������������:

            res.send(); // 204
        res.send(new Buffer('wahoo'));
        res.send({
            some: 'json'
        });
        res.send('<p>some html</p>');
        res.send('Sorry, cant find that', 404);
        res.send('text', {
            'Content-Type': 'text/plain'
        }, 201);
        res.send(404);

//�� ��������� ��������� Content-Type ��������������� �������������. ������ ���� �� ��� �������, ����� �������
//����� � res.send() ��� ����� ���� � ������� res.header(), ��� � ������� res.contentType(),
//�� �������������� ��������� �� ����������.

 //��������, ��� � ���� ������ ���������� ���������� ������ (���������� res.end()), �������, ���� ����� ������
//������������� �����, ��� �����, �� ����������������� res.write().

///////////////////////////////////////res.json(obj[, headers|status[, status]])

//�������� JSON-����� � ��������������� ����������� � ������-�����. ���� ����� ������� ��� ����������� JSON-API,
//������ JSON ����� �������� ����� � ������� res.send(obj) (��� ������� �� ��������, ���� ����� ������� ������ ������,
//�������������� � JSON, ��� ��� res.send(string) �������� HTML)

        res.json(null);
        res.json({
            user: 'tj'
        });
        res.json('������!', 500);
        res.json('������ �� �������', 404);

//////////////////////////////////////////res.redirect(url, status)

//�������������� �� �������� URL. ������-��� �� ��������� - 302.

        res.redirect('/', 301);
        res.redirect('/account');
        res.redirect('http://google.com');
        res.redirect('home');
        res.redirect('back');

//Express ������������ ���������� ��� ���������� - �� ��������� ��� 'back' � 'home'. ��� ���� 'back'
//�������������� �� URL, �������� � ��������� Referrer (��� Referer), � 'home'
//���������� ��������� "home" (�� ��������� "/").

/////////////////////////////////////res.cookie(name, val[, options])

//������������� �������� cookie � ������ name � val. �����: httpOnly, secure, expires, � �.�. ����� path �� ���������
//��������� ��������, ������������� � ��������� "home", ������ ��� "/".

        // "��������� ����" �� 15 �����
            res.cookie('rememberme', 'yes', {
                expires: new Date(Date.now() + 900000),
                httpOnly: true
            });

//��������� maxAge ����� �������� expire ������������ Date.now() � �������������. ����� ������� ��� ��������������
//������ ������ ����� ���������� ���:

        res.cookie('rememberme', 'yes', { maxAge: 900000 });

//����� ������� �������� ����, ���������� ��������� cookieParser, ������� ��������� ������ req.cookies:

        app.use(express.cookieParser());
        app.get('/', function(req, res) {
            // ���������� req.cookies.rememberme
        });

/////////////////////////////////////res.clearCookie(name[, options])

//������� cookie �� ����� name, ���������� ��������� expires ���� � ������� �������. ����� �� ��, ��� � res.cookie(),
//path ����� ��� �� �� ��������� ����� ��������� "home".

        res.clearCookie('rememberme');

//////////////////////////////////////res.render(view[, options[, fn]])

//�������� ������������� view � ��������� ������� options � �������������� ��������� fn. ����� ������ fn, ����� �������
//�� ���������� �������������, � ��������� �� ������ �������� ����� text/html � ����� 200.

//������������ ����� �������� �� ���������������� ���������� ����������� �������������. ��������, ���� �� ����� ��������
//��������� user � ��������� ������, �� ������ ��� � ����� �������:

            var user = {
                name: 'tj'
            };
        res.render('index', {
            layout: false,
            user: user
        });

//����� ������ options ������ ��� �������� �����. ��������, ���� �� ��������� �������� status, �� ��� �� ������
//���������� �������� �������������, � ����� ������������� ������-��� ������. ��� ����� �������, ���� ������������
//��������� ������������ �����, �������� debug ��� compress. ���� - ������ ����, ��� ����� ����������� ��������
//������ - ��� ���������� status ��� ��� ��� �����������, ��� � ��� ��������� ������-���� res.statusCode.

        res.render('error', { status: 500, message: 'Internal Server Error' });

//////////////////////////////////////////res.partial(view[, options])

//�������� �������� � ��������� �������. ���� ����� ������ �������� �� ������������� ��� ��������� ����������.

//object - ������, ������������ � �������������
//as - ��� ����������, ������� ����� ������������ ������ object ��� ������ ������� ��������� collection, ����������
//� �������������. �� ��������� - ��� �������������.
//as: 'something' - ������� ��������� ���������� something
//as: this - ����� ������������ ������� ��������� ��� �������� ������������� (this)
//as: global - ������ ������� �������� �������� �������� � ��������� ���������� �������������
//collection - ������ ��������. ��� ��� ���������� �� ����� �������������. �������� video.html ����� ������
//������ ������ video.
 //   ��������� ����������� ������������ ���� ����� � ��� ���������, ���������� ���������, ����� ����� "movie".

                partial('theatre/movie.jade', {
                    collection: movies
                });
            partial('theatre/movie.jade', movies);
            partial('movie.jade', {
                collection: movies
            });
            partial('movie.jade', movies);
            partial('movie', movies);
            // ������ �������������: moovie.director

//����� ������� ��� ��������� ���������� � 'movie' �� 'video', ����� ������������ ����� as:

            partial('movie', {
                collection: movies,
                as: 'video'
            });
            // ������ �������������: video.director

//����� �� ����� ������� movie ��������� this ������ ������ �������������, ����� ������ movie.director
//����� ���� ���������� this.director.

                partial('movie', {
                    collection: movies,
                    as: this
                });
            // ������ �������������: this.director

//�������������� ������� - ��� ���������� �������� �������� ��������� � ������-���������� (�� ����� ���� ���������)
//����������, ��������� as: global, ����� ��� ��������������� �����:

            partial('movie', {
                collection: movies,
                as: global
            });
            // ������ �������������: director

//����� �� ������ ��������� �� ������ � ����������, �� � � ������� ������ ������������ �������������:

                partial('movie', {
                    object: movie,
                    as: this
                });
            // ������ �������������: this.director
            partial('movie', {
                object: movie,
                as: global
            });
            // ������ �������������: director
            partial('movie', {
                object: movie,
                as: 'video'
            });
            // ������ �������������: video.director
            partial('movie', {
                object: movie
            });
            // movie.director
//����� ������ �������� - ��-��������� (��� �������� ���������� .length), �� ��������� ��������.
//��� ���� ��� ��������� ���������� ��� ����� ������� ���������� �� ����� �������������.

                var movie = new Movie('Nightmare Before Christmas', 'Tim Burton')
            partial('movie', movie)
            // => ������ �������������: movie.director

//���������� �� ����� ������� - ��� ����� ���������� ������� ������ ("{}" ��� "new Object"), ����� �� ��������� ��������
//� ���������� ����������� (���� �����.: � ���������� �� ����� ������ ������������ �������������). �������� � ���������
//������� ����� �������, ��� ����� ��������� ���������� "movie", ������ ��������� ��� ������� ������, ���������
//���������� ��� "director" � "title", �� ���� ��� ��������:

                var movie = {
                    title: 'Nightmare Before Christmas',
                    director: 'Tim Burton'
                };
            partial('movie', movie)

//��� ����� �������, ����� ����� ���������� ������ ������� ������, ������ ��������� ��� ������-������ ��������,
//��� ����������� �������� object, ������� ���������� ��� ������� �� ����� �����.
 //           ������������� ���� ������� ������������:

                partial('movie', {
                    locals: {
                        movie: movie
                    }
                })
            partial('movie', {
                movie: movie
            })
            partial('movie', {
                object: movie
            })

//����� �� ����� API ����� ���� ����������� �� ��������, ����� ����� ���� �������� HTML-���������� ����� AJAX
//��� WebSockets, �������� ����� ����������� ��������� ������������� �������� �� ��������:

            app.get('/users', function(req, res) {
                if (req.xhr) {
                    // �������� � ����� ������� ����� �� ���������
                    // ���������� � ������������� "user"
                    res.partial('user', users);
                } else {
                    // �������� ������ �������� �� ��������� ������ �������������
                    // ������ ������� ������ ���� ������ partial('user', users)
                    // �� � ��������� �����-�� ���������
                    res.render('users', {
                        users: users
                    });
                }
            });

////////////////////////////////////////res.local(name[, val])

//�������� ��� ���������� �������� ��������� ����������. ��� ���������� ����������� � ������ ������ ������� � ����
//����������, ������������ � ������ ���������� �������������, �������� � res.render().

            app.all('/movie/:id', function(req, res, next) {
                Movie.get(req.params.id, function(err, movie) {
                    // ������ ������������ res.locals.movie = movie
                    res.local('movie', movie);
                });
            });
        app.get('/movie/:id', function(req, res) {
            // ��������� ���������� movie ��� ����
            // , �� �� ����� �� ���������, ���� �����
            res.render('movie', {
                displayReviews: true
            });
        });

/////////////////////////////////////////res.locals(obj)

//��������� ��������� ��������� ���������� � ������� ������� ������� obj. ��������� ������������:

            res.local('foo', bar);
        res.local('bar', baz);
        res.locals({
            foo: bar,

        });

/////////////////////////////////////////////Server//////////////////////////////////////////////////////////////////

//////////////////////////////////////////app.set(name, val)

//���������� ��������� ���������� name � �������� val, ��� �������� �������� ��������� name, ���� val �����������:

        app.set('views', __dirname + '/views');
        app.set('views');
        // => ...path...
//����� ����� ��������� �� �������� ����� appsettings:

         app.settings.views
        // => ...path...

/////////////////////////////////////////app.enable(name)

//������������� ��������� name � true:

        app.enable('some arbitrary setting');
        app.set('some arbitrary setting');
        // => true
        app.enabled('some arbitrary setting');
        // => true

/////////////////////////////////////////app.enabled(name)

//���������, ����� �� true ��������� name:

         app.enabled('view cache');
        // => false
        app.enable('view cache');
        app.enabled('view cache');
        // => true

///////////////////////////////////////app.disable(name)

//���������� ��������� name � false:

        app.disable('some setting');
        app.set('some setting');
        // => false
        app.disabled('some setting');
        // => false

/////////////////////////////////////app.disabled(name)

//���������, ����� �� false ��������� name:

        app.enable('view cache');
        app.disabled('view cache');
        // => false
        app.disable('view cache');
        app.disabled('view cache');
        // => true

///////////////////////////////////app.configure(env|function, function)

//������ �������-������� callback ��� ��������� env (��� ��� ���� ���������):

        app.configure(function() {
            // ����������� ��� ���� ���������
        });
        app.configure('development', function() {
            // ����������� ������ ��� ��������� 'development'
        });

///////////////////////////////////app.redirect(name, val)

//��� res.redirect() �� ����� ���������� ���������� (� ������� ��������� ����������), ��� �������� ����:

    app.redirect('google', 'http://google.com');

//������ � �������� �� ����� �������:

        res.redirect('google');

//����� ����� ������ ������������ ����������:

        app.redirect('comments', function(req, res) {
            return '/post/' + req.params.id + '/comments';
        });

//������ ����� ������� ��������� � �������� ����������� ���������� � ������������ � ���������� �������. ���� �� �������
//������� � ������� GET /post/12, ��� �������� ����� /post/12/comments.

        app.get('/post/:id', function(req, res) {
            res.redirect('comments');
        });

//� ������ �������������� ���������� res.redirect() ����� ��������� ����� ������������ ����������. ��������,
//���� ����-���������� ������������ � /blog, ��������� ������ ������� �������� � /blog/posts:

        res.redirect('/posts');

////////////////////////////////////////app.error(function)

//��������� �������-���������� ������, ������� ������ ���������� ����� ��������� ��� ����������, ��� �������� ����.
//��������, ��� ����� ������������� ��������� ������������ ������, ����� ���������� ������� ����� ������,
//������ ����� ������ �������� next(), ���� �� �� ����� ��� ������������ ����������:

        app.error(function(err, req, res, next) {
            res.send(err.message, 500);
        });

//////////////////////////////////////////app.helpers(obj)

//������������ ����������� ��������� �������������.

            app.helpers({
                name: function(first, last) {
                    return first + ', ' + last
                },
                firstName: 'tj',
                lastName: 'holowaychuk'
            });

//���� ������������� ����� ������ ������������ ����������� firstName � lastName � �������� name().

//        <%= name(firstName, lastName) %>
//
//����� Express ������������� �� ��������� ��������� ��������� ����������:
//
//settings - ������ �������� ����������
//layout(path) ������� ������ ����� ������� �������������
//���� ����� ����� ��������� app.locals().

/////////////////////////////////////////app.dynamicHelpers(obj) {#app.dynamic-helpers}

//������������ ������������ ��������� �������������. ������������ ��������� ������������� - ��� ������ �������,
//����������� res, req � ����������� � ��������� ���������� Server ����� ���, ��� ����������� ����� �������������.
//������������ �������� ����� ������� ���������� ��������� ����������, � ������� ������� �������������.

            app.dynamicHelpers({
                session: function(req, res) {
                    return req.session;
                }
            });

//������ ��� ���� ������������� ����� ����� ������ � ������ - ������ ������ ����� �������� �� ����� session.name � �.�.:


      //  <%= session.name %>
//////////////////////////////////////app.lookup

//���������� ����������� ��������, ��������� � �������� ����� path.

    //��������, ���� ����� ��������:

        app.get('/user/:id', function() {});
        app.put('/user/:id', function() {});
        app.get('/user/:id/:op?', function() {});

//����� ������������ ���������� lookup ��� �������� ����, ����� �������� ������. ��� ����� ����������� ��� �����������
//����� �������� ������, ����������� �� Express.

        app.lookup.get('/user/:id');
        // => [Function]
        app.lookup.get('/user/:id/:op?');
        // => [Function]
        app.lookup.put('/user/:id');
        // => [Function]
        app.lookup.all('/user/:id');
        // => [Function, Function]
        app.lookup.all('/hey');
        // => []

//����������� ��� app.lookup.HTTP_�����() �������� ������ app.HTTP_�����() - ��� ��������� callback. ����� ��� ����������.
//�������� ��������� ������������:

        app.lookup.get('/user');
        app.get('/user');

//������ ������������ ������� ����������� ��������� ����������:

         var fn = app.get('/user/:id/:op?')[0];
        fn.regexp
        // => /^\/user\/(?:([^\/]+?))(?:\/([^\/]+?))?\/?$/i
        fn.keys
        // => ['id', 'op']
        fn.path
        // => '/user/:id/:op?'
        fn.method
        // => 'GET'

////////////////////////////////////////////app.match

//���������� ������ �������-�������, ������������� �� �������� URL, ������� ����� ��������������� �������, � �.�.
//��� ����� �����������, ����� ������ ����� �������� ����� ����������� ��������.

  //  ��������, ���� ��������� ��������:

        app.get('/user/:id', function() {});
        app.put('/user/:id', function() {});
        app.get('/user/:id/:op?', function() {});

//����� match ��� GET ������ ��� �������, ��������� :op � ��������� �������� �������������� ��������.

        app.match.get('/user/1');
    // => [Function, Function]

//� ��������� ����� ������ ������ ���� ������� ��� /user/:id/:op?.

        app.match.get('/user/23/edit');
        // => [Function]

//����� ������������ � all(), ���� ��� �� ����� HTTP-�����

        app.match.all('/user/20');
        // => [Function, Function, Function]

//������ ������� ���������� ���������� ����������:

        var fn = app.match.get('/user/23/edit')[0];
        fn.keys
        // => ['id', 'op']
        fn.params
        // => { id: '23', op: 'edit' }
        fn.method
        // => 'GET'

//////////////////////////////////////app.mounted(fn)

//��������� ������� fn, ������� ����������, ����� ���� Server ���������� � Server.use().

            var app = express.createServer(),
            blog = express.createServer();
        blog.mounted(function(parent) {
            //parent  - ��� app
            // this - ��� blog
        });
        app.use(blog);

//////////////////////////////////////app.register(ext, exports)

//����������� �������� �������������� �������� (exports) ������������� � ����������� ext ����� �������.

         app.register('.html', require('jade'));

//����� ��� ����� ����������� � ������ � ������������, ��� ������� �� ��������� � �������� � ����������� ����� �������.
//����� ������ - Haml.js, ������� ��������������� npm-�� ��� "hamljs", � �� ����� ���������������� ��� �� �������
//".haml", � �� ".hamljs", ��� ���� �� �� ���������:

         app.register('.haml', require('haml-js'));

//����� ���� app.register ����� �������� � ������ � ���������������, API ������� �� ������������� ������������� Express.
// � ������� ���� �� ����������� ���������� .md � ���������� markdown-������. ��������� � HTML ����� ������ ������
//��� - ��� ������� ������������������ - � ����� ������������ ����������� ���������� ���� "{name}".

            app.register('.md', {
                compile: function(str, options) {
                    var html = md.toHTML(str);
                    return function(locals) {
                        return html.replace(/\{([^}]+)\}/g, function(_, name) {
                            return locals[name];
                        });
                    };
                }
            });

//////////////////////////////////////////////app.listen([port, host])

//������ ����� ������� app � ������ host:port. ���� �� ��������� 3000, ���� - INADDR_ANY.

        app.listen();
        app.listen(3000);
        app.listen(3000, 'n.n.n.n');

//�������� port ����� ���� ����� �������, �������������� ����� ���� � unix domain socket:

        app.listen('/tmp/express.sock');

//������ ���������:

    //    $ telnet /tmp/express.sock

//GET / HTTP/1.1
//HTTP/1.1 200 OK
//Content-Type: text/plain
//Content-Length: 11
//Hello World


//��������� ������
//��������� ������ �������� � Express ��� ��������� �� ��� ������:
//
//express-resource ������������ ��������� �������������
//express-messages ��������� ����������� �����������
//express-configure ��������� ����������� ������������ (�������� ������ �� Redis, � �.�.)
//express-namespace - ������������ ���� � ���������
//express-expose ������� ���������� JS-���� � ���������� ����� ����������
//express-params - ���������� app.param()
//express-mongoose - ������ ��� �������� ���������� ����������� �������� Mongoose (ORM ��� MongoDB)