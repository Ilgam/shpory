//////////////////////////////////1.ВСТУПЛЕНИЕ HELLO WORLD/////////////////////////////////
//{
//-git
//Устанавливается msysGit из проекта http://msysgit.github.io. Нужно скачать и запустить на выполнение //установочный файл.
//Выбрать опции при установке «Use Git Bash only» или «Run Git from the Windows Command Prompt
//Выбрать «Use Windows style line endings»
//-Conemu
//Установим Conemu http://www.conemu.ru/
//Настройка conemu
//CTRL + ALT + P заходимв настройки
//Переходим в  Tasks и ставим Git Bash и указываем путь в каталог
//Переходим в Startap и в Speicifild named task  ставим Git Bash

///////////////////////////////////Как сделать commit/////////////////////////////////////

//Создаем новую ветку, выполняем в ней нужные изменения.
//Список всех измененных и добавленных файлов можно просмотреть командой:
//git status
//Подготавливаем коммит, добавляя в него файлы командой:
//git add <file1> <file2> ...
//Или удаляем устаревшие файлы:
//git rm <file1> <file2> ...
//Выполняем коммит:
// git commit -m 'Комментарий к коммиту'
// git commit -m 'Комментарий к коммиту'
//Как правило, в репозитории существует две основные ветки - dev и master.
//    Dev - общая ветка разработчиков и тестировщиков. Именно в нее добавляются все новые разработки перед очередным релизом.
//    Master - ветка для выкладки продукта на боевые сервера.
//После коммита надо влить в нашу ветку изменения из ветки dev и master:
//git pull origin dev
//git pull origin master
//Теперь наша ветка содержит изменения для проекта, и все последние изменения по другим задачам, которые успела внести команда.
//Переключаемся на ветку dev:
//git checkout dev
//Вливаем в dev изменения из ветки проекта:
// git merge project_branch
// git merge project_branch
// Заливаем последнюю версию ветки dev на удаленный сервер:
// git push origin dev
//push может не пройти, потому что удалённый origin/dev обогнал локальную его копию.


////////////////////////////////////////-Npm////////////////////////////////////////
//Установка
//Качаем node.js + npm с официального сайта: https://nodejs.org/download/
//}
//Консоль комуэму
//mkdir blog
//cd blog
//Нужно 2 утилиты:
//npm  i  -g  babel-cli // запуск е6 е7 код на сервере
//npm i -g nodemon // автоматическое отслеживание файлеков и перезагрузки сервера
//Создать файлие с зависимосями package.json
//npm init  --yes (или ini)
// скачаем зависимости зависимости
//npm i  -- save  express  //  сервер nodejs
//npm i  -- save  mongoose   // орм для базы данных mongo
//npm i  -- save  express-session    // для работы с сесиями
//npm i  -- save  body-parser   // для работы с телом запроса req
//npm i  -- save  morgan  // для логирования
// скачаем зависимости бабеля для поддержки е6 е7 синтаксиса
//npm i  -- save-dev    babel-cli
//npm i  -- save-dev    babel-core
//npm i  -- save-dev    babel-preset-es2015
//npm i  -- save-dev    babel-preset-stage-0
//npm i  -- save-dev     babel-preset-stage-1
//npm i  -- save-dev    babel-preset-stage-2
//npm i  -- save-dev    babel-preset-stage-3
//фаил настроек для бабеля
touch .babelrc
// в нем пишем
//{
//    "presets": ["es2015", "stage-1", "stage-0", "stage-2", "stage-3"]
//}
// создадим папки для нашего проекта
//mkdir models         //хранить наши модели
//mkdir controllers   //логика приложения
//mkdir config             //настройки для сервера
//mkdir routes             // где будем прописфывать роутинг(пути)
//mkdir middlewares  //промежуточные обработчики
// создадим файлик с настройками для сервера
//cd config
//touch index.js
// в нем пишем
const config = {
    database: 'localhost/blog-lesson', //путь к базе данных
    port: 3000,                        // на которм наш сервер будет слушать подключение
    secret: 'verysecretkey'            // секретный ключ для сессий
}
export default config;            // дефолтный экспорт
// создадим файлик с описание нашего сервера
//cd ..
//    touch server.js
// в нем пишем
//импартируем зависимости
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//инмпартируем насторойки
import config from './config';
//создадим экземпляр нашего приложения
const app = express();
//укажем на каком порту слушать соединение
app.listen(config.port, err => {
    if (err) throw err;
    console.log(`Server listening on port ${config.port}`);
});
//подключим к приложению  наши зависимоти
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
// напишем тестовый роут
//app.get(‘*’, async  (req, res) =>{
//    res.send(‘Hellow World’);
//} );
// поравим  package.json  чтобы запускать сервер через npm + nodemon

