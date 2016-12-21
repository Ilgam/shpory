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


const urlnews = 'https://ria.ru';
const corpus = {};


function callback () {
    try {

        let words = [];
        for (var prop in corpus) {
            words.push({
                word: prop
            });
        }
        console.log(words);
    } catch(err) {
        console.log(err)
        res.json({err})
    }
}

async function getpocemon(n){
    return fetch(`${urlnews}` + n).then((response) => {
        var j = response.text();

        return j;
    })
}


app.get('/', async function(req, res, next){
    try {
        const urlhh = await fetch(`${urlnews}/archive/`)
        const fds = await urlhh.text();
        const $ = cheerio.load(fds);
        const ius =  $('body').find('.b-calendar__day-item a');
        const gkf = ius.map((t,n)=>{
            return $(n).attr('href')
        })
        const swew = [
            ...gkf
        ]
        const sds = swew.map(n=>{
            return getpocemon(n)
        })
        const sd = await prom.all(sds);
        sd.forEach((n)=>{
            const $posst = cheerio.load(n);
            const ius = $posst('body').find('.b-list__item').children();
            ius.each((t,n)=> {
                const hgskd = $posst(n).text()
                if (hgskd.indexOf('ÑØÀ') >= 0) {
                    corpus[hgskd]++
                }
            })
        })
        callback()

    } catch(err) {
        console.log(err)
        res.json({err})
    }


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

