// ������ http �������� ������������� new http.Server() � ������� �������
// ����� ������� ������ server
// ��� �������� ���������� ����������� ������ request
// ������� ����� ������ � ������� ���� ��� ���������� req � res
// ��� ��� ������ req - �������� �����(�� ���� ������)
// res - ��������� �����(������ ������ � ���� ����� �����)

// ���� ��� ������ ��������� �������
// ������ ���������� ����� ���� ��� ���������
                        //������
                        var http = require('http'),
                            server = new http.Server();
                        //http.Server() -> net.Server() -> EventEmiter ��� ������������
                        // � http.Server ���� ���� �������, ��������� �� ��������� �� net.Server,  ���������� ��  EventEmiter
                        server.listen(80)
                        server.on('request', function(req,res){ //������������ ������ request ������������ ��������
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world!");
                            res.end();
                        })
// ��������� ������
                        //������
                        var http = require('http');
                        http.createServer(function(req,res){
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world2!");
                            res.end();
                        }).listen('80')

////////////////////////////�������������� ������ emit(������)////////////////////////////
//�������������� ����� emit ��� ������� server ������� ������� ����������� http.Server() ������ http
                        // ������
                        var http = require('http'),
                            server = new http.Server();
                        server.listen(80)
                        /// ��� �� �����
                        var emit = server.emit;    // ������� � ���������� ���� ����� emit
                        server.emit = function(e){  // ����� ��������������� ����� emit � �������
                            console.log(e);         // ����������� ����� � ��������
                            emit.apply(this,arguments); // ������ ����� ��� ������ � �������� ��������������� emit
                                                        // ������� �� ��������� � emit_old � ���� �� � ���������������� emit
                        }
                        // �� ����
                        server.on('request', function(req,res){
                            res.writeHead(200,{
                                'Counter-Type': 'text/plain'
                            });
                            res.write("Hellow world!");
                            res.end();
                        })


