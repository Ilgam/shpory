///////////////////////////////socet �������� � ������(������) Duplex///////////////////////////////////////////////

socket //������ ������  socet ��� �������� ���� ����� � ������ net
       //�������� �������� � ������(������) Duplex ������ stream
var  net = require("net");
var server = net.createServer(function(socket){
})
console.log(net.Socket.prototype) // ������ ��� �������� �������
new net.Socket(options) //��� �������� ������ ������ Socket
        //options
        //{
        //    fd: null,
        //    allowHalfOpen: false, // ���� true  �� ����� ��������� �������� ����� ������ �� �� ��� ������
        //                          // ����� ��� ������� ����� ���������  socket.end()
        //    readable: false,
        //    writable: false
        //}
var server = net.createServer(function(socket){ //�� ��������� ����������� ��� �����
})
//��� �������
//Event: 'close'   ��������� ���� ��������� ���������� �����������,
//                 ���� ������� � ��������� ���������� ��   ����� ���������� ������ err
//                 ����� ��� �� ���� ������� socket.end() ����� �� ���������� ������ err;
//Event: 'connect' ������������  ����� socket.connect(options[, connectListener])
//Event: 'data'    �� �������� ��� ����� ����� ������ ������ ����� ��� �����(Buffer or String)(���� �����)
//                 �������� �������������� ��� ���  socket.setEncoding("utf8"); � ��������� ������ ����� ������ �����
//Event: 'drain'     ������������  �����  socket.write()
//Event: 'end'     ��� ���� ���������� ������� allowHalfOpen:true �� ����� ��� ��������� ����� �������   socket.end()
//Event: 'error'   �� ��� ������� ����� ������ ������������ ��� �������
//Event: 'lookup'  �� ����
//Event: 'timeout' ������������ ����� socket.setTimeout()
socket.address() -  //��������� ������� � port, family, and address : { port: 12346, family: 'IPv4', address: '127.0.0.1' }
socket.bufferSize -// �� ������ �� ����� ���������� ������ ������ �� ����� ������ �� ��������
socket.bytesRead   // ������� ���� ���������
socket.bytesWritten // ������� ���� ���������
socket.connect(options, connectListener) // ����������e � �������
// ����� ����� ����
// port: ����
// host: ���� �� ���������'localhost'.
// localAddress: ��������� ������
// localPort: ��������� ����
// family : ������ IP stack. �� ��������� 4.
// hints:  ��� ��� ������� � dns. ����������  0.
// lookup : �� ����
//������ net.connect
            // ������ �������
            var net = require('net'),
                socket = new net.Socket();
            socket.setEncoding('utf8');
            // ��������� ���������� � ��������
            socket.connect('8000','localhost',function(){
                console.log('Coedinen c cerverom')
            })
            // ���������� ����� ������ � ���������
            process.stdin.resume();
            process.stdin.on('data', function(data){
                socket.write(data);
            })
            //��� ��������� ������
            socket.on('data', function(data){
                console.log(data)
            })
            // ��� �������� �������
            socket.on('close', function(){
                console.log('Coedinenie zakonsheno')
            })
socket.connecting // �� ���� �� ���� ���� ���� ��������� socket.connect(options[, connectListener])
                  // � ��� �� ������� �� ����� ���������� ��� ������
socket.destroy(exception) // ������ ����������� ��� ������ (��������� ����������)
            //������
            var net    = require('net')
                , Socket = net.Socket;
            var socket = new Socket();
            socket.on('error', function(exception) {
                console.log('SOCKET ERROR');
                socket.destroy();
            })
            socket.on('close', function(exception) {
                console.log('SOCKET CLOSED');
            })
            socket.connect(9000, 'localhost')
socket.destroyed // ����� ��������� ���� �� ����� �������� ��� ��� (����  true �� ������ ����, ���� false �� ���  )
socket.end(data, encoding) // ������������ ���������(data ������ ������� ���������� � ����� �����������)
            //������
            socket.on("data", function(data){
                socket.write(data.toUpperCase())
                if(data){
                    socket.end('bay bay'); // � ������ ������� ������ ���������� �������
                    console.log(data);
                }
            })

socket.localAddress // ��������� � ��������� ��������� �����
            //������
            var net = require("net")
            net.createServer(function (socket) {
                console.log(socket.localAddress)
                socket.end(socket.localAddress)
            }).listen(8000)

socket.localPort // ��������� � ��������� ��������� ����
            //������
            var net = require("net")
            net.createServer(function (socket) {
                console.log(socket.localPort)
                socket.end(socket.localPort)
            }).listen(8000)
socket.pause() // ������ ���� � �������� ������ ���� �� ��������� socket.resume()
socket.resume() // ������������ �������� ������ �����  socket.pause(
socket.ref()     // �� ����� ��� ��� ������
socket.unref() // �� ����� ��� ��� ������
socket.remoteAddress  // ������ IP
socket.remoteFamily // ������ ������ IP stack.
socket.remotePort  // ������ ����
socket.setEncoding([encoding]) // �������� (��� ����� ������������ ��� �������� �� ������ � utf-8)
            // ������
            var net = require('net'),
                socket = new net.Socket();
            socket.setEncoding('utf8');
socket.setKeepAlive(enable, initialDelay) // �� ���� ��� ���
socket.setNoDelay(noDelay)              //��������� �������� �����
socket.setTimeout(timeout, callback)    // ��� �� ������
socket.write(data, encoding, callback) //- ��������� ������
            //������
            socket.on("data", function(data){
                socket.write(data.toUpperCase()) // ��������� ������ � ����� �������� ��������
            })

