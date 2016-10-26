///////////////////////////////////////path////////////////////////////////////////
path //������ ���������� � ������
                //������
                var fs = require('fs'),
                    path = require('path');
                fs.readdir('Mydir', function(err, files){
                    files.forEach(function(file){
                        console.log(path.basename(file, path.extname(file)))
                    })
                });
path.extname(file) // ������ ���������� �����
                //������
                console.log(path.extname(file))
path.basename(file) // ������ �������� �����
                //������
                console.log(path.basename(file)) // ������ ��� �����
                console.log(path.basename(file, path.extname(file))) // ������ ��� ����� ��� ����������
path.dirname(path) // ������ ����������
                 //������
                path.dirname('/foo/bar/baz/asdf/quux')
                // returns '/foo/bar/baz/asdf'
path.format // ������ ���� � �����������
                //������
                path.format({
                    root : "C:\\",
                    dir : "C:\\path\\dir",
                    base : "file.txt",
                    ext : ".txt",
                    name : "file"
                });
                // returns 'C:\\path\\dir\\file.txt'
path.parse(path) // ��������� � ������
                 //������
                path.parse('C:\\path\\dir\\file.txt')
                // returns
                // {
                //    root : "C:\\",
                //    dir : "C:\\path\\dir",
                //    base : "file.txt",
                //    ext : ".txt",
                //    name : "file"
                // }
'foo/bar/baz'.split(path.sep)  // ��������� ���� � ������
                 //������
            'foo\\bar\\baz'.split(path.sep)
            // returns ['foo', 'bar', 'baz']

path.join //���������
                //������
                path.join('/foo', 'bar', 'baz/asdf')
                // // returns '/foo/bar/baz/asdf'

////////////////////////////////////////url//////////////////////////////////////////////
url //- ������ ��� ������ � url
url.parse() //- ���������� ������ � url � ������
url.parse(req.url, true) //  ��� ������ query (��� ������) ������������ � ������, � ��� ��������� ����� ��������
                        //������
                        //http://127.0.0.1:80/echo?massage=helow
                        var http = require('http'),
                            url = require('url');
                        var server = new http.Server(function(req,res){
                            console.log(req.method,req.url);
                            var urlPars = url.parse(req.url, true)
                            console.log(urlPars);
                        })
                        server.listen(80);
                        //���������                    // The example 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
                        //Url {
                        //        protocol: null,                For example: 'http:'
                        //        slashes: null,                 For example:  (/)
                        //        auth: null,                    For example: 'user:pass'
                        //        host: null,                    For example:  '@host.com:8080'
                        //        port: null,                    For example: '8080'
                        //        hostname: null,                For example: 'host.com'
                        //        hash: null,                    For example: '#hash'
                        //        search: '?massage=helow',      For example: '?query=string'
                        //        query: { massage: 'helow' },   For example: 'query=string' or {'query': 'string'}
                        //        pathname: '/echo',             For example '/p/a/t/h'
                        //        path: '/echo?massage=helow',   For example: '/p/a/t/h?query=string'
                        //        href: '/echo?massage=helow' }  For example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
                        //
                        //

////////////////////////////////////util////////////////////////////////////////////////////
util // - ��������� � ���� ��������� �������� �������
util.inspect() //������ ������ ��������, � ������� �� ������� �������
                    //������
                    var util = require('util'),
                        obj = {
                            one: '1',
                            two: 2,
                        }
                    obj.tree = 'tree';
                    var ttt = util.inspect(obj)
                    console.log(ttt)

util.inspect(obj,true,null,true) // ��������� ���������� ������������� �������
//obj - ������
//true- �������� �� ����� ������������� �������
//null-������� �������� �������, ���� �� ���� ������ ����� ���������
//true- �������� �� ���������� ������� � ������
                    //������
                    var util = require('util'),
                        path =  require('path');
                    console.log(util.inspect(path,true,null,true))
//node   transform.js ��� ��������� � �������
//node   transform.js >  test.txt ��� ��� ����� ���������� ����� ���������� � ����

util.format("��� %s %d %j", '������',123,{test: '������'})
//%s - ������ ����������� ������  '������'
//%d - ������ ����������� ����� 123
//%j - ������ ����������� ������ ��� ��� ������������� � ������ JSON{"test":"������"}
                    //������
                    var util = require('util'),
                        str = util.format("��� %s %d %j", '������',123,{test: '������'})
                    console.log(str)

util.inherits(constr, super_constr); //������������ ������� �� ���������������� � ����������
//  ��� �� ���� Rabbit.prototype = Object.create(Animal.prototype);
var util = require('util');
//�������� ����������������
                    //������
                    function Animal(name){
                        this.name = name;
                    }
                    Animal.prototype.walk = function(){
                        console.log('����� ' + this.name);
                    }

                    //������� �����������
                    function Rabbit(name){
                        this.name = name;
                    }

                    util.inherits(Rabbit, Animal);
                    Rabbit.prototype.jamp = function(){
                        console.log('������� ' + this.name)
                    }

                    //�������������
                    var rabitOne = new Rabbit('������ �����')
                    console.log(rabitOne)
                    rabitOne.jamp()
                    rabitOne.walk()


////////////////////////////////////////jsdom/////////////////////////////////////////
//��������� jQuery �� ������ Node.js ������ ��������
//������ ��� ������� jQuery � Node.js ����������� ������� ���������� ���������� DOM �
//�����, ��� ����� jsdom, �� ������ �������� ����������� ��������, ��������, ��� ����� ���,
//    ������������ � �������� �������:
var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery-1.6.2.min.js").toString();

jsdom.env({
    html: 'http://news.ycombinator.com/',
    src: [
        jquery
    ],
    done: function(errors, window) {
        var $ = window.$;
        console.log('HN Links');
        $('td.title:not(:last) a').each(function() {
            console.log(' -', $(this).text());
        });
    }
});


