//{
//    "name": "blog",
//    "version": "1.0.0",
//    "description": "",
//    "main": "index.js",
//    "scripts": {
//    "start": "nodemon --exec babel-node server.js"     //вот тут
//},
//*Фаил приведен не полностью
// убедимся что все работает
//npm start
// проверим что сервер работает в браузере введем localhost:3000
//должно быть написано Hello world

///////////////////////////2.АВТОРИЗАЦИЯ РЕГИСТРАЦИЯ//////////////////////////////////
//{
//1.Зайдите на официальную страницу скачивания и скачайте  файлы  https://www.mongodb.com/download-center .
// Для разработки можно использовать как 32-, так и 64-разрядную версию.
//2.Распакуйте архив (куда угодно) и перейдите в папку bin.
// mongod — это сервер, а mongo — клиентская консоль
//3.Создайте новый файл в папке bin и назовите его mongodb.config
//4.Добавьте в mongodb.config одну строку: dbpath=ПУТЬ_КУДА_ХОТИТЕ_СОХРАНИТЬ_ФАЙЛЫ_БАЗЫ_ДАННЫХ. Например, в Windows можно написать
//dbpath=c:\mongodb\data а в Linux — dbpath=/etc/mongodb/data.
//5.Запустите start mongod с параметром --config mongodb.config.
//Теперь, чтобы подключиться к запущенному серверу, можете запустить mongo.
//Попробуйте ввести db.version(), чтобы убедиться, что всё в порядке
//}
//скачаем две библиотеки
//npm i   --save bluebird                   //одна для промисов
//npm i   --save  bcrypt-as-promised //вторая для хэширования
// в server.js
// импортируем библиотеку промисов в server.js
//import bluebird from 'bluebird';
//подключим  библиотеку промисов к монгусу
mongoose.Promise = bluebird;
//настроим монгус
mongoose.connect(config.database, err => {
    if (err) throw err;
    console.log(`Mongo connected!`);
});
// Запускаем монгус -сервер
//start mongod --config mongodb.config
//Создадим модель пользоввтеля
//cd models
//touch user.js
// в фалье user.js пишем
//импортируем монгус
import mongoose, { Schema } from 'mongoose';
//импортируем библиотеку хеширования
import bcrypt from 'bcrypt-as-promised';
// создадим схему пользователя
const UserSchema = new Schema({
    // будет два поля
    //логин – строка, уникальное, нрижний регист и индекс для быстрого пользования
    // пароль – строка.
    login: { type: String, unique: true, lowercase: true, index: true },
    password: String

});
//создадим промежуточный обработчик который вызывает модели и сохраняет и хешировать пользователя
//UserSchema.pre('save', async function(next) {
    // проверим изменялся ли пороль
//    if (!this.isModified('password')) {
//        return next();
 //   }
    //сгенерируем соль для пороля
//    const salt = await bcrypt.genSalt(10);
    //создадим хэшдля нашего пароля из соли
//    const hash = await bcrypt.hash(this.password, salt);
    //присвом хэш нашему поролю
//    this.password = hash;
//    next();
//});

