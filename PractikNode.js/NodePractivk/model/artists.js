var db = require('../db');

exports.all = function (cb) {
    db.get().collection('artistdb').find().toArray(function (err, data) {
        cd(err,data);
    })
}