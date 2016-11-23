
/////////////////////////////////////////////////var date = new Date();

//Конструктор в него можно засунвть сложные объекты
var str = 'Wed Feb 17 2016 16:01:00 GMT+400 (SAMT)' //последний это часовой
//пояс
var date = new Date(str);

var str = data.toISOString // преобразование в ИСО формат
//2016 -02-17Т12:01:50.000Z
//год месяц число Т –это время Z – нулевой часовой полес
var t = data.getTime();

//moment.js // для работы с датами(очень удобно)

/////////////////////////////////////////////////////////JSON
// вот преобразовали объект в JSON и отправили
var user ={
    Firstname: 'ldskaf',
Lastname: 'asdasd',
Age: 16
}
var jsondata = JSON.stringify(user)

//вот получили и преобразовали из JSON в объект

var user = JSON.parse(jsondata)
if(user.age < 18 ){
    alert('вход запрещен')
}
///////////////////////////////////////////////////////Event Loop
//Event Loop он выполняет задачу (событие), которя может пораждать еще
//задачи (события) они тоже становятся в очередь
//Вся эта хуйня (задача выполняющая + собятия в очереди) наз тик


process.nextTick(callback) //– это типа к следующему тику перейти разгрузив Event Loop

// Синхронно

var rounded = Math.round(1.5);
// do something else

/////////

// Асинхронно
var data = null;
getData({userId:123}, function(raw){
    data = Math.round(raw);
// do something else
})

// чтото паралельное



//Ждать нужно с помощью сет таймаутов
SetTimeout(function(),1000)

/////////////////////////////////////////////////////promises //– это обещание
//Типа
Promises
function isUserTooYoung(id, callback) {
    openDatabase(function(err, db) {
        if (err) showError(err);
        getCollection(db, 'users', function(err, col) {
            if (err) showError(err);
            find(col, {'id': id},function(err, result) {
                if (err) showError(err);
                result.filter(function(err, user) {
                    if (err) showError(err);
                    callback(user.age < cutoffAge)
                })
            })
        })
    })
}

function isUserTooYoung(id) {
    return openDatabase(db)
        .then(getCollection)
        .then(find.bind(null, {'id': id}))
        .then(function(user) {
            return user.age < cutoffAge;
        })
        .catch(showError)
}


//вот функция она возвращает объект в котором есть несколько функций с .then и .catch
//.then будет выполнятся когда колбэк завершиться хорошо
  //  .catch соответственно ловит ошибку

//////////////////////////////////////////////////////Async-Await
import  async from 'asyncawait/async';
import await from 'asyncawait/await';

function isUserTooYoung(id) {
    return openDatabase(db)
        .then(getCollection)
        .then(find.bind(null, {'id': id}))
        .then(function(user) {
            return user.age < cutoffAge;
        })
        .carch(showError)
}

async function isUserTooYoung(id) { //вот он блять он можно писать как в синхронном режиме но все будет выполнятся асинхронно
    try {
        const a = await openDatabase(db)
        const b = await getCollection(a)
        const user = await find(b, {'id': id})
        return user.age < cutoffAge;
    } catch (err) {
        showError(err)
    }
}

/////////////////////////////////////////////////////////ES6 Классы

class ColorPoint extends Point {
    static getSquare(point1, point2) {
        return Math.abs(point1.x - point2.x) *
            Math.abs(point1.y - point2.y);
    }
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toObject() {
        return {
            ...super.toObject(),
            color: this.color
    };
}
}

const point1 = new Colorpoint(30, 40, 'red')
const point2 = new Colorpoint(10, 20, 'red')
console.log(ColorPoint.getSquare(point1, point2))

///////////////////////////////////////////////////////Default, Rest, Spread
function f(x, y=12) {
// если у не потшел то у будет =12 это есть Default,
    return x + y;
}
f(3) == 15

function f(x, ...y) {
// y is an Array типа первый аргумент всегда будет х все остальные пойдут на у и будут массивом
    return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6


//////////////////////////////////////////////////////export default
//Именованный экспорт :
    export { myFunction }; // экспорт ранее объявленной функции
export const foo = Math.sqrt(2); // экспорт константы

//Дефолтный экспорт (экспорт по умолчанию) (один на скрипт):

export default function() {} // или 'export default class {}'
// тут не ставится точка с запятой


//////////////////////////////////////////////////////////babel
// - нужен для из новой версии в старый

class SomeClass{
    constructor(...args){
        this.args = args
}
some(v){
    this.args.push(v)
}
}
//npm i babel-cli -g
//нужно чтобы с ним работать

//babel-node index.js

//babel-node tools/run start
//  | node ./src/utils/bunyan -o short -l trace

//node start.js


//{
//    "scripts" : {
//    "babel-build": 'rimraf lib &&
//    babel src --out-dir lib --source-maps inline --copy-files &&
//    cp {package.json,README.md} lib/'
//}
//}
////////////////////////////////////////////////////////Presets & Plugins
 //   .babelrc
//{
//    "presets": [
//    "es2015",
//    "react",
//    "node5",
//    "stage-0"
//],
//    "plugins": [
//    "jsx-control-statements",
//    "react-require",
//    "transform-decorators-legacy"
//]
//}
//
//{
//    "dependencies": {
//    "babel-preset-es2015": "^6.9.0",
//        "babel-preset-node5": "^11.1.0",
//        "babel-preset-react": "^6.5.0",
//        "babel-preset-stage-0": "^6.5.0",
//}
//}

////////////////////////////////////////////////////////Stages
// - надо пробовать
//npm i --save-dev babel-preset-stage-0
//npm i --save-dev babel-preset-stage-1


/////////////////////////////////////////////////////////Полезные пакеты
//
//socket.io
//node_redis
//memcached
//isomorphic-fetch
//passport
//cron
//sequelize
//mongoose
//moment.js
//nodemailer
//nodeglob
//validator
//csv-string
//winston
//lodash
//bluebird
//
/////////////////////////////////////////////////////////Express
//express
//express-async-router
//express-graphql
//express-jwt
//express-ws
//express-xml-bodyparser
//express-winston

////////////////////////////////////////////////////////PUSH-notification
node-gcm //- A NodeJS wrapper library port to send data to Android devices via Google Cloud Messaging
node-apn //- Apple Push Notification module for Node.js
    fcm-push //- Firebase Cloud Message push notification

/////////////////////////////////////////////////////////isomorphic-fetch
// Он предоставляет улучшенный интерфейс для осуществления запросов к серверу

//npm install --save isomorphic-fetch es6-promise

import fetch from 'isomorphic-fetch'

//При вызове fetch возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом
// Response или с ошибкой, если запрос не удался.

    //Пример использования:

    'use strict';

fetch('/article/fetch/user.json')
    .then(function(response) {
        alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
        alert(response.status); // 200

        return response.json();
    })
    .then(function(user) {
        alert(user.name); // iliakan
    })
    .catch( alert );
/////////////////////////////////////////////////////////Bluebird

//Bluebird — популярная JavaScript-библиотека промисов.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//тут документация!!!!!!!!!!!
//http://bluebirdjs.com/docs/api-reference.html

//http://shamansir.github.io/JavaScript-Garden/ РАЗОБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //РКГУЛЯРНЫЕ выражения