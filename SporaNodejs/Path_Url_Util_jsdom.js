///////////////////////////////////////path////////////////////////////////////////
path //модуль работающий с путями
                //пример
                var fs = require('fs'),
                    path = require('path');
                fs.readdir('Mydir', function(err, files){
                    files.forEach(function(file){
                        console.log(path.basename(file, path.extname(file)))
                    })
                });
path.extname(file) // вернет расширение файла
                //пример
                console.log(path.extname(file))
path.basename(file) // вернет название файла
                //пример
                console.log(path.basename(file)) // вернет имя файла
                console.log(path.basename(file, path.extname(file))) // вернет имя файла без расширения
path.dirname(path) // вернет директорию
                 //пример
                path.dirname('/foo/bar/baz/asdf/quux')
                // returns '/foo/bar/baz/asdf'
path.format // вернет путь с настройками
                //пример
                path.format({
                    root : "C:\\",
                    dir : "C:\\path\\dir",
                    base : "file.txt",
                    ext : ".txt",
                    name : "file"
                });
                // returns 'C:\\path\\dir\\file.txt'
path.parse(path) // превратит в объект
                 //пример
                path.parse('C:\\path\\dir\\file.txt')
                // returns
                // {
                //    root : "C:\\",
                //    dir : "C:\\path\\dir",
                //    base : "file.txt",
                //    ext : ".txt",
                //    name : "file"
                // }
'foo/bar/baz'.split(path.sep)  // превратит путь в масиив
                 //пример
            'foo\\bar\\baz'.split(path.sep)
            // returns ['foo', 'bar', 'baz']

path.join //соединяет
                //пример
                path.join('/foo', 'bar', 'baz/asdf')
                // // returns '/foo/bar/baz/asdf'

////////////////////////////////////////url//////////////////////////////////////////////
url //- модуль для работы с url
url.parse() //- превращает данные в url в объект
url.parse(req.url, true) //  тут второе query (это запрос) превращается в объект, с его свойсьвом можно работать
                        //пример
                        //http://127.0.0.1:80/echo?massage=helow
                        var http = require('http'),
                            url = require('url');
                        var server = new http.Server(function(req,res){
                            console.log(req.method,req.url);
                            var urlPars = url.parse(req.url, true)
                            console.log(urlPars);
                        })
                        server.listen(80);
                        //Результат                    // The example 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
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
util // - включаетв в себя множество полезных функций
util.inspect() //делает объект красивым, в консоле он заложен заранее
                    //пример
                    var util = require('util'),
                        obj = {
                            one: '1',
                            two: 2,
                        }
                    obj.tree = 'tree';
                    var ttt = util.inspect(obj)
                    console.log(ttt)

util.inspect(obj,true,null,true) // получение строкового представления объекта
//obj - объект
//true- указание на вывал неисчисляемых свойств
//null-глубина рекурсий объекта, если то весь объект будет обработан
//true- указание на стилизацию выводах в цветаз
                    //пример
                    var util = require('util'),
                        path =  require('path');
                    console.log(util.inspect(path,true,null,true))
//node   transform.js так выводится в консоль
//node   transform.js >  test.txt так что будет выводиться будет выводиться в фаил

util.format("Мой %s %d %j", 'строка',123,{test: 'объект'})
//%s - вмсето вставляется строка  'строка'
//%d - вмсето вставляется число 123
//%j - вмсето вставляется объект при чем преобразуется в формат JSON{"test":"объект"}
                    //пример
                    var util = require('util'),
                        str = util.format("Мой %s %d %j", 'строка',123,{test: 'объект'})
                    console.log(str)

util.inherits(constr, super_constr); //наследование свойств из суперконструтора в констрктор
//  что то типа Rabbit.prototype = Object.create(Animal.prototype);
var util = require('util');
//Родитель Суперконструктор
                    //пример
                    function Animal(name){
                        this.name = name;
                    }
                    Animal.prototype.walk = function(){
                        console.log('ходит ' + this.name);
                    }

                    //Потомок Конструктор
                    function Rabbit(name){
                        this.name = name;
                    }

                    util.inherits(Rabbit, Animal);
                    Rabbit.prototype.jamp = function(){
                        console.log('Прыгает ' + this.name)
                    }

                    //использование
                    var rabitOne = new Rabbit('Кролик Федор')
                    console.log(rabitOne)
                    rabitOne.jamp()
                    rabitOne.walk()


////////////////////////////////////////jsdom/////////////////////////////////////////
//Запускаем jQuery на движке Node.js вместо браузера
//Потому для запуска jQuery в Node.js применяются готовые реализации браузерной DOM —
//такие, как пакет jsdom, на основе которого невозбранно работает, например, вот какой код,
//    предлагаемый в качестве примера:
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


















