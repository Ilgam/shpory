//////////////////////////////////1.���������� HELLO WORLD/////////////////////////////////
//{
//-git
//��������������� msysGit �� ������� http://msysgit.github.io. ����� ������� � ��������� �� ���������� //������������ ����.
//������� ����� ��� ��������� �Use Git Bash only� ��� �Run Git from the Windows Command Prompt
//������� �Use Windows style line endings�
//-Conemu
//��������� Conemu http://www.conemu.ru/
//��������� conemu
//CTRL + ALT + P �������� ���������
//��������� �  Tasks � ������ Git Bash � ��������� ���� � �������
//��������� � Startap � � Speicifild named task  ������ Git Bash

///////////////////////////////////��� ������� commit/////////////////////////////////////

//������� ����� �����, ��������� � ��� ������ ���������.
//������ ���� ���������� � ����������� ������ ����� ����������� ��������:
//git status
//�������������� ������, �������� � ���� ����� ��������:
//git add <file1> <file2> ...
//��� ������� ���������� �����:
//git rm <file1> <file2> ...
//��������� ������:
// git commit -m '����������� � �������'
// git commit -m '����������� � �������'
//��� �������, � ����������� ���������� ��� �������� ����� - dev � master.
//    Dev - ����� ����� ������������� � �������������. ������ � ��� ����������� ��� ����� ���������� ����� ��������� �������.
//    Master - ����� ��� �������� �������� �� ������ �������.
//����� ������� ���� ����� � ���� ����� ��������� �� ����� dev � master:
//git pull origin dev
//git pull origin master
//������ ���� ����� �������� ��������� ��� �������, � ��� ��������� ��������� �� ������ �������, ������� ������ ������ �������.
//������������� �� ����� dev:
//git checkout dev
//������� � dev ��������� �� ����� �������:
// git merge project_branch
// git merge project_branch
// �������� ��������� ������ ����� dev �� ��������� ������:
// git push origin dev
//push ����� �� ������, ������ ��� �������� origin/dev ������� ��������� ��� �����.


////////////////////////////////////////-Npm////////////////////////////////////////
//���������
//������ node.js + npm � ������������ �����: https://nodejs.org/download/
//}
//������� �������
//mkdir blog
//cd blog
//����� 2 �������:
//npm  i  -g  babel-cli // ������ �6 �7 ��� �� �������
//npm i -g nodemon // �������������� ������������ �������� � ������������ �������
//������� ������ � ������������ package.json
//npm init  --yes (��� ini)
// ������� ����������� �����������
//npm i  -- save  express  //  ������ nodejs
//npm i  -- save  mongoose   // ��� ��� ���� ������ mongo
//npm i  -- save  express-session    // ��� ������ � �������
//npm i  -- save  body-parser   // ��� ������ � ����� ������� req
//npm i  -- save  morgan  // ��� �����������
// ������� ����������� ������ ��� ��������� �6 �7 ����������
//npm i  -- save-dev    babel-cli
//npm i  -- save-dev    babel-core
//npm i  -- save-dev    babel-preset-es2015
//npm i  -- save-dev    babel-preset-stage-0
//npm i  -- save-dev     babel-preset-stage-1
//npm i  -- save-dev    babel-preset-stage-2
//npm i  -- save-dev    babel-preset-stage-3
//���� �������� ��� ������
touch .babelrc
// � ��� �����
//{
//    "presets": ["es2015", "stage-1", "stage-0", "stage-2", "stage-3"]
//}
// �������� ����� ��� ������ �������
//mkdir models         //������� ���� ������
//mkdir controllers   //������ ����������
//mkdir config             //��������� ��� �������
//mkdir routes             // ��� ����� ������������ �������(����)
//mkdir middlewares  //������������� �����������
// �������� ������ � ����������� ��� �������
//cd config
//touch index.js
// � ��� �����
const config = {
    database: 'localhost/blog-lesson', //���� � ���� ������
    port: 3000,                        // �� ������ ��� ������ ����� ������� �����������
    secret: 'verysecretkey'            // ��������� ���� ��� ������
}
export default config;            // ��������� �������
// �������� ������ � �������� ������ �������
//cd ..
//    touch server.js
// � ��� �����
//����������� �����������
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//������������ ����������
import config from './config';
//�������� ��������� ������ ����������
const app = express();
//������ �� ����� ����� ������� ����������
app.listen(config.port, err => {
    if (err) throw err;
    console.log(`Server listening on port ${config.port}`);
});
//��������� � ����������  ���� ����������
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
// ������� �������� ����
//app.get(�*�, async  (req, res) =>{
//    res.send(�Hellow World�);
//} );
// �������  package.json  ����� ��������� ������ ����� npm + nodemon