//создадим метод для проверки пороля
UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compare(password, this.password);
};
export default mongoose.model('User', UserSchema);
//создадим контроллер который будет обрабатывать запросы
//cd ..
//    cd controllers
//touch auth.js


//в файле auth
// импортируем модель
import User from '../models/user';
//Будут 2 функции
//1авторизации
//export const signup = async (req, res, next) => {
//    res.send(‘signup’)
//}
//2 регистрациии
//export const signin = async (req, res, next) => {
//    res.send(‘signin)
//}
//создадим роут для обработки запросов(будут 2 маршрута для авторизиции и регистрации)
//cd ..
//    cd routes
//touch auth.js
//вфайцле auth.js
//импортируем контроллер и эксперсс
import express from 'express';
import * as AuthController from '../controllers/auth';
//создадим экземпляр роут
const router = express.Router();
//1 роут для ркгистрации
router.post('/signup', AuthController.signup);
//2 роут для аторизации
router.post('/signin', AuthController.signin);
//экспортируем роут
export default router;
//подключим роутер
//cd ..
//в файле server.js подключим роутер
    import authRoute from './routes/auth';
// удаляем
//app.get(‘*’, async  (req, res) =>{
//    res.send(‘Hellow World’);
//} );
// всесто пишем(будем выгледять вот так api/signin какбы склеиваться)
app.use('/api', authRoute);
// в постмен пишем  запрос POST
http://localhost:3000/api/signup
//или
//    http://localhost:3000/api/signup
//покажет “signup” или “signin”
// напишем функцию авторизации
//    cd controllers



// в файле auth.js
// сначало нужно получить тело запроса котором будет находитться логин и пароль
//export const signup = async (req, res, next) => {
 //   const credentials = req.body;
//создадим переменную в которой будем хранить пользователя
 //   let user;
//создадим пользователдя через контрукцию трай кэч(в случаи ошибки передадим в next)
//    try {
//        user = await User.create(credentials);
//    } catch ({ message }) {
 //       return next(e)
//    }
//
// в случае успеха вернем пользователя
//    res.json(user);
//}
//проверим регистрацию в постмане
//http://localhost:3000/api/signin
// в раздел body -> галочку на x-www-form-… в первой строке пишем
//    login  test
//password 123
// появиться что-то типа
//{
//‘_v’: 0,
//“login”: “test”
// и т д
//}
//если создать пользователя с таким логином сервер упадет с ошибкой
//давайте исправим(создадим обработчик ошибок)
//cd ..
//    cd middlerwares
//touch errorHandler.js
// в файле errorHandler.js
// обработчик ошибок создается с 4 аргуиментами
//export default function(err, req, res, next) {
// создадим стандартные ошибки если обработчик не смрожет распознаьт их
//    let { status = 500, message = 'Server Error' } = err;
// вернем ошибку клиенту
//    return res
//        .status(status)
//        .json({ message });
//};
// подлючим обработчик
//cd ..
//в файле server.js
//    import errorHandler from './middlewares/errorHandler';
// обюработчик ошибок подключается последним
app.use(errorHandler);
// в постмане создадим пользователя который уже существует
// должно получиться вот так
//{
//“message”:”E1102 и тд”
//}
// поправим статус
//cd ..
//    cd controllers
//в файле auth.js исправляем в
//вмкесто
//return next(e):
// пишем
//return next({
//    status: 400,
//    message
//});
//}
//напишем функцию авторизации
//export const signin = async (req, res, next) => {
// доставим из боди логин и пароль
//    const { login, password } = req.body;
// получим пользователя по логину
//    const user = await User.findOne({ login });
    // если пользователь не найден вернем ошибуку со статусом 400 и сообщением
//    if (!user) {
//        return next({
//            status: 400,
 //           message: 'User not found'
