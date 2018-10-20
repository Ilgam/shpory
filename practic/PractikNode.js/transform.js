//domain отличный перехватчик событий он создает как бы обертку, в которой перехватыаются все
//ошибки очень удобный порфессиональный модкль.
//Если проще то он состоит из
//var domain = require('domain'),
//    serverDomain = domain.create();
//serverDomain.on('error', function(err){
//    console.log('Server error', err);
//})
//serverDomain.run(function(){
//..тут fs, http, net и тд
//})
//вот сокращенный вариант
var domain = require('domain'),
    serverDomain = domain.create();
serverDomain.on('error', function(err){
    console.log('Server error', err);
})

serverDomain.run(function(){
    var http = require('http');
    var fs = require('fs');
    var server = http.createServer(function (req, res) {
        var stream = fs.createReadStream(__dirname + '/data.txt');
        stream.pipe(res);
        res.on('error', function(err){
            res.statusCode = 500;
            console.log(err)
        })
        res.on('close', function(){
            server.destroy();
        })
    });
    server.listen(80);
})

// тут более развернутый

var domain = require('domain'),
    serverDomain = domain.create(),
    server;
serverDomain.on('error', function(err){
    console.log('Server error', err);
    if(server){
        server.close()
    }
})

serverDomain.run(function(){
    var http = require('http'),
        fs = require('fs');
    server = http.createServer(function(req,res){
        var rqrsDomain = domain.create();
        rqrsDomain.add(req);
        rqrsDomain.add(res);
        rqrsDomain.on('error', function(err){
            res.statusCode = 500;
            req.end('Sorry' + err);
            console.log('Error for req = ', req);
            serverDomain.emit('error', err)
        })
        var stream = fs.createReadStream(__dirname + '/data.txt');
        stream.pipe(res);
        res.on('close', function(){
            server.destroy();
        })

    })
    server.listen(80, "127.0.0.1")

})








//
//var http = require('http');
//var fs = require('fs');
//var server = http.createServer(function (req, res) {
//    var stream = fs.createReadStream(__dirname + '/test.txt');
//    stream.pipe(res);
//    res.on('error', function(err){
//        res.statusCode = 500;
//        console.log(err)
//    })
//    res.on('close', function(){
//        server.destroy();
//    })
//});
//server.listen(80);
//













//
//var http = require('http'),
//    url = require('url'),
//    server = new http.Server(function(req,res) {
//        res.sendDate
//    })
//server.listen(80)
////
//
//http://127.0.0.1:80/echo?massage=helow
//var http = require('http'),
//    url = require('url'),
//    server = new http.Server(function(req,res){
//        console.log(req.method, req.url)
//        var urlPars = url.parse(req.url, true)
//        console.log(urlPars);
//        if(urlPars.query.massage && urlPars.pathname == '/echo'){
//            res.statusCode =200;
//            //res.writeHead(200,'OK',{
//            //    'Counter-Type': 'text/plain'
//            //});
//            res.setHeader('Cache - control', 'no-cach')
//            res.write("Hellow world!");
//            res.end(urlPars.query.massage )
//        } else {
//            res.statusCode = 404;
//            res.end('Error')
//        }
//        res.end();
//    });
//server.listen(80)
//var emit_old = server.emit;
//server.emit = function(e){
//    console.log(e);
//    emit_old.apply(this,arguments);
//}
//
//

//var http = require('http'),
//    server = new http.Server(function(req,res){
//        res.setHeader('Cache - control', 'no-cach')
//        res.end("Hellow world!" )
//
//    });
//server.listen(80)
//
//
//
//
//var http = require('http'),
//    url = require('url'),
//    server = new http.Server(function(req,res){
//        console.log(req.method, req.url)
//        var urlPars = url.parse(req.url, true)
//        console.log(urlPars);
//        if(urlPars.query.massage && urlPars.pathname == '/echo'){
//            res.statusCode =200;;
//            res.end('Ok')
//        } else {
//            res.statusCode = 404;
//            res.end('Error')
//        }
//        res.end();
//    });
//server.listen(80)








//var http = require('http');
//http.createServer(function(req,res){
//    res.writeHead(200,{
//        'Counter-Type': 'text/plain'
//    });
//    res.write("Hellow world2!");
//    res.end();
//}).listen('80')