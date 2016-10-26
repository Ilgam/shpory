//////////////////////////////////////EventEmitter//////////////////////////////////////

EventEmitter// - ����� ������������ ����� ��� ���� �������
//  �� ������� ���� ����� on ������� ������������ �������� ��� �������
//  � �� ���� ��� ������
objEvent.on('reqevent', function(reqevent){ //�������� .on(��� �������, ������� ����������)
    console.log(reqevent)
})
// ����� ������� ����� ����������� � ��� ��� ����� ������� � ��� ������� � ������� �����������
objEvent.emit('reqevent', {from: 'Client1'}) // ���������� ������� � �������� ������ ��������.
                                             // emit - ��� ������ ��������� �������. ������ ������� ������������ ��������
                                             // ������� data -  ��� ����� �������� ������, ����������� ������� �������������

                        //��� ������

                    var EE = require('events').EventEmitter,      // ��� ��� ����������� ��� ������
                                                                   // ����������� ����� ���(�������� ������)
                        objEvent = new EE;
                    objEvent.on('reqevent', function(reqevent){
                        reqevent.isOk = true
                    })
                    objEvent.on('reqevent', function(reqevent){
                        console.log(reqevent)
                    })
                    objEvent.emit('reqevent', {from: 'Client1'})
                    objEvent.emit('reqevent', {from: 'Client2'})
                    //���������
                    //{ from: 'Client1', isOk: true }
                    //{ from: 'Client2', isOk: true }

                         // ��� � ����� ���� ������������, ���� �������
                    var EE = require('events').EventEmitter,
                        objEvent = new EE;
                    function Data(name){
                        this.name = name
                    };
                    try {Data.prototype = Object.create(EE.prototype)} catch(e) {
                        console.log('������ ' + e.name + ":" + e.message + "\n" + e.stack)
                    }
                    var dataobject = new Data;

                    dataobject.on('reqevent', function(reqevent){
                        reqevent.isOk = true
                    })
                    dataobject.on('reqevent', function(reqevent){
                        console.log(reqevent)
                    })
                    dataobject.emit('reqevent', {from: 'Client1'})
                    dataobject.emit('reqevent', {from: 'Client2'})
                    console.log(dataobject)
                           //���������
                        //
                        //{ from: 'Client1', isOk: true }
                        //{ from: 'Client2', isOk: true }
                        //EventEmitter {
                        //    name: undefined,
                        //        _events: { reqevent: [ [Function], [Function] ] },
                        //    _eventsCount: 1 }




                   //�������� � socket

var  net = require("net");
var server = net.createServer(function(socket){           // ��� socket ����� ����� ����� ��������� ������ �� EventEmitter
    console.log(socket.remoteAddress + " " + socket.remoteFamily + " " + socket.remotePort)
    socket.on("data", function(){              // ��� ��� ���������������� ������ ��� ������� data( ������)
        // �� ��� ������������ ������� dat�  ����� ��� �������� ������
    })
    socket.on("close", function(){ // ���� ��������� ����������� ��������� �� ������������ ��� �������
        // �.�.  ���� ����������� �������� �������
    })
})