//        });
//    }
// проверм его пароли с помощью функции которой мы создали(обернем в трай кеч)
//    try {
//        const result = await user.comparePasswords(password);
//    } catch (e) {
// если пароль не совпадает вернем ошибку
//        return next({
//            status: 400,
//            message: 'Bad Credentials'
//        });
//    }
// если пароль совпадает запишем айди пользователя в сессии и вернем пользователя
//    res.json(user);
//}
//можно проверять


//////////////////////////////3.Аутоиндификация 2.0( OAuth 2.0)////////////////////////////////


//Аутентификация 2.0 – состоит из 2 этапов получение авторизации и обращение к защищенным рескрсам
// Результатам авторизауии является получение ключа который доет досту к защищенным рескрсам
//скачаем библиотека для создания токинов
//cd ..
//npm i  --save jsonwebtoken
//cd controllers
// в файле auth.js
//подключим библиотеку для создания токена
import jwt from 'jsonwebtoken';
//подключим конфиг
import config from '../config';
//создадим токен(первый агрумент объект который будет захеширован(id пользователю))
//вторым параметр ключ который используется при хешировании)
const token = jwt.sign({ _id: user._id }, config.secret);
//вернем токен пользователю(на клиенте этот токен нужно запомнить(куки) и посылать для запроса)
//вместо
res.json(user);
//пишем
res.json(token);
//проверяем в постмане
//долны поучить токен что то типа sdofjsdjfosdjfolsdjfo
// создадим мидельвар чтобы проверить токкен(использровать на защищенныхмаршшрутах)
//cd ..
//cd middlewares
//touch checkToken.js
// в файле checkToken.js
//подключим библиотеку для создания токена
import jwt from 'jsonwebtoken';
//подключим конфиг
import config from '../config';
//создадим мидельвер
export default function (req, res, next) {
// записывать токен мы будем в заголог авторизатион.Достаним его
    const token = req.headers['authorization'];
//проверим наличие токена и вернм ошибку если его нет
    if (!token) {
        return next({
            status: 403,
            message: 'Forbidden. No Token!'
        });
    }



//ркаспарсим токен и вернем пользователю в случае ошибки
//    try {
//        var tokenObj = jwt.verify(token, config.secret);
//    } catch ({ message }) {
//        return next({
//            status: 400,
//            message
//        });
//    }
// ввыведем распарсенный токен
    console.log(tokenObj)
// если нет ошибок пропустим обработчик дальше
    next();
}
// подключим мидельвер
//cd ..
// в вайле server.js
//подключим наш мидельвер
    import checkToken from './middlewares/checkToken';
//app.use('/api', checkToken, (req,res)=>{
//    res.json(‘test’)
//});
//перейдем в постман, скопируем наш токкен, поменяем на гет, в хедерс
//добавим заголовок authorization   во второй токкен

//////////////////////////////////4.Текущий Пользователь//////////////////////////////////
//{
//    Создадим пользователя и сохранять егьто в куки и обращаться к други ресерсам испошьлзуя
//    данные о пользователя
//}
//поправим логгер чтобы показывал более зжатые данные
// в файле server.js
//Исправим с
app.use(morgan('combined'));
//на
app.use(morgan('tiny'));
//добавим токе как средство объекта реквест
//cd middlewares
// в файле checkToken.js
//меняем с
console.log(tokenObj)
//на
req.token = tokenObj;
//теперь во всех лбъектах req будет совойство токкен
//создадим сервес который будет содержать логику работы с пользователям
//cd ..
//mkdir services
//touch UserService.js
// в файле UserService.js
//импортируем модель пользователя
import User from '../models/user';
// сосдадим метод получения пользователя по токкену
//export async function getUserByToken(token) {
//доставим id пользователя из токкена
//    const { _id } = token;
// получим пользователя по id и вслучае ошибки бросим в исключения
//    try {
//        var user = await User.findOne({ _id }, { password: 0 });
//    } catch (e) {
//        throw e;
//    }
//венрнем пользователя
//    return user;
//}

