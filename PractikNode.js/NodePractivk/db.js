var MongoClint = require('mongodb').MongoClient;

var state = {
    db: null
}

exports.connect = function (url, done) {
    if(state.db){
        return done();
    }

    MongoClint.connect(url, function (err, data) {
        if(err){
            return done(err);
        }
        state.db = data;
        return done();
    })
}
exports.get = function () {
    return state.db;
}