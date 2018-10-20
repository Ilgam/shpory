// напомню res это объект,  который инициирует поток записи,  поэтому как объект его можно засунуть в массив
// В связи с тем что каждое соединеие создает общий объект модуль сервера, у каждого res своя
var client = [];
exports.sub = function(req,res){
    client.push(res)
    res.on('close', function(){               // если соединеие прервано удаляем лишний res
        client.splice(client.indexOf(res), 1)// .splice - удаляет 1 элемент с индекса res.
    })
}
exports.publishin = function(mas){
    client.forEach(function(objres){
        objres.end(mas)
        console.log(mas)
    })
    client = [];
}