//{
//    "name": "blog",
//    "version": "1.0.0",
//    "description": "",
//    "main": "index.js",
//    "scripts": {
//    "start": "nodemon --exec babel-node server.js"     //��� ���
//},
//*���� �������� �� ���������
// �������� ��� ��� ��������
//npm start
// �������� ��� ������ �������� � �������� ������ localhost:3000
//������ ���� �������� Hello world

///////////////////////////2.����������� �����������//////////////////////////////////
//{
//1.������� �� ����������� �������� ���������� � ��������  �����  https://www.mongodb.com/download-center .
// ��� ���������� ����� ������������ ��� 32-, ��� � 64-��������� ������.
//2.���������� ����� (���� ������) � ��������� � ����� bin.
// mongod � ��� ������, � mongo � ���������� �������
//3.�������� ����� ���� � ����� bin � �������� ��� mongodb.config
//4.�������� � mongodb.config ���� ������: dbpath=����_����_������_���������_�����_����_������. ��������, � Windows ����� ��������
//dbpath=c:\mongodb\data � � Linux � dbpath=/etc/mongodb/data.
//5.��������� start mongod � ���������� --config mongodb.config.
//������, ����� ������������ � ����������� �������, ������ ��������� mongo.
//���������� ������ db.version(), ����� ���������, ��� �� � �������
//}
//������� ��� ����������
//npm i   --save bluebird                   //���� ��� ��������
//npm i   --save  bcrypt-as-promised //������ ��� �����������
// � server.js
// ����������� ���������� �������� � server.js
//import bluebird from 'bluebird';
//���������  ���������� �������� � �������
mongoose.Promise = bluebird;
//�������� ������
mongoose.connect(config.database, err => {
    if (err) throw err;
    console.log(`Mongo connected!`);
});
// ��������� ������ -������
//start mongod --config mongodb.config
//�������� ������ ������������
//cd models
//touch user.js
// � ����� user.js �����
//����������� ������
import mongoose, { Schema } from 'mongoose';
//����������� ���������� �����������
import bcrypt from 'bcrypt-as-promised';
// �������� ����� ������������
const UserSchema = new Schema({
    // ����� ��� ����
    //����� � ������, ����������, ������� ������ � ������ ��� �������� �����������
    // ������ � ������.
    login: { type: String, unique: true, lowercase: true, index: true },
    password: String

});
//�������� ������������� ���������� ������� �������� ������ � ��������� � ���������� ������������
//UserSchema.pre('save', async function(next) {
    // �������� ��������� �� ������
//    if (!this.isModified('password')) {
//        return next();
 //   }
    //����������� ���� ��� ������
//    const salt = await bcrypt.genSalt(10);
    //�������� ������ ������ ������ �� ����
//    const hash = await bcrypt.hash(this.password, salt);
    //������� ��� ������ ������
//    this.password = hash;
//    next();
//});

//�������� ����� ��� �������� ������
UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compare(password, this.password);
};
export default mongoose.model('User', UserSchema);
//�������� ���������� ������� ����� ������������ �������
//cd ..
//    cd controllers
//touch auth.js


