windows.onload = function(){
    Handlebars  // � ��� ���������� ������������ ��� JavaScript
   //  Handlebars  �������� �� ����������� ������� - inline data � � �������� ����������
   // �� ������� -remote data(� ����� ������ �� ����� �������� � ������� Ajax)
    // � <head> ����� ��������� - <script src="handlebars.js" type="text/javascript"></script>

    //////////////////////////////////inline data - ���������� ������ //////////////////////////////////////////////
    //(��� ������ ������������� � js)
    // ������ ���������� � ������� JSON. (���  � ����� ����� �� �� ����������� ������)
    var elem = {elem: 0}
    var elem = [{elem: 0},{elem:0}] // ������ ��������

   ///////������////
    var data = [
        { name: "�����", product: "astor", stocklevel: "10", price: 2.99},
        { name: "�������", product: "daffodil", stocklevel: "12", price: 1.99},
        { name: "����", product: "rose", stocklevel: "2", price: 4.99},
        { name: "����", product: "peony", stocklevel: "0", price: 1.50},
        { name: "�������", product: "primula", stocklevel: "1", price: 3.12},
        { name: "����������", product: "snowdrop", stocklevel: "15", price: 0.99},
    ];
    ////��� ������///////
    var book = { bookTitle: '2001: A Space Odyssey', bookAuthor: 'Arthur Clarke' };
    ////////////////////

    // ���� ��� ������� �������������� ������
    // 1.
    var template = Handlebars.compile($('#book').html())
    // ������� Handlebars.compile ��������� ������ � ���������� ����� �������
    $(document.body).append(template(book))
    // ��������� HTML � ��������� � ��������

    // 2 ��� ���
    $("#flowerTmpl").template(data).appendTo("#row1");


    // ��� ����� ������� ������ � �������� � ������ ����
    var templResult = $('#flowerTmpl').template(data).filter("*"); //- .filter("*") ���� ��� ��������
    templResult.slice(0, 3).appendTo('#row1');
    templResult.slice(3).appendTo("#row2");
    // ��� ���
    var templResult = $('#flowerTmpl');
    templResult.template(data.slice(0, 3)).appendTo("#row1");
    templResult.template(data.slice(3)).appendTo("#row2");
    // ��� ��� ��� ����� � ������� ���� ��������� �������
    var tElem =  $("#flowerTmpl");
    tElem.template({ exe: data.exem3.slice(0, 2)}).appendTo("#row1");
    tElem.template({ exe: data.exem3.slice(2) }).appendTo("#row2");

///////////////////////////////////////��� ������ ��� (data template) //////////////////////////////////////////////////////
  // ��� ������ ������������� ���  -
  //<script id="flowerTmpl" type="text/x-handlebars-template">
     //... ����� ����� ��� �������
  //</script>

  ////////������//////////
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

    ////////������//////////
    //        {{#flowers}}
    //        <div class="dcell">
        //            <img src="{{product}}.png"/>
        //            <label for="{{product}}">{{name}}:</label>
        //               <input name="{{product}}" data-price="{{price}}" data-stock="{{stock}}" value="0" required />
    //             </div>
    //    {{/flowers}}                                            // {{/flowers}} -  ����� �����������                               -
    ///////////////////

    ////////������//////////
// <script id="book" type="text/x-handlebars-template">
//            <h2>{{bookTitle}}</h2>
//            <div>Author: {{bookAuthor}}</div>
//</script>
    ///////////////////


////////////////////////////////////////������ ������� ������ ///////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////��������� �������� ������/////////////////////////////////////////////////////////
    // � inline data  �������� �������
    for (var i = 0; i < data.flowers.length; i++) {
        if (data.flowers[i].stock == 0) {
            data.flowers[i].stock = null;
        }
    }
    //  � � ������� {#if stock}}1{{else}}0{{/if}}
    // ����  stock ����� ���� ������� �������� �� 1, � ���� ��� �� 0

    ////////������//////////
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


  ///////////////////////////////////////////////������������� ���������� �������//////////////////////////////////////
   // {{@key}}	// � ��������� ������ ����� ��������� �� �� ������ � �� ����� ��������

    ////////������//////////
//<script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//            {{#each stockData}}
//                       <li>{{@key}} ({{this}})</li> // � ������ ������ {{this}} ����� ���������� � {{@key}}
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

///////////////////////////////// ��������� � ��������� ������� � ������� �� ������///////////////////////////////////////

    ////////������//////////
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
    ///////////////////////////// ��� � #with

//
//        <script id="flowerListTmpl" type="text/x-handlebars-template">
//            <ul>
//            <h3>{{title}}</h3>
//              {{#each stockData}}
//                    {{#with description}}           //#with ��� ���������� � ��������� � ��� ����� �������
                                                      // ��� �� ������ ������
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

////////////////{{../../}} ��� ������ �������� �� ������

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


