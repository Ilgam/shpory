
/////////////////////////////////////////Потоки/////////////////////////////////////////////////
//Естть 4 потока.
Duplex//(дуплексные стримы это потоки которые обладают свойствами как Readable и Writable)
      // его дочерний класс является конструктор Socket
Readable//(служит для чтения из потока)
Writable//(служит для письма из потока)
Transform // предназначенны для обработки данных(ини принимает что то на входе и производят какойто авывд )
//узнать их методы можно через
console.log(stream.Duplex.prototype)//
console.log(stream.Readable.prototype)//
console.log(stream.Writable.prototype)//
console.log(stream.Transform.prototype)//

//////////////////////////////////////РАЗЩНИЦА МЕЖДУ Readable и Writable/////////////////////////////

Readable
//Поток на чтение производит данные, которые с помощью .pipe()
//могут быть переданы в поток на запись, трансформирующий или дуплексный поток
            //пример
            var Readable = require('stream').Readable;
            var rs = new Readable;
            rs.push('beep ');
            rs.push('null');
            rs.pipe(process.stdout);
Writable
//Writable-потоки - это потоки, в которые можно перенаправлять поток но не из них:
            //пример
            var Writable = require('stream').Writable;
            var ws = Writable();
            ws._write = function (chunk, enc, next) {
                console.dir(chunk);
                next();
            };
            process.stdin.pipe(ws);

Transform
// предназначенны для обработки данных(ини принимает что то на входе и производят какойто авывд )

////////////////////////////////////////////.pipe/////////////////////////////////////////////

potоc1.pipe(potoc2) // возмет данные из potоc1 и направит в (potoc2)
            // пример
            process.stdin.resume();//- поумолчанию поток stdin приостановлен поэтому resume() это значит
                                   // возобновить поток
            process.stdin.pipe(process.stdout)// перенаправит данные из  поток ввода  в поток вывода

/////////////////////////////////////////Readable////////////////////////////////////////////////////

            var Readable = require('stream').Readable, //импортируем кламмм Readable модуля stream
            //как я понял любой класс это контруктор
                stream = new Readable(),               // создаем объект класса Readable
                data = ('London is a capital of GB').split(' '); // напоминаю -разбивает объект String
            // на массив строк путём разделения строки указанной в скобках.
            stream._read= function(){                 //метод андерскор рид служит для чтения даннх
                if(data.length) {                    //если есть длина в data то выполнить
                    setTimeout(function () {
                        stream.push(data.shift() + " ")//(вот тут мы читаем)в поток передавать по одному элементу в массиве data
                    }, 200)
                } else {
                    stream.push(null); // весь поток прочитан данных не будет(нужно отправить потоку null)
                }
            }
            stream.pipe(process.stdout) // возмет из потока данные и перенаправит куда скажем
                                        // в данном случае в поток ввывода (комит эму)
stream.push(data) //передаем контент в поток для чтения
stream.push(null); // весь поток прочитан данных не будет(нужно отправить потоку null)
stream._read= function(){} // //метод андерскор рид служит для чтения даннх ( можно кусками)
stream = new Readable({ objectMode: true }) // это если мы посылаем не только данные типа string и buffer, но и объекты
readable//( как событие) //  process.stdin.on('readable', function () {}
            //пример
            process.stdin.on('readable', function () {
                var buf = process.stdin.read();
                console.dir(buf);
            });
//Когда данные доступны, событие 'readable' активируется и вы можете вызвать метод .read(), чтобы получить данные из буфера.
//Когда поток закончился, .read() возвращает null, потому что послать больше нечего.

///////////////////////////////////////Writable/////////////////////////////////////

//Writable-потоки - это потоки, в которые можно перенаправлять поток но не из них
_write(chunk, enc, next)// в него можно перенаправить с помощью .pipe() readable-поток
chunk// Это кусок данных
enc// это кодировка,
next// это колбэк его нужно обязательно в конце вызывать next().
    // Если прписать next(err) запустит событие 'error' в экземпляре потока.
            //пример
            var Writable = require('stream').Writable;
            var ws = Writable();
            ws._write = function (chunk, enc, next) {
                console.dir(chunk);
                next();
            };
            process.stdin.pipe(ws);
stream = new Writable({ objectMode: true }) //Если перенаправляемый поток для чтения будет включать объекты для записи,
                                            //то при создании потока для записи укажите Writable({ objectMode: true }).

end() //Для того, чтобы сказать потоку для записи, что вы закончили запись, вызовите метод
            //пример
            var fs = require('fs');
            var ws = fs.createWriteStream('message.txt');
            ws.write('beep ');
            setTimeout(function () {
                ws.end('boop');
            }, 1000);

////////////////////////////////Transform///////////////////////////////////////////

Transform // предназначенны для обработки данных(ини принимает что то на входе и производят какойто авывд
            var tran = require('stream').Transform; //импортируем класс Transform модуля stream
            var tr = new tran();                    // создаем объект класса Transform
            tr._transform = function(ch,enc,cb){    // объект принимает метод андерскор трансформ здесь обрабатываются данные
                // его аргументы это ch - кусок данных(бинарные(классы буфер)), enc - кодировка, cb - коолбэк
                var str = String(ch);               //в трансформ данные бинарны чтобы сделать строки мы его передаем контруктор стрим
                this.push(str + '('+str.length+')' )// бередаем строку в стрим
                cb();                               // если есть колбэк то его надо вызвать
            }
            process.stdin                           // теперь данные которые заходят
                .pipe(tr)                           // мы пепенапрвляем в поток трансформ где он обрабатывается
                .pipe(process.stdout);              // перенаправляем его на выход

