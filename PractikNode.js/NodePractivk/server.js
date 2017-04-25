var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var  app = express();
var db = require('./db');
var ArtistsController = require('./controller/artists')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req,res) {
    res.send('test')
})
// var artists = [
//     {
//     id:1,
//     name: 'ar1'
// },
//     {
//         id:2,
//         name: 'ar2'
//     },
//     {
//         id:3,
//         name: 'ar3'
//     }
//
// ]
app.get('/artists/:id', ArtistsController.all)

app.post('/artists', function (req, res) {
    var artist = {
        name: req.body.name
    }
      db.get().collection('artistdb').insert(artist, function (err, result) {
         if(err){
       console.log(err)
       res.sendStatus(500)  }
        res.send(artist)

     })


})
app.put('/artists/:id', function (req, res) {
    db.get().collection('artistdb').updateOne(
        { _id: ObjectID(req.params.id) },
        { name: req.body.name}, 
        function (err, result) {
            if(err){
                console.log(err)
                res.sendStatus(500)  }
            res.sendStatus(200)

        }
    )
    // var artist =  artists.find(function (i) {
    //     return i.id == req.params.id
    // })
    // artist.name = req.body.name;
    //
    // res.sendStatus(200)

})
app.delete('/artists/:id', function (req, res) {
    db.get().collection('artistdb').deleteOne(
        { _id: ObjectID(req.params.id) },
        function (err, result) {
            if(err){
                console.log(err)
                res.sendStatus(500)  }
            res.sendStatus(200)

        }
    )


    // console.log(req.params.id)
    //  artists =  artists.filter(function (i) {
    //     return i.id !== Number(req.params.id)
    // })
    // res.sendStatus(200)

})
app.get('/artists', function (req,res) {
    db.get().collection('artistdb').find().toArray(function (err, data) {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        res.send(data)
    //res.send(artists)
})

})

db.connect('mongodb://localhost:27017/firstapp', function (err) {
    if(err){
        console.log(err)
    }

    app.listen('80', function () {
    console.log('listen on 80 port')
})
})