///////////////////////////////socet дочерним к классу(потоку) Duplex///////////////////////////////////////////////

socket //объект класса  socet его прототип ожно найти в модуле net
       //является дочерним к классу(потоку) Duplex модуля stream
var  net = require("net");
var server = net.createServer(function(socket){
})
console.log(net.Socket.prototype) // узнать все свойство объекта
new net.Socket(options) //так делается объект класса Socket
        //options
        //{
        //    fd: null,
        //    allowHalfOpen: false, // если true  то сокет останется открытым лджля записи но не для чтения
        //                          // чтобы его закрыть нужно прописать  socket.end()
        //    readable: false,
        //    writable: false
        //}
var server = net.createServer(function(socket){ //он восновном приминяется вот сдесь
})
//все события
//Event: 'close'   возникает если удаленное соединения закрывается,
//                 если контрол ц обрубаешь соединение то   будет вызываться объект err
//                 нужно где то явно ставить socket.end() чтобы не вызываться объект err;
//Event: 'connect' инициируется  когда socket.connect(options[, connectListener])
//Event: 'data'    Не забываем что будет кусок данных класса буфер или строк(Buffer or String)(чаще буфер)
//                 инкодинг утснавливается вот так  socket.setEncoding("utf8"); в притивном случае будут класса бувер
//Event: 'drain'     инициируется  когда  socket.write()
//Event: 'end'     это кгда соединение открыто allowHalfOpen:true то нужно его закрывать явным образом   socket.end()
//Event: 'error'   Ну это понятно когда ошибка иницииркетяс это событие
//Event: 'lookup'  не знаю
//Event: 'timeout' инициируется когда socket.setTimeout()
socket.address() -  //возвращет обънект с port, family, and address : { port: 12346, family: 'IPv4', address: '127.0.0.1' }
socket.bufferSize -// не уверен но можно установить размер буфера он будет влиять на скорость
socket.bytesRead   // сколько байт прочитано
socket.bytesWritten // сколько байт выведенно
socket.connect(options, connectListener) // подключениe к серверу
// опции могут быть
// port: порт
// host: хост по умолчанию'localhost'.
// localAddress: локальный адресс
// localPort: локальный порт
// family : версия IP stack. по умолчанию 4.
// hints:  Это что связано с dns. поумочанию  0.
// lookup : не знаю
//СМОТРИ net.connect
            // пример клиента
            var net = require('net'),
                socket = new net.Socket();
            socket.setEncoding('utf8');
            // установка соеденения с сервером
            socket.connect('8000','localhost',function(){
                console.log('Coedinen c cerverom')
            })
            // подготовка ввода данных с терминала
            process.stdin.resume();
            process.stdin.on('data', function(data){
                socket.write(data);
            })
            //при получении данных
            socket.on('data', function(data){
                console.log(data)
            })
            // при закрытии сервера
            socket.on('close', function(){
                console.log('Coedinenie zakonsheno')
            })
socket.connecting // не знаю но если типа есть соединени socket.connect(options[, connectListener])
                  // и оно не закрыто то будет вызываться его колбэк
socket.destroy(exception) // обычто применяется для ошибки (разрывает соединение)
            //пример
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
socket.destroyed // можно проверить есть ли азрыв соединея или нет (если  true то разрыв есть, если false то нет  )
socket.end(data, encoding) // закакнчивает соединеие(data данные которые отправятся в конце соедениения)
            //пример
            socket.on("data", function(data){
                socket.write(data.toUpperCase())
                if(data){
                    socket.end('bay bay'); // в данном случает данные отправятся клинету
                    console.log(data);
                }
            })

socket.localAddress // определит и установит локальный адрес
            //пример
            var net = require("net")
            net.createServer(function (socket) {
                console.log(socket.localAddress)
                socket.end(socket.localAddress)
            }).listen(8000)

socket.localPort // определит и установит локальный порт
            //пример
            var net = require("net")
            net.createServer(function (socket) {
                console.log(socket.localPort)
                socket.end(socket.localPort)
            }).listen(8000)
socket.pause() // делает пазу в передачи данных пока не вызовется socket.resume()
socket.resume() // возобновляет передачу данных аосле  socket.pause(
socket.ref()     // не нашел что это значит
socket.unref() // не нашел что это значит
socket.remoteAddress  // узнать IP
socket.remoteFamily // узнать версию IP stack.
socket.remotePort  // узнать порт
socket.setEncoding([encoding]) // инкодинг (его можно использовать для переаода из буфера в utf-8)
            // пример
            var net = require('net'),
                socket = new net.Socket();
            socket.setEncoding('utf8');
socket.setKeepAlive(enable, initialDelay) // не знаю что это
socket.setNoDelay(noDelay)              //Отключаем алгоритм Нагла
socket.setTimeout(timeout, callback)    // это ты знаешь
socket.write(data, encoding, callback) //- отправить данные
            //пример
            socket.on("data", function(data){
                socket.write(data.toUpperCase()) // отправить данные в поток верхнего регистра
            })

