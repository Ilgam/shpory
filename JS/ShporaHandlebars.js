windows.onload = function(){
    Handlebars  // — это клиентский шаблонизатор для JavaScript
   //  Handlebars  работает со встроенными данными - inline data и с внешними хранящимся
   // на сервере -remote data(с этими даннми мы будем работать с помощью Ajax)
    // в <head> нужно прописать - <script src="handlebars.js" type="text/javascript"></script>

    //////////////////////////////////inline data - встроенные данные //////////////////////////////////////////////
    //(они просто прописываются в js)
    // Данные передаются в формате JSON. (как  я понял похож он на стандартный объект)
    var elem = {elem: 0}
    var elem = [{elem: 0},{elem:0}] // массив объектов

   ///////пример////
    var data = [
        { name: "Астра", product: "astor", stocklevel: "10", price: 2.99},
        { name: "Нарцисс", product: "daffodil", stocklevel: "12", price: 1.99},
        { name: "Роза", product: "rose", stocklevel: "2", price: 4.99},
        { name: "Пион", product: "peony", stocklevel: "0", price: 1.50},
        { name: "Примула", product: "primula", stocklevel: "1", price: 3.12},
        { name: "Подснежник", product: "snowdrop", stocklevel: "15", price: 0.99},
    ];
    ////еще пример///////
    var book = { bookTitle: '2001: A Space Odyssey', bookAuthor: 'Arthur Clarke' };
    ////////////////////

    // Есть два способа скомпелировать шаблом
    // 1.
    var template = Handlebars.compile($('#book').html())
    // Функция Handlebars.compile принимает шаблон и возвращает новую функцию
    $(document.body).append(template(book))
    // Формируем HTML и вставляем в документ

    // 2 или так
    $("#flowerTmpl").template(data).appendTo("#row1");


    // так можно разбить объект и засунеть в разные дивы
    var templResult = $('#flowerTmpl').template(data).filter("*"); //- .filter("*") типа все элементы
    templResult.slice(0, 3).appendTo('#row1');
    templResult.slice(3).appendTo("#row2");
    // или так
    var templResult = $('#flowerTmpl');
    templResult.template(data.slice(0, 3)).appendTo("#row1");
    templResult.template(data.slice(3)).appendTo("#row2");
    // или вот так когда в объекте есть несколько свойств
    var tElem =  $("#flowerTmpl");
    tElem.template({ exe: data.exem3.slice(0, 2)}).appendTo("#row1");
    tElem.template({ exe: data.exem3.slice(2) }).appendTo("#row2");

///////////////////////////////////////сам шаблон или (data template) //////////////////////////////////////////////////////
  // сам шаблон прописывается так  -
  //<script id="flowerTmpl" type="text/x-handlebars-template">
     //... здесь будет код шаблона
  //</script>

  ////////пример//////////
//  <script id="flowerTmpl" type="text/x-handlebars-template">
//    {{#each flowers}}
//        <div class="dcell">
//        <img src="{{product}}.png"/>
//        <label for="{{product}}">{{name}}:</label>
//        <input name="{{product}}" data-price="{{price}}" data-stock="{{stock}}" value="0" required />
//         </div>
//      {{/each}}
 //</script>
    ///////////////////

    ////////пример//////////
    //        {{#flowers}}
    //        <div class="dcell">
        //            <img src="{{product}}.png"/>
        //            <label for="{{product}}">{{name}}:</label>
        //               <input name="{{product}}" data-price="{{price}}" data-stock="{{stock}}" value="0" required />
    //             </div>
    //    {{/flowers}}                                            // {{/flowers}} -  нужно прописывать                               -
    ///////////////////

    ////////пример//////////
// <script id="book" type="text/x-handlebars-template">
//            <h2>{{bookTitle}}</h2>
//            <div>Author: {{bookAuthor}}</div>
//</script>
    ///////////////////


////////////////////////////////////////полный простой пример ///////////////////////////////////////////////////////////////////

//        <script id="flowerTmpl" type="text/x-handlebars-template">
//            {{#each flowers}}
//    <div class="dcell">
//    <img src="{{product}}.png"/>
//    <label for="{{product}}">{{name}}:</label>
//<input name="{{product}}" data-price="{{price}}" data-stock="{{stock}}"
//value="0" required />
//</div>
//{{/each}}
//</script>
//<script type="text/javascript">
//    $(document).ready(function () {
//        var data = {
//            flowers: [
//                { name: "Aster", product: "aster", stock: "10", price: 2.99 },
//                { name: "Daffodil", product: "daffodil", stock: "12", price: 1.99 },
//                { name: "Rose", product: "rose", stock: "2", price: 4.99 },
//                { name: "Peony", product: "peony", stock: "0", price: 1.50 },
//                { name: "Primula", product: "primula", stock: "1", price: 3.12 },
//                { name: "Snowdrop", product: "snowdrop", stock: "15", price: 0.99 }]
//        };
//         $("#flowerTmpl").template(data).appendTo("#row1");
//    });
//</script>

////////////////////////////////////////////////изменения значение данных/////////////////////////////////////////////////////////
    // в inline data  добавить строчку
    for (var i = 0; i < data.flowers.length; i++) {
        if (data.flowers[i].stock == 0) {
            data.flowers[i].stock = null;
        }
    }
    //  а в шаблоне {#if stock}}1{{else}}0{{/if}}
    // если  stock имеет хоть какоето значение то 1, а если нет то 0

    ////////пример//////////
//  <script id="flowerTmpl" type="text/x-handlebars-template">
//            {{#flowers}}
//                  <div class="dcell">
//                       <img src="{{product}}.png"/>
//                       <label for="{{product}}">{{name}}:</label>
//                       <input name="{{product}}" data-price="{{price}}" data-stock="{{stock}}"
//                       value="{{#if stock}}1{{else}}0{{/if}}" required />
//                   </div>
//            {{/flowers}}
//</script>
//<script type="text/javascript">
//    $(document).ready(function () {
//        var data = {
//            flowers: [
//                { name: "Aster", product: "aster", stock: "10", price: 2.99 },
//                { name: "Daffodil", product: "daffodil", stock: "12", price: 1.99 },
//                { name: "Rose", product: "rose", stock: "2", price: 4.99 },
//                { name: "Peony", product: "peony", stock: "0", price: 1.50 },
//                { name: "Primula", product: "primula", stock: "1", price: 3.12 },
//                { name: "Snowdrop", product: "snowdrop", stock: "15", price: 0.99 }]
//        };
//        for (var i = 0; i < data.flowers.length; i++) {
//            if (data.flowers[i].stock == 0) {
//                data.flowers[i].stock = null;
//            }
//        }
//        var tElem = $("#flowerTmpl");
//        tElem.template({ flowers: data.flowers.slice(0, 3) }).appendTo("#row1");
//        tElem.template({ flowers: data.flowers.slice(3) }).appendTo("#row2");
//    });
//    </script>
  /////////////////////////////


  ///////////////////////////////////////////////Использование переменных шаблона//////////////////////////////////////
   // {{@key}}	// к свойтсвам оъекта можно обращатся не по именню а по ключу например

    ////////пример//////////
//<script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//            {{#each stockData}}
//                       <li>{{@key}} ({{this}})</li> // в данном случае {{this}} будет относиться к {{@key}}
//             {{/each}}
//           </ul>
//</script>
//<script type="text/javascript">
//    $(document).ready(function () {
//
//        var data = {
//            stockData: {
//                Aster: 10, Daffodil: 12, Rose: 2,
//                Peony: 0, Primula: 1, Snowdrop: 15
//            }
//        };
//        $("#flowerListTmpl").template(data).appendTo("form");
//    });
//</script>
    /////////////////////////////

///////////////////////////////// обращение к свойствам объекта в объекте по дереву///////////////////////////////////////

    ////////пример//////////
//<script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//                <h3>{{title}}</h3>
//                    {{#each stockData}}
//                               <li>{{description.Name}} ({{description.Stock}} in stock)</li>
//                     {{/each}}
//             </ul>
//</script>
//<script type="text/javascript">
//    $(document).ready(function () {
//
//        var data = {
//            title: "Stock List",
//            stockData: {
//                aster: {
//                    description: { Name: "Aster", Stock: 10 }
//                },
//                daffodil: {
//                    description: { Name: "Daffodil", Stock: 12 }
//                },
//                rose: {
//                    description: { Name: "Rose", Stock: 2 }
//                }
//            }
//        };
//        $("#flowerListTmpl").template(data).appendTo("form");
//    });
//</script>
    ///////////////////////////// или с #with

//
//        <script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//            <h3>{{title}}</h3>
//              {{#each stockData}}
//                    {{#with description}}           //#with как обращается к свойством в еще обном объекте
                                                      // как бы внизао дереву
//                            <li>{{Name}} ({{Stock}} in stock)</li>
//                    {{/with}}
//                {{/each}}
//            </ul>
//</script>
//
//<script type="text/javascript">
//    $(document).ready(function () {
//
//        var data = {
//            title: "Stock List",
//            stockData: {
//                aster: {
//                    description: { Name: "Aster", Stock: 10 }
//                },
//                daffodil: {
//                    description: { Name: "Daffodil", Stock: 12 }
//                },
//                rose: {
//                    description: { Name: "Rose", Stock: 2 }
//                }
//            }
//        };
//        $("#flowerListTmpl").template(data).appendTo("form");
//    });
//</script>

////////////////{{../../}} еще способ хождения по дереву

//        <script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//            <h3>{{title}}</h3>
//             {{#each stockData}}
//                {{#with description}}
//                        <li>{{Name}}{{../../prefix}}{{Stock}}{{../../suffix}}</li>
//                 {{/with}}
//              {{/each}}
//           </ul>
//</script>
//<script type="text/javascript">
//    $(document).ready(function () {
//
//        var data = {
//            title: "Stock List",
//            prefix: " (",
//            suffix: " in stock)",
//            stockData: {
//                aster: {
//                    description: { Name: "Aster", Stock: 10 }
//                },
//                daffodil: {
//                    description: { Name: "Daffodil", Stock: 12 }
//                },
//                rose: {
//                    description: { Name: "Rose", Stock: 2 }
//                }
//            }
//        };
//        $("#flowerListTmpl").template(data).appendTo("form");
//    });
//</script>


}


