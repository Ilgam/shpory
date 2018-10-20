
var http = require('http'),

    chat = require('./chat'),
    server = new http.Server(function(req,res) {
        console.log("[200 OK] " + req.method + " to " + req.url);
        res.writeHead(200,'OK',{
            'Access-Control-Allow-Origin': '*' //�������� �� ��������, � �� ����� �������� �� ��������� ��������������� �������� ������
        });
       if(req.method == "POST"){
           var body = '';
            req.on('readable', function(){

                var chunk;
                while (null !== (chunk = req.read())) { //������ ��� .read() � ����� ������ ��������� null(��� ������ ��������)
                    body += chunk;                      // ���������� ������ ��� ������ ����� � body �� ���� null
                };
            })
           req.on('end', function(){
               console.log(body)
               body = JSON.parse(body)
               console.log(body)
               chat.publishin(body.mssage)
               res.end();
           })

       } else if(req.method == "GET"){
           chat.sub(req,res)
       } else {
           res.statusCode = 404;
           res.end('not faund')
       }

    })
server.listen(80, "127.0.0.1")
