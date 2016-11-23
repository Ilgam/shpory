'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var user = con(req.query.username);
    res.send(user);
});
function con(url) {
    var re = new RegExp('@?(https?:)?(\/\/)?((github|twitter|www|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
    var sern = url.match(re)[5];
    console.log(sern);
    return '@' + sern;
}
//const array = [
//    'https://vk.com/igovorukhin'
//]
//array.forEach((n)=>{
//    const un = con(n);
//    console.log(un);
//
//
//})

module.exports = router;