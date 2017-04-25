var Artists = require('../model/artists');

exports.all= (function (req, res) {
    Artists.all(function (err,data) {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(data);
    })
})