//� ����� auth
// ����������� ������
import User from '../models/user';
//����� 2 �������
//1�����������
//export const signup = async (req, res, next) => {
//    res.send(�signup�)
//}
//2 ������������
//export const signin = async (req, res, next) => {
//    res.send(�signin)
//}
//�������� ���� ��� ��������� ��������(����� 2 �������� ��� ����������� � �����������)
//cd ..
//    cd routes
//touch auth.js
//������� auth.js
//����������� ���������� � ��������
import express from 'express';
import * as AuthController from '../controllers/auth';
//�������� ��������� ����
const router = express.Router();
//1 ���� ��� �����������
router.post('/signup', AuthController.signup);
//2 ���� ��� ����������
router.post('/signin', AuthController.signin);
//������������ ����
export default router;
//��������� ������
//cd ..
//� ����� server.js ��������� ������
    import authRoute from './routes/auth';
// �������
//app.get(�*�, async  (req, res) =>{
//    res.send(�Hellow World�);
//} );
// ������ �����(����� ��������� ��� ��� api/signin ����� �����������)
app.use('/api', authRoute);
// � ������� �����  ������ POST
http://localhost:3000/api/signup
//���
//    http://localhost:3000/api/signup
//������� �signup� ��� �signin�
// ������� ������� �����������
//    cd controllers



// � ����� auth.js
// ������� ����� �������� ���� ������� ������� ����� ����������� ����� � ������
//export const signup = async (req, res, next) => {
 //   const credentials = req.body;
//�������� ���������� � ������� ����� ������� ������������
 //   let user;
//�������� ������������� ����� ���������� ���� ���(� ������ ������ ��������� � next)
//    try {
//        user = await User.create(credentials);
//    } catch ({ message }) {
 //       return next(e)
//    }
//
// � ������ ������ ������ ������������
//    res.json(user);
//}
//�������� ����������� � ��������
//http://localhost:3000/api/signin
// � ������ body -> ������� �� x-www-form-� � ������ ������ �����
//    login  test
//password 123
// ��������� ���-�� ����
//{
//�_v�: 0,
//�login�: �test�
// � � �
//}
//���� ������� ������������ � ����� ������� ������ ������ � �������
//������� ��������(�������� ���������� ������)
//cd ..
//    cd middlerwares
//touch errorHandler.js
// � ����� errorHandler.js
// ���������� ������ ��������� � 4 ������������
//export default function(err, req, res, next) {
// �������� ����������� ������ ���� ���������� �� ������� ���������� ��
//    let { status = 500, message = 'Server Error' } = err;
// ������ ������ �������
//    return res
//        .status(status)
//        .json({ message });
//};
// �������� ����������
//cd ..
//� ����� server.js
//    import errorHandler from './middlewares/errorHandler';
// ����������� ������ ������������ ���������
app.use(errorHandler);
// � �������� �������� ������������ ������� ��� ����������
// ������ ���������� ��� ���
//{
//�message�:�E1102 � ��
//}
// �������� ������
//cd ..
//    cd controllers
//� ����� auth.js ���������� �
//�������
//return next(e):
// �����
//return next({
//    status: 400,
//    message
//});
//}
//������� ������� �����������
//export const signin = async (req, res, next) => {
// �������� �� ���� ����� � ������
//    const { login, password } = req.body;
// ������� ������������ �� ������
//    const user = await User.findOne({ login });
    // ���� ������������ �� ������ ������ ������� �� �������� 400 � ����������
//    if (!user) {
//        return next({
//            status: 400,
 //           message: 'User not found'
//        });
//    }
// ������� ��� ������ � ������� ������� ������� �� �������(������� � ���� ���)
//    try {
//        const result = await user.comparePasswords(password);
//    } catch (e) {
// ���� ������ �� ��������� ������ ������
//        return next({
//            status: 400,
//            message: 'Bad Credentials'
//        });
//    }
// ���� ������ ��������� ������� ���� ������������ � ������ � ������ ������������
//    res.json(user);
//}
//����� ���������


