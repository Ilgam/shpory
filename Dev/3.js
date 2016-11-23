//MongoDB (�� ����. humongous � ��������) � ������������������������ ������� ���������� ������ ������ (����)
//� �������� �������� �����, �� ��������� �������� ����� ������.

//ObjectID
//507f191e810c19729de860ea
//a 4-byte value representing the seconds since the Unix epoch,
//    a 3-byte machine identifier,
//    a 2-byte process id, and
//a 3-byte counter, starting with a random value.--- ��������� 3 �����(e860ea)


//Mongoose.js - ��� ��� ����������� ������� � ����� ������ � ������� ����� � �������� �� ������

//////////////Schema - ������������ ������ � �����
const schema = new Schema({
    name:    String,
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now }, // default: Date.now - ��� ������
    age:     { type: Number, min: 18, max: 65 },
    mixed:   Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array:      [],
    ofString:   [String],
    ofNumber:   [Number],
    ofDates:    [Date],
    ofBuffer:   [Buffer],
    ofBoolean:  [Boolean],
    ofMixed:    [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    nested: {
        stuff: { type: String, lowercase: true, trim: true }

    }
})

////////////////Query - �������

//////////Person.
    find({         //���c�
        occupation: /host/, //�� ���� ����� /host/
        'name.last': 'Ghost', //�� ���������� ����
        age: { $gt: 17, $lt: 66 },  //������  17  ����� 66
        likes: { $in: ['vaporizing', 'talking'] }// � likes ��� ��� vaporizing ��� ��� ��� talking
    }).
    limit(10). //����������
    sort({ occupation: -1 }). //�� ��������
    select({ name: 1, occupation: 1 }); //���� ������� ��� ����

///////////////////https://mlab.com/ - ������� ��� �� �����!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


///////////////////   Cursor
const cursor = Pet
    .find({ type: 'cat' })
    .cursor();

cursor.on('data', function(doc) {
    // Called once for every document
});
cursor.on('close', function() {
    // Called when done
});


/////////////////////////Hooks

schema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    this.password = hashPassword(this.password);

    next();
});

schema.pre('validation', function(next) {
    // do stuff
    next();
});

//////////////////////////Populate
///������� � ������� ������� ����� �������� � ������ ���� �� ������ ��� ������ �� ������

Story
    .find(/*...*/)
    .populate({  // ��� ��� - ��� �� ������� � �����
        path: 'fans', // ��� ����� ��� � ��� �������
        match: { age: { $gte: 21 }}, //������� ������� ���� 21
        select: 'name',    // ��� ����� �� ������ �����
        options: { limit: 5 } // � ����� �� ������ ��� 5
    })

///////////////////////http://mongoosejs.com/docs/guide.html!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    //////////////Express.js

//Hello World

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//Request

req.app
req.baseUrl
req.body  //������������
req.cookies //������������
req.fresh
req.hostname
req.ip //������������
req.ips
req.method
req.originalUrl
req.params //������������
req.path
req.protocol //������������
req.query //������������
req.route //������������
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr

//Response

    res.download()	//Prompt a file to be downloaded.
    res.end()	//End the response process.
    res.json()	//Send a JSON response.
    res.jsonp()	//Send a JSON response with JSONP support.
    res.redirect()	//Redirect a request.
    res.render()	//Render a view template.
    res.send()	//Send a response of various types.
    res.sendFile()	//Send a file as an octet stream.
    res.sendStatus() //Set the response status code and send its string representation as the response body.



////////////Middlewares
const myLogger = (req, res, next) => {
    console.log('Log something');
    next();
};

const myBadLogger = (req, res, next) => {
    console.log('Do domething');
};



/////////////Middlewares

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        next('no access');
    }
    console.log('Do domething');
};


/////////////Catch-middleware

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return next('no access');
    }
    console.log('Do domething');
};

const catchErrors = (err, req, res, next) => {
    res.json({err});
};

///////////How to use
//��������� ���� �������� �������� �� �����������

app.use(requestTime);
app.use(myLogger);

app.get('/', function (req, res) {


    responseText +=
        'Generate time: ' +
        (Date.now() - req.requestTime) + 'ms';

    res.send(responseText);
});

app.listen(3000);


/////////////////////////Cookies

//$ npm install cookie-parser

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

///////////////////////////Routes
//����� ������ � RegExp
app.get('/hello', function (req, res) {
    res.send('hello world')
})

app.get('/ab?cd', callback );

app.get('/ab+cd', callback );

app.get('/ab(cd)?e', callback );

app.get(/.*fly$/, callback);

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})



//////////////////Sub apps

//����� ������ 2 ������� express
var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app


//NPM
//����� ���������� ������ express
express
express-async-router
express-graphql
express-jwt
express-ws
express-xml-bodyparser
express-winston

//
//RESTful JSON API
//��� ���������� ���� ������������� ���� ������������ �� ��� RESTful
//
//REST ( Representational State Transfer ) � ������������� ����� ��������������
//����������� �������������� ���������� � ����.
//
//REST ������������ ����� ������������� ����� �����������, ����������� ��� ��������������
//������������� ����������-�������.
//
//
//Web ����������, �� ���������� ������������� ����������� REST ��������  �RESTful�


//�����������
//���������� ���������
//������������ ����������
//
////////////////////////////Status Codes


//200 OK (�������)
//201 Created (��������)
//202 Accepted (��������)
//301 Moved Permanently (����������� ��������)
//302 Moved Temporarily (����������� ��������)
//302 Found (��������)
//400 Bad Request (�������, �������� ������)
//401 Unauthorized (��� �����������)
//402 Payment Required (����������� ������)
//403 Forbidden (����������)
//404 Not Found (��� �������)
//301 Moved Permanently (����������� ��������)
//302 Moved Temporarily (����������� ��������)
//302 Found (��������)
//500 Internal Server Error (����������� ������ �������)
//501 Not Implemented (��� �����������)
//502 Bad Gateway (�������, ��������� ����)
//503 Service Unavailable (������� ����������)
//504 Gateway Timeout (����� �� ��������)


///////////////////////postman - ����������!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//����� ���������� ����� ��������� ������� ���� � ���
///////////////////////MongoChef - ������ � ����� ������!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
