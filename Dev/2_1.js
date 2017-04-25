import exspress from 'express';
const app = exspress();
import fetch from 'isomorphic-fetch';
import  async from 'asyncawait/async';
import await from 'asyncawait/await';
import prom from "bluebird";
import con from './cononaz';
import _ from 'lodash';
const UrlMain = 'https://pokeapi.co/api/v2';

const url1 = `${UrlMain}/pokemon`;

const _DEV_ = true;


async function getPok(url, i = 0) {
    console.log(url, i)

    const resp = await fetch(url, i = 0);
    const result = await resp.json();
    const poke =  result.results;

    if (result.next && i < 0) {
        const resp2 = await getPok(result.next, i + 1);
        return [
            ...poke,
            ...resp2
        ]
    }
    return poke;
}


async function getpocemon(n){
    const resr = await fetch(n);
    const rez = await resr.json();
    return rez
}

const pokre =[ 'name', 'weight']

app.get('/', async (req, res)=> {
    try {
        const vop = await getPok(url1);
        const pol = vp.map(n => {
            return  getpocemon(n.url)
        })

        const pokemonAll = await prom.all(pol);
        const pj = pokemonAll.map(n => {
            return _.pick(n,pokre)
        })

        const sortpoc = _.sortBy(pj,n => n.weight)

        return res.json({
            sortpoc
        })
    } catch(err){
        console.log(err)
    }



});




app.get('/connonize', async  function (req, res, next) {
    var user = con(req.query.username);
    res.send(user);
});





app.listen(3000, function(){
    console.log('listen poet 3000')
} )
//const array = [
//    'https://vk.com/igovorukhin'
//]
//array.forEach((n)=>{
//    const un = con(n);
//    console.log(un);
//
//
//})

