
//////////////////////////////TCP sever////////////////////////////////////////////

var  net = require("net");
var server = net.createServer(function(socket){ // функция будет вызываться для каждого нового соеденения
    console.log(socket.remoteAddress + " " + socket.remoteFamily + " " + socket.remotePort)
    socket.on("data", function(){
        socket.write(data)
    })
    socket.on("close", function(){ // если удаленное соеденнение закроется мы регистрируем это событие
        // т.е. если закрывается вызываем функцию
        console.log("Closer stream")
    })
})
server.listen(8000) // ЗАПУСКАЕТ СЕРВЕР (на таком то порте )

//////////////var server = net.createServer //////////////////////
//все события и классы server
//Class: net.Server
//события нанакладомые на класс Server модуля net
//  Event: 'close'
// Event: 'connection'
// Event: 'listening'
// Event: 'error'
//Классы модуля
server.address()  //возвращет обънект с port, family, and address : { port: 12346, family: 'IPv4', address: '127.0.0.1' }
                  //вернет случайный порт!!
            //пример
            var server = net.createServer(function(socket) {
                socket.end('goodbye\n');
            }).on('error', function(err) {
                // handle errors here
                throw err;
            });
            // grab a random port.
            server.listen(function(){
                console.log('opened server on', server.address());
            });
server.close(callback) // Закрывает соединение
server.getConnections(callback) // Считает количество соединений у него два аргумента  err(ошибка) and count(счет)
            //пример
            server.getConnections(function(error, count) {
                console.log(count);
            });
server.listen(port)  // есть разные варианты  server.listen Он запускает сервер
            //пример
            server.listen(8000)
server.listen(options, callback) // он бывает с колбэками и опциями
//options
//  port <Number> - Optional.
//  host <String> - Optional.
//  backlog <Number> - Optional.
//  path <String> - Optional.
//  exclusive <Boolean> - Optional.
            //пример
            server.listen({
                host: 'localhost',
                port: 80,
                exclusive: true
            });
            //пример
            server.listen(function(){
                console.log('opened server on', server.address());
            });
server.ref() // не знаю
server.unref() // не знаю
///////////////////////net.connect//////////////////////////////
net.connect //Это функция фабрика которая и создает объект консруктор  net.Socket и одновренменно активирует метод
//socket.connect
            //пример
            const net = require('net');         // костанта это типа вар только запрет на ее изменнение
            const client = net.connect({port: 8124}, function(){
                // 'connect' listener
                console.log('connected to server!');
                client.write('world!\r\n');
            });
            client.on('data', function(data) {
                console.log(data.toString());
                client.end();                     // если сервер принудительно отключить
            });
            client.on('end', function() {           //   то ативируется это событие
                console.log('disconnected from server');
            });
net.connect //бывает различными настройками
net.connect(path, connectListener)
            //пример
            const client = net.connect({path: '/tmp/echo.sock'},function(){
            });

net.connect(port, host, connectListener)
net.createConnection(/*argument*/) //вроде тоже самое что и net.connect (рпзница не очивидна)
net.createConnection(port, host, connectListener)
net.createConnection(path, connectListener)
            //пример
            const net = require('net');
            const client = net.createConnection({port: 8124}, function() {
                //'connect' listener
                console.log('connected to server!');
                client.write('world!\r\n');
            });
            client.on('data', function(data) {
                console.log(data.toString());
                client.end();
            });
            client.on('end', function(){
                console.log('disconnected from server');
            });
