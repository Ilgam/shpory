
/////////////////////////////////////////////////var date = new Date();

//����������� � ���� ����� �������� ������� �������
var str = 'Wed Feb 17 2016 16:01:00 GMT+400 (SAMT)' //��������� ��� �������
//����
var date = new Date(str);

var str = data.toISOString // �������������� � ��� ������
//2016 -02-17�12:01:50.000Z
//��� ����� ����� � ���� ����� Z � ������� ������� �����
var t = data.getTime();

//moment.js // ��� ������ � ������(����� ������)

/////////////////////////////////////////////////////////JSON
// ��� ������������� ������ � JSON � ���������
var user ={
    Firstname: 'ldskaf',
Lastname: 'asdasd',
Age: 16
}
var jsondata = JSON.stringify(user)

//��� �������� � ������������� �� JSON � ������

var user = JSON.parse(jsondata)
if(user.age < 18 ){
    alert('���� ��������')
}
///////////////////////////////////////////////////////Event Loop
//Event Loop �� ��������� ������ (�������), ������ ����� ��������� ���
//������ (�������) ��� ���� ���������� � �������
//��� ��� ����� (������ ����������� + ������� � �������) ��� ���


process.nextTick(callback) //� ��� ���� � ���������� ���� ������� ��������� Event Loop

// ���������

var rounded = Math.round(1.5);
// do something else

/////////

// ����������
var data = null;
getData({userId:123}, function(raw){
    data = Math.round(raw);
// do something else
})

// ����� �����������



//����� ����� � ������� ��� ���������
SetTimeout(function(),1000)

/////////////////////////////////////////////////////promises //� ��� ��������
//����
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


//��� ������� ��� ���������� ������ � ������� ���� ��������� ������� � .then � .catch
//.then ����� ���������� ����� ������ ����������� ������
  //  .catch �������������� ����� ������

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

async function isUserTooYoung(id) { //��� �� ����� �� ����� ������ ��� � ���������� ������ �� ��� ����� ���������� ����������
    try {
        const a = await openDatabase(db)
        const b = await getCollection(a)
        const user = await find(b, {'id': id})
        return user.age < cutoffAge;
    } catch (err) {
        showError(err)
    }
}

/////////////////////////////////////////////////////////ES6 ������

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
// ���� � �� ������ �� � ����� =12 ��� ���� Default,
    return x + y;
}
f(3) == 15

function f(x, ...y) {
// y is an Array ���� ������ �������� ������ ����� � ��� ��������� ������ �� � � ����� ��������
    return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6


//////////////////////////////////////////////////////export default
//����������� ������� :
    export { myFunction }; // ������� ����� ����������� �������
export const foo = Math.sqrt(2); // ������� ���������

//��������� ������� (������� �� ���������) (���� �� ������):

export default function() {} // ��� 'export default class {}'
// ��� �� �������� ����� � �������


//////////////////////////////////////////////////////////babel
// - ����� ��� �� ����� ������ � ������

class SomeClass{
    constructor(...args){
        this.args = args
}
some(v){
    this.args.push(v)
}
}
//npm i babel-cli -g
//����� ����� � ��� ��������

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
// - ���� ���������
//npm i --save-dev babel-preset-stage-0
//npm i --save-dev babel-preset-stage-1


/////////////////////////////////////////////////////////�������� ������
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
// �� ������������� ���������� ��������� ��� ������������� �������� � �������

//npm install --save isomorphic-fetch es6-promise

import fetch from 'isomorphic-fetch'

//��� ������ fetch ���������� ������, �������, ����� ������� �����, ��������� �������� � ��������
// Response ��� � �������, ���� ������ �� ������.

    //������ �������������:

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

//Bluebird � ���������� JavaScript-���������� ��������.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//��� ������������!!!!!!!!!!!
//http://bluebirdjs.com/docs/api-reference.html

//http://shamansir.github.io/JavaScript-Garden/ ���������!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //���������� ���������