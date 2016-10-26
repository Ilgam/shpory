//////////////////////////////////////EventEmitter//////////////////////////////////////

EventEmitter// - общий родительский класс для всех стримов
//  на котором есть метод on который регистрирует колбэкки для событий
//  у ЕЕ есть два метода
objEvent.on('reqevent', function(reqevent){ //подписка .on(имя события, функция обработчик)
    console.log(reqevent)
})
// можно вызвать много подписчиков и все они будут вызваны в том порядке в котором обозначенны
objEvent.emit('reqevent', {from: 'Client1'}) // инициирует события и передает данные подписки.
                                             // emit - это ручная инициация события. обычно события инициируются например
                                             // события data -  это когда приходят данные, инициирется событие автоматически

                        //вот пример

                    var EE = require('events').EventEmitter,      // вот это оконструтор его методы
                                                                   // наследуются дохуя кто(например потоки)
                        objEvent = new EE;
                    objEvent.on('reqevent', function(reqevent){
                        reqevent.isOk = true
                    })
                    objEvent.on('reqevent', function(reqevent){
                        console.log(reqevent)
                    })
                    objEvent.emit('reqevent', {from: 'Client1'})
                    objEvent.emit('reqevent', {from: 'Client2'})
                    //Результат
                    //{ from: 'Client1', isOk: true }
                    //{ from: 'Client2', isOk: true }

                         // тут я решил тожу унаследовать, ради прикола
                    var EE = require('events').EventEmitter,
                        objEvent = new EE;
                    function Data(name){
                        this.name = name
                    };
                    try {Data.prototype = Object.create(EE.prototype)} catch(e) {
                        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack)
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
                           //результат
                        //
                        //{ from: 'Client1', isOk: true }
                        //{ from: 'Client2', isOk: true }
                        //EventEmitter {
                        //    name: undefined,
                        //        _events: { reqevent: [ [Function], [Function] ] },
                        //    _eventsCount: 1 }




                   //например с socket

var  net = require("net");
var server = net.createServer(function(socket){           // ВОТ socket кроме своих фишек наследует методы от EventEmitter
    console.log(socket.remoteAddress + " " + socket.remoteFamily + " " + socket.remotePort)
    socket.on("data", function(){              // вот тут зарегистрировали колбэк для события data( данные)
        // то ест инициируется события datа  когда они приходят данные
    })
    socket.on("close", function(){ // если удаленное соеденнение закроется мы регистрируем это событие
        // т.е.  если закрывается вызываем функцию
    })
})



