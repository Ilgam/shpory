$(document).ready(function () {
    // ��� ������ AJAX ���������� �������, ��� �� ����� �������� ��� ������� callback, ����� ������������ ������ �
    //����� ���� ��� ������
   // AJAX (������������ �� �Asynchronous Javascript And Xml�) � ���������� ��������� � ������� ��� ������������ ��������.
    $.get() //������������ ������ � ������� ������� GET, ��� ������������ ��������.(�������� ������ �� �������)
    $.get(url,[data],[callback],[dataType])
    $.get(url,[data],[callback])
    $.get(url,[callback])

    url // � url-�����, �� �������� ����� ��������� ������.
     data //�(*!!!) ������, ������� ����� ���������� �� ������. ��� ������ ����
    // ������������ � ��������, � �������: {fName1:value1, fName2:value2, ...}.
    callback(data)// � ���������������� �������, ������� ����� ������� ����� ������ �������.
         data //� ������, ���������� � �������.
    dataType //� ��������� ��� ������, ������� ������� ������ � ����� �� ������
             // ���� ������: xml json jsonp script html text
    // ���� ������ ����� � ����� � ��� ������� ��� ��  ���������� ��� �������� �����  ������ ������,
    // �� ���� ��������� ����������� ���������� (�������� �����) e.preventDefault()

                                        ///////������/////
        $.get("flowers.html", function(data) {
            var elems = $(data).filter("div").addClass("dcell");
            elems.slice(0, 3).appendTo("#row1");
            elems.slice(3).appendTo("#row2");
        });

    // ������ ����� �������� � ���� json , ������ json ��� ���� ������ ��� ������ ��������

                                        ///////������/////
    $("<button>Ajax</button>").appendTo("#buttonDiv").click(function (e) {
        $.get("mydata.json", function (data) {
            var tmplData = $("#flowerTmpl").template({flowers: data}).filter("*");
            tmplData.slice(0, 3).appendTo("#row1");
            tmplData.slice(3).appendTo("#row2");
        });
        e.preventDefault();
    })

    //(*!!!)
 // ������ ����� � ������� get ��������� �� ������� ��� ����� ���� ������ �� ����������� �������� data
    $.get(url,[data],[callback])
                                        ///////������/////

    var requestData = { // ��� ������ ������� ����� ��������� �� ������
        country: "RU",
        city: "Moscow"
    }
    $("<button>Ajax</button>").appendTo("#buttonDiv").click(function (e) {
        $.get("mydata.json", requestData, function (data) {
            var tmplData = $("#flowerTmpl").template({flowers: data}).filter("*");
            tmplData.slice(0, 3).appendTo("#row1");
            tmplData.slice(3).appendTo("#row2");
        });
        e.preventDefault();
    })
    // ������ ����� �������� ��������� ���:
        localhost/web/jquery/mydata.json?country=RU&city=Moscow

//////////////////////////////////////////////////////////////////////////////////////////////

     .load() // ��������� ������ � ������� (html) � ��������� � ��������� �������.
     .load(url, function(){})
     .load(url)
    url // � url-�����, �� �������� ����� ��������� ������.(html)
    function(){} // ������� ������� ����� ����������� �� ��������� �������� ������

                                     ///////������/////

    $('#result').load('ajax/test.html', function() {
        alert('Load was performed.');
    })
                                    ///////������/////

    $('#a').load('article.html')
                                    ///////������/////

    $('#result').load('ajax/test.html #container') // �������� ��������� ��������

//////////////////////////////////////////////////////////////////////////////////////////////////////

    $.getJSON() //���������� ������ json-������ � �������, ������� GET
    $.getJSON(url,data, callback(data))
    $.getJSON(url, callback(data))
    url  // url-�����, �� �������� ����� ��������� ������.
    data //� ������, ������� ����� ���������� �� ������.
        // ��� ������ ���� ������������ � ��������, � �������: {fName1:value1, fName2:value2, ...}.
    callback(data) //� ���������������� �������, ������� ����� ������� ����� ������ �������.
              data// � ������, ���������� � �������.

                                     ///////������/////
    $.getJSON("mydata.json", function (data) {
        var tmplElems = $("#flowerTmpl").template(data).filter("*");
        tmplElems.slice(0, 3).appendTo("#row1");
        tmplElems.slice(3).appendTo("#row2");
    })


    /////////////////////////////////////////////////////////////////////////////////////////////////

    $.getScript() //��������� ���� JavaScript, � ����� ��������� ������������ � ��� ����������.

                                        ///////������/////
    $('<button>Ajax</button>').appendTo('#buttonDiv').click(function(e) {
        $.getScript("myscript.js");
        $('#row2').remove();

        e.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    $.post() //������������ ������ � ������� ������� POST, ��� ������������ ��������.
    // ������������� ������ POST ��� �������� ������ �����
    $.post(url,[data],[callback],[dataType])
    $.post(url,[data],[callback])
         url //� url-�����, �� �������� ����� ��������� ������.
         data // � ������, ������� ����� ���������� �� ������. ��� ������ ���� ������������ � ����� �������, � �������: {fName1:value1, fName2:value2, ...}.
        callback(data) //� ���������������� �������, ������� ����� ������� ����� ������ �������.
             data //� ������, ���������� � �������.
        dataType //� ��������� ��� ������, ������� ������� ������ � ����� �� ������.
    <form method="post" action="http://127.0.0.1:80/"> // � ����� ������ ���� ��������� method="post"
                                                       // �  action �� ���� ����� �������
    // ���� ������ ����� � ����� � ��� ������� ��� ��  ���������� ��� �������� �����  ������ ������,
    // �� ���� ��������� ����������� ���������� (�������� �����) e.preventDefault()
                                         ///////������/////

    $("button").click(function (e) {
        var requestData = {
            apples: 2,                    // ��� ������ ������� ����� ��������� �� ������
            oranges: 10
        };

        $.post("http://127.0.0.1:80/", requestData,
            function (responseData) {
                console.log(JSON.stringify(responseData));
            })
        e.preventDefault();
    })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  .serialize() //�������������� ��������� ����� � ������ ������ ��� �������� ����� Ajax ������.
                                   ///////������/////

    $("button").click(function (e) {
        var formData = $("form").serialize();
        $.post("http://127.0.0.1:80/",
            formData, processServerResponse);
        e.preventDefault();
    });
   // ��� ��������� ���� �������� ����� serialize() ���������� ��������� ������:
     //   astor=12&daffodil=20&rose=0&peony=0&primula=0&snowdrop=6

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    $.ajax() //������������ ������ � ������� ��� ������������ ��������. ��� �������������� �����,
             // ���������� ������� ����������� ��������.
    // ����� ��� �������� ��� � ���������� ������
    $.ajax(url,[settings])
    url //� ����� �������.
    settings //� � ���� ��������� ����� ������ ��������� ��� ������� �������.
             // �������� � ������� ������� � ������� {���:��������, ���:��������...}
    $.ajax(settings) //������� �� ����������� �������� ������ ����������� ���� � ���,
                     //��� �������� url ����� �������� ������ ��������, � �� ��������� ����������.
                                            ///////������/////

    $.ajax("mydata.json", {  // � ����� �������.
        success: function (data) { // ��������� ������ � ������ ������ ��������� �������
                var tmplElems = $("#flowerTmpl")
                .template({flowers: data}).filter("*");
            tmplElems.slice(0, 3).appendTo("#row1");
            tmplElems.slice(3).appendTo("#row2");
        }
    })
                                             ///////������/////
    $.ajax({
        url: 'mydata.json', // ����� ����� ����������� � ���
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo('#row1');
            template.tmpl(data.slice(3)).appendTo('#row2');
        }
    });
//////////////////////////////////////���������������� ������////////////////////////////////////////
    var elems;
    $.ajax("flowers.html", {
        success: function(data, status, jqxhr) {
            elems = $(data).filter("div").addClass("dcell");
        }
    });
    elems.slice(0, 3).appendTo("#row1");
    elems.slice(3).appendTo("#row2");
    // � ����� � ��� ��� ������� ajax ���������������, ����� ������ ��� ��� ������ ����� ����������� �����
    //� �� �� ������� -  ����� �������� � ��������.
    //
    /////////////////////////////////////////////////////////////////////////////////////////////////
                                                //������ jqXHR
   //��� ����� ������������ ��� ��������� ��������� ���������� � ������� � � ������� ����� �����������������.
                        //�������� � ������ ������� jqXHR
    readyState	//���������� ��������� ���� ���������� ������� ��
    // ���������� ����� ��� ���������� �����,
    // ����������� �������� �� 0 (������ �� ���������) �� 4 (������ ��������)
    status	//���������� ��� ��������� HTTP, ������������ ��������
    statusText	//���������� ��������� �������� ���� ���������
    responseXML	//���������� ����� � ���� XML (���� �� �������� XML-����������)
    responseText	//���������� ����� � ���� ������
    setRequest(���, ��������)	//���������� ��������� ������� (��� ����� ������� ����� � ������� ��������� headers)
    getAllResponseHeaders()	//���������� � ���� ������ ��� ���������, ������������ � ������
    getResponseHeaders(���)	//���������� �������� ���������� ��������� ������
    abort()	//��������� ������
                                            ///////������/////
    var jqxhr = $.ajax('mydata.json', {
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo('#row1');
            template.tmpl(data.slice(3)).appendTo('#row2');
        }
    });

    var timerID = setInterval(function() {
        console.log("������: " + jqxhr.status + " " + jqxhr.statusText);
        if (jqxhr.readyState == 4) {
            console.log("������ ��������: " + jqxhr.responseText);
            clearInterval(timerID);
        }
    }, 100);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //�������� POST-�������
    //������������ �������� type(����� ��������� post). �� ��������� ����������� GET-�������

                                   ///////������/////
    $.ajax({
        url: 'phphandler.php', //����� �������
        type: 'post', // ��� �������
        data: $('form').serialize(), // ������ ������� ����� ������������
        success: processServerResponse, // ������� ��������� ������
        dataType: 'json' // ��������� ��� ���������� ������
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //��������� ������� Ajax
    beforeSend	//������ �������, ������� ����� ���������� ����� �������� Ajax-�������
    complete	//������ �������, ������� ����� ���������� ��� �������� ��� ��������� ���������� Ajax-�������
    error	//������ �������, ������� ����� ���������� ��� ��������� ���������� �������
    success	//������ �������, ������� ����� ���������� ��� �������� ���������� ������
/////////////////////////
                                   // success

    $.ajax({
        url: 'mydata.json',
        success: function(data, status, jqxhr) { // � ������ ��� ����� ��������� ���������
                                                 //  data - ������ ������� ������� �������
                                                 //status - ���������, ����������� ��������� �������
                                                 // jqxhr - ������ jqXHR.
            console.log("������: " + status);

            console.log("jqXHR ������: " + jqxhr.status + " " + jqxhr.statusText);
            console.log(jqxhr.getAllResponseHeaders());

            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        }
    })
////////////////////////////
                                      //  error

        $.ajax({
        url: 'NoSuchFile.json',
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        error: function(jqxhr, status, errorMsg) { //jqxhr - ������ jqXHR
                                                   //status  - ��������� � ��������� ������
                                                   //errorMsg - ��������� �� ������
            $('<div class=error/>')
                .text("������: " + status + " ������: " + errorMsg)
                .insertAfter('h1');
        }
    });

/////////////////////////////
                                    //beforeSend

    $.ajax({
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        error: function(jqxhr, status, errorMsg) {
            $('<div class=error/>')
                .text("������: " + status + " ������: " + errorMsg)
                .insertAfter('h1');
        },
        beforeSend: function(jqxhr, settings) {   //jqxhr - ������ jqXHR
                                                 //settings-������, ���������� ���������,
                                                 // ���������� ������ ajax().
            settings.url = 'mydata.json';
        }
    });

   // �� ������ ��� �� ��� ������� ���������� ������������ �������
    $.ajax({
        success: [processData, reportStatus],
        beforeSend: function(jqxhr, settings) {
            settings.url = 'mydata.json'; // ��� ����� ����� ��������� ��� ��� ������� �������
        }
    });

    function processData(data, status, jqxhr) {
        var template = $('#flowerTmpl');
        template.tmpl(data.slice(0, 3)).appendTo("#row1");
        template.tmpl(data.slice(3)).appendTo("#row2");
    }

    function reportStatus(data, status, jqxhr) {
        console.log("������: " + status + " ��� ����������: " + jqxhr.status);
    }


/////////////////////////////

                                            //context  � //complete
    $.ajax({
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        beforeSend: function(jqxhr, settings) {
            settings.url = 'mydata.json';
        },
        context: $('h1'),                     //�������� context ��������� ������� �������,
                                              // ������� ����� �������� ���������� this

        complete:  function(jqxhr, status) {//������ �������, ������� ����� ���������� ��� ��������
                                            // ��� ��������� ���������� Ajax-�������
            var color = status == "success" ? "green" : "red";
            this.css("border", "thick solid " + color);
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                             //  ������� ���������������� ��������� Ajax-�������
    url  //����� �������
    type // ��� �������
    accepts //	������������� ��� ������� �������� ��������� Accept, ������� ��������� MIME-����,
    // �������������� ���������. �� ��������� ��� �������� ������������ ���������� dataType
    cache	//�������� false ��������� �� ��, ��� ���������� ������� �� ������ ������������ ��������.
     // �� ��������� ���������� ��� ���� ������, ����� script � jsonp
    contentType //	������������� ��� ������� �������� ��������� content-����. ����� ��� ����:
    // https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
    dataType	//���������, ����� ���� ������ ��������� �� �������. ���� ������������ ���� ��������,
    // �� jQuery ����� ������������ ����������, ��������������� �������� � ���� �������
    headers	//������ �������������� ��������� � ��������, ������� ������ ���������� � ������
    jsonp	//������ ������, ������� ������� ������������ ������ ������� ��������� ������
    // ��� ���������� �������� JSONP (������������� �������). ���� �������� ������� ������������ � ��������
    jsonpCallback	//������ ��� ������� ��������� ������, ������� ������ ��������������
    // ������ ������������� ���������������� ���������� �����, ������������� jQuery �� ���������
    password	//������ ������, ������� ������ ��������������
    // � ������� ��� ����������� ���������
    scriptCharset	//��������� jQuery, ����� ����� �������� ������������ ��� �����������
    // �������������� JavaScript-�����������
    timeout	//������ ������������ ����-���� (� �������������) ��� �������
    userName	//������ ��� ������������, ������� ������ �������������� � ������� ���
    // ����������� ��������� ��������������
    converters // ������ ��� ����������� ���������� ������

                                            ///////������/////
    $.ajax({
        timeout: 5000,  //timeout  ������������� ������������ ������������ ����-����, ������ 5 ��.
                         // ���� ������ �� ��� ����� �� ����� ��������, �� ��������� �������,
                         // �������� � ������� ��������� error
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        error: function(jqxhr, status, errorMsg) {
            console.log("Error: " + status);
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    JSON.stringify() //����������� �������� JavaScript � ������ JSON
    //JSON ������������ ��� ������������� �������� � ���� ������.
    //������� � ������� JSON ������ �� ������� JavaScript-�������, �� ���������� �� ���
    //����� �������� ������������ � ������� � ��� ������ ���� ������ � ������� ��������.
    //{
    //    "surname" : "����"
    //}
    serializeArray() //������������� ��� ����� � �������� �� ����� (������� .serialize()),
                     // �� ���������� ������, ������� ����� ������������ � ��������� JSON


                                            ///////������/////
    $.ajax("mydata.json", {
        success: function (data, status, jqxhr) {
            var tmplElems = $("#flowerTmpl").template({ flowers: data }).filter("*");
            tmplElems.slice(0, 3).appendTo("#row1");
            tmplElems.slice(3).appendTo("#row2");
        }
    });

    $("button").click(function (e) {
        $.ajax({
            url: $("form").attr("action"),  //����� url ����� �� �������� action � �����
            contentType: "application/json", // ��� ��� ������� ������������� ������� json
            data: JSON.stringify($("form").serializeArray()), //����������� �������� JavaScript � ������ JSON
            type: "post",
            success: processServerResponse
        })
        e.preventDefault();
    })

    function processServerResponse(data) {
        var inputElems = $("div.dcell").hide();
        for (var prop in data) {
            var filtered = inputElems.has("input[name=" + prop + "]")
                .appendTo("#row1").show();
        }
        $("#buttonDiv, #totalDiv").remove();
        $("#totalTmpl").template(data).appendTo("body");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async // �������� ���������� ��������. �������� true - � ����������� ������.
   // �������� false ������������� ���������� �����. ��� ���������� ���������� ������� ����� ajax() ����� ����,
   //��� ������� �������, � ������� ��������� � ���������� ������ ���������� �������� ���� ����� ����,
    // ��� ���������� ���������� �������.

                                                  ///////������/////

    var elems;
    $.ajax("flowers.html", {
        async: false,
        success: function(data, status, jqxhr) {
            elems = $(data).filter("div").addClass("dcell");
        }
    });
    elems.slice(0, 3).appendTo("#row1");
    elems.slice(3).appendTo("#row2");
    // ���������� ������ ������ ������ ����� ���������� �� ���� ��������� ����� ����������� �� �������
    // � ��� ����� ��
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ifModified // ����� ���������� ��������� ������ ���� � ��� ������, ���� � ������� ���������� ������� ��� ���� ��������.
    // ����� ��������� ������������ ���������� Last-Modified. ��������� ����� ������� �������� ����������� ��������� ������,
      //  ������� �� ���� ������������ ������� ����� ���������� �� ��������� � ���, ������� �� ��� �����������.
    //�� ��������� �������� ifModified ����� �������� false

                                                    ///////������/////
        $('button').click(function(e) {
            $.ajax("mydata.json", {
                ifModified: true,
                success: function(data, status) {
                    if (status == "success") {
                        $('#row1, #row2').children().remove();
                        var template = $('#flowerTmpl');
                        template.tmpl(data.slice(0, 3)).appendTo("#row1");
                        template.tmpl(data.slice(3)).appendTo("#row2");
                    } else if (status == "notmodified") {
                        $('img').css("border", "thick solid green");
                    }
                }
            });
            e.preventDefault();
        })
    //������� success ���������� ������, �� ���� � ���� �������, ����� ���������� ������������� � ��������� ���,
     //��� �� ����������, �� �������� data ����� ����� �������� undefined, � �������� status � �������� notmodified.
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    statusCode//  ��������� �������� �������� ���������� �������� � ����������� �� ���� ������� �� HTTP-�������.
                                                      ///////������/////
    $.ajax({
        url: 'mydata.json',
        statusCode: {
            200: function(data) {            //200 ������������� ��������� �������,
                var template = $('#flowerTmpl');
                template.tmpl(data.slice(0, 3)).appendTo("#row1");
                template.tmpl(data.slice(3)).appendTo("#row2");
            },
            404: function(jqxhr, status, errorMsg) {   //404, ����������, ��� ������������� ���� �� ������
                $('<div class=error/>')
                    .text("������: " + status + " ������: " + errorMsg)
                    .insertAfter('h1');
            }
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.parseJSON() // ������������ ������ � json-������� � javascript-������(� ������).
    dataFilter    // ����� ����������� ����� ���������� ������, ������ �������������  � �������    dataFilter
                  // ������ ����� ���� � success
                  // ����� ������������ ������

                                                     ///////������/////
    $.ajax({
        url: 'mydata.json',
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        dataType: "json",
        dataFilter: function(data, dataType) {  // ��� ������ ���������
            if (dataType == "json") {
                var filteredData = $.parseJSON(data);  // ����� ��� �������������� � ������
                filteredData.shift();                  // ��� ��������� ������ �������
                return JSON.stringify(filteredData.reverse()); // ��� ������ ���������������� ����� ������ � ������������� � ������ JSON
            } else {
                return data;
            }
        }
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    converters // ������ ��� ����������� ���������� ������
        // ��� ���� ������ ��� ���������� ��������� �� ������
 //   https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
 //!! �� ������    text/html ������� ����� ������ ��� ��� -  text html
 // �����   text html ������ ��  text �������������� �   html(���� � �������� jquery ������ �� ���)

                                                      ///////������/////
    $.ajax({
        url: "flowers.html",  // � ���� ������� �� ��������� HTML-��������, � �� ������ � ������� JSON
        success: function(data, status, jqxhr) {
            var elems = data.filter('div').addClass("dcell");
            elems.slice(0, 3).appendTo('#row1');
            elems.slice(3).appendTo("#row2");
        },
        converters: {
            "text html": function(data) { // ��� ��� �� ������ �������������� � html
                return $(data);
            }
        }
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ajaxSetup() //��������� ���������� �������� ����������, ������� ����� ����������� �� ��������� �� ���� Ajax-��������
    //��� ����� ���������� ��� �� ������������� ����������� ��������� ��� ������ �������.
    //������ ����� ���������

                                                    ///////������/////
    $.ajaxSetup({
        timeout: 15000,
        error: function(jqxhr, status, errorMsg) {
            $('<div class=error/>')
                .text("������: " + status + " ������: " + errorMsg)
                .insertAfter('h1');
        },
        converters: {
            "text html": function(data) {
                return $(data);
            }
        }
    });

    $.ajax({
        url: "flowers.html",
        success: function(data, status, jqxhr) {
            var elems = data.filter('div').addClass("dcell");
            elems.slice(0, 3).appendTo('#row1');
            elems.slice(3).appendTo("#row2");
        }
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.ajaxPrefilter( [dataTypes],function(settings, originalSettings, jqXHR) )
    //  ���� ���������� ��������
    dataTypes //�������������� ��������. ������������ ��� ������������ (����� ������) ����� ������.
    settings //� ��������� �������� �������,
    originalSettings //� ��������� �� ��������� (�� ajaxSettings),
        jqXHR //� jqXHR-������ ������� �������.
  //  �������� ������������� $.ajaxPrefilter() �������� ��������� �������:
        $.ajaxPrefilter(function(settings, originalSettings, jqXHR){
            // �������� ��������� (options), ��������� ������� ��������� (originalSettings) � ������ jqXHR
        })


                                                ///////������/////
        $.ajaxSetup({
            timeout: 15000,
            error: function(jqxhr, status, errorMsg) {
                $('<div class=error/>')
                    .text("������: " + status + " ������: " + errorMsg)
                    .insertAfter('h1');
            },
            converters: {
                "text html": function(data) {
                    return $(data);
                }
            }
        });
    $.ajaxPrefilter("json html", function(settings, originalSettings, jqxhr) { //  ��������� ������ ��� ��������� ����� ������
                                                              // � ������ ��������, ���� ����� ����������, ������������ ������ ajax()
                                                              // , ������������ �������� dataType
                                                                 // , �� ������������ ����-���� ��������������� ������ ���� ��������.
                                                               // ����� ������������� �������� ���� ��������� ��������,
                                                                  // ��� ������� jqXHR ���������� ����� abort().
        if (originalSettings.dataType == "html") {
            settings.timeout = 2000;
        } else {
            jqxhr.abort();
        }
    })

    $.ajax({
        url: "flowers.html",
        dataType: "html",
        success: function(data, status, jqxhr) {
            var elems = data.filter('div').addClass("dcell");
            elems.slice(0, 3).appendTo('#row1');
            elems.slice(3).appendTo("#row2");
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ��� ����� ����������� ����� ��
    $.when(flowerReq, jsonReq).then(function() {})

    // ���� �� ����� ��������� ������ � ��������, �� ����� ����������� ������� ����� then

                                                    ///////������/////


    var jsonReq = $.getJSON("additionalflowers.json", function (data) { // � ���������� ���� ������
        $("#flowerTmpl").template({ flowers: data }).appendTo("#row3");
    });
    $.when( jsonReq).then(function() {            // ���� �� ����� ��������� ������ � ��������, �� ����� ����������� ������� ����� then
        $("input").each(function(index, elem) {
            $(elem).rules("add", {
                required: true,
                min: 0,
                digits: true,
                messages: {
                    required: "Please enter a number of " + plurals[elem.name],
                    digits: "Please enter a number of" + plurals[elem.name],
                    min: "Please enter a positive number of "
                    + plurals[elem.name]
                }
            })
        }).change(function(e) {
            if ($("form").validate().element($(e.target))) {  // ��� ��������� �������� �����, ���� ���� �� ���������� ���, ���� ��� �� ����
                var total = 0;
                $("input").each(function(index, elem) {
                    total += Number($(elem).val());
                });
                $("#total").text(total);
            }
        });
    });




    /////////////////////////��� ������� ���������//////////////////////

                        //��������� �������
   //������� ����� ���� ����� ������ � ���������� ������������� ajax-�������:
    $.ajax({
        beforeSend: function(){
            // ��������, ������� ����� ��������� ����� ����������� ����� ajax-�������
        },
        complete: function(){
            // ��������, ������� ����� ��������� ����� ���������� ajax-�������
        }
        // ......
    });
    success  //(���������)
    //���������� � ������ �������� ���������� �������.
    error  //(���������)
    //���������� � ������ ���������� ���������� �������.
    beforeSend  //(���������)
    //���������� ����� ����������� �������, ��� ��������� ���������� ����������� ���������.
    complete  //(���������)
    //���������� ��� ���������� ������� (�������, ������� ��� ���� ��� ���).


                     //���������� �������
   // �� ���� ������� ����� �������� ajax
   // ��� ������� vjuen ���������� ���� ��������� DOM, ������� ��������
   // � ��� ���������� ����������� ������������ ������� �� ���������:
    $("#loading").on("ajaxSend", function(){
        $(this).show();
    });

    // ���, �� �� �����, �� � ������� ����������� �������
    $("#loading").ajaxSend(function(){
        $(this).show();
    })
 //   ���������� ������� ����� ���� ��������� � ������� ��������� global � ���������� ajax-�������:

    // �� ����� ���������� ���������� ajax-�������, ����������� ���������� ������� �� ����� �������
    $.ajax({
        url: "test.html",
        global: false,
        // ...
    });

    ajaxStart  //(����������)
       // ���������� � ������ ������ �������, � ��������, ��� � ��� �� ����� �� �������� ������ �������.
    ajaxSend(function (event, jqxhr, settings) {}  //(����������)
        //���������� ����� ����������� �������.
    ajaxSuccess(function (event, jqxhr, settings) {}  (//����������)
       // ���������� � ������ �������� ���������� �������.
    ajaxError(function (event, jqxhr, settings) {}  //(����������)
        //���������� � ������ ���������� ���������� �������.
    ajaxComplete(function (event, jqxhr, settings) {}  //(����������)
       // ���������� ��� ���������� ������� (�������, ������� ��� ���� ��� ���).
    ajaxStop // (����������)
       // ���������� ��� ���������� �������, � ��������, ��� � ��� �� ����� �� �������� ������ �������.

                                                   ///////������/////
        $("<div>").append("<label>Events:<label>")
        .append("<input type='checkbox' id='globalevents' name='globalevents' checked>")
        .insertAfter("h1");
    $("<ol id='info' class='ajaxinfo'>").insertAfter("h1").append("<li>Ready</li>");

    function displayMessage(msg) {
        $("#info").append($("<li>").text(msg));
    }
    $(document)
        .ajaxStart(function () {
            displayMessage("Ajax Start")
        })
        .ajaxSend(function (event, jqxhr, settings) {
            displayMessage("Ajax Send: " + settings.url)
        })
        .ajaxSuccess(function (event, jqxhr, settings) {
            displayMessage("Ajax Success: " + settings.url)
        })
        .ajaxError(function (event, jqxhr, settings, errorMsg) {
            displayMessage("Ajax Error: " + settings.url)
        })
        .ajaxComplete(function (event, jqxhr, settings) {
            displayMessage("Ajax Complete: " + settings.url)
        })
        .ajaxStop(function () {
            displayMessage("Ajax Stop")
        });

    $("button").click(function (e) {
        $("#row1, #row2, #info").empty();
        $.ajax({
            url: "mydata.json",
            global: $("#globalevents:checked").length > 0,
            success: function (data, status, jqxhr) {
                var tmplElems = $("#flowerTmpl")
                    .template({ flowers: data }).filter("*");
                tmplElems.slice(0, 3).appendTo("#row1");
                tmplElems.slice(3).appendTo("#row2");
            }
        });
        e.preventDefault();
    });

///////////////////////////////////////////////////////////////////////////////////////////////////

})