//создадим контроллер для пользователя
//cd ..
//cd controllers
//touch user.js
//в файле user.js
//импортируем червис
import * as UserService from '../services/UserService';
// создадим функцию для получения тякущего пользователя
//export async function getCurrentUser(req, res, next) {
//return res.json(‘getCurrentUser’)
//}
//создадим роут для работы с пользователем
//cd ..
//cd routes
//toush user.js
// в файле user.js
// импортируем  экспресс
import express from 'express';
//импортируем контроллер
import * as UserController from '../controllers/user';
//создадим экземпляр роутера

const router = express.Router();
//создадим роут для получения тякущего пользователя
router.get('/current-user', UserController.getCurrentUser);
// экспортирем его
export default router;
//подключим роут
//cd ..
// в файле server.js
    // подключим роут
    import userRoute from './routes/user';
app.use('/api', checkToken, userRoute);
// проверим в постмане , роут тест миожно кдалить
http://localhost:3000/api/current-user
//длолжно получиться getCurrentUser
// вернем в контроллер и пропишем функцию получкения текущего пользователя
//    cd controllers
// в файле user.js
// получим токен из лбъекта реквест
const { token } = req;
// достаним нашего пользователя по  токену из сервиса который написалит
//try {
//    var user = await UserService.getUserByToken(token);
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//вернем пользователя
// вместо
//return res.json(‘getCurrentUser’)
//пишем
return res.json(user);
//прооверим в постмане
//http://localhost:3000/api/current-user
//ошибка нет токена
// получим токен
 //http://localhost:3000/api/signin
// пост запрос в хедерс пишем
//    login  test
//password 123
// получили токен, скопировали его
//http://localhost:3000/api/current-user
// запрос гет
// в хедерах пишем authorization   и токен

///////////////////////// 5 Создание | Получение Записей///////////////////////
//cd ..
//cd middlewares
//touch getUser.js

//импортируем юзер чсервес
//import * as UserService from '../services/UserService';
//экспортируем вункцию
//export default async function (req, res, next) {
//достанем токен
    const { token } = req;
// получим пользователя
//    try {
//        var user = await UserService.getUserByToken(token);
//    } catch ({ message }) {
//        return next({
//            status: 500,
//            message
//        });
//    }
// добавиьт свойство юзер объекта реквест
//    req.user = user;
// вызовим функцию некст
//    next();
//}

// подключим наш мидельвер
//cd ..
// в файле server.js
    import getUser from './middlewares/getUser';
app.use(getUser);
// создадим модель записи
//cd models
//touch page.js
// в файле page.js
//импортирем монуг и схему
import mongoose, { Schema } from 'mongoose';
//создадим схему записи
const PageSchema = new Schema({
//записи будет полетайтл тип стринг поле обезательно
    title: { type: String, require: true },
//толо записи такое же
    body: { type: String, require: true },
// будет юрл которе будет уникальное
    url: { type: String, require: true, unique: true },
// поле криэйтид эт дата, по умолчанию текущая дата
    createdAt: { type: Date, require: true, default: Date.now },
// ссылается на пользователя который сделал запись // ссылаться на таблицу юзер
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
});
// экспортируем модель
export default mongoose.model('Page', PageSchema);
//создадим роут для записи назовем page.js
//cd ..
//cd routes
//touch page.js
// в файле page.js
// импортируем экспресс
import express from 'express';
//импортируем пейджеонтройлер который мы создадим позже

import * as PageController from '../controllers/page';

// создадим экземпляр роута
const router = express.Router();
//создадим два роута
// для сoздания записи post
router.post('/pages', PageController.create);
// для получения запси get
router.get('/pages', PageController.getAll);
//экспортируем
export default router;
// создаи контройлер для записи
//cd ..
//cd controllers
//touch page.js
// в файле page.js
// импортируем модель записи
import Page from '../models/page';
//Создадим для метода
// криэйет
//export async function create(req, res, next) {
//    res.json(‘create’)
//}
// гет олл
//export async function getAll(req, res, next) {
//    res.json(‘getAll)

