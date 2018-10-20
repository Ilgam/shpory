// Модуль http обладает конструктором new http.Server() с помощью которго
// можно создать объект server
// при входящим соединение иницируется соытие request
// риквест имеет колбэк у которго есть два аргуменнта req и res
// это два потока req - входящий поток(из него читаем)
// res - исходящий поток(объект ответа в него пишем олвет)

// Есть два спсоба созздание сервера
// Способ отражающий более вяно что присходит
                        //пример
                        var http = require('http'),
                            server = new http.Server();
                        //http.Server() -> net.Server() -> EventEmiter это наследование
                        // у http.Server есть свои сойства, некоторые он наследует из net.Server,  анекоторые из  EventEmiter
                        server.listen(80)
                        server.on('request', function(req,res){ //инициируется соытие request привоходящих запросов
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world!");
                            res.end();
                        })
// Привычний способ
                        //пример
                        var http = require('http');
                        http.createServer(function(req,res){
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world2!");
                            res.end();
                        }).listen('80')

////////////////////////////преопределения метода emit(лопата)////////////////////////////
//переопределить метод emit для объекта server который создает кончтруктор http.Server() модуля http
                        // пример
                        var http = require('http'),
                            server = new http.Server();
                        server.listen(80)
                        /// вот от сюдда
                        var emit = server.emit;    // сначало в переменную суем метол emit
                        server.emit = function(e){  // потом перезаписывваем метод emit в объекте
                            console.log(e);         // прописываем чтобы в конесоле
                            emit.apply(this,arguments); // теперь берем все мотоды и свойства первоначального emit
                                                        // которые мы сохранили в emit_old и суем их в переопределенный emit
                        }
                        // до сюда
                        server.on('request', function(req,res){
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world!");
                            res.end();
                        })


//////////////////////////работа совместно с модулем url//////////////////////////////////////
//(если не помнишь посмотри в url, обрати внимание на query)
                    //пример
                    //http://127.0.0.1:80/echo?massage=helow
                    var http = require('http'),
                        url = require('url'),
                        server = new http.Server(function(req,res){
                            console.log(req.method, req.url)
                            var urlPars = url.parse(req.url, true)  //парсим запрос
                            console.log(urlPars);
                            if(urlPars.query.massage && urlPars.pathname == '/echo'){
                                res.writeHead(200,{
                                    'Counter-Type': 'text/plain'
                                });
                                res.write("Hellow world!");
                                res.end('Ok')
                            } else {
                                res.statusCode = 404;
                                res.end('Error')
                            }
                            res.end();
                        });
                    server.listen(80)
                    var emit_old = server.emit;
                    server.emit = function(e){
                        console.log(e);
                        emit_old.apply(this,arguments);
                    }


/////////////////////////////////////////////Заголовки///////////////////////////////////////
//Выведем в консоль заголовки полученные от браузера
                    //приемр
                    //http://127.0.0.1:80/echo?massage=helow
                    var http = require('http'),
                        url = require('url'),
                        server = new http.Server(function(req,res) {
                            console.log(req.header)
                        } )
                    server.listen(80)
                    //результат
                    //Заголовки которые  отправил браузер(все заголовки в нижнем регистре - это особенность node js)
                    //{    host: '127.0.0.1',         //это хост
                    //    connection: 'keep-alive',    // значение keep-alive означает что браузерп хотел бы именно по этому соединению гнать новые запросы
                    //    pragma: 'no-cache',
                    //    'cache-control': 'no-cache',
                    //    'upgrade-insecure-requests': '1',
                    //    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
                    //    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    //    'accept-encoding': 'gzip, deflate, sdch',
                    //    'accept-language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' }


// В ответ сервер отвечает телом стираницы и заголовками
// вот так пишутся занголовки ответа
res.writeHead(200,'OK',{   //заголовки посылаются тут же не ожидая ответа
   'Counter-Type': 'text/plain'
});
res.setHeader('Cache - control', 'no-cach') // добавляет заголовок (будут отправленны всесте с ответом)
res.removeHeader() // удаляет заголовк

                            //пример
                            //http://127.0.0.1:80/echo?massage=helow
                            var http = require('http'),
                                server = new http.Server(function(req,res){
                                        res.setHeader('Cache - control', 'no-cach')
                                        res.end("Hellow world!" )

                                });
                            server.listen(80)
                            // результат
                            // Можно увидеть в консоле -> нетворк -> хедаер -> Respons Headers
                            //GET /echo?massage=helow HTTP/1.1
                            //Host: 127.0.0.1
                            //Connection: keep-alive
                            //Pragma: no-cache
                            //Cache-Control: no-cache     // вот заголовок окторый получили от сервера
                            //Upgrade-Insecure-Requests: 1
                            //User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36
                            //Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
                            // Accept-Encoding: gzip, deflate, sdch
                            // Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4