//////////////////////////////3.��������������� 2.0( OAuth 2.0)////////////////////////////////


//�������������� 2.0 � ������� �� 2 ������ ��������� ����������� � ��������� � ���������� ��������
// ����������� ����������� �������� ��������� ����� ������� ���� ����� � ���������� ��������
//������� ���������� ��� �������� �������
//cd ..
//npm i  --save jsonwebtoken
//cd controllers
// � ����� auth.js
//��������� ���������� ��� �������� ������
import jwt from 'jsonwebtoken';
//��������� ������
import config from '../config';
//�������� �����(������ �������� ������ ������� ����� �����������(id ������������))
//������ �������� ���� ������� ������������ ��� �����������)
const token = jwt.sign({ _id: user._id }, config.secret);
//������ ����� ������������(�� ������� ���� ����� ����� ���������(����) � �������� ��� �������)
//������
res.json(user);
//�����
res.json(token);
//��������� � ��������
//����� ������� ����� ��� �� ���� sdofjsdjfosdjfolsdjfo
// �������� ��������� ����� ��������� ������(������������� �� ��������������������)
//cd ..
//cd middlewares
//touch checkToken.js
// � ����� checkToken.js
//��������� ���������� ��� �������� ������
import jwt from 'jsonwebtoken';
//��������� ������
import config from '../config';
//�������� ���������
export default function (req, res, next) {
// ���������� ����� �� ����� � ������� ������������.�������� ���
    const token = req.headers['authorization'];
//�������� ������� ������ � ����� ������ ���� ��� ���
    if (!token) {
        return next({
            status: 403,
            message: 'Forbidden. No Token!'
        });
    }



//���������� ����� � ������ ������������ � ������ ������
//    try {
//        var tokenObj = jwt.verify(token, config.secret);
//    } catch ({ message }) {
//        return next({
//            status: 400,
//            message
//        });
//    }
// �������� ������������ �����
    console.log(tokenObj)
// ���� ��� ������ ��������� ���������� ������
    next();
}
// ��������� ���������
//cd ..
// � ����� server.js
//��������� ��� ���������
    import checkToken from './middlewares/checkToken';
//app.use('/api', checkToken, (req,res)=>{
//    res.json(�test�)
//});
//�������� � �������, ��������� ��� ������, �������� �� ���, � ������
//������� ��������� authorization   �� ������ ������

//////////////////////////////////4.������� ������������//////////////////////////////////
//{
//    �������� ������������ � ��������� ����� � ���� � ���������� � ����� �������� ����������
//    ������ � ������������
//}
//�������� ������ ����� ��������� ����� ������ ������
// � ����� server.js
//�������� �
app.use(morgan('combined'));
//��
app.use(morgan('tiny'));
//������� ���� ��� �������� ������� �������
//cd middlewares
// � ����� checkToken.js
//������ �
console.log(tokenObj)
//��
req.token = tokenObj;
//������ �� ���� �������� req ����� ��������� ������
//�������� ������ ������� ����� ��������� ������ ������ � �������������
//cd ..
//mkdir services
//touch UserService.js
// � ����� UserService.js
//����������� ������ ������������
import User from '../models/user';
// �������� ����� ��������� ������������ �� �������
//export async function getUserByToken(token) {
//�������� id ������������ �� �������
//    const { _id } = token;
// ������� ������������ �� id � ������� ������ ������ � ����������
//    try {
//        var user = await User.findOne({ _id }, { password: 0 });
//    } catch (e) {
//        throw e;
//    }
//������� ������������
//    return user;
//}

