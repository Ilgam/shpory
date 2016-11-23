import exspress from 'express';

import fetch from 'isomorphic-fetch';
import mongoose from 'mongoose';
import Promis from "bluebird";

import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import favicon from 'serve-favicon';
import SD from './SaveData'
import User from './User';
import Pets from './Pet';
import _ from 'lodash';
const users = require('./users');
const app = exspress();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://publicdb.mgbeta.ru/igov_skb3');


app.get('/user', async (req, res)=>{
    "use strict";
    const usersData = await User.find();

    return res.json({
        usersData
    })
})



app.get('/pet', async (req, res)=>{
    "use strict";
    const usersData = await Pets.find().populate('owner'); // .populate('owner') бегает по БД и находит соответствующие ему owner
    return res.json({                                      // а в Pet мы прописали id и ref(в каком объектах искать этот id)
        usersData
    })
})

app.get('/clear', async (res,req)=>{
    await User.remove({}); //удаление
    await Pets.remove({});
    return res.send('Ok')

})
app.post('/data', async (req, res)=>{
    const data = req.body;
    if(!data.user){ return res.status(400).send('Error 400')}
    if(!data.pets){ data.pets=[]}
    // return res.json({
    //     data
    // })
    const userOne = await User.findOne({
        name: data.user.name
    })
    if(userOne) {
        return res.status(400).send('Error 400 user exist')
    }

    try {
        const result = await SD(data)
        return res.json(result)
    } catch (err){
        console.log(2)
       return res.status(500).json(err)

    }

//   var data =   {
//         "user": {
//             "name": "igov1"
//         },
//         "pets": [
//             {
//              "name": 'Kitti1',
//              "type": 'cat'
//
//             },
//             {
//             "name": 'Maks1',
//             "type":'dog'
//
//             }
//         ]
//     }
//
//
// SD(data);




//    const Pet = mongoose.model('Pet', {
//        type: String,
//        name: String
//    })
//
//const Mycat = new Pet({
//    type: 'cat',
//    name: 'Mycat'
//})
//
//Mycat.save().then(()=>{
//    console.log('Ok')
//})

});
//app.use('/users', users);



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
        res.send('Error2')
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('Error3')
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});