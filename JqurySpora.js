window.onload = function(){
    ////////////////////////////////////////////////////////////////////////////////////основы jQuery/////////////////
    $(); // jQuery вызов
    jQuery(); // то же самое
    $(function(){}) // так тоже можно
    var kkkkk = jQuery.noConflict(); //  определить псевдоним для jQuery
    ///////пример/////////
                        var kkkkk = jQuery.noConflict();
                        kkkkk(document).ready(function () {
                            kkkkk("img:odd").mouseenter(function (e) {
                                kkkkk(this).css("opacity", 0.5);
                            }).mouseout(function (e) {
                                kkkkk(this).css("opacity", 1.0);
                            });
                        });
    //////////////////////

    $(document).ready(function () {}) // .ready- ожидание готовности DOM модели

    $.holdReady() //— определяет, откладывать или возобновлять (true/false)
    // нормальную работу события ready.
    ///////пример/////////
                                //Отложим выполнение ready, пока будет подгружаться myplugin.js:
                                $.holdReady(true);
                                $(document).ready(function () {
                                    $("img:odd").mouseenter(function (e) {
                                        $(this).css("opacity", 0.5);
                                    }).mouseout(function (e) {
                                        $(this).css("opacity", 1.0);
                                    });
                                });
                                $.getScript("myplugin.js", function(){
                                    $.holdReady(false);
                                });
    //////////////////////







    ////////////////////////////////////////////////////////////////ВЫБОРКА!!!!!!!!!!!!!!!!!!!///////////////////////////////
    /////////Базовые//////////////
    "*" //все элементы
    ".className" //элементы с классом className
    "#idName" //элемент (один!) с идентификатором idName
    "tagName" //элементы с заданным именем тега
     ///////////а можно так ///////////////
                        var elem = document.getElementsByTagName('img')
                        $(elem).mouseenter(function(e) {
                            $(this).css("opacity", 0.5);
                        }).mouseout(function(e) {
                            $(this).css("opacity", 1.0);
                        })

    /////////////////////Простые фильтры///////////////////////////
    ":focus" //элемент, находящийся в фокусе
    ":first" //первый найденный элемент
    ":last" //последний найденный элемент
    ":eq( )" //элемент идущий под заданным номером среди выбранных
    ":not(selector)" //все найденные элементы, кроме указанных в selector
    ":even" //элементы с четными номерами позиций, в наборе выбранных элементов
    ":odd" //элементы с нечетными номерами позиций, в наборе выбранных элементов
    ":gt( )" //элементы с индексом превышающим n
    ///////Пример :gt( )///////
    //<td>TD #0</td>
    // <td>TD #1</td>
    // <td>TD #2</td>
    //<td>TD #3</td>
    // <td>TD #4</td>
    // <td>TD #5</td>
    //<td>TD #6</td>
    // <td>TD #7</td>
    // <td>TD #8</td>
    $( "td:gt(4)" ).css( "backgroundColor", "yellow" );
    ////////////////////////
    ":lt( )" //элементы с индексом меньшим, чем n
    ":header" //элементы, являющиеся заголовками (с тегами h1, h2 и.т.д.)
    ":animated" //элементы, которые в данный момент задействованы в анимации
    ":hidden" //невидимые элементы страницы
    ":visible" //видимые элементы страницы
    ":lang(language)" //элементы, в которых указаны языки содержимого
    ":root" //элемент, который является корневым в документе.

    //////////////Селекторы, находящиеся в одном выражении,///////////////////////////////
     /////////////////взаимодействуют между собой практически /////////////////
     ////////////////////так же, как в правилах CSS//////////////////////////////

    "first, second, ..." //элементы удовлетворяющие любому из селекторов first, second, ...
                    /////Пример////
                   // <div class="someClass"> 1 </div>
                   // <div> 2 </div>
                   // <span> 3 </span>
                   //<div class="someClass"> 4 </div>
                    $("span, .someClass").css("border","3px solid red"); // выберет 1 3 4 вариант
    //////////////
    "outer inner" //элементы из inner, которые являются потомками (т.е. лежат внутри) элементов из outer
                        /////Пример////
                        //<div class="box"> <p class="fish">1</p> </div>
                        //<div class="box"> <p class="bomb">2</p> </div>
                        //<div class="box"> <p class="panties">3</p> </div>
                        $('.box .bomb').parent()
                            .css('border', '3px solid red')
                            .html('Бомба, епт!');
    "parent > child" //элементы из child, которые являются прямыми потомками элементов из parent
    "prev + next" //элементы из next, которые следуют непосредственно за элементами из prev
    "prev ~ next" //элементы из next, которые следуют за элементами из prev


    /////////////////////Селекторы по атрибутам///////////////////////////////
    "[name]" //элементы, содержащие атрибут name
    "[name = value]" //элементы, у которых значение атрибута name совпадает с value
    "[name != value]" //элементы, у которых значение атрибута name не совпадает с value
    "[name ^= value]" //элементы, у которых значение атрибута name начинается с value
    "[name $= value]" //элементы, у которых значение атрибута name заканчивается на value
    "[name *= value]" //элементы, у которых значение атрибута name содержит подстроку value
    "[name ~= value]" //элементы, у которых значение атрибута name содержит слово value
    "[name |= value]" //элементы, у которых значение атрибута name имеют префикс value
    // (равен value или имеет вид: "value-*")
    "[first][second][..." //элементы, соответствующие всем заданным условиям на атрибуты одновременно

    //////////////////////////////Данные селекторы отфильтровывают элементы////////////////////////
    // //////////////////////////по их расположению в родительских элементах///////////////////////
    ":first-child" //элементы, расположенные первыми в своих родительских элементах
    ":last-child" //элементы, расположенные последними в своих родительских элементах
    ":nth-child( )"
    ":nth-child-last( )" //элементы, расположенные определенным образом
    // в родительских элементах (четные, нечетные, идущие под заданным номером)
    ":only-child" //элементы, являющиеся единственными потомками в своих родительских элементах
    ":only-of-type" //элементы, являющиеся единственными, удовлетворяющими селектору,
                    // потомками в своих родительских элементах
    ":first-of-type" //те из выбранных элементов, которые первыми встречаются в своих родительских элементах
    ":last-of-type" //те из выбранных элементов, которые последними встречаются в своих родительских элементах
    ":nth-first-of-type( )"
    ":nth-last-of-type( )" //те из выбранных элементов, которые в определенную очередь
                            // встречаются в своих родительских элементах

    ///////////селекторы позволяющие выберать элементы в соответствии с их типов/////////
    ":button" //элементы с тегом button или типом button
    ":radio" //элементы, являющиеся переключателями
    ":checkbox" //элементы, являющиеся флажками
    ":text" //элементы, являющиеся текстовыми полями
    ":password" //элементы, являющиеся полями ввода пароля
    ":file" //элементы, являющиеся полями загрузки файлов
    ":submit" //элементы, являющиеся кнопками отправки формы
    ":reset" //элементы, являющиеся кнопками очистки формы
    ":image" //элементы, являющиеся изображениями для отправки формы (input типа image)
    ":input" //элементы, являющиеся элементами формы (с тегами input, textarea или button)
    ":selected" //выбранные элементы (со статусом selected). Это могут быть элементы типа <option>.
    ":focus" //элементы формы, находящиеся в фокусе.
    ":checked" //выбранные элементы (со статусом checked). Это могут быть элементы типа <checkbox> или <radio>.
    ":enabled" //активные элементы формы (со статусом enabled)
    ":disabled" //неактивные элементы формы (со статусом disabled)

    //////////////////Сужение области поиска с помощью контекста/////////////////////
    // выбераются все элементы класса drow, а потом среди
        // них ищеся элементы с нечетными номерами позиций
                    $("img:odd", $(".drow")).mouseenter(function(e) {
                        $(this).css("opacity", 0.5);
                    }).mouseout(function(e) {
                        $(this).css("opacity", 1.0);
                    })
    ///////////////////////////////

    /////////////////////////методы и свойства объкта jQuery////////////////////////////////

        .context //Возвращает элемент (DOM узел), изначально использованный в качестве контекста при создании
                 //данного набора jQuery.
        .each(функция) // Выполняет функцию для каждого элемента набора.
         //////пример//////
                            $("span").click(function () {
                                $("li").each(function(){
                                    $(this).toggleClass("example");
                                    //toggleClass Переключатель классов. Добавляет элементу указанный класс, если его нет.
                                    // Иначе удаляет.
                                });
                            })
        ////////////////////
       // each(function(index, elem) //  elem елемент который данный элемент задействованный
        //////пример//////
                                    $("input").change(function(e) {
                                        var total = 0;
                                        $("input").each(function(index, elem) {
                                            total += Number($(elem).val());
                                        });
                                        $("#total").text(total);
                                    })

    /////////////////////
        .get(индекс)    // получает объект HTMLElement с указываемые функции
      //////пример//////
                                            $(document).ready(function() {
                                                var elem = $("img:odd").get(0);
                                                console.log("Element: " + elem.tagName + " " + elem.src);
                                            })
                                                //результатом будет
                                                // Element: IMG http://localhost:63342/Chapter%2005/daffodil.png
     /////////////////////
      .index(селектор)   //Ищет указанный элемент в наборе jQuery и возвращает
                        // его индекс (порядковый номер в наборе начиная с 0) или -1, если не находит.
         //////пример//////
                                $(document).ready(function() {
                                    // find an index using a selector
                                    index = imgElems.index("body *");
                                    console.log("Index using selector is: " + index);
                                    // perform the same task using a jQuery object
                                    index = $("body *").index(imgElems);
                                    console.log("Index using jQuery object is: " + index);
                                })
                                    // в обоих случаях результат будет 2
       /////////////////////
      .length // возвращает число элементов в объете
      .selector // возвращает селектор
        //////пример//////
                        $(document).ready(function () {
                            var selector = $('img:odd').selector
                            console.log(selector);
                        }) // результат img:odd

        ///////////////
        .size()  // возвращает количество элементов
        .toArray() //Возвращяет массив всех DOM-элементов, хранящихся в объекте jQuery.
        inArray() // Ищет заданный элемент в массиве. Возвращает индекс этого элемента или -1
                  // в случае его отсутствия
    //////пример//////
    var arr = [1, "Bob", "Sid"];
    $.inArray(1, arr); // 0
    $.inArray("Sid", arr); // 2
    $.inArray("Bobby", arr); // -1
    ///////////////



     ////////////Работа с объектом jQuery как с массивом ////////////////////////////////////
                            $(document).ready(function() {
                                var elems = $("img:odd");
                                for (var i = 0; i < elems.length; i++) {
                                    console.log("Element: " + elems[i].tagName + " " + elems[i].src);
                                }
                            })

    ////////////////// Изменение элементов и создание цепочек ////////////////////////////////
    //Изменение элементов
                        $(document).ready(function () {
                            $("label").css("color", "blue");  //так в jQuery
                            var labelElems = document.getElementsByTagName("label"); //так в js
                            for (var i = 0; i < labelElems.length; i++) {
                                labelElems[i].style.color = "blue";
                            }
                        });
    //Изменение элементов и создание цепочек
                            $(document).ready(function () {
                            $("label").css("color", "blue").css("font-size", ".75em"); //так в jQuery
                            var labelElems = document.getElementsByTagName("label"); //так в js
                            for (var i = 0; i < labelElems.length; i++) {
                                labelElems[i].style.color = "blue";
                                labelElems[i].style.fontSize = ".75em";
                            }
                            })
    ////////////////////////////////////////////////////////РАБОТА С НАБОРОМ ВЫБРННЫХ ЭЛЕМЕНТОВ/////////////////////////////////////


     .add() //Добавляет в уже существующий набор дополнительные элементы, которые удовлетворяют указанному выражению.
    //////пример//////
                     $(document).ready(function () {
                     $( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );
                      })  //Поиск всех элементов div и установка им рамки красного цвета. Затем все параграфы добавляются
                         // в уже существующий объект jQuery и им устанавливается фон желтого цвета.
    ///////////////

    .eq() //Сокращает набор jQuery до 1 (одного) элемента, имеющего указанный индекс (отсчет начинается с 0).
    //////пример//////
                   $( "body" ).find( "div" ).eq( 2 ).addClass( "blue" )   // третий элемент окрашется в синий
    ////////////                                                        // (потому что начинается с 0)

    .filter() //Удаляет из набора jQuery элементы, используя для фильтрации заданный селектор jQuery или функцию.
    //////пример//////
                    //<div class ="haser"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class ="haser"></div>

                    $( "div" ).css( "background", "#c8ebcc" ).filter( ".middle" ).css( "border-color", "red" )
                    // окрашаться все дивы с клакссом мидл
    //////////////////

    .first() //Сокращает набор jQuery до одного единственного элемента (первого элемента исходного
             // набора, соответствующего заданному селектору).
    //////пример//////
                // <p>
                // <span>Look:</span>
                //<span>This is some text in a paragraph.</span>
                //<span>This is a note about it.</span>
                //</p>
                    $( "p span" ).first().addClass( "highlight" ) // класс добавиться к первому элементу т.е. Look:
    //////////////////

    .has() //Создает новый набор jQuery из элементов исходного набора,
           // среди потомков которых имеются элементы, соответствующие заданному параметру.
    //////пример//////
                    $("div").has("p")	//вернет div-элементы, внутри которых есть элементы p (параграфы).
                    $("div").has(".lBlock")	//вернет div-элементы, внутри которых есть элементы с классом lBlock.
                    $(".lBlock").has("div")	//вернет с классом lBlock, внутри которых есть div-элементы.
    //////////////////

     .is() //Позволяет определить, имеется ли в наборе jQuery хотя бы один элемент,
           // соответствующий указанному селектору.
    //////пример//////
                 $("div").is(".lBlock")	//проверит, имеется ли на странице div-элемент(ы) с классом lBlock.
                 $(".lBlock").is("#a") //проверит, имеется ли среди элементов с классом lBlock, элементы с идентификатором a.

                    $(document).ready(function() {
                        var isResult = $("img").is(function(index) {
                            return this.getAttribute("src") == "rose.png";
                        });
                        console.log("Result: " + isResult);  // Вернет true
                    })

    //////////////////

     .not()//удаляет из набора, элементы соответствующие указанному выражению
    //////пример//////
                $("div").not(".green, #blueone").css("border-color", "red") // добавит красную обвотку всем элементам кроме тех
                                                                            // у кого есть класс .green и #blueone
    //////////////////

    .slice() //Фильтрует набор выбранных элементов, оставляя только те элементы, чьи индексы лежат
             // в определенной области (например от 0 до 5).
    //////пример//////
                $(document).ready(function() {
                var jq = $("label");
                jq.slice(0, 2).css("border", "thick double black"); // выбепрето от 1(индекс 0) и 2(индекс 1), а вот элемент с индексом 2
                                                                                // т.е. 3 элемент не выберет
                 jq.slice(4).css("border", "thick solid red");       // выберет от 4 до бесконечности
                 })
    //////////////////

    .map() //Выполняет заданную функцию для каждого из выбранных элементов в отдельности.
    //////пример//////
                    // <div class="dcell">
                    //<img src="aster.png"/><label for="aster">Aster:</label>
                    //<input name="aster" value="0" required>
                    //</div>
                $(document).ready(function() {
                    $("div.dcell").map(function(index, elem) {
                        return elem.getElementsByTagName("img")[0];
                    }).css("border", "thick solid red");

                    $("div.dcell").map(function(index, elem) {
                        return $(elem).children()[1];
                    }).css("border", "thick solid blue");
                })
    //////////////////

    .end() //Отменяет текущий и возвращает предыдущий набор jQuery
    //////пример//////
                     $("div").find("span").css("background-color","yellow").end().find("p").css("background-color","green")
                    // Сначала найдем все элементы <div>
                    // Затем найдем все <span> внутри этих <div>
                    // и установим для них желтый цвет фона. Теперь
                    // вернем предыдущий объект jQuery (все элементы <div>),
                    // найдем все <p> внутри этих <div>
                    // и установим для них зеленый цвет фона.
    //////////////////

   .andSelf() //Объединяет текущий набор jQuery с предыдущим в пределах цепочки команд.
    //////пример//////
                     $("div").find("span").css("background-color","yellow").andSelf().css("border","1px solid red")
                    // Сначала найдем все элементы <div>
                    // Затем найдем все <span> внутри этих <div>
                    // и установим для них желтый цвет фона.
                    // Теперь объединим текущий объект jQuery с предыдущим и
                    // установим красную границу вокруг всех элементов <div>
                    // и элементов <span> внутри них.
   //////////////////















   /////////////////////////////////////////////НАВИГАЦИЯ ПО ДЕРЕВУ ДОМ////////////////////////////////////////////////////////
   //////////////////////паеремещение вниз по дереву/////////////////////////
   .children()	//Выбирает дочерние элементы всех элементов, содержащихся в объекте jQuery
    //////пример//////
                    $(document).ready(function() {
                        var childCount = $('div.drow').children().each(function(index, elem) {
                            console.log("Дочерний элемент: " + elem.tagName + " " + elem.className);
                        }).length;
                        console.log("Всего имеется " + childCount + " дочерних элементов");
                    })
                        //Сначало объявляется переменная, в нее суются все дивы с классом drow
                        // Потом берутся все их дочернии элементты
                        // На каждый эемент применяеся функция
                        // где в концоле выводятся ихъ тегнеймы и класс
                        // потом считается длина всех выбранных элементов
                        //Это число и записывается в переменную
                       // В последней концоле выводится это число
    //////////////////

   .find() //Выбирает потомки элементов, содержащихся в объекте jQuery
    //////пример//////
                        $(document).ready(function() {
                            var descCount = $('div.drow').find('img').each(function(index, elem) {
                                console.log("Потомок: " + elem.tagName + " " + elem.src);
                            }).length;
                            console.log("Всего имеется " + descCount + " элементов-потомков img");
                        })
                        //Сначало объявляется переменная, в нее суются все дивы с классом drow
                        //Потом в них ищется все img
                        // На каждый эемент применяеся функция
                        // потом считается длина всех выбранных элементов
                        //Это число и записывается в переменную
                        // В последней концоле выводится это число
   //////////////////

   ////////////////////Перемещение вверх по дереву DOM//////////////////////////////
   .parent() //позволяет выбрать родительский элемент для каждого из элементов
     //////пример//////
                            $(function() {
                                $('div.dcell').parent().each(function(index, elem) {
                                    console.log("Элемент: " + elem.tagName + " " + elem.id);
                                });
                                // на кажддый родительский элемент применяется функция
                                $('div.dcell').parent('#row1').each(function(index, elem) {
                                    console.log("Отфильтрованный элемент: " + elem.tagName + " " + elem.id);
                                });
                                // только на родителя row1 применяется функция
                            })
     //////////////////

    .parent()  //обеспечивает возможность выбора всех, а не только непосредственных предков (родителей) элементов
    /////пример//////
                        $(function() {
                            $('img[src*=peony], img[src*=rose]').parents().each(function(index, elem) {
                                console.log("Элемент: " + elem.tagName + " " + elem.className + " "
                                    + elem.id);
                            });
                        })
                            // Все элементов ввырх будет применяться функция
   //////////////////

    .parentsUntil() //выбирая элементы-предки до тех пор, пока не встретится элемент, соответствующий селектору.
    //////пример//////
                                    $(function() {
                                      $('img[src*=peony], img[src*=rose]').parentsUntil('form').each(function(index, elem) {
                                      console.log("Элемент: " + elem.tagName + " " + elem.className + " " + elem.id);
                                  });
                               })
                                 // будет применяться функция для родителей до form
   //////////////////

    .closest() //позволяет выбирать первого из предков, соответствующих селектору
    //////пример//////
                                    //<div id="row1" class="drow">
                                $(function() {
                                    $('img').closest('.drow').each(function(index, elem) {
                                        console.log("Элемент: " + elem.tagName + " " + elem.className + " " + elem.id);
                                    });
                                })
                                //ближайший будет его айдишник

   //////////////////

    .offsetParent() //представляет собой вариацию на тему метода closest() и предназначен для нахождения первого потомка,
                    // значение CSS-свойства position которого равно relative, absolute или fixed.
    //////пример//////
                                   //#row1 {position: fixed; top: 75px; left: 50px}
                                    $(function() {
                                        $('img[src*=astor]').offsetParent().css("background-color", "lightgrey");
                                    })
    //////////////////

    /////////////Перемещение по дереву DOM в пределах одного иерархического уровня///////////////////////////

    .next()	//Выбирает сестринские элементы, непосредственно следующие за каждым из элементов,
    .prev()	//Выбирает сестринские элементы, непосредственно предшествующие каждому из элементов,
    .siblings() //обеспечивает возможность выбора всех сестринских элементов для всех элементов
    //////пример//////
                                    $(function() {
                                        $('img[src*=astor], img[src*=primula]')
                                            .parent().siblings().css("border", "thick solid blue");
                                    })
    //////////////////

    .nextAll()  .prevAll() // Выбор последующих и предшествующих сестринских элементов
    //////пример//////
                                    $(function() {
                                        $('img[src*=astor]').parent().nextAll().css("border", "thick solid blue");
                                        $('img[src*=primula]').parent().prevAll().css("border", "thick double red");

                                    })
    //////////////////

    .nextUntil().prevUntil()//Выбирает для каждого элемента последующие сестринские элементы вплоть до элемента (но не включая его)














    /////////////////////////////////////////ДОМ МАНИПУЛЯЦИИ//////////////////////////////////////////////////////////////////

    /////////////Создание элементов с использованием функции $()///////////////////////
    //////пример//////
                                                        $(function() {
                                var newElems = $('<div class="dcell"><img src="http://professorweb.ru/downloads/jquery/lily.png"/></div>');
                                newElems.each(function (index, elem) {
                                    console.log("Новый элемент: " + elem.tagName + " " + elem.className);
                                });

                                newElems.children().each(function(index, elem) {
                                    console.log("Дочерний элемент: " + elem.tagName + " " + elem.src);
                                });
                            })
//////////////////

    clone() //позволяет создавать новые элементы на основе существующих.
//////пример//////
                                $(function() {
                                    var newElems = $('div.dcell').clone();
                                    newElems.each(function (index, elem) {
                                        console.log("Новый элемент: " + elem.tagName + " " + elem.className);
                                    });
                                    newElems.children('img').each(function(index, elem) {
                                        console.log("Дочерний элемент: " + elem.tagName + " " + elem.src);
                                    });
                                })
//////////////////

    append() //Вставляет указанные элементы в качестве последних дочерних элементов во все выбранные элементы
    //////пример//////
                            $(function() {
                                var newElems = $("<div class='dcell'></div>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>Лилии:</label>")
                                    .append("<input name='lily' value='0' required />");
                                newElems.css("border", "thick solid red");
                                $('#row1').append(newElems);
                            })
//////////////////

    prepend() //Вставляет указанные элементы в качестве первых дочерних элементов во все выбранные элементы
//////пример//////
                            $(function() {
                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>Орхидея:</label>")
                                    .append("<input name='orchid' value='0' required />");
                                $('#row1').prepend(orchidElems);
                            })
//////////////////
    .appendTo() .prependTo() //все меняется местами: элементы, содержащиеся в объекте jQuery,
                             // вставляются в качестве дочерних элементов внутрь элементов, заданных аргументом.
    //////пример//////
                            $(function() {
                                var newElems = $("<div class='dcell'/>");
                                $('img').appendTo(newElems);
                                $('#row1').append(newElems);
                            });

//////////////////

    //Вставка элементов с использованием функции
    //////пример//////
                            $(function() {

                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>Орхидея:</label>")
                                    .append("<input name='orchid' value='0' required />");

                                var lilyElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>Лилия:</label>")
                                    .append("<input name='lily' value='0' required />");

                                $(orchidElems).add(lilyElems).css("border", "thick solid red");

                                $('div.drow').append(function(index, html) {
                                    if (this.id == "row1") {
                                        return orchidElems;
                                    } else {
                                        return lilyElems;
                                    }
                                })
                            })
//////////////////

    wrap() //Обертывает указанные элементы вокруг каждого из элементов, содержащихся в объекте jQuery
    //////пример//////
                            $(function() {
                                var newElem = $("<div/>").css("border", "thick solid red");
                                $('div.drow').wrap(newElem);
                            })
//////////////////

    wrapAll() //Обертывает указанные элементы вокруг набора элементов, содержащихся в объекте jQuery
               // (рассматриваемых как единая группа)
    //////пример//////
                                    $(function() {
                                        var newElem = $("<div/>").css("border", "thick solid red");
                                        $('img').wrapAll(newElem);
                                    });
//////////////////

    wrapInner() //позволяет окружать элементами содержимое других элементов (а не сами элементы)
    //////пример//////
                                $(function() {
                                    var newElem = $("").css("border", "thick solid red");
                                    $('.dcell').wrapInner(newElem);
                                })
                                // каждый элемент в .dcell обернется newElem
//////////////////

    .before().after() // вставляет сестринские элементы до или после указанного элемента
//////пример//////
                            $(function() {
                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>Орхидея:</label>")
                                    .append("<input name='orchid' value='0' required />");

                                var lilyElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>Лилия:</label>")
                                    .append("<input name='lily' value='0' required />");
                                $(orchidElems).add(lilyElems).css("border", "thick solid red");
                                $('#row1 div.dcell').after(orchidElems);
                                $('#row2 div.dcell').before(lilyElems);

                            })
//////////////////

   .insertAfter().insertBefore() //вставляют сестринские элементы, но в отлии от .before().after(),
                                 //объект jQuery и аргумент метода меняются ролями.
    //////пример//////
                                $(function() {
                                    var orchidElems = $("<div class='dcell'/>")
                                        .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                        .append("<label for='orchid'>Орхидея:</label>")
                                        .append("<input name='orchid' value='0' required />");

                                    var lilyElems = $("<div class='dcell'/>")
                                        .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                        .append("<label for='lily'>Лилия:</label>")
                                        .append("<input name='lily' value='0' required />");
                                    $(orchidElems).add(lilyElems).css("border", "thick solid red");
                                    orchidElems.insertAfter('#row1 div.dcell');
                                    lilyElems.insertBefore('#row2 div.dcell');

                                })
//////////////////

    replaceWith()  //Заменяет элемент, содержащийся в объекте jQuery, указанным содержимым
    replaceAll()   //Заменяет элементы, заданные аргументом, элементами, содержащимися в объекте jQuery
                   // и меняются местами
//////пример//////
                                        $(function() {
                                            var newElems= $("<div class='dcell'/>")
                                                .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                                .append("<label for='orchid'>Орхидея:</label>")
                                                .append("<input name='orchid' value='0' required />")
                                                .css("border", "thick solid red");
                                            $('#row1').children().first().replaceWith(newElems);
                                            $("<img src='http://professorweb.ru/downloads/jquery/carnation.png'/>").replaceAll('#row2 img')
                                        })
//////////////////

    remove() //Удаляет элементы из DOM. По мере удаления элементов связанные с ними данные уничтожаются
//////пример//////
                                        $(function() {
                                            $('img[src*=daffodil], img[src*=snow]').parent().remove();
                                        })
                                        //удаляет родительский элементы у img[src*=daffodil] и img[src*=snow] и все что внутри
                                        // в том числе и img[src*=daffodil] и img[src*=snow]

                                        $(function() {
                                            $('div.dcell').remove(':has(img[src*=snow], img[src*=daffodil])');
                                        })
                                            //удаляет элементы содержащине (img[src*=snow], img[src*=daffodil]
//////////////////

    empty() //удаляет все элементы-потомки и текст из элементов, содержащихся в объекте jQuery
    //////пример//////
                                        $(function() {
                                            $('#row1').children().eq(1).empty().css("border", "thick solid red");
                                        })
//////////////////

    unwrap() //удаляет родительские элементы для элементов, содержащихся в объекте jQuery.
    //////пример//////
                                        $(function() {
                                            $('#row1 div').unwrap().css('display','block');
                                        })
//////////////////















//////////////////////////////////////МОНИПУЛЯЦИИ ЭЛЕМЕНТАМИ////////////////////////////////////////////////////////////

    attr() //Возвращает значение атрибута  с указанным именем для первого из элементов или устанавливает значения атренбута
    //////пример//////
                                        $(function() {
                                            var srcValue = $('img').attr('src');
                                            console.log("Attribute value: " + srcValue);;
                                        })
                                        //результат будет Attribute value: aster.png для паервовго эелемнта

                                        $(function() {
                                            var srcValue = $('img').each(function(index, element) {
                                                console.log('Значение атрибута src: ' + $(this).attr('src'));
                                            });
                                        })
                                        // выведет результат из всех img

                                        $(function() {
                                            $('img').attr("src", "http://professorweb.ru/downloads/jquery/lily.png");
                                        })
                                          // установит значения атребута для всех элементов

                                        $(function() {
                                            var attrValues = {
                                                src: 'http://professorweb.ru/downloads/jquery/lily.png',
                                                style: 'border: thick solid red'
                                            };
                                            $('img').attr(attrValues);
                                        })
                                            // установит несколько значений для всехз элементов
//////////////////

    removeAttr() //Удаление атрибутов
    //////пример//////
                                        $(function() {
                                            $('img').attr("style", "border: thick solid red");
                                            $('img:odd').removeAttr("style");
                                        })
//////////////////

    prop() //Возвращает / изменяет значение свойств выбранных элементов.
//////пример//////
                                        $(document).ready(function(){
                                            $("button").click(function(){
                                                var $x = $("div");
                                                $x.prop("color", "FF0000");
                                            });
                                        })
//////////////////

   addClass() //обавлять классы в элементы,
   removeClass() //удалять классы
   hasClass() //проверять принадлежность элемента определенному классу

//////пример//////
                                    $(function() {
                                        $('img').addClass("redBorder");
                                        $('img:even').removeClass("redBorder").addClass("blueBorder");
                                        console.log("Все элементы: " + $('img').hasClass('redBorder'));
                                        $('img').each(function(index, elem) {
                                            console.log("Элемент: " + $(elem).hasClass('redBorder') + " " + elem.src);
                                        });
                                    })
//////////////////

    //Добавление и удаление классов с помощью функции
    //////пример//////
                                    $(document).ready(function() {
                                        $("img").addClass(function(index, currentClasses) {
                                            if (index % 2 == 0) {
                                                return "blueBorder";
                                            } else {
                                                return "redBorder";
                                            }
                                        });
                                    })
                               // напомню index здесь это не аргумент функции а реально индекс элемента
//////////////////

    toggleClass()  //обавление указанного класса, если элемент не имеет данного класса,
                   // или удаление класса, если элемент имеет данный класс.
    //////пример//////
                                    $(function() {
                                        $('img').filter(':odd').addClass("redBorder").end()
                                            .filter(':even').addClass("blueBorder");
                                        $("<button>Переключить</button>").appendTo("#buttonDiv").click(doToggle);
                                        function doToggle(e) {
                                            $('img').toggleClass("redBorder");
                                            e.preventDefault();
                                        };
                                    })

                                    $(function() {
                                        $('img').filter(':odd').addClass("redBorder").end()
                                            .filter(':even').addClass("blueBorder");
                                        $("<button>Переключить</button>").appendTo("#buttonDiv").click(doToggle);
                                        function doToggle(e) {
                                            $('img').toggleClass("redBorder blueBorder");
                                            e.preventDefault();
                                        };
                                    })
                                    //Переключение одновременно нескольких классов

                                    $(function() {
                                        $('img').addClass("redBorder");
                                        $('img:even').addClass("blueBorder");
                                        $("<button>Переключить</button>").appendTo("#buttonDiv").click(doToggle);
                                        function doToggle(e) {
                                            $('img').toggleClass(function(index, currentClasses) {
                                                if (index % 2 == 0) {
                                                    return "blueBorder";
                                                } else {
                                                    return "";
                                                }
                                            });
                                            e.preventDefault();
                                        };
                                    })
                                    //Динамическое переключение классов
//////////////////

    css()  // Возвращает или Устанавливает значение указанного свойства для всех элементов
//////пример//////
                                    $(function() {
                                        var sizeVal = $('label').css("font-size");
                                        console.log("Размер шрифта: " + sizeVal);
                                        $('label').css("font-size", "1.5em");
                                    })
                                    // Возвращает  значение указанного свойства
                                    $(function() {
                                        $('label').css("font-size", "1.5em").css("color", "blue");
                                    })
                                  //Устанавливает значение указанного свойства

                                    $(function() {
                                        var cssVals = {
                                            "font-size": "1.5em",
                                            "color": "blue"
                                        };
                                        $('label').css(cssVals);

                                    })
                                    //Устанавливает значение указанного свойства

                                    $(function() {
                                        $('label:odd').css("font-size", "+=5")
                                        $('label:even').css("font-size", "-=5")
                                    })
                                    //Изменяет значение указанного свойства

//////////////////
    height() //Возвращает высоту (в пикселях) первого из элементов, содержащихся в объекте jQuery
    height(x)	// Устанавливает высоту для всех элементов, содержащихся в объекте jQuery
    innerHeight()	//Возвращает внутреннюю высоту (т.е. высоту элемента, включая внутренние отступы,
                   // но исключая границы и поля) первого из элементов, содержащихся в объекте jQuery
    innerWidth()	//Возвращает внутреннюю ширину (т.е. ширину элемента, включая внутренние отступы,
                   // но исключая границы и поля) первого из элементов, содержащихся в объекте jQuery
    offset() //Возвращает координаты первого из элементов, содержащихся в объекте jQuery,
             // относительно начала документа
    outerHeight(x)	//Возвращает высоту первого из элементов, содержащихся в объекте jQuery,
                  // включая внутренние отступы и границы. Аргумент определяет,
                  // должен ли при этом учитываться размер полей
    outerWidth(x)	//Получает ширину первого из элементов, содержащихся в объекте jQuery,
                    // включая внутренние отступы и границы. Аргумент определяет,
                    // должен ли при этом учитываться размер полей
    position()	//Возвращает координаты первого из элементов, содержащихся в объекте jQuery,
                // относительно его родительского элемента, у которого задан тип позиционирования
    //////пример//////
                            $(function() {
                                var pos = $('img').position();
                                console.log("Позиция элемента сверху: " + pos.top + " слева: " + pos.left);
                            })
//////////////////
    scrollLeft(), scrollTop()	//Получает значение отступа прокрутки слева или сверху
                                // для первого из элементов, содержащихся в объекте jQuery
    scrollLeft(x), scrollTop(x)	//Устанавливает значение отступа прокрутки слева или сверху
                                  // для всех элементов, содержащихся в объекте jQuery
    width()//	Получает ширину первого из элементов, содержащихся в объекте jQuery
    width(x)//	Устанавливает ширину для всех элементов, содержащихся в объекте jQuery

    html() //возвращает или Устанавливает HTML-содержимое первого из элементов, содержащихся в объекте jQuery
    //////пример//////
                            $(function() {
                                var html = $('div.dcell').html();
                                console.log(html);
                            })
                                // возвращает HTML-содержимое

                            $(function() {
                                $('#row2 div.dcell').html($('div.dcell').html());
                            })
                            //Устанавливает HTML-содержимое
//////////////////

    text() // Получает или Устанавливает объединенное текстовое содержимое всех элементов, содержащихся в объекте jQuery, и их потомков
    //////пример//////
                            $(function() {
                                $('label').css("border", "thick solid red").text(function(index, currentValue) {
                                    return "Индекс " + index;
                                });
                            });
                                //Устанавливает
//////////////////

    val()//Возвращает значение первого из элементов, содержащихся в объекте jQuery
         //или Изменяет значения всех элементов, содержащихся в объекте jQuery
//////пример//////
                                $(function() {
                                    $('input').each(function(index, elem) {
                                        console.log("Имя: " + elem.name + " Значение: " + $(elem).val());
                                    });
                                })
                                //Возвращает значение
                                $(document).ready(function () {
                                    $("<button>Set Values</button>").appendTo("#buttonDiv")
                                        .click(function (e) {
                                            $("input").val(100);
                                            e.preventDefault();
                                        })
                                })
                                 //Изменяет значения

                                $(document).ready(function() {
                                    $("input").val(function(index, currentVal) {
                                        return (index + 1) * 100;
                                    });
                                })
                                //Изменяет значения
//////////////////
   .data( key, value ) //Связывает одну или несколько пар "ключ-значение" с элементами, содержащимися в объекте jQuery
   .data( key ) //Возвращает значение указанного ключа
   .data() //Возвращает пары "ключ-значение",
   .removeData(key) //Удаляет данные, связанные с этим ключом, из всех элементов, содержащихся в объекте jQuery
   .removeData() // Удаляет все элементы данных из всех элементов, содержащихся в объекте jQuery
    //////пример//////
                                $(function() {
                                    // установить данные
                                    $('img').each(function () {
                                        $(this).data("product", $(this).siblings("input[name]").attr("name"));
                                    });
                                    // найти элементы с данными и получить значения
                                    $('*').filter(function() {
                                        return $(this).data("product") != null;
                                    }).each(function() {
                                        console.log("Элемент: " + this.tagName + " , связанное значение: " + $(this).data("product"));
                                    });
                                    // удалить все данные
                                    $('img').removeData();
                                })
//////////////////










   //////////////////////////////////////ОБРАБОТКА  СОБЫТИЙ//////////////////////////////////////////////////////////////////
// современыый подход
    on() //Устанавливает обработчики событий на выбранные элементы страницы.
    //////пример//////
                                    $('#foo').on('click', function(){
                                        alert('Вы нажали на элемент "foo"');
                                    })

                                    $('ul').on('click', 'li', function(){
                                    })
                                    // на каждый элемент li будет повешен обработчик

//////////////////
    off() //Удаляет с выбранных элементов страницы обработчики событий, установленные с помощью метода .on()
//////пример//////
                                    function handler() {
                                        alert('Шла Саша по шоссе');
                                    };
                                    $('#foo').on('click', handler);  // установим обработчик нажатия кнопки мыши на элементе foo
                                    $('#foo').off('click', handler); // удалим обработчик
//////////////////


   bind( events, handler(eventObject)) // Прикрепляет обработчик к событию.
    //////пример//////
                                $( "#foo" ).bind( "click", function() {
                                    alert( "User clicked on 'foo.'" );
                                })

                                $(function() {

                                    $('img').bind("mouseenter", handleMouseEnter).bind("mouseout", handleMouseOut);

                                    function handleMouseEnter(e) {
                                        $(this).css({
                                            "border": "thick solid red",
                                            "opacity": "0.5"
                                        });
                                    };

                                    function handleMouseOut(e) {
                                        $(this).css({
                                            "border": "",
                                            "opacity": ""
                                        });
                                    }

                                })
                                //Обычное использование метода .bind()

                                $( "#foo" ).bind( "mouseenter mouseleave", function() {
                                    $( this ).toggleClass( "entered" );
                                })

                                $( "#foo" ).bind({
                                    click: function() {
                                        // При клилке
                                    },
                                    mouseenter: function() {
                                        // При наведении мыши
                                    }
                                })
                               // Множественные события

                                $( document ).ready(function() {
                                    $( "#foo" ).bind( "click", function( event ) {
                                        alert( "The mouse cursor is at (" +
                                            event.pageX + ", " + event.pageY +
                                            ")" );
                                    });
                                })
                               // Объект События

//////////////////

    ///////////////////////////////////////////Свойства и методы объекта Event в jQuery///////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// data                      //  Возвращает дополнительные данные, переданные методу bind() при регистрации обработчика
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           //Возвращает текущий элемент, событие которого обрабатывается. Этот элемент не обязательно является
// currentTarget             //  источником события, так как последнее могло быть передано ему дочерним элементом посредством механизма
//                           // "всплытия" событий вверх по DOM-дереву. Для определения источника события необходимо
//                           //  использовать свойство target
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  isDefaultPrevented()     //Возвращает true, если для данного объекта событий ранее вызывался метод preventDefault()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                 //Возвращает true, если для данного объекта событий ранее вызывался метод stopImmediatePropagation()
//isImmediatePropagationsStopped() //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  preventDefault()        //Отменяет выполнение действий по умолчанию, связанных с данным событием
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stopImmediatePropagation()//Отменяет выполнение любых других обработчиков, связанных с данным событием
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//isPropagationsStopped()   //Возвращает true, если для данного объекта событий ранее вызывался метод stopPropagation()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//stopPropagation()         // Предотвращает всплытие события вверх по иерархии DOM, но разрешает обработчикам, связанным
//                          //с текущим обрабатываемым элементом, получить данное событие
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//originalEvent             // Возвращает первоначальный DOM-объект Event
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//pageX, pageY              // Координаты указателя мыши относительно левого верхнего угла документа
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// relatedTarget            // Для событий мыши возвращает другой имеющий отношение к событию объект, если таковой имеется.
//                          // Какой именно будет этот объект, зависит от конкретного события
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//result                    // Результат, возвращенный обработчиком данного события при его последнем вызове
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// target                   // Возвращает элемент, являющийся источником события
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//timestamp                 //  Возвращает время наступления события
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//type                      // Возвращает тип события
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// which                    //Возвращает информацию о нажатой кнопке или клавише для событий, связанных с мышью или клавиатурой
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////пример//////
                                            $(function() {
                                                $('img').bind("mouseenter mouseout", handleMouse);
                                                function handleMouse(e) {
                                                    var cssData = {
                                                        "border": "thick solid red",
                                                        "opacity": "0.5"
                                                    }
                                                    if (event.type == "mouseout") {
                                                        cssData.border = "";
                                                        cssData.opacity = "";
                                                    }
                                                    $(this).css(cssData);
                                                }
                                            })

//////////////////

    //Отмена поведения браузера по умолчанию
//////пример//////
                                            $(function() {
                                                $('button:submit').bind("click", function(e) {
                                                    e.preventDefault();
                                                });
                                            })
                                          // Если элемент button находится внутри элемента form, то действием по умолчанию
                                          // для браузера является отправка формы. Чтобы предотвратить выполнение этого действия,
                                          // следует вызвать метод preventDefault() для объекта Event
                                          //вы приостанавливаете отправку браузером формы, поскольку хотите сделать это с помощью Ajax.
//////////////////

unbind() //Удаление обработчиков событий
    //////пример//////
                                            $(document).ready(function() {
                                                function handleMouse(e) {
                                                    var cssData = {
                                                        "border": "thick solid red",
                                                        "opacity": "0.5"
                                                    }
                                                    if (event.type == "mouseout") {
                                                        cssData.border = "";
                                                        cssData.opacity = "";
                                                    }
                                                    $(this).css(cssData);
                                                }
                                                $("img").bind("mouseenter mouseout", handleMouse);
                                                $("img[src*=rose]").unbind();
                                            })
//////////////////
 one() //Установка разового обработчика событий
    //////пример//////
                                        $(function() {
                                            $('img').one("mouseenter", handleMouseEnter).one("mouseout", handleMouseOut);
                                            function handleMouseEnter(e) {
                                                $(this).css("border", "thick solid red");
                                            };
                                            function handleMouseOut(e) {
                                                $(this).css("border", "");
                                            };
                                        })
//////////////////
trigger() //Выполнить события заданного типа и запустить обработчики, прикреплённые к элементам.
    //////пример//////
                                            $( "#foo" ).on( "click", function() {
                                                alert( $( this ).text() );
                                            });
                                            $( "#foo" ).trigger( "click" );

//////////////////
   //////Объект Event можно использовать для запуска обработчиков событий, прикрепленных к другим элементам.///////
    //////пример//////
                                            $(document).ready(function() {
                                                $("#row1 img").bind("mouseenter", function() {
                                                    $(this).css("border", "thick solid red");
                                                });
                                                $("#row2 img").bind("mouseenter", function(e) {
                                                    $(this).css("border", "thick solid blue");
                                                    $("#row1 img").trigger(e);
                                                });
                                            })
                                            //сначало навешали на row1 обработчик, потом навешади на row2, и внем актевировали обработчик на row1
//////////////////
 triggerHandler()  //можно использовать для запуска обработчиков событий, прикрепленных к другим элементам
                   // но лишь для первого из элементов, содержащихся в объекте jQuery.
//////пример//////
                                            $(document).ready(function() {
                                                $("#row1 img").bind("mouseenter", function() {
                                                    $(this).css("border", "thick solid red");
                                                });
                                                $("#row2 img").bind("mouseenter", function(e) {
                                                    $(this).css("border", "thick solid blue");
                                                    $("#row1 img").triggerHandler("mouseenter");
                                                });
                                            })
//////////////////

 ///////////////////////////////////////////////////////Использование прямых методов событий///////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                             События документа
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          //
// load()	//Соответствует событию load, которое срабатывает после окончания загрузки всех подчиненных элементов и ресурсов документа
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//ready()	Срабатывает после обработки всех элементов, содержащихся в документе, и завершения построения DOM-структуры
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//unload()	Соответствует событию unload, которое срабатывает, когда пользователь покидает страницу
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                               События браузера
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// error()	Соответствует событию error, которое срабатывает при возникновении проблем с загрузкой внешних ресурсов, например изображений
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// resize()	Соответствует событию resize, которое срабатывает при изменении размера окна браузера
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// scroll()	Соответствует событию scroll, которое срабатывает при использовании полос прокрутки
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                              События мыши
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//click()	Соответствует событию click, которое срабатывает, когда пользователь выполняет щелчок мышью
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// dbclick()	Соответствует событию dbclick, которое срабатывает, когда пользователь выполняет двойной щелчок мышью
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  focusin()	Соответствует событию focusin, которое срабатывает при использовании полос прокрутки
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// focusout()	Соответствует событию focusout, которое срабатывает, когда элемент теряет фокус
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// hover()   	Запускается, когда указатель мыши перемещается в область элемента или покидает ее
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  mousedown()	Соответствует событию mousedown, которое срабатывает при щелчке мышью над элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   mouseenter()	Соответствует событию mouseenter, которое срабатывает при наведении указателя мыши на область экрана, занимаемую элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseleave()	Соответствует событию mouseleave, которое срабатывает, когда указатель мыши покидает область экрана, занимаемую элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mousemove()	Соответствует событию mousemove, которое срабатывает, когда указатель мыши перемещается в пределах области экрана,
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseover()	Соответствует событию mouseover, которое срабатывает, когда указатель мыши находится в области экрана, занимаемой элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//mouseout()	Соответствует событию mouseout, которое срабатывает, когда указатель мыши покидает область экрана, занимаемую элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseup()	Соответствует событию mouseup, которое срабатывает при отпускании ранее нажатой кнопки мыши над элементом
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                 События формы
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//blur()	Соответствует событию blur, которое срабатывает, когда элемент теряет фокус
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//change()	Соответствует событию change, которое срабатывает при изменении значения элемента
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//focus()	Соответствует событию focus, которое срабатывает, когда элемент получает фокус
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// select()	Соответствует событию select, которое срабатывает при выборе пользователем значения элемен
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//submit()	Соответствует событию submit, которое срабатывает при отправке формы пользователем
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                          События клавиатуры
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  keydown()	Соответствует событию keydown, которое срабатывает, когда пользователь нажимает клавишу на клавиатуре
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//keypress()	Соответствует событию keypress, которое происходит, когда пользователь нажимает и отпускает клавишу на клавиатуре
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// keyup()	Соответствует событию keyup, которое срабатывает, когда пользователь отпускает клавишу на клавиатуре
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// работа с hover()//////////////
//////пример//////
    $(function() {
                                                    $('img').hover(handleMouseEnter, handleMouseLeave);
                                                    function handleMouseEnter(e) {
                                                        $(this).css("border", "thick solid red");
                                                    };
                                                    function handleMouseLeave(e) {
                                                        $(this).css("border", "");
                                                    }
                                                })
//////////////////










/////////////////////////////////////////////////БАЗОВЫЕ ЭФЕКТЫ//////////////////////////////////////////////////////////////////

    hide() //Немедленно скрывает все элементы, содержащиеся в объекте jQuery
    show() //Немедленно отображает все элементы, содержащиеся в объекте jQuery
    //////пример//////
                                                $(function() {
                                                $("<button>Скрыть</button><button>Показать</button>").appendTo("#buttonDiv")
                                                    .click(function(e) {
                                                        if ($(e.target).text() == "Скрыть") {
                                                            $('#row1 div.dcell').hide();
                                                        } else {
                                                            $('#row1 div.dcell').show();
                                                        }
                                                        e.preventDefault();
                                                    });
                                                  })
//////////////////
    toggle() //Переключение видимости элементов
//////пример//////
                                                $(function() {
                                                    $("<button>Переключить</button>").appendTo("#buttonDiv")
                                                        .click(function(e) {
                                                            $('div.dcell:first-child').toggle();
                                                            e.preventDefault();
                                                        });
                                                })
//////////////////

//Процесс отображения и сокрытия элементов можно анимировать, передавая методу show(), hide() или toggle() параметр,////////
// задающий длительность анимации.///////////////////////////////////////////////////////////////////////////////
//////пример//////
                                    $(function() {
                                        $("<button>Переключить</button>").appendTo("#buttonDiv")
                                            .click(function(e) {
                                                $('img').toggle('fast', 'linear');
                                                e.preventDefault();
                                            });

                                    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     /////////////////////////////////// мы можем прописать парамет/////////////////////////////////////////////////////
    ////////////////////////////////// миллисекунды	Длительность анимации в миллисекундах///////////////////////////////
    ////////////////////////////////// slow	Краткий эквивалент значения 600 мс//////////////////////////////////////////
    ///////////////////////////////// fast	Краткий эквивалент значения 200 мс//////////////////////////////////////////
    ///////////////////////////////// swing и linear. Стилю swing соответствует медленное начало анимации с последующим/
    ///////////////////////////////// ее ускорением и повторным замедлением в конце анимации. Стилю linear соответствует
    ///////////////////////////////// постоянная скорость анимации на протяжении всего процесса////////////////////////
    ///////////////////////////////// Если этот аргумент опущен, то по умолчанию используется значение swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////

// //////////////////Методам show(), hide() и toggle() можно передавать в качестве аргумента/////////////////////////////
// //////////////////функцию, которая будет вызвана по окончании анимации.//////////////////////////////////////////////
//////пример//////
                                        $(function() {
                                            var hiddenRow = "#row2";
                                            var visibleRow = "#row1";
                                            $(hiddenRow).hide();

                                            $("<button>Поменять</button>").insertAfter("#buttonDiv button")
                                                .click(function(e) {
                                                    hideVisibleElement();
                                                    e.preventDefault();
                                                });
                                            function hideVisibleElement() {
                                                $(visibleRow).hide("fast", showHiddenElement);
                                            }
                                            function showHiddenElement() {
                                                $(hiddenRow).show("fast", switchRowVariables);
                                            }
                                            function switchRowVariables() {
                                                var temp = hiddenRow;
                                                hiddenRow = visibleRow;
                                                visibleRow = temp;
                                            }
                                        })
                                        //сначало объявлем две переменные када записываем название идишников  рядов
                                        // потом обарачиваем переменную в джиквери и  скрываем 2 ряд,
                                        //создаем кнопку и вешаем на него обработчик клик, а так же убераем настройки по умолчанию
                                        // в обработчике запускакем функыцию в которой скрывем второй ряд
                                        // функция которая прописана как аргумент в hide запускается после анимации
                                        // в этой функции показывается второй ряд
                                        // потом мы меняем местами переменные чтобы снова можно было поторить

                                            $(function() {
                                                var hiddenRow = "#row2";
                                                var visibleRow = "#row1";
                                                $(hiddenRow).hide();
                                                $("<button>Поменять</button>").insertAfter("#buttonDiv button")
                                                    .click(function(e) {
                                                        $(visibleRow).hide("fast", function() {
                                                            $(hiddenRow).show("fast", function() {
                                                                var temp = hiddenRow;
                                                                hiddenRow = visibleRow;
                                                                visibleRow = temp;
                                                            });
                                                        });
                                                        e.preventDefault();
                                                    });
                                            })
                                           //тоже самое более компактно
//////////////////
    slideDown() // Отображает элементы путем их плавного раскрытия на странице в направлении вниз
    slideDown("fast")
    slideDown("fast",function(){})
    slideDown("fast","linear",function(){})

    slideUp()  //Скрывает элементы путем их плавного свертывания на странице в направлении вверх
    slideUp("fast")
    slideUp("fast",function(){})
    slideUp("fast","linear",function(){})

    slideToggle() //Изменяет состояние видимости элементов путем их плавного свертывания в направлении вверх и раскрытия в направлении вниз
    slideToggle("fast")
    slideToggle("fast",function(){})
    slideToggle("fast","linear",function(){})
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// мы можем прописать парамет/////////////////////////////////////////////////////
    ////////////////////////////////// миллисекунды	Длительность анимации в миллисекундах///////////////////////////////
    ////////////////////////////////// slow	Краткий эквивалент значения 600 мс//////////////////////////////////////////
    ///////////////////////////////// fast	Краткий эквивалент значения 200 мс//////////////////////////////////////////
    ///////////////////////////////// swing и linear. Стилю swing соответствует медленное начало анимации с последующим/
    ///////////////////////////////// ее ускорением и повторным замедлением в конце анимации. Стилю linear соответствует
    ///////////////////////////////// постоянная скорость анимации на протяжении всего процесса////////////////////////
    ///////////////////////////////// Если этот аргумент опущен, то по умолчанию используется значение swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////пример//////
                                        $(function() {
                                            $("<button>Свернуть развернуть</button>").insertAfter("#buttonDiv button")
                                                .click(function(e) {
                                                    $('h1').slideToggle("fast");
                                                    e.preventDefault();
                                                });
                                        })
//////////////////
    fadeOut() //Скрывают элементы путем уменьшения их непрозрачности
    fadeOut("fast")
    fadeOut("fast",function(){})
    fadeOut("fast","linear",function(){})

    fadeIn() //Отображают элементы путем увеличения их непрозрачности
    fadeIn("fast")
    fadeIn("fast",function(){})
    fadeIn("fast","linear",function(){})

    fadeTo("fast",0) //Изменяют непрозрачность до указанного уровня
    fadeTo("fast",0,"linear",function(){})

    fadeToggle() //Попеременно отображают и скрывают элементы с использованием непрозрачности
    fadeToggle("fast")
    fadeToggle("fast",function(){})
    fadeToggle("fast","linear",function(){})
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// мы можем прописать парамет/////////////////////////////////////////////////////
    ////////////////////////////////// миллисекунды	Длительность анимации в миллисекундах///////////////////////////////
    ////////////////////////////////// slow	Краткий эквивалент значения 600 мс//////////////////////////////////////////
    ///////////////////////////////// fast	Краткий эквивалент значения 200 мс//////////////////////////////////////////
    ///////////////////////////////// swing и linear. Стилю swing соответствует медленное начало анимации с последующим/
    ///////////////////////////////// ее ускорением и повторным замедлением в конце анимации. Стилю linear соответствует
    ///////////////////////////////// постоянная скорость анимации на протяжении всего процесса////////////////////////
    ///////////////////////////////// Если этот аргумент опущен, то по умолчанию используется значение swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////пример//////
                                                $(function() {
                                                    $("<button>Переключить</button>").insertAfter("#buttonDiv button")
                                                        .click(function(e) {
                                                            $('img').fadeToggle();
                                                            e.preventDefault();
                                                        });
                                                })
                                                //переключает прозрачность

                                            $(function() {
                                                $("<button>Растворить картинки</button>").insertAfter("#buttonDiv button")
                                                    .click(function(e) {
                                                        $('img').fadeTo("fast", 0);
                                                        e.preventDefault();
                                                    });
                                            })
                                            //растворить элемент

//////////////////

    animate() //Выполняют анимацию за счет плавного изменения значений CSS-свойств
//////пример//////
                                                $(function() {
                                                    $('form').css({"position": "fixed", "top": "70px", "z-index": "2"});
                                                    $('h1').css({"position": "fixed", "z-index": "1", "min-width": "0"});
                                                    $("<button>Анимировать</button>").insertAfter("#buttonDiv button")
                                                        .click(function(e) {
                                                            $('h1').animate({
                                                                height: $('h1').height() + $('form').height() + 10,
                                                                width: ($('form').width())
                                                            });
                                                            e.preventDefault();
                                                        });
                                                })

                                                    $(function() {
                                                        $('form').css({"position": "fixed", "top": "70px", "z-index": "2"});
                                                        $('h1').css({"position": "fixed", "z-index": "1", "min-width": "0"});
                                                        var timespan = "slow";
                                                        cycleEffects();
                                                        function cycleEffects() {
                                                            $('h1')
                                                                .animate({left: "+=100"}, timespan)
                                                                .animate({left: "-=100"}, timespan)
                                                                .animate({height: 223,width: 700}, timespan)
                                                                .animate({height: 30,width: 500}, timespan)
                                                                .slideUp(timespan)
                                                                .slideDown(timespan, cycleEffects);
                                                        }

                                                    })
                                                    // в cycleEffects перечислена анимация, котоорая работает по очереди
                                                    //внимание на эту строчку .slideDown(timespan, cycleEffects);
                                                    //там  функции обратного вызова используется функция cycleEffects(),
                                                    // которая повторно запускает анимационный процесс с самого начала.
//////////////////
    queue() //Отображение элементов из очереди эффектов
    //////пример//////
                                                var div = $("div");
                                                function runIt() {
                                                    div.show("slow");
                                                    div.animate({left:'+=200'},2000);
                                                    div.slideToggle(1000);
                                                    div.slideToggle("fast");
                                                    div.animate({left:'-=200'},1500);
                                                    div.hide("slow");
                                                    div.show(1200);
                                                    div.slideUp("normal", runIt);
                                                }
                                                function showIt() {
                                                    var n = div.queue("fx");
                                                    $("span").text( n.length );
                                                    setTimeout(showIt, 100);
                                                }
                                                runIt();
                                                showIt();
                                                //в первой функции анимация которая запускается порочереди
                                                // в торой функции считается эта анимация
//////////////////

    stop() // Останавливает все запущенные анимационные эффекты для всех указанных элементов.
//////пример//////
                                            // Start animation
                                            $("#go").click(function(){
                                                $(".block").animate({left: '+=100px'}, 2000);
                                            });

                                            // Stop animation
                                            $("#stop").click(function(){
                                                $(".block").stop();
                                            });

                                            // Start animation in the opposite direction
                                            $("#back").click(function(){
                                                $(".block").animate({left: '-=100px'}, 2000);
                                            })
//////////////////

    delay() //позволяет вставить паузу между двумя эффектами, находящимися в очереди
    //////пример//////
                                            $(function() {
                                                $('form').css({"position": "fixed", "top": "70px", "z-index": "2"});
                                                $('h1').css({"position": "fixed", "z-index": "1", "min-width": "0"});
                                                var timespan = "slow";
                                                cycleEffects();
                                                function cycleEffects() {
                                                    $('h1')
                                                        .animate({left: "+=100"}, timespan)
                                                        .animate({left: "-=100"}, timespan)
                                                        .delay(1000) //вот она задержка
                                                        .animate({height: 223,width: 700}, timespan)
                                                        .animate({height: 30,width: 500}, timespan)
                                                        .delay(1000) //вот она задержка
                                                        .slideUp(timespan)
                                                        .slideDown(timespan, cycleEffects);
                                                }
                                            })
//////////////////






///////////////////////////////////////////////Обработка форм///////////////////////////////////////////////////////////

.blur() //Устанавливает обработчик потери фокуса
.focus() //Устанавливает обработчик получения фокуса

//////пример//////

    function handleFormFocus(e) {
        var borderVal;
        if(e.type == "focus"){
            borderVal = "medium solid green"
        }  else {
            borderVal = ""
        }
        $(this).css("border", borderVal);
    }
    $("input").focus(handleFormFocus).blur(handleFormFocus);

    //или

    $('input').on('focus blur', function(e) {
        var borderVal;
        if(e.type == "focus"){
            borderVal = "medium solid green"
        }  else {
            borderVal = ""
        }
        $(this).css("border", borderVal);;
    })

//////////////////

 .change()	//Соответствует событию change, которое срабатывает при изменении значения элемента

//////пример//////
    $("input").change(function(e) {
        var total = 0;
        $("input").each(function(index, elem) {
            total += Number($(elem).val());
        });
        $("#total").text(total);
    })

//////////////////

/////////////////////////////////////Валидация форм или просто проверка форм /////////////////////////////////////////







}