//�������� ���������� ��� ������������
//cd ..
//cd controllers
//touch user.js
//� ����� user.js
//����������� ������
import * as UserService from '../services/UserService';
// �������� ������� ��� ��������� �������� ������������
//export async function getCurrentUser(req, res, next) {
//return res.json(�getCurrentUser�)
//}
//�������� ���� ��� ������ � �������������
//cd ..
//cd routes
//toush user.js
// � ����� user.js
// �����������  ��������
import express from 'express';
//����������� ����������
import * as UserController from '../controllers/user';
//�������� ��������� �������

const router = express.Router();
//�������� ���� ��� ��������� �������� ������������
router.get('/current-user', UserController.getCurrentUser);
// ����������� ���
export default router;
//��������� ����
//cd ..
// � ����� server.js
    // ��������� ����
    import userRoute from './routes/user';
app.use('/api', checkToken, userRoute);
// �������� � �������� , ���� ���� ������ �������
http://localhost:3000/api/current-user
//������� ���������� getCurrentUser
// ������ � ���������� � �������� ������� ���������� �������� ������������
//    cd controllers
// � ����� user.js
// ������� ����� �� ������� �������
const { token } = req;
// �������� ������ ������������ ��  ������ �� ������� ������� ���������
//try {
//    var user = await UserService.getUserByToken(token);
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//������ ������������
// ������
//return res.json(�getCurrentUser�)
//�����
return res.json(user);
//��������� � ��������
//http://localhost:3000/api/current-user
//������ ��� ������
// ������� �����
 //http://localhost:3000/api/signin
// ���� ������ � ������ �����
//    login  test
//password 123
// �������� �����, ����������� ���
//http://localhost:3000/api/current-user
// ������ ���
// � ������� ����� authorization   � �����

///////////////////////// 5 �������� | ��������� �������///////////////////////
//cd ..
//cd middlewares
//touch getUser.js

//����������� ���� �������
//import * as UserService from '../services/UserService';
//������������ �������
//export default async function (req, res, next) {
//�������� �����
    const { token } = req;
// ������� ������������
//    try {
//        var user = await UserService.getUserByToken(token);
//    } catch ({ message }) {
//        return next({
//            status: 500,
//            message
//        });
//    }
// �������� �������� ���� ������� �������
//    req.user = user;
// ������� ������� �����
//    next();
//}

// ��������� ��� ���������
//cd ..
// � ����� server.js
    import getUser from './middlewares/getUser';
app.use(getUser);
// �������� ������ ������
//cd models
//touch page.js
// � ����� page.js
//���������� ����� � �����
import mongoose, { Schema } from 'mongoose';
//�������� ����� ������
const PageSchema = new Schema({
//������ ����� ��������� ��� ������ ���� �����������
    title: { type: String, require: true },
//���� ������ ����� ��
    body: { type: String, require: true },
// ����� ��� ������ ����� ����������
    url: { type: String, require: true, unique: true },
// ���� �������� �� ����, �� ��������� ������� ����
    createdAt: { type: Date, require: true, default: Date.now },
// ��������� �� ������������ ������� ������ ������ // ��������� �� ������� ����
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
});
// ������������ ������
export default mongoose.model('Page', PageSchema);
//�������� ���� ��� ������ ������� page.js
//cd ..
//cd routes
//touch page.js
// � ����� page.js
// ����������� ��������
import express from 'express';
//����������� ��������������� ������� �� �������� �����

import * as PageController from '../controllers/page';

// �������� ��������� �����
const router = express.Router();
//�������� ��� �����
// ��� �o������ ������ post
router.post('/pages', PageController.create);
// ��� ��������� ����� get
router.get('/pages', PageController.getAll);
//������������
export default router;
// ������ ���������� ��� ������
//cd ..
//cd controllers
//touch page.js
// � ����� page.js
// ����������� ������ ������
import Page from '../models/page';
//�������� ��� ������
// �������
//export async function create(req, res, next) {
//    res.json(�create�)
//}
// ��� ���
//export async function getAll(req, res, next) {
//    res.json(�getAll)

