
//////////////////////////////////////fs///////////////////////////////////////////////
fs //модеуь для работы с файломи
            //Неправильный прмер!! Фаил передается синхронно, т.е пока он не загрузится фаил не передаться!!///
            var http = require('http');
            var fs = require('fs');
            var server = http.createServer(function (req, res) {
                fs.readFile(__dirname + '/data.txt', function (err, data) {
                    res.end(data);
                });
            });
            server.listen(80);

            //Правильный асинхронный пример пример!!!!
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
fs.readFileSynk //читает фаил Блокирующий синхронный метод
            //пример
            console.log(fs.readFileSynk ('data.txt',{encoding: 'utf-8'})) //прочиатет фаил выведет на экран
fs.readFile // читает фаил Неблокирующий  асинхронный метод

fs.renameSynk('oldnmae.txt','newname.txt')// изменяет название файла Блокирующий синхронный метод
fs.renameSynk('oldnmae.txt','Newmkdir/oldname.txt')// переместить фаил файла  Блокирующий синхронный метод

fs.rename('oldnmae.txt','newname.txt', callback)// изменяет название файла Блокирующий синхронный метод
fs.rename('oldnmae.txt','Newmkdir/oldname.txt', callback)// переместить фаил файла  Блокирующий синхронный метод

fs.mkdir(path, mode, callback) //создает фаил path - путь mode-необязатель callback колбэк
            //пример
            var fs = require("fs");
            console.log("Going to create directory /tmp/test");
            fs.mkdir('test',function(err){
                if (err) throw err;
                console.log("Directory created successfully!");
            });
fs.mkdirSync(path, mode)//создает фаил path - путь mode-необязатель callback колбэк

fs.rmdir(path, callback) // удаляет пустые директории
            //пример
            fs.rmdir('Test', function(){})
fs.rmdirSync(path)      // удаляет пустые директории

fs.readdirSynk('Mydir', function(err, files){});// читакт директорию  Блокирующий синхронный метод
                                                //err - объек ошибки files - массив файлов
fs.readdir('Mydir', function(err, files){}); // читакт директорию Неблокирующий  асинхронный метод
//err - объек ошибки files - массив файлов

fs.access(path, mode, callback) // проверяет если доступ к файлу
fs.accessSync(path, mode) // проверяет если доступ к файлу

fs.appendFile(file, data, callback) // вставляет данные в фаил(и создаст фаил)
            //пример
            fs.appendFile('message.txt', 'data to append', function(err){
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
            }); // вставит в фаил строчку data to append
fs.appendFileSync(file, data) // вставляет данные в фаил(и создаст фаил)

fs.createReadStream(path, options) //создать поток для чтения
            //пример
            var fs = require('fs');
            var server = http.createServer(function (req, res) {
                var stream = fs.createReadStream(__dirname + '/data.txt');
                stream.pipe(res);
            });
fs.createWriteStream(path, options) // создать поток для записи
            //пример
            var fs = require("fs");
            var data = 'Simply Easy Learning';
            // Create a writable stream
            var writerStream = fs.createWriteStream('output.txt');
            // Write the data to stream with encoding to be utf8
            writerStream.write(data,'UTF8');
            // Mark the end of file
            writerStream.end();
            // Handle stream events --> finish, and error
            writerStream.on('finish', function() {
                console.log("Write completed.");
            });
            writerStream.on('error', function(err){
                console.log(err.stack);
            });

            //пример
            var fs = require("fs");
            // Create a readable stream
            var readerStream = fs.createReadStream('input.txt');
            // Create a writable stream
            var writerStream = fs.createWriteStream('output.txt');
            // Pipe the read and write operations
            // read input.txt and write data to output.txt
            readerStream.pipe(writerStream);

            console.log("Program Ended");

fs.exists(path, callback)//проверяет если опеределенный путь
            //пример
            fs.exists('/etc/passwd', function(exists) {
                console.log(exists ? 'it\'s there' : 'no passwd!');
            });
fs.existsSync(path)     //проверяет если опеределенный путь

fs.open(path, flags, callback) // открывает фаил аргументы
//path путь к файлу
// flags  коды
//r 	Open file for reading. An exception occurs if the file does not exist.
//r+	Open file for reading and writing. An exception occurs if the
//       file does not exist.
//rs	Open file for reading in synchronous mode.
//rs+	Open file for reading and writing, asking the OS to open it synchronously.
//      See notes for 'rs' about using this with caution.
//w	    Open file for writing. The file is created (if it does not exist)
//      or truncated (if it exists).
//wx	Like 'w' but fails if the path exists.
//w+	Open file for reading and writing. The file is created
//      (if it does not exist) or truncated (if it exists).
//wx+	Like 'w+' but fails if path exists.
//a	    Open file for appending. The file is created if it does not exist.
//ax	Like 'a' but fails if the path exists.
//a+	Open file for reading and appending. The file is created
//      if it does not exist.
//ax+	Like 'a+' but fails if the the path exists.
//callback колбэк
            //пример
            var fs = require("fs");
            // Asynchronous - Opening File
            fs.open('input.txt', 'r+', function(err, fd) {
                if (err) throw err;
            });
            fs.openSync(path, flags, mode) // открывает фаил аргументы

