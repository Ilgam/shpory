import exspress from 'express';
import fetch from 'isomorphic-fetch';
import prom from "bluebird";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import favicon from 'serve-favicon';
import _ from 'lodash';
import mongoose from 'mongoose';
import cheerio from 'cheerio';
import request from 'request';
const users = require('./users');
const app = exspress();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


mongoose.Promise = global.Promise;


const urlnews = 'https://mail.ru';



app.get('/', async function(req, res, next){
    const fistfetch = await fetch(`${urlnews}`)
    const textfetch = await fistfetch.text();
    const $ = cheerio.load(textfetch);
    console.log($('.w-weather').children().text())

});





app.use('/users', users);




app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err)
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('Error')
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

