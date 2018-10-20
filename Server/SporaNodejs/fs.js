
//////////////////////////////////////fs///////////////////////////////////////////////
fs //������ ��� ������ � �������
            //������������ �����!! ���� ���������� ���������, �.� ���� �� �� ���������� ���� �� ����������!!///
            var http = require('http');
            var fs = require('fs');
            var server = http.createServer(function (req, res) {
                fs.readFile(__dirname + '/data.txt', function (err, data) {
                    res.end(data);
                });
            });
            server.listen(80);

            //���������� ����������� ������ ������!!!!
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
fs.readFileSynk //������ ���� ����������� ���������� �����
            //������
            console.log(fs.readFileSynk ('data.txt',{encoding: 'utf-8'})) //��������� ���� ������� �� �����
fs.readFile // ������ ���� �������������  ����������� �����

fs.renameSynk('oldnmae.txt','newname.txt')// �������� �������� ����� ����������� ���������� �����
fs.renameSynk('oldnmae.txt','Newmkdir/oldname.txt')// ����������� ���� �����  ����������� ���������� �����

fs.rename('oldnmae.txt','newname.txt', callback)// �������� �������� ����� ����������� ���������� �����
fs.rename('oldnmae.txt','Newmkdir/oldname.txt', callback)// ����������� ���� �����  ����������� ���������� �����

fs.mkdir(path, mode, callback) //������� ���� path - ���� mode-����������� callback ������
            //������
            var fs = require("fs");
            console.log("Going to create directory /tmp/test");
            fs.mkdir('test',function(err){
                if (err) throw err;
                console.log("Directory created successfully!");
            });
fs.mkdirSync(path, mode)//������� ���� path - ���� mode-����������� callback ������

fs.rmdir(path, callback) // ������� ������ ����������
            //������
            fs.rmdir('Test', function(){})
fs.rmdirSync(path)      // ������� ������ ����������

fs.readdirSynk('Mydir', function(err, files){});// ������ ����������  ����������� ���������� �����
                                                //err - ����� ������ files - ������ ������
fs.readdir('Mydir', function(err, files){}); // ������ ���������� �������������  ����������� �����
//err - ����� ������ files - ������ ������

fs.access(path, mode, callback) // ��������� ���� ������ � �����
fs.accessSync(path, mode) // ��������� ���� ������ � �����

fs.appendFile(file, data, callback) // ��������� ������ � ����(� ������� ����)
            //������
            fs.appendFile('message.txt', 'data to append', function(err){
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
            }); // ������� � ���� ������� data to append
fs.appendFileSync(file, data) // ��������� ������ � ����(� ������� ����)

fs.createReadStream(path, options) //������� ����� ��� ������
            //������
            var fs = require('fs');
            var server = http.createServer(function (req, res) {
                var stream = fs.createReadStream(__dirname + '/data.txt');
                stream.pipe(res);
            });
fs.createWriteStream(path, options) // ������� ����� ��� ������
            //������
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

            //������
            var fs = require("fs");
            // Create a readable stream
            var readerStream = fs.createReadStream('input.txt');
            // Create a writable stream
            var writerStream = fs.createWriteStream('output.txt');
            // Pipe the read and write operations
            // read input.txt and write data to output.txt
            readerStream.pipe(writerStream);

            console.log("Program Ended");

fs.exists(path, callback)//��������� ���� ������������� ����
            //������
            fs.exists('/etc/passwd', function(exists) {
                console.log(exists ? 'it\'s there' : 'no passwd!');
            });
fs.existsSync(path)     //��������� ���� ������������� ����

fs.open(path, flags, callback) // ��������� ���� ���������
//path ���� � �����
// flags  ����
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
//callback ������
            //������
            var fs = require("fs");
            // Asynchronous - Opening File
            fs.open('input.txt', 'r+', function(err, fd) {
                if (err) throw err;
            });
            fs.openSync(path, flags, mode) // ��������� ���� ���������

fs.read(fd, buffer, offset, length, position, callback) // ������ ���� ������ �� ��������� ����� �������� �����
//���������
//fd ��� ���� ����������� ������� ������������ �� fs.open
//buffer ��� ����� � ������� �� �����
//offset ������� ��� ������� � �������� ��������� ������ ������
//length �����
//position ���� offset ������ �� ����� � ��� �������
//callback ������
            //������
            var fs = require("fs");
            var buf = new Buffer(1024);// ������ ������� �����������
            fs.open('test.txt', 'r+', function(err, fd) {
                if (err) throw err;
                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                    if (err) throw err;
                    console.log(bytes + " bytes read");
                    if(bytes > 0){
                        console.log(buf.slice(0, bytes).toString()); // ���� ����������� slice ������� � �� � ������ �������
                                                                     //����� ���� ���
                    }
                });
            });

fs.write(fd, buffer, offset, length, position, callback) // ���������� � ���� ��������� �� � fs.read
fs.write(fd, data, position, encoding, callback)         // ���������� � ���� ��������� �� � fs.read
                                                         //���� ����� ������  data - ��� �� ��� ������ ���� �������� � ����
            //������
            var fs = require("fs");
            var buf = new Buffer(1024);// ������ ������� �����������
            fs.open('test.txt', 'r+', function(err, fd) {
                if (err) throw err;
                fs.write(fd, 'dfdfdfdf', 0, 'utf-8', 0, function(err, bytes){
                    if (err) throw err;
                });
            });

fs.close(fd, callback) //��� �������� ����� ����� fs.open
//���������
//fd ��� ���� ����������� ������� ������������ �� fs.open
//callback ������
            //������
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
fs.closeSync(fd) //��� �������� ����� ����� fs.open

fs.ftruncate(fd, len, callback) //������� ����, �������� � ��� ������� ���� ������� ������� � len
//���������
//fd ��� ���� ����������� ������� ������������ �� fs.open
//len ������� ���� � �����
//callback ������
            //������
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
fs.ftruncateSync(fd, len) //������� ����, �������� � ��� ������� ���� ������� ������� � len

fs.stat(path, callback)   // �������� ���� � ���������� ������, ��� �� ����� ���� �����������
                //������
                var fs = require('fs');
                fs.stat('Mydir/test.txt', function(err, objinf){
                    if (err) throw err;
                    console.log(objinf.isFile());
                    console.log(objinf)
                })
fs.statSync(path) // �������� ���� � ���������� ������, ��� �� ����� ���� �����������

fs.unlink(path, callback) //������� ����
            //������
            fs.unlink('new.txt',function(err){
                if (err) throw err;
            })
            //������
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
fs.unlinkSync(path) //������� ����

fs.writeFile //�������� �����
            //������
            var fs = require('fs');
            fs.writeFile('test.txt','data', function(err){ // ��������� 1.�������� �����, 2. ������ ������� �� � ���� ����
                                                            // 3.������
            })
            //������
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
fs.writeFileSync //�������� �����