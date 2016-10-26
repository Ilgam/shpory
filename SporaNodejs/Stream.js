
/////////////////////////////////////////������/////////////////////////////////////////////////
//����� 4 ������.
Duplex//(���������� ������ ��� ������ ������� �������� ���������� ��� Readable � Writable)
      // ��� �������� ����� �������� ����������� Socket
Readable//(������ ��� ������ �� ������)
Writable//(������ ��� ������ �� ������)
Transform // �������������� ��� ��������� ������(��� ��������� ��� �� �� ����� � ���������� ������� ����� )
//������ �� ������ ����� �����
console.log(stream.Duplex.prototype)//
console.log(stream.Readable.prototype)//
console.log(stream.Writable.prototype)//
console.log(stream.Transform.prototype)//

//////////////////////////////////////�������� ����� Readable � Writable/////////////////////////////

Readable
//����� �� ������ ���������� ������, ������� � ������� .pipe()
//����� ���� �������� � ����� �� ������, ���������������� ��� ���������� �����
            //������
            var Readable = require('stream').Readable;
            var rs = new Readable;
            rs.push('beep ');
            rs.push('null');
            rs.pipe(process.stdout);
Writable
//Writable-������ - ��� ������, � ������� ����� �������������� ����� �� �� �� ���:
            //������
            var Writable = require('stream').Writable;
            var ws = Writable();
            ws._write = function (chunk, enc, next) {
                console.dir(chunk);
                next();
            };
            process.stdin.pipe(ws);

Transform
// �������������� ��� ��������� ������(��� ��������� ��� �� �� ����� � ���������� ������� ����� )

////////////////////////////////////////////.pipe/////////////////////////////////////////////

pot�c1.pipe(potoc2) // ������ ������ �� pot�c1 � �������� � (potoc2)
            // ������
            process.stdin.resume();//- ����������� ����� stdin ������������� ������� resume() ��� ������
                                   // ����������� �����
            process.stdin.pipe(process.stdout)// ������������ ������ ��  ����� �����  � ����� ������

/////////////////////////////////////////Readable////////////////////////////////////////////////////

            var Readable = require('stream').Readable, //����������� ������ Readable ������ stream
            //��� � ����� ����� ����� ��� ����������
                stream = new Readable(),               // ������� ������ ������ Readable
                data = ('London is a capital of GB').split(' '); // ��������� -��������� ������ String
            // �� ������ ����� ���� ���������� ������ ��������� � �������.
            stream._read= function(){                 //����� ��������� ��� ������ ��� ������ �����
                if(data.length) {                    //���� ���� ����� � data �� ���������
                    setTimeout(function () {
                        stream.push(data.shift() + " ")//(��� ��� �� ������)� ����� ���������� �� ������ �������� � ������� data
                    }, 200)
                } else {
                    stream.push(null); // ���� ����� �������� ������ �� �����(����� ��������� ������ null)
                }
            }
            stream.pipe(process.stdout) // ������ �� ������ ������ � ������������ ���� ������
                                        // � ������ ������ � ����� ������� (����� ���)
stream.push(data) //�������� ������� � ����� ��� ������
stream.push(null); // ���� ����� �������� ������ �� �����(����� ��������� ������ null)
stream._read= function(){} // //����� ��������� ��� ������ ��� ������ ����� ( ����� �������)
stream = new Readable({ objectMode: true }) // ��� ���� �� �������� �� ������ ������ ���� string � buffer, �� � �������
readable//( ��� �������) //  process.stdin.on('readable', function () {}
            //������
            process.stdin.on('readable', function () {
                var buf = process.stdin.read();
                console.dir(buf);
            });
//����� ������ ��������, ������� 'readable' ������������ � �� ������ ������� ����� .read(), ����� �������� ������ �� ������.
//����� ����� ����������, .read() ���������� null, ������ ��� ������� ������ ������.

///////////////////////////////////////Writable/////////////////////////////////////

//Writable-������ - ��� ������, � ������� ����� �������������� ����� �� �� �� ���
_write(chunk, enc, next)// � ���� ����� ������������� � ������� .pipe() readable-�����
chunk// ��� ����� ������
enc// ��� ���������,
next// ��� ������ ��� ����� ����������� � ����� �������� next().
    // ���� �������� next(err) �������� ������� 'error' � ���������� ������.
            //������
            var Writable = require('stream').Writable;
            var ws = Writable();
            ws._write = function (chunk, enc, next) {
                console.dir(chunk);
                next();
            };
            process.stdin.pipe(ws);
stream = new Writable({ objectMode: true }) //���� ���������������� ����� ��� ������ ����� �������� ������� ��� ������,
                                            //�� ��� �������� ������ ��� ������ ������� Writable({ objectMode: true }).

end() //��� ����, ����� ������� ������ ��� ������, ��� �� ��������� ������, �������� �����
            //������
            var fs = require('fs');
            var ws = fs.createWriteStream('message.txt');
            ws.write('beep ');
            setTimeout(function () {
                ws.end('boop');
            }, 1000);

////////////////////////////////Transform///////////////////////////////////////////

Transform // �������������� ��� ��������� ������(��� ��������� ��� �� �� ����� � ���������� ������� �����
            var tran = require('stream').Transform; //����������� ����� Transform ������ stream
            var tr = new tran();                    // ������� ������ ������ Transform
            tr._transform = function(ch,enc,cb){    // ������ ��������� ����� ��������� ��������� ����� �������������� ������
                // ��� ��������� ��� ch - ����� ������(��������(������ �����)), enc - ���������, cb - �������
                var str = String(ch);               //� ��������� ������ ������� ����� ������� ������ �� ��� �������� ���������� �����
                this.push(str + '('+str.length+')' )// �������� ������ � �����
                cb();                               // ���� ���� ������ �� ��� ���� �������
            }
            process.stdin                           // ������ ������ ������� �������
                .pipe(tr)                           // �� ������������� � ����� ��������� ��� �� ��������������
                .pipe(process.stdout);              // �������������� ��� �� �����

