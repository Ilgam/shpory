
//////////////////////////////TCP sever////////////////////////////////////////////

var  net = require("net");
var server = net.createServer(function(socket){ // ������� ����� ���������� ��� ������� ������ ����������
    console.log(socket.remoteAddress + " " + socket.remoteFamily + " " + socket.remotePort)
    socket.on("data", function(data){
        socket.write(data)
    })
    socket.on("close", function(){ // ���� ��������� ����������� ��������� �� ������������ ��� �������
        // �.�. ���� ����������� �������� �������
        console.log("Closer stream")
    })
})
server.listen(8000) // ��������� ������ (�� ����� �� ����� )

//////////////var server = net.createServer //////////////////////
//��� ������� � ������ server
//Class: net.Server
//������� ������������ �� ����� Server ������ net
//  Event: 'close'
// Event: 'connection'
// Event: 'listening'
// Event: 'error'
//������ ������
server.address()  //��������� ������� � port, family, and address : { port: 12346, family: 'IPv4', address: '127.0.0.1' }
                  //������ ��������� ����!!
            //������
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
server.close(callback) // ��������� ����������
server.getConnections(callback) // ������� ���������� ���������� � ���� ��� ���������  err(������) and count(����)
            //������
            server.getConnections(function(error, count) {
                console.log(count);
            });
server.listen(port)  // ���� ������ ��������  server.listen �� ��������� ������
            //������
            server.listen(8000)
server.listen(options, callback) // �� ������ � ��������� � �������
//options
//  port <Number> - Optional.
//  host <String> - Optional.
//  backlog <Number> - Optional.
//  path <String> - Optional.
//  exclusive <Boolean> - Optional.
            //������
            server.listen({
                host: 'localhost',
                port: 80,
                exclusive: true
            });
            //������
            server.listen(function(){
                console.log('opened server on', server.address());
            });
server.ref() // �� ����
server.unref() // �� ����
///////////////////////net.connect//////////////////////////////
net.connect //��� ������� ������� ������� � ������� ������ ����������  net.Socket � ������������� ���������� �����
//socket.connect
            //������
            const net = require('net');         // �������� ��� ���� ��� ������ ������ �� �� ����������
            const client = net.connect({port: 8124}, function(){
                // 'connect' listener
                console.log('connected to server!');
                client.write('world!\r\n');
            });
            client.on('data', function(data) {
                console.log(data.toString());
                client.end();                     // ���� ������ ������������� ���������
            });
            client.on('end', function() {           //   �� ����������� ��� �������
                console.log('disconnected from server');
            });
net.connect //������ ���������� �����������
net.connect(path, connectListener)
            //������
            const client = net.connect({path: '/tmp/echo.sock'},function(){
            });

net.connect(port, host, connectListener)
net.createConnection(/*argument*/) //����� ���� ����� ��� � net.connect (������� �� ��������)
net.createConnection(port, host, connectListener)
net.createConnection(path, connectListener)
            //������
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
