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