//}
// ��������� ��� ����
//cd ..
// � ������ server.js
    import pageRoute from './routes/page';
app.use('/api', checkToken, pageRoute);
// �������� ���� � ��������
// �������������� ����� �������� �����(��� �� ��� ������ ������� �� ���� �����)
// ��������� �����
// �������� ���� � ���
// ������� ������ �������� � ��������� �������

//cd ..
//cd controllers
//touch page.js

// � ����� page.js
// ������� ���� ������� � ������� ����� ���������� ������ � ������
const pageData = req.body;
// �������� ���� ����
const userId = req.user._id;
// ������ ������� ������� ���� ���� � ������� ����� ����� ������� ������  � �������������
pageData.userId = userId;
// �������� ������ � ������ ������ ����� ��(������)
//try {
//    var page = await Page.create(pageData);
//} catch ({ message }) {
//    return next({
//        status: 400,
//        message
//    });
//}

res.json(page);
// � �������� ������� ������
http://localhost:3000/api/pages
// post � body  � x-www-� �����

//Body asdfasd
//Title asdasd
//url asdasd
//� ���������
//�������� � ������� ��� ������ ������ ������ ��� �� ��� ��=��������
//�������� � �������.����� ��������� ����� ������
//try {
//    var pages = await Page.find({});
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//� ������ ������
res.json({ pages });
// ��������� ����� ������ �������� ���

//////////////////6 �������� | ��������� ������� �� ������/////////////////////

//�������� ��� �����
    controllers -> page.js
// ������ ��� ��������� ������ �� ������ ������������export
//async function getPagesByUserLogin(req, res, next) {
//    res.json("getPagesByUserLogin")
//}
// ������ ��� �������� ������
//export async function deletePage(req, res, next) {
//    res.json("deletePage")
//}
// ��������� ����������� � �������
routes - page.js
router.get('/pages/:login', PageController.getPagesByUserLogin);
router.delete('/pages/:id', PageController.deletePage);
//�������� � ��������
//��������������
//�������� �����
//������ �� ��� � ��������� ������ �����
//http://localhost:3000/api/pages/ilya
// ������� getPagesByUserLogin
//http://localhost:3000/api/pages/234234
//������� deletePage
// �������� � controllers -> page.js
// ���������� ������
    import User from '../models/user';
//� getPagesByUserLogin ������� ����� �� ��������� �������
const { login } = req.params;
//������� ������������ �� ������
//try {
//    var user = await User.findOne({ login });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// ���� ������������ �� ������ ������ ������
if (!user) {
    return next({
        status: 404,
        message: 'User not fond'
    });
}
// ������� ������ �� �������� ������������

//try {
//    var pages = await Page.find({ userId: user._id });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// ������ ��������� �������
res.json({ pages });
// �������� � ��������
// �������� �� ��� �
http://localhost:3000/api/pages/ilya
// ������� ��� ������ ������������
// ������ �������� �������� ������ deletePage
//������� id ������ �� ���������� �������
const _id = req.params.id;
// ������ ���� ������������ �� �������
const userId = req.user._id;
// �������� ������ �� ���������
//try {
//    var page = await Page.findOne({ _id });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//������ ������ ���� ������ �� �������
if (!page) {
    return next({
        status: 404,
        message: 'Page not fond'
    });
}
// ������� �������� ���� ���� ������������ �� ��������� � ���� ������������ //��������� ������ ������ ������
if (userId.toString() !== page.userId.toString()) {
    return next({
        status: 403,
        message: 'Permission denied'
    });
}
// ���� ��������� �� ������ ������
//try {
//    page.remove();
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// ������ ��������� �� ��������� ��������
return res.json({ message: 'success' });
// �������� � ��������

//http://localhost:3000/api/pages/ilya
//��������� id ������
// �������� �� �����
//    http://localhost:3000/api/pages/���� ����
// ��������
//    http://localhost:3000/api/pages/ilya

