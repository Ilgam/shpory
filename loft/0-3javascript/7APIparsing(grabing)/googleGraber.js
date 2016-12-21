
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


const urlnews = 'https://www.google.ru/search?newwindow=1&espv=2&q=%D0%BF%D0%BE%D1%80%D0%BD%D0%BE+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F&oq=%D0%BF%D0%BE%D1%80%D0%BD%D0%BE+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F&gs_l=serp.12...50379.54480.0.55751.7.7.0.0.0.0.71.415.7.7.0....0...1c.1.64.serp..0.0.0.qsL-Xnug8cU';
const corpus = {};
let totalResults = 0
let resultsDownloaded = 0;

function callback () {
    try {
        resultsDownloaded++;

        if (resultsDownloaded !== totalResults) {
            return;
        }

        let words = [];
        for (var prop in corpus) {
            words.push({
                word: prop,
                count: corpus[prop]
            });
        }
        words.sort(function (a, b) {
            return b.count - a.count;
        });

        console.log(words.slice(0, 20));
    } catch(err) {
        console.log(err)
        res.json({err})
    }
}

app.get('/', async function(req, res, next){
    try {
        const urlhh = await fetch(`${urlnews}`)
        const fds = await urlhh.text();

        const $ = cheerio.load(fds);
        const ldf = $('body').find('.r a');

        ldf.each( async function (i, link) {
            let url = $(link).attr("href");
            url = url.replace("/url?q=", "").split("&")[0];
            if (url.charAt(0) === "/") {
                return;
            }
            totalResults++;
            console.log(url)
            const urlhh1 = await fetch(`${url}`)
            const fds2 = await urlhh1.text();
            const $post = cheerio.load(fds2);
            let text = $post("body div").children().text();


            text = text.replace(/\s+/g, " ")
                .replace(/[^à-ÿÀ-ß ]/g, "")
                .toLowerCase();

            text.split(" ").forEach(function (word) {
                if (word.length < 4 || word.length > 20) {
                    return;
                }
                if (corpus[word]) {
                    corpus[word]++;
                } else {
                    corpus[word] = 1;
                }
            });
            callback();
        })

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