// ������� res ��� ������,  ������� ���������� ����� ������,  ������� ��� ������ ��� ����� �������� � ������
// � ����� � ��� ��� ������ ��������� ������� ����� ������ ������ �������, � ������� res ����
var client = [];
exports.sub = function(req,res){
    client.push(res)
    res.on('close', function(){               // ���� ��������� �������� ������� ������ res
        client.splice(client.indexOf(res), 1)// .splice - ������� 1 ������� � ������� res.
    })
}
exports.publishin = function(mas){
    client.forEach(function(objres){
        objres.end(mas)
        console.log(mas)
    })
    client = [];
}