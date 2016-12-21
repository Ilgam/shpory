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

function callback () {

    var words = [];


    for (var prop in corpus) {
        words.push({
            word: prop,

        });
    }


    console.log(words);
}

app.get('/', function(req, res, next){

    request(`${urlnews}/archive/`, function (error, response, body) {
        if (error) {
            console.log('ddd')
            return;
        }

        var $ = cheerio.load(body),
            links = $(".b-calendar__day-item a");

        links.each(function (i, link) {

            var url = $(link).attr("href");



            request(`${urlnews}` + url, function (error, response, body) {
                if (error) {
                    console.log('ddd')
                    return;
                }
                var $page = cheerio.load(body);
                const ius = $page('.b-list__item').children()
                ius.each((t,n)=> {
                    const hgskd = $page(n).text()
                    if (hgskd.indexOf('ÑØÀ') >= 0) {
                        corpus[hgskd]++
                    }
                })

            });

        });
        callback();
    });





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