//}
// подключим наш роут
//cd ..
// в файлку server.js
    import pageRoute from './routes/page';
app.use('/api', checkToken, pageRoute);
// проверим роут в постмане
// авторизируемся чтобы получить токен(это ты сам должен догнать на этои этапе)
// скопируем токен
// проверим пост и гет
// напишем логику создания и получения записей

//cd ..
//cd controllers
//touch page.js

// в файле page.js
// аолучим тело запроса в котором будет находиться данные о записи
const pageData = req.body;
// достаним юзер айди
const userId = req.user._id;
// теперь добавим свойсов юзер айди к объекту пайдж чтобы связать запись  с пользователем
pageData.userId = userId;
// создадим запись в случаи ошибки врнем ее(ошибку)
//try {
//    var page = await Page.create(pageData);
//} catch ({ message }) {
//    return next({
//        status: 400,
//        message
//    });
//}

res.json(page);
// в постмане создаем запись
http://localhost:3000/api/pages
// post в body  в x-www-… пишем

//Body asdfasd
//Title asdasd
//url asdasd
//и отправить
//Отправим с такимже юрл придет ошибка потому что он уже су=ществует
//Вернемся в пайджес.джеэс реализуем метод гетолл
//try {
//    var pages = await Page.find({});
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//и вернем записи
res.json({ pages });
// провкерим метод просто поставим гет

//////////////////6 Удаление | Получение записей по логину/////////////////////

//создвдим два метоа
    controllers -> page.js
// первый для получения записи по логину пользователяexport
//async function getPagesByUserLogin(req, res, next) {
//    res.json("getPagesByUserLogin")
//}
// второй для удаления записи
//export async function deletePage(req, res, next) {
//    res.json("deletePage")
//}
// подключим обработчики в роутаре
routes - page.js
router.get('/pages/:login', PageController.getPagesByUserLogin);
router.delete('/pages/:id', PageController.deletePage);
//проверим в постмане
//авторизируемся
//получили токен
//меняем на гет и проверяем первый метод
//http://localhost:3000/api/pages/ilya
// получим getPagesByUserLogin
//http://localhost:3000/api/pages/234234
//получим deletePage
// вернемся в controllers -> page.js
// подключаем модель
    import User from '../models/user';
//в getPagesByUserLogin получим логин из парамеров запроса
const { login } = req.params;
//получим пользователя по логину
//try {
//    var user = await User.findOne({ login });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// если пользователь не найден вернем ошибку
if (!user) {
    return next({
        status: 404,
        message: 'User not fond'
    });
}
// получим записи по текущему пользователю

//try {
//    var pages = await Page.find({ userId: user._id });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// вернем результат клиенту
res.json({ pages });
// проверим в постмане
// поменяем на гет и
http://localhost:3000/api/pages/ilya
// получем все записи пользователя
// опишем функцуию удаления записи deletePage
//получим id записи из параметров запроса
const _id = req.params.id;
// поучим айди пользователя из реквест
const userId = req.user._id;
// доставим запись по айдишнику
//try {
//    var page = await Page.findOne({ _id });
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
//вернем ошибку если запись не найдена
if (!page) {
    return next({
        status: 404,
        message: 'Page not fond'
    });
}
// сделаем проверку если айди пользователя не совпадает с айди пользоветеям //создавшую запись вернем ошибку
if (userId.toString() !== page.userId.toString()) {
    return next({
        status: 403,
        message: 'Permission denied'
    });
}
// если совпадает то удалим запись
//try {
//    page.remove();
//} catch ({ message }) {
//    return next({
//        status: 500,
//        message
//    });
//}
// вернем сообщение об успещшном удалении
return res.json({ message: 'success' });
// проверим в постмане

//http://localhost:3000/api/pages/ilya
//скопируем id записи
// поменяем на делет
//    http://localhost:3000/api/pages/суда айди
// проверим
//    http://localhost:3000/api/pages/ilya

