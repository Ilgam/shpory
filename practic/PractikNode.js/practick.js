//////////////////////

// ////////////////////////////////////СОЗДАНИЕ КЛИЕНТ СЕРВЕР НА TCP//////////////////////////
//
// ЭТО СЕРВЕР/////////////////////////
//
//var  net = require("net");
//var server = net.createServer(function(socket){ // функция будет вызываться для каждого нового соеденения
//    console.log('novoe coedinenie')
//    socket.setEncoding('utf8');
//    console.log(socket.remoteAddress + " " + socket.remoteFamily + " " + socket.remotePort + socket.localAddress)
//    socket.on("data", function(data){
//        socket.write(data.toUpperCase())
//        if(data){
//            socket.end('bay bay');
//            console.log(data);
//        }
//    })
//    this.getConnections(function(error, count) {
//        console.log(count);
//    });
//    socket.on('close', function(){ // если удаленное соеденнение закроется мы регистрируем это событие
//                                  // т.е. если закрывается вызываем функцию
//        console.log("Closer stream")
//    })
//})
//server.listen(8000)
//console.log("listening on 8000 port")
////
//ЭТО КЛИЕНТ/////////////////////////

//var net = require('net'),
//    socket = new net.Socket();
//socket.setEncoding('utf8');
//// установка соеденения с сервером
//socket.connect('8000','localhost',function(){
//    console.log('Coedinen c cerverom', socket.destroyed)
//})
//// подготовка ввода данных с терминала
//process.stdin.resume();
//
//process.stdin.on('data', function(data){
//    socket.write(data);
//})
////при получении данных
//socket.on('data', function(data){
//    console.log(data)
//})
//// при закрытии сервера
//socket.on('close', function(){
//    console.log('Coedinenie zakonsheno' , socket.destroyed)
//})
//
//////////////////////////////РАБОТА С ФАЙЛАМИ//////////////////////////
//,ПЕРЕМСЕНОВАТЬ ФАЙЛЫ В ДИРЕКТОРИИ
//var fs = require('fs'),
//    path = require('path');
//fs.readdir('Mydir', function(err, files){
//     if(err) throw err
//    process.chdir('Mydir')
//    files.forEach(function(file){
//        var rashir = path.extname(file);
//        fs.rename(file, path.basename(file,rashir) + '_old' + rashir )
//    })
//});
//var fs = require('fs');
//
//ЕЩЕ ПРИМЕР
//var fs = require('fs')
//fs.writeFile('test.txt','data', function(err){
//    if (err) throw err;
//    fs.rename('test.txt', 'new.txt',function(err){
//        if (err) throw err;
//        fs.unlink('new.txt',function(err){
//            if (err) throw err;
//        })
//    })
//})
//  ПРИМЕР ВЫВЕСТИ ФАИЛ В КОНСОЛЬ
//var fs = require("fs");
//var buf = new Buffer(1024);
//console.log("Going to open an existing file");
//fs.open('test.txt', 'r+', function(err, fd) {
//    console.log("File opened successfully!");
//    console.log("Going to read the file");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//        if (err) throw err;
//        console.log(bytes + " bytes read");
//        // Print only read bytes to avoid junk.
//        if(bytes > 0){
//            console.log(buf.slice(0, bytes).toString());
//        }
//    });
//});
//
//ЭТО УВИДИЛ НА САЙТЕ ВЫВОДИТ ИНФОРМАЦИЮ О ПЕРЕДАННОЙ И ПОЛУЧЕННОЙ ИНФОРМАЦИИИ
//
//const net = require("net");
//
//var server = net.createServer(function (c) {
//    c.on('close', function () {
//        // add to the totals
//        server.bytesSent += c.bytesWritten;
//        server.bytesReceived += c.bytesRead;
//    });
//
//    c.write('Hello world!\r\n');
//    c.pipe(c);
//    c.end();
//});
//
//server.bytesReceived = 0;
//server.bytesSent = 0;
//
//server.listen(8000);
//
//var time = process.hrtime();
//setInterval(function (){
//    process.stdout.write('\u001B[2J\u001B[0;0f');
//    var diff = process.hrtime(time)[0] + process.hrtime(time)[1]/1000000000;
//    var bpsSent = Math.round(server.bytesSent/diff) || 0;
//    var bpsReceived = Math.round(server.bytesReceived/diff) || 0;
//    console.log("Running node.js %s on %s-%s", process.version, process.platform, process.arch);
//    console.log("Memory usage: %d bytes", process.memoryUsage().rss);
//    console.log("Uptime: %ds", Math.round(process.uptime()));
//    console.log("Open connections: %d", server.connections);
//    console.log("In: %d bytes (%d bytes/s)", server.bytesReceived, bpsReceived);
//    console.log("Out: %d bytes (%d bytes/s)", server.bytesSent, bpsSent);
//}, 100);