fs.read(fd, buffer, offset, length, position, callback) // читает фаил обычно он ставиться после открытия файла
//аргументы
//fd это фаил дискриптора который фозвращеется из fs.open
//buffer это буфер с данными из файла
//offset помоему это элемент с которого начингает читать данные
//length длина
//position типа offset только не пойму в чем разница
//callback колбэк
            //пример
            var fs = require("fs");
            var buf = new Buffer(1024);// размер ставить обязательно
            fs.open('test.txt', 'r+', function(err, fd) {
                if (err) throw err;
                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                    if (err) throw err;
                    console.log(bytes + " bytes read");
                    if(bytes > 0){
                        console.log(buf.slice(0, bytes).toString()); // надо обязательно slice ставить а то в буфере какаято
                                                                     //хуйня есть еще
                    }
                });
            });

fs.write(fd, buffer, offset, length, position, callback) // записывает в фаил аргументы см в fs.read
fs.write(fd, data, position, encoding, callback)         // записывает в фаил аргументы см в fs.read
                                                         //тоже самое только  data - это то что должно быть записано в фаил
            //пример
            var fs = require("fs");
            var buf = new Buffer(1024);// размер ставить обязательно
            fs.open('test.txt', 'r+', function(err, fd) {
                if (err) throw err;
                fs.write(fd, 'dfdfdfdf', 0, 'utf-8', 0, function(err, bytes){
                    if (err) throw err;
                });
            });

fs.close(fd, callback) //для закрытия файла после fs.open
//аргументы
//fd это фаил дискриптора который фозвращеется из fs.open
//callback колбэк
            //пример
            var fs = require("fs");
            var buf = new Buffer(1024);
            fs.open('input.txt', 'r+', function(err, fd) {
                if (err) throw err;
                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                    if (err) throw err;
                    // Print only read bytes to avoid junk.
                    if(bytes > 0){
                        console.log(buf.slice(0, bytes).toString());
                    }
                    // Close the opened file.
                    fs.close(fd, function(err){
                        if (err) throw err;
                        console.log("File closed successfully.");
                    });
                });
            });
fs.closeSync(fd) //для закрытия файла после fs.open

fs.ftruncate(fd, len, callback) //усекает фаил, оставляя в нем столько букв сколько указано в len
//аргументы
//fd это фаил дискриптора который фозвращеется из fs.open
//len сколько усеч в файле
//callback колбэк
            //пример
            var fs = require("fs");
            var buf = new Buffer(1024);
            fs.open('test.txt', 'r+', function(err, fd) {
                if (err) throw err;
                // Truncate the opened file.
                fs.ftruncate(fd, 10, function(err){
                    if (err) throw err;
                    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                        if (err) throw err;
                        // Print only read bytes to avoid junk.
                        if(bytes > 0){
                            console.log(buf.slice(0, bytes).toString());
                        }
                        // Close the opened file.
                        fs.close(fd, function(err){
                            if (err) throw err;;
                        });
                    });
                });
            });
fs.ftruncateSync(fd, len) //усекает фаил, оставляя в нем столько букв сколько указано в len

fs.stat(path, callback)   // получает пкть и фозвращает объект, что по этому пути содержиться
                //пример
                var fs = require('fs');
                fs.stat('Mydir/test.txt', function(err, objinf){
                    if (err) throw err;
                    console.log(objinf.isFile());
                    console.log(objinf)
                })
fs.statSync(path) // получает пкть и фозвращает объект, что по этому пути содержиться

fs.unlink(path, callback) //удаляет фаил
            //пример
            fs.unlink('new.txt',function(err){
                if (err) throw err;
            })
            //пример
            var fs = require('fs');
            fs.writeFile('test.txt','data', function(err){
                if (err) throw err;
                fs.rename('test.txt', 'new.txt',function(err){
                    if (err) throw err;
                    fs.unlink('new.txt',function(err){
                        if (err) throw err;
                    })
                })
            })
fs.unlinkSync(path) //удаляет фаил

fs.writeFile //создание файла
            //пример
            var fs = require('fs');
            fs.writeFile('test.txt','data', function(err){ // аргументы 1.название файла, 2. данные которые мы в него суем
                                                            // 3.колбэк
            })
            //пример
            var fs = require('fs');
            fs.writeFile('test.txt','data', function(err){
                if (err) throw err;
                fs.rename('test.txt', 'new.txt',function(err){
                    if (err) throw err;
                    fs.unlink('new.txt',function(err){
                        if (err) throw err;
                    })
                })
            })
fs.writeFileSync //создание файла