//////////////////////////������ ��������� � ������� url//////////////////////////////////////
//(���� �� ������� �������� � url, ������ �������� �� query)
                    //������
                    //http://127.0.0.1:80/echo?massage=helow
                    var http = require('http'),
                        url = require('url'),
                        server = new http.Server(function(req,res){
                            console.log(req.method, req.url)
                            var urlPars = url.parse(req.url, true)  //������ ������
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


/////////////////////////////////////////////���������///////////////////////////////////////
//������� � ������� ��������� ���������� �� ��������
                    //������
                    //http://127.0.0.1:80/echo?massage=helow
                    var http = require('http'),
                        url = require('url'),
                        server = new http.Server(function(req,res) {
                            console.log(req.header)
                        } )
                    server.listen(80)
                    //���������
                    //��������� �������  �������� �������(��� ��������� � ������ �������� - ��� ����������� node js)
                    //{    host: '127.0.0.1',         //��� ����
                    //    connection: 'keep-alive',    // �������� keep-alive �������� ��� �������� ����� �� ������ �� ����� ���������� ����� ����� �������
                    //    pragma: 'no-cache',
                    //    'cache-control': 'no-cache',
                    //    'upgrade-insecure-requests': '1',
                    //    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
                    //    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    //    'accept-encoding': 'gzip, deflate, sdch',
                    //    'accept-language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' }


// � ����� ������ �������� ����� ��������� � �����������
// ��� ��� ������� ���������� ������
res.writeHead(200,'OK',{   //��������� ���������� ��� �� �� ������ ������
   'Counter-Type': 'text/plain'
});
res.setHeader('Cache - control', 'no-cach') // ��������� ��������� (����� ����������� ������ � �������)
res.removeHeader() // ������� ��������

                            //������
                            //http://127.0.0.1:80/echo?massage=helow
                            var http = require('http'),
                                server = new http.Server(function(req,res){
                                        res.setHeader('Cache - control', 'no-cach')
                                        res.end("Hellow world!" )

                                });
                            server.listen(80)
                            // ���������
                            // ����� ������� � ������� -> ������� -> ������ -> Respons Headers
                            //GET /echo?massage=helow HTTP/1.1
                            //Host: 127.0.0.1
                            //Connection: keep-alive
                            //Pragma: no-cache
                            //Cache-Control: no-cache     // ��� ��������� ������� �������� �� �������
                            //Upgrade-Insecure-Requests: 1
                            //User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36
                            //Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
                            // Accept-Encoding: gzip, deflate, sdch
                            // Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4


res.statusCode // � ����� ���������� ���� ������ ��� ��� ����� ������� ������
200 // ��
404 // �������� �� �������
403// ������ ��������
500 // ��������� ������
                            //������
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

////////////////////////////////////////// req � res ///////////////////////////////////////
///////////////////////////
req //- �������� �����(�� ���� ������)
//Event: "data" // ���� �������� ������ �� ������
//Event: 'readable' // ������� ������ �������
//Event 'aborted' -// ����� ��� ���� ���� ��� � Event 'close'
//Event 'close'// ��������� �������� ����������
                       //������
                    req.on("close")
req.destroy() // �� ������ �� ��������� ������ � ��������� ������, �� ���������� ������� � ����� ��������
                       //������
                    req.destroy()
req.header // ������ � ����������� ����������� �� ��������
                    //������
                    concole.log(req.header)
req.httpVersion // ����� �������� ������ http ����������� �� ��������
req.method      // ��� ���� � ������ ����������� ������ �.�. GET, POST � ��� �����
req.rawHeaders  // ������ ����� �� ���� ������� ����������
                    //������
                    var arr = req.rawHeaders
                    console.log(arr);
                    //���������
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
req.rawTrailers// �� ����
req.setTimeout(msecs, callback) //  ��� �� ��������
req.statusCode // ������ ���
req.statusMessage // ��� "OK"  ��� "Internal Server Error."
req.socket // ������ � socket ������� ��� ������ ������ �������� �������� � ������(������) Duplex
           // �� socket.
                    // ������
                    console.log(req.socket.address())

req.trailers // �� ����
req.url // ������ � url
                    //������
                    console.log(req.url)

//////////////////////
res //- ��������� �����(������ ������ � ���� ����� �����)

//Event: 'close' // ������ ���� ���������� �������� ������(����� ����������) !!!
//Event: 'finish' //��� ��������� ����� �������� �� �� �������� �������
res.addTrailers(headers) // �� ����
res.end(data, encoding, callback)// ����� ������, ������ ���� ����������� ��������� data - ������ �������
                                 //����� ��������� �������� �� ��������, encoding - ���������,
                                 //callback - ������
                      //������
                    res.end('Error')
res.finished // ������� �������� ���� true �� ��������� ���������� ���� false �� �� ����������
                    //������
                    res.end('goodbay')
                    if (res.finished ){
                        console.log('res is finish')
                    } else {
                        console.log('not finish')
                    }
res.getHeader(name) // �� ��������. ���������� ��������� ������� ��� ��� ����������
                   // � ������� �� ��� �� ��������� ��������
                    //������
                    var contentType = res.getHeader('content-type');
res.headersSent //������� �������� ���� true �� ��������� ��� ���������� ���� false �� �� ���������
                    //������
                    res.setHeader('Cache - control', 'no-cach')
                    res.write("Hellow world!");
                    res.end()
                    if (res.headersSent){
                        console.log('headers is Sent')
                    } else {
                        console.log(' headers not Sent')
                    }
res.removeHeader(name) // ������� ��������
                    //������
                    res.removeHeader('Content-Encoding');
res.sendDate  // ������� �������� (�� ����)
res.setHeader(name, value) // ��������� ��������� (����� ����������� ������ � �������)
                    //������
                    res.setHeader('Cache - control', 'no-cach')
res.setTimeout(msecs, callback) // �� ��������
res.statusCode// ������ ���� (�� ����)
                    //������
                    res.statusCode =200;
res.statusMessage // ��� ������ ��� ���� "OK"
res.write(chunk, encoding, callback) // �������� � �����. chunk - ����� ������, encoding - ���������
                                     // ������ ������
                    //������
                    res.write("Hellow world!");

res.writeContinue()// �� ����
res.writeHead(statusCode, statusMessage, headers)  //��������� ���������� ��� �� �� ������ ������
                    //������
                    res.writeHead(200,'OK',{
                        'Counter-Type': 'text/plain'
                    });


