res.statusCode // в любых заголовках есть статус код его можно сатвить самому
200 // ОК
404 // Страница не найдена
403// доступ запрещен
500 // серверная ошибка
                            //пример
                            http://127.0.0.1:80/echo?massage=helow
                            var http = require('http'),
                                url = require('url'),
                                server = new http.Server(function(req,res){
                                    console.log(req.method, req.url)
                                    var urlPars = url.parse(req.url, true)
                                    console.log(urlPars);
                                    if(urlPars.query.massage && urlPars.pathname == '/echo'){
                                        res.statusCode =200;;
                                        res.end('Ok')
                                    } else {
                                        res.statusCode = 404;
                                        res.end('Error')
                                    }
                                    res.end();
                                });
                            server.listen(80)

////////////////////////////////////////// req и res ///////////////////////////////////////
///////////////////////////
req //- входящий поток(из него читаем)
//Event: "data" // если приходят данные на сервер
//Event: 'readable' // событие потока ттчения
//Event 'aborted' -// думаю что тоже само что и Event 'close'
//Event 'close'// закрывает входящее соединение
                       //пример
                    req.on("close")
req.destroy() // вы больше не получаете данные с входящего потока, но соединение открыто и можно отвечать
                       //пример
                    req.destroy()
req.header // работа с заголовками полученными от браузера
                    //пример
                    concole.log(req.header)
req.httpVersion // думаю проверит версию http полеченного от браузера
req.method      // Это инфо о методе отпраленных данных т.е. GET, POST и так далее
req.rawHeaders  // делает масив из всех получых заголовках
                    //пример
                    var arr = req.rawHeaders
                    console.log(arr);
                    //результат
                    //[ 'Host',
                    //    '127.0.0.1',
                    //    'Connection',
                    //    'keep-alive',
                    //    'Cache-Control',
                    //    'max-age=0',
                    //    'Upgrade-Insecure-Requests',
                    //    '1',
                    //    'User-Agent',
                    //    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
                    //    'Accept',
                    //    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    //    'Accept-Encoding',
                    //    'gzip, deflate, sdch',
                    //    'Accept-Language',
                    //    'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' ]
req.rawTrailers// не знаю
req.setTimeout(msecs, callback) //  чет не работает
req.statusCode // статус код
req.statusMessage // Это "OK"  или "Internal Server Error."
req.socket // работа с socket напомню это объект которы является дочерним к классу(потоку) Duplex
           // см socket.
                    // пример
                    console.log(req.socket.address())

req.trailers // не знаю
req.url // работа с url
                    //пример
                    console.log(req.url)

//////////////////////
res //- исходящий поток(объект ответа в него пишем олвет)

//Event: 'close' // Важная вешь ослеживает закрытие потока(связь оборвалась) !!!
//Event: 'finish' //все переданно ответ закончен но не отключен коннект
res.addTrailers(headers) // не знаю
res.end(data, encoding, callback)// конец ответа, всегда надо прописывать аргументы data - данные которые
                                 //быдут переданны браузеру на последок, encoding - кодировка,
                                 //callback - колбэк
                      //пример
                    res.end('Error')
res.finished // болевое значение если true то соединеие законченно если false то не законченно
                    //пример
                    res.end('goodbay')
                    if (res.finished ){
                        console.log('res is finish')
                    } else {
                        console.log('not finish')
                    }
res.getHeader(name) // не проверял. Вычитывает заголовок который уже был поставленн
                   // в очередь но еще не отправлен браузеру
                    //пример
                    var contentType = res.getHeader('content-type');
res.headersSent //булевое значение если true то заголовок был отаправлен если false то не отправлен
                    //пример
                    res.setHeader('Cache - control', 'no-cach')
                    res.write("Hellow world!");
                    res.end()
                    if (res.headersSent){
                        console.log('headers is Sent')
                    } else {
                        console.log(' headers not Sent')
                    }
res.removeHeader(name) // удаляет заголовк
                    //пример
                    res.removeHeader('Content-Encoding');
res.sendDate  // булевое значение (не знаю)
res.setHeader(name, value) // добавляет заголовок (будут отправленны всесте с ответом)
                    //пример
                    res.setHeader('Cache - control', 'no-cach')
res.setTimeout(msecs, callback) // не провреял
res.statusCode// статут скод (см выше)
                    //пример
                    res.statusCode =200;
res.statusMessage // Это статус код типа "OK"
res.write(chunk, encoding, callback) // записать в поток. chunk - кусок данных, encoding - кодировка
                                     // колбэк колбэк
                    //пример
                    res.write("Hellow world!");

res.writeContinue()// не знаю
res.writeHead(statusCode, statusMessage, headers)  //заголовки посылаются тут же не ожидая ответа
                    //пример
                    res.writeHead(200,'OK',{
                        'Counter-Type': 'text/plain'
                    });


















