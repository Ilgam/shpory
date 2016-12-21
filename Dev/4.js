

//////////////////JWT
// JSON Web Token (JWT) — маркер, который содержит в зашифрованном виде всю минимально необходимую информацию
// для аутентификации и авторизации.
// При этом не требуется хранить в сессии данных о пользователе, так как маркер самодостаточный (self-contained).
//
// он выглядит вот так
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1N9Cj0JI1Njk4NjY3NdCkMDAwMTIw0KM3MNCjMCIsImVtYWlsIjoiVmljdG9yLk1heW9yb3
// ZAZ21haWwuY29tIiwibmFtZSI6ItCS0LjQutGC0L7RgCDQnNCw0LnQvtGA0L7QsiIsImlhdCI6MTQ3NTE3MjAxNn0.z2r4E-CXKDdEnk-rMUlmHadul78Ca
// llopAED7kZS-uY
// заметь точки они разделяют HEADER:ALGORITHM & TOKEN TYPE , PAYLOAD:DAT , VERIFY SIGNATURE
// последняя это подпись для криптографии
// работает так
// браузер передает пост запрос(имя псаорт) сервер проверяет есть в базе отвечет с JWT теперь все запросы на этот
// серевер будут с JWT, сервер теперь знает что ты это ты
//
// здесь его можно декадировать и посмотреть доп инфоррмацию:
   /////////////////////////// https://jwt.io/!!!!!!!!!!!!!!!!!!!!!!!!

 //////////////////////////////   Express-async-router
 //   How to use

router.get("/", function (req, res) {
    return myGetOperation()
        .then(myOtherOperation);
});
router.post("/:test", function (req, res) {
    return myParametrizedOperation(req.params.test)
        .then(myOtherOperation);
});
router.use(function (req, res) {
    return myMiddlewareOperation()
        .then(myOtherOperation);
});

//With async


api.get('/offer', async() => {
    return Offer.find();
})
api.get('/offer/:id', async(req) => {
    return Offer.check(req.params.id)
})
api.get('/offer/category/:id', async(req) => {
    return Offer.findByCategoryId(req.params.id)
})
api.get('/404', async(req) => {
    throw new Error('404 Not Found')
})
////////////////////////////Swagger
//большая библеотека чтобы генирирует документацию

////////////////////////////////Bunyan
//логгер
 //npm install bunyan

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'myapp'});
log.info('hi');
log.warn({lang: 'fr'}, 'au revoir');

//> babel-node index.js | ./bunyan -o short -l trace