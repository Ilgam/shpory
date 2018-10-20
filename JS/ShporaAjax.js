$(document).ready(function () {
    // Все запрсы AJAX асинхронны поэтому, что бы сними работать вне функции callback, нужны спецыиальные приемы в
    //шпоре есть эти приемы
   // AJAX (аббревиатура от «Asynchronous Javascript And Xml») – технология обращения к серверу без перезагрузки страницы.
    $.get() //Осуществляет запрос к серверу методом GET, без перезагрузки страницы.(получает данные от сервера)
    $.get(url,[data],[callback],[dataType])
    $.get(url,[data],[callback])
    $.get(url,[callback])

    url // — url-адрес, по которому будет отправлен запрос.
     data //—(*!!!) данные, которые будут отправлены на сервер. Они должны быть
    // представлены в объектом, в формате: {fName1:value1, fName2:value2, ...}.
    callback(data)// — пользовательская функция, которая будет вызвана после ответа сервера.
         data //— данные, присланные с сервера.
    dataType //— ожидаемый тип данных, которые пришлет сервер в ответ на запрос
             // типы данных: xml json jsonp script html text
    // если кнопка стоит в форме и при нажатии нее мы  отправляем или получаем через  Аджакс данные,
    // то надо отключить стандартные неастройки (отправки формы) e.preventDefault()

                                        ///////пример/////
        $.get("flowers.html", function(data) {
            var elems = $(data).filter("div").addClass("dcell");
            elems.slice(0, 3).appendTo("#row1");
            elems.slice(3).appendTo("#row2");
        });

    // данные лучше получать в виде json , формат json это тупа объект или массив объекотв

                                        ///////пример/////
    $("<button>Ajax</button>").appendTo("#buttonDiv").click(function (e) {
        $.get("mydata.json", function (data) {
            var tmplData = $("#flowerTmpl").template({flowers: data}).filter("*");
            tmplData.slice(0, 3).appendTo("#row1");
            tmplData.slice(3).appendTo("#row2");
        });
        e.preventDefault();
    })

    //(*!!!)
 // данные можно с помощью get отправить на секрвер для этого есть второй не обязательнй параметр data
    $.get(url,data,callback)
                                        ///////пример/////

    var requestData = { // вот объект который будет отправлен на сервер
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
    // Запрос имеет примерно следующий вид:
     //   localhost/web/jquery/mydata.json?country=RU&city=Moscow

//////////////////////////////////////////////////////////////////////////////////////////////

     .load() // Загружает данные с сервера (html) и вставляет в указанный элемент.
     .load(url, function(){})
     .load(url)
    url // — url-адрес, по которому будет отправлен запрос.(html)
   // function(){} // функция которая будет запускаться по окончанию загрузки данных

                                     ///////пример/////

    $('#result').load('ajax/test.html', function() {
        alert('Load was performed.');
    })
                                    ///////пример/////

    $('#a').load('article.html')
                                    ///////пример/////

    $('#result').load('ajax/test.html #container') // Загрузка фрагмента страницы

//////////////////////////////////////////////////////////////////////////////////////////////////////

    $.getJSON() //Производит запрос json-данных у сервера, методом GET
    $.getJSON(url,data, callback(data))
    $.getJSON(url, callback(data))
    url  // url-адрес, по которому будет отправлен запрос.
    data //— данные, которые будут отправлены на сервер.
        // Они должны быть представлены в объектом, в формате: {fName1:value1, fName2:value2, ...}.
    callback(data) //— пользовательская функция, которая будет вызвана после ответа сервера.
              data// — данные, присланные с сервера.

                                     ///////пример/////
    $.getJSON("mydata.json", function (data) {
        var tmplElems = $("#flowerTmpl").template(data).filter("*");
        tmplElems.slice(0, 3).appendTo("#row1");
        tmplElems.slice(3).appendTo("#row2");
    })


    /////////////////////////////////////////////////////////////////////////////////////////////////

    $.getScript() //загружает файл JavaScript, а затем выполняет содержащиеся в нем инструкции.

                                        ///////пример/////
    $('<button>Ajax</button>').appendTo('#buttonDiv').click(function(e) {
        $.getScript("myscript.js");
        $('#row2').remove();

        e.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    $.post() //Осуществляет запрос к серверу методом POST, без перезагрузки страницы.
    // Использование метода POST для отправки данных формы
    $.post(url,[data],[callback],[dataType])
    $.post(url,[data],[callback])
         url //— url-адрес, по которому будет отправлен запрос.
         data // — данные, которые будут отправлены на сервер. Они должны быть представлены в форме объекта, в формате: {fName1:value1, fName2:value2, ...}.
        callback(data) //— пользовательская функция, которая будет вызвана после ответа сервера.
             data //— данные, присланные с сервера.
        dataType //— ожидаемый тип данных, которые пришлет сервер в ответ на запрос.
   // <form method="post" action="http://127.0.0.1:80/"> // в форме должен быть прописано method="post"
                                                       // и  action то есть адрес сервера
    // если кнопка стоит в форме и при нажатии нее мы  отправляем или получаем через  Аджакс данные,
    // то надо отключить стандартные неастройки (отправки формы) e.preventDefault()
                                         ///////пример/////

    $("button").click(function (e) {
        var requestData = {
            apples: 2,                    // вот объект который будет отправлен на сервер
            oranges: 10
        };

        $.post("http://127.0.0.1:80/", requestData,
            function (responseData) {
                console.log(JSON.stringify(responseData));
            })
        e.preventDefault();
    })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  .serialize() //Преобразование элементов формы в строку данных для отправки через Ajax запрос.
                                   ///////пример/////

    $("button").click(function (e) {
        var formData = $("form").serialize();
        $.post("http://127.0.0.1:80/",
            formData, processServerResponse);
        e.preventDefault();
    });
   // Для введенных мною значений метод serialize() генерирует следующую строку:
     //   astor=12&daffodil=20&rose=0&peony=0&primula=0&snowdrop=6

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    $.ajax() //Осуществляет запрос к серверу без перезагрузки страницы. Это низкоуровневый метод,
             // обладающий большим количеством настроек.
    // может как получать так и отправлять данные
    $.ajax(url,[settings])
    url //— адрес запроса.
    settings //— в этом параметре можно задать настройки для данного запроса.
             // Задается с помощью объекта в формате {имя:значение, имя:значение...}
    $.ajax(settings) //Отличие от предыдущего варианта метода заключается лишь в том,
                     //что свойство url здесь является частью настроек, а не отдельным параметром.
                                            ///////пример/////

    $.ajax("mydata.json", {  // — адрес запроса.
        success: function (data) { // получение данных в случае успеха запускает функцию
                var tmplElems = $("#flowerTmpl")
                .template({flowers: data}).filter("*");
            tmplElems.slice(0, 3).appendTo("#row1");
            tmplElems.slice(3).appendTo("#row2");
        }
    })
                                             ///////пример/////
    $.ajax({
        url: 'mydata.json', // адрес можно прописывать и так
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo('#row1');
            template.tmpl(data.slice(3)).appendTo('#row2');
        }
    });
//////////////////////////////////////Распространенная ошибка////////////////////////////////////////
    var elems;
    $.ajax("flowers.html", {
        success: function(data, status, jqxhr) {
            elems = $(data).filter("div").addClass("dcell");
        }
    });
    elems.slice(0, 3).appendTo("#row1");
    elems.slice(3).appendTo("#row2");
    // В связи с тем что запрпос ajax асинхсинхронный, будет ошибка так как запрос будет выполняться сразу
    //а не по очереди -  будет конфликт в браузере.
    //
    /////////////////////////////////////////////////////////////////////////////////////////////////
                                                //Объект jqXHR
   //Его можно использовать для получения подробной информации о запросе и с которым можно взаимодействовать.
                        //Свойства и методы объекта jqXHR
    readyState	//Возвращает индикатор хода выполнения запроса на
    // протяжении всего его жизненного цикла,
    // принимающий значения от 0 (запрос не отправлен) до 4 (запрос завершен)
    status	//Возвращает код состояния HTTP, отправленный сервером
    statusText	//Возвращает текстовое описание кода состояния
    responseXML	//Возвращает ответ в виде XML (если он является XML-документом)
    responseText	//Возвращает ответ в виде строки
    setRequest(имя, значение)	//Возвращает заголовок запроса (это можно сделать проще с помощью параметра headers)
    getAllResponseHeaders()	//Возвращает в виде строки все заголовки, содержащиеся в ответе
    getResponseHeaders(имя)	//Возвращает значение указанного заголовка ответа
    abort()	//Прерывает запрос
                                            ///////пример/////
    var jqxhr = $.ajax('mydata.json', {
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo('#row1');
            template.tmpl(data.slice(3)).appendTo('#row2');
        }
    });

    var timerID = setInterval(function() {
        console.log("Статус: " + jqxhr.status + " " + jqxhr.statusText);
        if (jqxhr.readyState == 4) {
            console.log("Запрос выполнен: " + jqxhr.responseText);
            clearInterval(timerID);
        }
    }, 100);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Создание POST-запроса
    //Используется параметр type(нужно прописать post). По умолчанию выполняются GET-запросы

                                   ///////пример/////
    $.ajax({
        url: 'phphandler.php', //адрес запроса
        type: 'post', // тип запроса
        data: $('form').serialize(), // данные которые будут передоваться
        success: processServerResponse, // функция обратного вызова
        dataType: 'json' // ожидаемый тип полученных данных
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Параметры событий Ajax
    beforeSend	//Задает функцию, которая будет вызываться перед запуском Ajax-запроса
    complete	//Задает функцию, которая будет вызываться при успешном или неудачном завершении Ajax-запроса
    error	//Задает функцию, которая будет вызываться при неудачном завершении запроса
    success	//Задает функцию, которая будет вызываться при успешном выполнении запрос
/////////////////////////
                                   // success

    $.ajax({
        url: 'mydata.json',
        success: function(data, status, jqxhr) { // в саксес еще можно прописать пераметры
                                                 //  data - данные которые получит функция
                                                 //status - сообщение, описывающее результат запроса
                                                 // jqxhr - объект jqXHR.
            console.log("Статус: " + status);

            console.log("jqXHR статус: " + jqxhr.status + " " + jqxhr.statusText);
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
        error: function(jqxhr, status, errorMsg) { //jqxhr - объект jqXHR
                                                   //status  - сообщение о состоянии ошибки
                                                   //errorMsg - сообщение об ошибке
            $('<div class=error/>')
                .text("Статус: " + status + " Ошибка: " + errorMsg)
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
                .text("Статус: " + status + " Ошибка: " + errorMsg)
                .insertAfter('h1');
        },
        beforeSend: function(jqxhr, settings) {   //jqxhr - объект jqXHR
                                                 //settings-Объект, содержащий параметры,
                                                 // переданные методу ajax().
            settings.url = 'mydata.json';
        }
    });

   // он служит так же для задание нескольких обработчиков событий
    $.ajax({
        success: [processData, reportStatus],
        beforeSend: function(jqxhr, settings) {
            settings.url = 'mydata.json'; // вот сдесь общие настройки для дух функций колбэка
        }
    });

    function processData(data, status, jqxhr) {
        var template = $('#flowerTmpl');
        template.tmpl(data.slice(0, 3)).appendTo("#row1");
        template.tmpl(data.slice(3)).appendTo("#row2");
    }

    function reportStatus(data, status, jqxhr) {
        console.log("Статус: " + status + " Код результата: " + jqxhr.status);
    }


/////////////////////////////

                                            //context  и //complete
    $.ajax({
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        beforeSend: function(jqxhr, settings) {
            settings.url = 'mydata.json';
        },
        context: $('h1'),                     //Параметр context позволяет указать элемент,
                                              // который будет назначен переменной this

        complete:  function(jqxhr, status) {//Задает функцию, которая будет вызываться при успешном
                                            // или неудачном завершении Ajax-запроса
            var color = status == "success" ? "green" : "red";
            this.css("border", "thick solid " + color);
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                             //  Базовые конфигурационные параметры Ajax-запроса
    url  //адрес запроса
    type // тип запроса
    accepts //	Устанавливает для запроса значение заголовка Accept, который указывает MIME-типы,
    // поддерживаемые браузером. По умолчанию это значение определяется параметром dataType
    cache	//Значение false указывает на то, что содержимое запроса не должно кэшироваться сервером.
     // По умолчанию кешируются все типы данных, кроме script и jsonp
    contentType //	Устанавливает для запроса значение заголовка content-туре. Здесь все мемы:
    // https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
    dataType	//Указывает, какие типы данных ожидаются от сервера. Если используется этот параметр,
    // то jQuery будет игнорировать информацию, предоставляемую сервером о типе запроса
    headers	//Задает дополнительные заголовки и значения, которые должны включаться в запрос
    jsonp	//Задает строку, которую следует использовать вместо функции обратного вызова
    // при выполнении запросов JSONP (кроссдоменные запросы). Этот параметр требует согласования с сервером
    jsonpCallback	//Задает имя функции обратного вызова, которое должно использоваться
    // вместо автоматически сгенерированного случайного имени, используемого jQuery по умолчанию
    password	//Задает пароль, который должен использоваться
    // в запросе при прохождении процедуры
    scriptCharset	//Указывает jQuery, какой набор символов используется при кодировании
    // запрашиваемого JavaScript-содержимого
    timeout	//Задает длительность тайм-аута (в миллисекундах) для запроса
    userName	//Задает имя пользователя, которое должно использоваться в запросе при
    // прохождении процедуры аутентификации
    converters // служит для конвертации полученных данных

                                            ///////пример/////
    $.ajax({
        timeout: 5000,  //timeout  устанавливает максимальную длительность тайм-аута, равную 5 мс.
                         // Если запрос за это время не будет выполнен, то вызовется функция,
                         // заданная с помощью параметра error
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
    JSON.stringify() //преобразует значение JavaScript в строку JSON
    //JSON используется для представления объектов в виде строки.
    //Объекты в формате JSON похожи на обычные JavaScript-объекты, но отличаются от них
    //более строгими требованиями к строкам – они должны быть именно в двойных кавычках.
    //{
    //    "surname" : "Вася"
    //}
    serializeArray() //Упорядочивает все формы и элементы на форме (подобно .serialize()),
                     // но возвращает данные, которые можно использовать в структуре JSON


                                            ///////пример/////
    $.ajax("mydata.json", {
        success: function (data, status, jqxhr) {
            var tmplElems = $("#flowerTmpl").template({ flowers: data }).filter("*");
            tmplElems.slice(0, 3).appendTo("#row1");
            tmplElems.slice(3).appendTo("#row2");
        }
    });

    $("button").click(function (e) {
        $.ajax({
            url: $("form").attr("action"),  //Берет url адрес из атребута action в форме
            contentType: "application/json", // мем тип который соответствует формату json
            data: JSON.stringify($("form").serializeArray()), //преобразует значение JavaScript в строку JSON
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //  .serialize() //Преобразование элементов формы в строку данных для отправки через Ajax запрос.
    ///////пример/////

    $("button").click(function (e) {
        var formData = $("form").serialize();
        $.post("http://127.0.0.1:80/",
            formData, processServerResponse);
        e.preventDefault();
    });
    // Для введенных мною значений метод serialize() генерирует следующую строку:
    //   astor=12&daffodil=20&rose=0&peony=0&primula=0&snowdrop=6

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.parseJSON() // Конвертирует строку с json-данными в javascript-объект(в массив).
    dataFilter    // будет запускаться после поллучения данных, данные проработаются  в функции    dataFilter
                  // только потом идут в success
                  // такой своеобразный фильтр

    ///////пример/////
    $.ajax({
        url: 'mydata.json',
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        dataType: "json",
        dataFilter: function(data, dataType) {  // вот данные полученны
            if (dataType == "json") {
                var filteredData = $.parseJSON(data);  // здесь они преобразуються в массив
                filteredData.shift();                  // тут удаляется первый элемент
                return JSON.stringify(filteredData.reverse()); // тут массив переваричивается кверх ногами и преобразуется в объект JSON
            } else {
                return data;
            }
        }
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                             //Итого
    JSON.stringify() //конвертирует масив в объект JSON
    serializeArray() //упорядывает так данные form, чтобы они превратьились в массив и вдальнейшем были преобразованные в
                    //объект JSON с помощью JSON.stringify()
    $.parseJSON() //конвертирует из объекта JSON в массив объектов
                    var obj = jQuery.parseJSON('{"name":"John"}');
                    alert(obj.name); // будет выведено "John"
    JSON.parse() //из объект JSON d  строки
                   // var data = '{ "age": 30 }';
                  //  var user = JSON.parse(data);
                   // user = 30
    .serialize() //Преобразование элементов формы в строку данных для отправки через Ajax запрос.
    //нен забывать ставить name='sdsd" в input
    // Для введенных мною значений метод serialize() генерирует следующую строку:
    //   astor=12&daffodil=20&rose=0&peony=0&primula=0&snowdrop=6

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async // Создание синхронных запросов. Значение true - в асинхронном режиме.
   // Значению false соответствует синхронный режим. При синхронном выполнении запроса метод ajax() ведет себя,
   //как обычная функция, и браузер переходит к выполнению других инструкций сценария лишь после того,
    // как закончится выполнение запроса.

                                                  ///////пример/////

    var elems;
    $.ajax("flowers.html", {
        async: false,
        success: function(data, status, jqxhr) {
            elems = $(data).filter("div").addClass("dcell");
        }
    });
    elems.slice(0, 3).appendTo("#row1");
    elems.slice(3).appendTo("#row2");
    // испраление ошибки теперь запрос будет синхронный то есть программа будет выполняться по очереди
    // и все будет ок
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ifModified // можно обеспечить получение данных лишь в том случае, если с момента последнего запроса они были изменены.
    // Такое поведение определяется заголовком Last-Modified. Благодаря этому удается избежать бесполезной пересылки данных,
      //  которая не даст пользователю никакой новой информации по сравнению с той, которой он уже располагает.
    //По умолчанию параметр ifModified имеет значение false

                                                    ///////пример/////
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
    //Функция success вызывается всегда, но если с того момента, когда содержимое запрашивалось в последний раз,
     //оно не изменилось, то аргумент data будет иметь значение undefined, а аргумент status — значение notmodified.
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    statusCode//  позволяет выбирать варианты дальнейших действий в зависимости от кода ответов на HTTP-запросы.
                                                      ///////пример/////
    $.ajax({
        url: 'mydata.json',
        statusCode: {
            200: function(data) {            //200 соответствует успешному запросу,
                var template = $('#flowerTmpl');
                template.tmpl(data.slice(0, 3)).appendTo("#row1");
                template.tmpl(data.slice(3)).appendTo("#row2");
            },
            404: function(jqxhr, status, errorMsg) {   //404, означающем, что запрашиваемый файл не найден
                $('<div class=error/>')
                    .text("Статус: " + status + " Ошибка: " + errorMsg)
                    .insertAfter('h1');
            }
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.parseJSON() // Конвертирует строку с json-данными в javascript-объект(в массив).
    dataFilter    // будет запускаться после поллучения данных, данные проработаются  в функции    dataFilter
                  // только потом идут в success
                  // такой своеобразный фильтр

                                                     ///////пример/////
    $.ajax({
        url: 'mydata.json',
        success: function(data) {
            var template = $('#flowerTmpl');
            template.tmpl(data.slice(0, 3)).appendTo("#row1");
            template.tmpl(data.slice(3)).appendTo("#row2");
        },
        dataType: "json",
        dataFilter: function(data, dataType) {  // вот данные полученны
            if (dataType == "json") {
                var filteredData = $.parseJSON(data);  // здесь они преобразуються в массив
                filteredData.shift();                  // тут удаляется первый элемент
                return JSON.stringify(filteredData.reverse()); // тут массив переваричивается кверх ногами и преобразуется в объект JSON
            } else {
                return data;
            }
        }
    })

        // В джава скрипт есть JSON.parse который делает из строки объект JSON
    var data = '{ "age": 30 }';
    var user = JSON.parse(data);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    converters // служит для конвертации полученных данных
        // все мемы данных для коныертаии находятся по адресу
 //   https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
 //!! НО вместо    text/html пишется через пробел вот так -  text html
 // ВАЖНО   text html значит из  text конвертировать в   html(хотя в принцепи jquery делает ее сам)

                                                      ///////пример/////
    $.ajax({
        url: "flowers.html",  // В этом примере мы загружаем HTML-разметку, а не данные в формате JSON
        success: function(data, status, jqxhr) {
            var elems = data.filter('div').addClass("dcell");
            elems.slice(0, 3).appendTo('#row1');
            elems.slice(3).appendTo("#row2");
        },
        converters: {
            "text html": function(data) { // вот тут из текста конвертируется в html
                return $(data);
            }
        }
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ajaxSetup() //позволяет установить значения параметров, которые будут применяться по умолчанию во всех Ajax-запросах
    //тем самым освобождая вас от необходимости настраивать параметры при каждом запросе.
    //короче общие настройки

                                                    ///////пример/////
    $.ajaxSetup({
        timeout: 15000,
        error: function(jqxhr, status, errorMsg) {
            $('<div class=error/>')
                .text("Статус: " + status + " Ошибка: " + errorMsg)
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
   // $.ajaxPrefilter( [dataTypes],function(settings, originalSettings, jqXHR) )
    //  типа фильтрация запросов
    dataTypes //Необязательный параметр. Предназначен для перечисления (через пробел) типов данных.
    settings //— настройки текущего запроса,
    originalSettings //— настройки по умолчанию (из ajaxSettings),
        jqXHR //— jqXHR-объект данного запроса.
  //  Типичное использование $.ajaxPrefilter() выглядит следующим образом:
        $.ajaxPrefilter(function(settings, originalSettings, jqXHR){
            // Изменяем настройки (options), проверяем базовые настройки (originalSettings) и объект jqXHR
        })


                                                ///////пример/////
        $.ajaxSetup({
            timeout: 15000,
            error: function(jqxhr, status, errorMsg) {
                $('<div class=error/>')
                    .text("Статус: " + status + " Ошибка: " + errorMsg)
                    .insertAfter('h1');
            },
            converters: {
                "text html": function(data) {
                    return $(data);
                }
            }
        });
    $.ajaxPrefilter("json html", function(settings, originalSettings, jqxhr) { //  сработает только для указанных типов данных
                                                              // В данном сценарии, если среди параметров, передаваемых методу ajax()
                                                              // , присутствует параметр dataType
                                                                 // , то длительность тайм-аута устанавливается равной двум секундам.
                                                               // Чтобы предотвратить отправку всех остальных запросов,
                                                                  // для объекта jqXHR вызывается метод abort().
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
    // это будет разбераться потом но
    $.when(flowerReq, jsonReq).then(function() {})

    // пока не будут выполнены уловия в кавычках, не будет запускаться функция после then

                                                    ///////пример/////


    var jsonReq = $.getJSON("additionalflowers.json", function (data) { // в переменную суем запрос
        $("#flowerTmpl").template({ flowers: data }).appendTo("#row3");
    });
    $.when( jsonReq).then(function() {            // пока не будут выполнены уловия в кавычках, не будет запускаться функция после then
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
            if ($("form").validate().element($(e.target))) {  // Это запускает проверку форму, если ввсе ок возвращает тру, если нет то фелс
                var total = 0;
                $("input").each(function(index, elem) {
                    total += Number($(elem).val());
                });
                $("#total").text(total);
            }
        });
    });




    /////////////////////////все СОБЫТИЯ подробния//////////////////////

                        //Локальные события
   //События этого типа можно только в настройках низкоуровнего ajax-запроса:
    $.ajax({
        beforeSend: function(){
            // Действия, которые будут выполнены перед выполнением этого ajax-запроса
        },
        complete: function(){
            // Действия, которые будут выполнены после завершения ajax-запроса
        }
        // ......
    });
    success  //(Локальный)
    //Происходит в момент удачного завершения запроса.
    error  //(Локальный)
    //Происходит в случае неудачного завершения запроса.
    beforeSend  //(Локальный)
    //Происходит перед выполнением запроса, что позволяет произвести необходимые настройки.
    complete  //(Локальный)
    //Происходит при завершении запроса (неважно, удачном оно было или нет).


                     //Глобальные события
   // Их надо ставить перед запросам ajax
   // Эти события vjuen передаются всем элементам DOM, поэтому привязка
   // к ним происходит посредством обработчиков событий на элементах:
    $("#loading").on("ajaxSend", function(){
        $(this).show();
    });

    // или, то же самое, но с помощью специальной функции
    $("#loading").ajaxSend(function(){
        $(this).show();
    })
 //   Глобальные события могут быть отключены с помощью параметра global в настройках ajax-запроса:

    // во время выполнение следующего ajax-запроса, обработчики глобальных событий не будут вызваны
    $.ajax({
        url: "test.html",
        global: false,
        // ...
    });

  //  ajaxStart  //(Глобальный)
       // Происходит в момент начала запроса, с условием, что в это же время не запущены другие запросы.
  //  ajaxSend(function (event, jqxhr, settings) {}  //(Глобальный)
        //происходит перед выполнением запроса.
  //  ajaxSuccess(function (event, jqxhr, settings) {}  (//Глобальный)
       // Происходит в момент удачного завершения запроса.
 //   ajaxError(function (event, jqxhr, settings) {}  //(Глобальный)
        //Происходит в случае неудачного завершения запроса.
  //  ajaxComplete(function (event, jqxhr, settings) {}  //(Глобальный)
       // Происходит при завершении запроса (неважно, удачном оно было или нет).
  //  ajaxStop // (Глобальный)
       // Происходит при завершении запроса, с условием, что в это же время не запущены другие запросы.

                                                   ///////пример/////
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