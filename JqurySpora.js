window.onload = function(){
    ////////////////////////////////////////////////////////////////////////////////////������ jQuery/////////////////
    $(); // jQuery �����
    jQuery(); // �� �� �����
    $(function(){}) // ��� ���� �����
    var kkkkk = jQuery.noConflict(); //  ���������� ��������� ��� jQuery
    ///////������/////////
                        var kkkkk = jQuery.noConflict();
                        kkkkk(document).ready(function () {
                            kkkkk("img:odd").mouseenter(function (e) {
                                kkkkk(this).css("opacity", 0.5);
                            }).mouseout(function (e) {
                                kkkkk(this).css("opacity", 1.0);
                            });
                        });
    //////////////////////

    $(document).ready(function () {}) // .ready- �������� ���������� DOM ������

    $.holdReady() //� ����������, ����������� ��� ������������ (true/false)
    // ���������� ������ ������� ready.
    ///////������/////////
                                //������� ���������� ready, ���� ����� ������������ myplugin.js:
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







    ////////////////////////////////////////////////////////////////�������!!!!!!!!!!!!!!!!!!!///////////////////////////////
    /////////�������//////////////
    "*" //��� ��������
    ".className" //�������� � ������� className
    "#idName" //������� (����!) � ��������������� idName
    "tagName" //�������� � �������� ������ ����
     ///////////� ����� ��� ///////////////
                        var elem = document.getElementsByTagName('img')
                        $(elem).mouseenter(function(e) {
                            $(this).css("opacity", 0.5);
                        }).mouseout(function(e) {
                            $(this).css("opacity", 1.0);
                        })

    /////////////////////������� �������///////////////////////////
    ":focus" //�������, ����������� � ������
    ":first" //������ ��������� �������
    ":last" //��������� ��������� �������
    ":eq( )" //������� ������ ��� �������� ������� ����� ���������
    ":not(selector)" //��� ��������� ��������, ����� ��������� � selector
    ":even" //�������� � ������� �������� �������, � ������ ��������� ���������
    ":odd" //�������� � ��������� �������� �������, � ������ ��������� ���������
    ":gt( )" //�������� � �������� ����������� n
    ///////������ :gt( )///////
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
    ":lt( )" //�������� � �������� �������, ��� n
    ":header" //��������, ���������� ����������� (� ������ h1, h2 �.�.�.)
    ":animated" //��������, ������� � ������ ������ ������������� � ��������
    ":hidden" //��������� �������� ��������
    ":visible" //������� �������� ��������
    ":lang(language)" //��������, � ������� ������� ����� �����������
    ":root" //�������, ������� �������� �������� � ���������.

    //////////////���������, ����������� � ����� ���������,///////////////////////////////
     /////////////////��������������� ����� ����� ����������� /////////////////
     ////////////////////��� ��, ��� � �������� CSS//////////////////////////////

    "first, second, ..." //�������� ��������������� ������ �� ���������� first, second, ...
                    /////������////
                   // <div class="someClass"> 1 </div>
                   // <div> 2 </div>
                   // <span> 3 </span>
                   //<div class="someClass"> 4 </div>
                    $("span, .someClass").css("border","3px solid red"); // ������� 1 3 4 �������
    //////////////
    "outer inner" //�������� �� inner, ������� �������� ��������� (�.�. ����� ������) ��������� �� outer
                        /////������////
                        //<div class="box"> <p class="fish">1</p> </div>
                        //<div class="box"> <p class="bomb">2</p> </div>
                        //<div class="box"> <p class="panties">3</p> </div>
                        $('.box .bomb').parent()
                            .css('border', '3px solid red')
                            .html('�����, ���!');
    "parent > child" //�������� �� child, ������� �������� ������� ��������� ��������� �� parent
    "prev + next" //�������� �� next, ������� ������� ��������������� �� ���������� �� prev
    "prev ~ next" //�������� �� next, ������� ������� �� ���������� �� prev


    /////////////////////��������� �� ���������///////////////////////////////
    "[name]" //��������, ���������� ������� name
    "[name = value]" //��������, � ������� �������� �������� name ��������� � value
    "[name != value]" //��������, � ������� �������� �������� name �� ��������� � value
    "[name ^= value]" //��������, � ������� �������� �������� name ���������� � value
    "[name $= value]" //��������, � ������� �������� �������� name ������������� �� value
    "[name *= value]" //��������, � ������� �������� �������� name �������� ��������� value
    "[name ~= value]" //��������, � ������� �������� �������� name �������� ����� value
    "[name |= value]" //��������, � ������� �������� �������� name ����� ������� value
    // (����� value ��� ����� ���: "value-*")
    "[first][second][..." //��������, ��������������� ���� �������� �������� �� �������� ������������

    //////////////////////////////������ ��������� ��������������� ��������////////////////////////
    // //////////////////////////�� �� ������������ � ������������ ���������///////////////////////
    ":first-child" //��������, ������������� ������� � ����� ������������ ���������
    ":last-child" //��������, ������������� ���������� � ����� ������������ ���������
    ":nth-child( )"
    ":nth-child-last( )" //��������, ������������� ������������ �������
    // � ������������ ��������� (������, ��������, ������ ��� �������� �������)
    ":only-child" //��������, ���������� ������������� ��������� � ����� ������������ ���������
    ":only-of-type" //��������, ���������� �������������, ���������������� ���������,
                    // ��������� � ����� ������������ ���������
    ":first-of-type" //�� �� ��������� ���������, ������� ������� ����������� � ����� ������������ ���������
    ":last-of-type" //�� �� ��������� ���������, ������� ���������� ����������� � ����� ������������ ���������
    ":nth-first-of-type( )"
    ":nth-last-of-type( )" //�� �� ��������� ���������, ������� � ������������ �������
                            // ����������� � ����� ������������ ���������

    ///////////��������� ����������� �������� �������� � ������������ � �� �����/////////
    ":button" //�������� � ����� button ��� ����� button
    ":radio" //��������, ���������� ���������������
    ":checkbox" //��������, ���������� ��������
    ":text" //��������, ���������� ���������� ������
    ":password" //��������, ���������� ������ ����� ������
    ":file" //��������, ���������� ������ �������� ������
    ":submit" //��������, ���������� �������� �������� �����
    ":reset" //��������, ���������� �������� ������� �����
    ":image" //��������, ���������� ������������� ��� �������� ����� (input ���� image)
    ":input" //��������, ���������� ���������� ����� (� ������ input, textarea ��� button)
    ":selected" //��������� �������� (�� �������� selected). ��� ����� ���� �������� ���� <option>.
    ":focus" //�������� �����, ����������� � ������.
    ":checked" //��������� �������� (�� �������� checked). ��� ����� ���� �������� ���� <checkbox> ��� <radio>.
    ":enabled" //�������� �������� ����� (�� �������� enabled)
    ":disabled" //���������� �������� ����� (�� �������� disabled)

    //////////////////������� ������� ������ � ������� ���������/////////////////////
    // ���������� ��� �������� ������ drow, � ����� �����
        // ��� ����� �������� � ��������� �������� �������
                    $("img:odd", $(".drow")).mouseenter(function(e) {
                        $(this).css("opacity", 0.5);
                    }).mouseout(function(e) {
                        $(this).css("opacity", 1.0);
                    })
    ///////////////////////////////

    /////////////////////////������ � �������� ������ jQuery////////////////////////////////

        .context //���������� ������� (DOM ����), ���������� �������������� � �������� ��������� ��� ��������
                 //������� ������ jQuery.
        .each(�������) // ��������� ������� ��� ������� �������� ������.
         //////������//////
                            $("span").click(function () {
                                $("li").each(function(){
                                    $(this).toggleClass("example");
                                    //toggleClass ������������� �������. ��������� �������� ��������� �����, ���� ��� ���.
                                    // ����� �������.
                                });
                            })
        ////////////////////
       // each(function(index, elem) //  elem ������� ������� ������ ������� ���������������
        //////������//////
                                    $("input").change(function(e) {
                                        var total = 0;
                                        $("input").each(function(index, elem) {
                                            total += Number($(elem).val());
                                        });
                                        $("#total").text(total);
                                    })

    /////////////////////
        .get(������)    // �������� ������ HTMLElement � ����������� �������
      //////������//////
                                            $(document).ready(function() {
                                                var elem = $("img:odd").get(0);
                                                console.log("Element: " + elem.tagName + " " + elem.src);
                                            })
                                                //����������� �����
                                                // Element: IMG http://localhost:63342/Chapter%2005/daffodil.png
     /////////////////////
      .index(��������)   //���� ��������� ������� � ������ jQuery � ����������
                        // ��� ������ (���������� ����� � ������ ������� � 0) ��� -1, ���� �� �������.
         //////������//////
                                $(document).ready(function() {
                                    // find an index using a selector
                                    index = imgElems.index("body *");
                                    console.log("Index using selector is: " + index);
                                    // perform the same task using a jQuery object
                                    index = $("body *").index(imgElems);
                                    console.log("Index using jQuery object is: " + index);
                                })
                                    // � ����� ������� ��������� ����� 2
       /////////////////////
      .length // ���������� ����� ��������� � ������
      .selector // ���������� ��������
        //////������//////
                        $(document).ready(function () {
                            var selector = $('img:odd').selector
                            console.log(selector);
                        }) // ��������� img:odd

        ///////////////
        .size()  // ���������� ���������� ���������
        .toArray() //���������� ������ ���� DOM-���������, ���������� � ������� jQuery.
        inArray() // ���� �������� ������� � �������. ���������� ������ ����� �������� ��� -1
                  // � ������ ��� ����������
    //////������//////
    var arr = [1, "Bob", "Sid"];
    $.inArray(1, arr); // 0
    $.inArray("Sid", arr); // 2
    $.inArray("Bobby", arr); // -1
    ///////////////



     ////////////������ � �������� jQuery ��� � �������� ////////////////////////////////////
                            $(document).ready(function() {
                                var elems = $("img:odd");
                                for (var i = 0; i < elems.length; i++) {
                                    console.log("Element: " + elems[i].tagName + " " + elems[i].src);
                                }
                            })

    ////////////////// ��������� ��������� � �������� ������� ////////////////////////////////
    //��������� ���������
                        $(document).ready(function () {
                            $("label").css("color", "blue");  //��� � jQuery
                            var labelElems = document.getElementsByTagName("label"); //��� � js
                            for (var i = 0; i < labelElems.length; i++) {
                                labelElems[i].style.color = "blue";
                            }
                        });
    //��������� ��������� � �������� �������
                            $(document).ready(function () {
                            $("label").css("color", "blue").css("font-size", ".75em"); //��� � jQuery
                            var labelElems = document.getElementsByTagName("label"); //��� � js
                            for (var i = 0; i < labelElems.length; i++) {
                                labelElems[i].style.color = "blue";
                                labelElems[i].style.fontSize = ".75em";
                            }
                            })
    ////////////////////////////////////////////////////////������ � ������� �������� ���������/////////////////////////////////////


     .add() //��������� � ��� ������������ ����� �������������� ��������, ������� ������������� ���������� ���������.
    //////������//////
                     $(document).ready(function () {
                     $( "div" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );
                      })  //����� ���� ��������� div � ��������� �� ����� �������� �����. ����� ��� ��������� �����������
                         // � ��� ������������ ������ jQuery � �� ��������������� ��� ������� �����.
    ///////////////

    .eq() //��������� ����� jQuery �� 1 (������) ��������, �������� ��������� ������ (������ ���������� � 0).
    //////������//////
                   $( "body" ).find( "div" ).eq( 2 ).addClass( "blue" )   // ������ ������� ��������� � �����
    ////////////                                                        // (������ ��� ���������� � 0)

    .filter() //������� �� ������ jQuery ��������, ��������� ��� ���������� �������� �������� jQuery ��� �������.
    //////������//////
                    //<div class ="haser"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class="middle"></div>
                    //<div class ="haser"></div>

                    $( "div" ).css( "background", "#c8ebcc" ).filter( ".middle" ).css( "border-color", "red" )
                    // ���������� ��� ���� � �������� ����
    //////////////////

    .first() //��������� ����� jQuery �� ������ ������������� �������� (������� �������� ���������
             // ������, ���������������� ��������� ���������).
    //////������//////
                // <p>
                // <span>Look:</span>
                //<span>This is some text in a paragraph.</span>
                //<span>This is a note about it.</span>
                //</p>
                    $( "p span" ).first().addClass( "highlight" ) // ����� ���������� � ������� �������� �.�. Look:
    //////////////////

    .has() //������� ����� ����� jQuery �� ��������� ��������� ������,
           // ����� �������� ������� ������� ��������, ��������������� ��������� ���������.
    //////������//////
                    $("div").has("p")	//������ div-��������, ������ ������� ���� �������� p (���������).
                    $("div").has(".lBlock")	//������ div-��������, ������ ������� ���� �������� � ������� lBlock.
                    $(".lBlock").has("div")	//������ � ������� lBlock, ������ ������� ���� div-��������.
    //////////////////

     .is() //��������� ����������, ������� �� � ������ jQuery ���� �� ���� �������,
           // ��������������� ���������� ���������.
    //////������//////
                 $("div").is(".lBlock")	//��������, ������� �� �� �������� div-�������(�) � ������� lBlock.
                 $(".lBlock").is("#a") //��������, ������� �� ����� ��������� � ������� lBlock, �������� � ��������������� a.

                    $(document).ready(function() {
                        var isResult = $("img").is(function(index) {
                            return this.getAttribute("src") == "rose.png";
                        });
                        console.log("Result: " + isResult);  // ������ true
                    })

    //////////////////

     .not()//������� �� ������, �������� ��������������� ���������� ���������
    //////������//////
                $("div").not(".green, #blueone").css("border-color", "red") // ������� ������� ������� ���� ��������� ����� ���
                                                                            // � ���� ���� ����� .green � #blueone
    //////////////////

    .slice() //��������� ����� ��������� ���������, �������� ������ �� ��������, ��� ������� �����
             // � ������������ ������� (�������� �� 0 �� 5).
    //////������//////
                $(document).ready(function() {
                var jq = $("label");
                jq.slice(0, 2).css("border", "thick double black"); // ��������� �� 1(������ 0) � 2(������ 1), � ��� ������� � �������� 2
                                                                                // �.�. 3 ������� �� �������
                 jq.slice(4).css("border", "thick solid red");       // ������� �� 4 �� �������������
                 })
    //////////////////

    .map() //��������� �������� ������� ��� ������� �� ��������� ��������� � �����������.
    //////������//////
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

    .end() //�������� ������� � ���������� ���������� ����� jQuery
    //////������//////
                     $("div").find("span").css("background-color","yellow").end().find("p").css("background-color","green")
                    // ������� ������ ��� �������� <div>
                    // ����� ������ ��� <span> ������ ���� <div>
                    // � ��������� ��� ��� ������ ���� ����. ������
                    // ������ ���������� ������ jQuery (��� �������� <div>),
                    // ������ ��� <p> ������ ���� <div>
                    // � ��������� ��� ��� ������� ���� ����.
    //////////////////

   .andSelf() //���������� ������� ����� jQuery � ���������� � �������� ������� ������.
    //////������//////
                     $("div").find("span").css("background-color","yellow").andSelf().css("border","1px solid red")
                    // ������� ������ ��� �������� <div>
                    // ����� ������ ��� <span> ������ ���� <div>
                    // � ��������� ��� ��� ������ ���� ����.
                    // ������ ��������� ������� ������ jQuery � ���������� �
                    // ��������� ������� ������� ������ ���� ��������� <div>
                    // � ��������� <span> ������ ���.
   //////////////////















   /////////////////////////////////////////////��������� �� ������ ���////////////////////////////////////////////////////////
   //////////////////////������������ ���� �� ������/////////////////////////
   .children()	//�������� �������� �������� ���� ���������, ������������ � ������� jQuery
    //////������//////
                    $(document).ready(function() {
                        var childCount = $('div.drow').children().each(function(index, elem) {
                            console.log("�������� �������: " + elem.tagName + " " + elem.className);
                        }).length;
                        console.log("����� ������� " + childCount + " �������� ���������");
                    })
                        //������� ����������� ����������, � ��� ������ ��� ���� � ������� drow
                        // ����� ������� ��� �� �������� ���������
                        // �� ������ ������ ���������� �������
                        // ��� � ������� ��������� ��� �������� � �����
                        // ����� ��������� ����� ���� ��������� ���������
                        //��� ����� � ������������ � ����������
                       // � ��������� ������� ��������� ��� �����
    //////////////////

   .find() //�������� ������� ���������, ������������ � ������� jQuery
    //////������//////
                        $(document).ready(function() {
                            var descCount = $('div.drow').find('img').each(function(index, elem) {
                                console.log("�������: " + elem.tagName + " " + elem.src);
                            }).length;
                            console.log("����� ������� " + descCount + " ���������-�������� img");
                        })
                        //������� ����������� ����������, � ��� ������ ��� ���� � ������� drow
                        //����� � ��� ������ ��� img
                        // �� ������ ������ ���������� �������
                        // ����� ��������� ����� ���� ��������� ���������
                        //��� ����� � ������������ � ����������
                        // � ��������� ������� ��������� ��� �����
   //////////////////

   ////////////////////����������� ����� �� ������ DOM//////////////////////////////
   .parent() //��������� ������� ������������ ������� ��� ������� �� ���������
     //////������//////
                            $(function() {
                                $('div.dcell').parent().each(function(index, elem) {
                                    console.log("�������: " + elem.tagName + " " + elem.id);
                                });
                                // �� ������� ������������ ������� ����������� �������
                                $('div.dcell').parent('#row1').each(function(index, elem) {
                                    console.log("��������������� �������: " + elem.tagName + " " + elem.id);
                                });
                                // ������ �� �������� row1 ����������� �������
                            })
     //////////////////

    .parent()  //������������ ����������� ������ ����, � �� ������ ���������������� ������� (���������) ���������
    /////������//////
                        $(function() {
                            $('img[src*=peony], img[src*=rose]').parents().each(function(index, elem) {
                                console.log("�������: " + elem.tagName + " " + elem.className + " "
                                    + elem.id);
                            });
                        })
                            // ��� ��������� ����� ����� ����������� �������
   //////////////////

    .parentsUntil() //������� ��������-������ �� ��� ���, ���� �� ���������� �������, ��������������� ���������.
    //////������//////
                                    $(function() {
                                      $('img[src*=peony], img[src*=rose]').parentsUntil('form').each(function(index, elem) {
                                      console.log("�������: " + elem.tagName + " " + elem.className + " " + elem.id);
                                  });
                               })
                                 // ����� ����������� ������� ��� ��������� �� form
   //////////////////

    .closest() //��������� �������� ������� �� �������, ��������������� ���������
    //////������//////
                                    //<div id="row1" class="drow">
                                $(function() {
                                    $('img').closest('.drow').each(function(index, elem) {
                                        console.log("�������: " + elem.tagName + " " + elem.className + " " + elem.id);
                                    });
                                })
                                //��������� ����� ��� ��������

   //////////////////

    .offsetParent() //������������ ����� �������� �� ���� ������ closest() � ������������ ��� ���������� ������� �������,
                    // �������� CSS-�������� position �������� ����� relative, absolute ��� fixed.
    //////������//////
                                   //#row1 {position: fixed; top: 75px; left: 50px}
                                    $(function() {
                                        $('img[src*=astor]').offsetParent().css("background-color", "lightgrey");
                                    })
    //////////////////

    /////////////����������� �� ������ DOM � �������� ������ �������������� ������///////////////////////////

    .next()	//�������� ����������� ��������, ��������������� ��������� �� ������ �� ���������,
    .prev()	//�������� ����������� ��������, ��������������� �������������� ������� �� ���������,
    .siblings() //������������ ����������� ������ ���� ����������� ��������� ��� ���� ���������
    //////������//////
                                    $(function() {
                                        $('img[src*=astor], img[src*=primula]')
                                            .parent().siblings().css("border", "thick solid blue");
                                    })
    //////////////////

    .nextAll()  .prevAll() // ����� ����������� � �������������� ����������� ���������
    //////������//////
                                    $(function() {
                                        $('img[src*=astor]').parent().nextAll().css("border", "thick solid blue");
                                        $('img[src*=primula]').parent().prevAll().css("border", "thick double red");

                                    })
    //////////////////

    .nextUntil().prevUntil()//�������� ��� ������� �������� ����������� ����������� �������� ������ �� �������� (�� �� ������� ���)














    /////////////////////////////////////////��� �����������//////////////////////////////////////////////////////////////////

    /////////////�������� ��������� � �������������� ������� $()///////////////////////
    //////������//////
                                                        $(function() {
                                var newElems = $('<div class="dcell"><img src="http://professorweb.ru/downloads/jquery/lily.png"/></div>');
                                newElems.each(function (index, elem) {
                                    console.log("����� �������: " + elem.tagName + " " + elem.className);
                                });

                                newElems.children().each(function(index, elem) {
                                    console.log("�������� �������: " + elem.tagName + " " + elem.src);
                                });
                            })
//////////////////

    clone() //��������� ��������� ����� �������� �� ������ ������������.
//////������//////
                                $(function() {
                                    var newElems = $('div.dcell').clone();
                                    newElems.each(function (index, elem) {
                                        console.log("����� �������: " + elem.tagName + " " + elem.className);
                                    });
                                    newElems.children('img').each(function(index, elem) {
                                        console.log("�������� �������: " + elem.tagName + " " + elem.src);
                                    });
                                })
//////////////////

    append() //��������� ��������� �������� � �������� ��������� �������� ��������� �� ��� ��������� ��������
    //////������//////
                            $(function() {
                                var newElems = $("<div class='dcell'></div>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>�����:</label>")
                                    .append("<input name='lily' value='0' required />");
                                newElems.css("border", "thick solid red");
                                $('#row1').append(newElems);
                            })
//////////////////

    prepend() //��������� ��������� �������� � �������� ������ �������� ��������� �� ��� ��������� ��������
//////������//////
                            $(function() {
                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>�������:</label>")
                                    .append("<input name='orchid' value='0' required />");
                                $('#row1').prepend(orchidElems);
                            })
//////////////////
    .appendTo() .prependTo() //��� �������� �������: ��������, ������������ � ������� jQuery,
                             // ����������� � �������� �������� ��������� ������ ���������, �������� ����������.
    //////������//////
                            $(function() {
                                var newElems = $("<div class='dcell'/>");
                                $('img').appendTo(newElems);
                                $('#row1').append(newElems);
                            });

//////////////////

    //������� ��������� � �������������� �������
    //////������//////
                            $(function() {

                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>�������:</label>")
                                    .append("<input name='orchid' value='0' required />");

                                var lilyElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>�����:</label>")
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

    wrap() //���������� ��������� �������� ������ ������� �� ���������, ������������ � ������� jQuery
    //////������//////
                            $(function() {
                                var newElem = $("<div/>").css("border", "thick solid red");
                                $('div.drow').wrap(newElem);
                            })
//////////////////

    wrapAll() //���������� ��������� �������� ������ ������ ���������, ������������ � ������� jQuery
               // (��������������� ��� ������ ������)
    //////������//////
                                    $(function() {
                                        var newElem = $("<div/>").css("border", "thick solid red");
                                        $('img').wrapAll(newElem);
                                    });
//////////////////

    wrapInner() //��������� �������� ���������� ���������� ������ ��������� (� �� ���� ��������)
    //////������//////
                                $(function() {
                                    var newElem = $("").css("border", "thick solid red");
                                    $('.dcell').wrapInner(newElem);
                                })
                                // ������ ������� � .dcell ��������� newElem
//////////////////

    .before().after() // ��������� ����������� �������� �� ��� ����� ���������� ��������
//////������//////
                            $(function() {
                                var orchidElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                    .append("<label for='orchid'>�������:</label>")
                                    .append("<input name='orchid' value='0' required />");

                                var lilyElems = $("<div class='dcell'/>")
                                    .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                    .append("<label for='lily'>�����:</label>")
                                    .append("<input name='lily' value='0' required />");
                                $(orchidElems).add(lilyElems).css("border", "thick solid red");
                                $('#row1 div.dcell').after(orchidElems);
                                $('#row2 div.dcell').before(lilyElems);

                            })
//////////////////

   .insertAfter().insertBefore() //��������� ����������� ��������, �� � ����� �� .before().after(),
                                 //������ jQuery � �������� ������ �������� ������.
    //////������//////
                                $(function() {
                                    var orchidElems = $("<div class='dcell'/>")
                                        .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                        .append("<label for='orchid'>�������:</label>")
                                        .append("<input name='orchid' value='0' required />");

                                    var lilyElems = $("<div class='dcell'/>")
                                        .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
                                        .append("<label for='lily'>�����:</label>")
                                        .append("<input name='lily' value='0' required />");
                                    $(orchidElems).add(lilyElems).css("border", "thick solid red");
                                    orchidElems.insertAfter('#row1 div.dcell');
                                    lilyElems.insertBefore('#row2 div.dcell');

                                })
//////////////////

    replaceWith()  //�������� �������, ������������ � ������� jQuery, ��������� ����������
    replaceAll()   //�������� ��������, �������� ����������, ����������, ������������� � ������� jQuery
                   // � �������� �������
//////������//////
                                        $(function() {
                                            var newElems= $("<div class='dcell'/>")
                                                .append("<img src='http://professorweb.ru/downloads/jquery/orchid.png'/>")
                                                .append("<label for='orchid'>�������:</label>")
                                                .append("<input name='orchid' value='0' required />")
                                                .css("border", "thick solid red");
                                            $('#row1').children().first().replaceWith(newElems);
                                            $("<img src='http://professorweb.ru/downloads/jquery/carnation.png'/>").replaceAll('#row2 img')
                                        })
//////////////////

    remove() //������� �������� �� DOM. �� ���� �������� ��������� ��������� � ���� ������ ������������
//////������//////
                                        $(function() {
                                            $('img[src*=daffodil], img[src*=snow]').parent().remove();
                                        })
                                        //������� ������������ �������� � img[src*=daffodil] � img[src*=snow] � ��� ��� ������
                                        // � ��� ����� � img[src*=daffodil] � img[src*=snow]

                                        $(function() {
                                            $('div.dcell').remove(':has(img[src*=snow], img[src*=daffodil])');
                                        })
                                            //������� �������� ����������� (img[src*=snow], img[src*=daffodil]
//////////////////

    empty() //������� ��� ��������-������� � ����� �� ���������, ������������ � ������� jQuery
    //////������//////
                                        $(function() {
                                            $('#row1').children().eq(1).empty().css("border", "thick solid red");
                                        })
//////////////////

    unwrap() //������� ������������ �������� ��� ���������, ������������ � ������� jQuery.
    //////������//////
                                        $(function() {
                                            $('#row1 div').unwrap().css('display','block');
                                        })
//////////////////















//////////////////////////////////////����������� ����������////////////////////////////////////////////////////////////

    attr() //���������� �������� ��������  � ��������� ������ ��� ������� �� ��������� ��� ������������� �������� ���������
    //////������//////
                                        $(function() {
                                            var srcValue = $('img').attr('src');
                                            console.log("Attribute value: " + srcValue);;
                                        })
                                        //��������� ����� Attribute value: aster.png ��� ��������� ��������

                                        $(function() {
                                            var srcValue = $('img').each(function(index, element) {
                                                console.log('�������� �������� src: ' + $(this).attr('src'));
                                            });
                                        })
                                        // ������� ��������� �� ���� img

                                        $(function() {
                                            $('img').attr("src", "http://professorweb.ru/downloads/jquery/lily.png");
                                        })
                                          // ��������� �������� �������� ��� ���� ���������

                                        $(function() {
                                            var attrValues = {
                                                src: 'http://professorweb.ru/downloads/jquery/lily.png',
                                                style: 'border: thick solid red'
                                            };
                                            $('img').attr(attrValues);
                                        })
                                            // ��������� ��������� �������� ��� ����� ���������
//////////////////

    removeAttr() //�������� ���������
    //////������//////
                                        $(function() {
                                            $('img').attr("style", "border: thick solid red");
                                            $('img:odd').removeAttr("style");
                                        })
//////////////////

    prop() //���������� / �������� �������� ������� ��������� ���������.
//////������//////
                                        $(document).ready(function(){
                                            $("button").click(function(){
                                                var $x = $("div");
                                                $x.prop("color", "FF0000");
                                            });
                                        })
//////////////////

   addClass() //�������� ������ � ��������,
   removeClass() //������� ������
   hasClass() //��������� �������������� �������� ������������� ������

//////������//////
                                    $(function() {
                                        $('img').addClass("redBorder");
                                        $('img:even').removeClass("redBorder").addClass("blueBorder");
                                        console.log("��� ��������: " + $('img').hasClass('redBorder'));
                                        $('img').each(function(index, elem) {
                                            console.log("�������: " + $(elem).hasClass('redBorder') + " " + elem.src);
                                        });
                                    })
//////////////////

    //���������� � �������� ������� � ������� �������
    //////������//////
                                    $(document).ready(function() {
                                        $("img").addClass(function(index, currentClasses) {
                                            if (index % 2 == 0) {
                                                return "blueBorder";
                                            } else {
                                                return "redBorder";
                                            }
                                        });
                                    })
                               // ������� index ����� ��� �� �������� ������� � ������� ������ ��������
//////////////////

    toggleClass()  //��������� ���������� ������, ���� ������� �� ����� ������� ������,
                   // ��� �������� ������, ���� ������� ����� ������ �����.
    //////������//////
                                    $(function() {
                                        $('img').filter(':odd').addClass("redBorder").end()
                                            .filter(':even').addClass("blueBorder");
                                        $("<button>�����������</button>").appendTo("#buttonDiv").click(doToggle);
                                        function doToggle(e) {
                                            $('img').toggleClass("redBorder");
                                            e.preventDefault();
                                        };
                                    })

                                    $(function() {
                                        $('img').filter(':odd').addClass("redBorder").end()
                                            .filter(':even').addClass("blueBorder");
                                        $("<button>�����������</button>").appendTo("#buttonDiv").click(doToggle);
                                        function doToggle(e) {
                                            $('img').toggleClass("redBorder blueBorder");
                                            e.preventDefault();
                                        };
                                    })
                                    //������������ ������������ ���������� �������

                                    $(function() {
                                        $('img').addClass("redBorder");
                                        $('img:even').addClass("blueBorder");
                                        $("<button>�����������</button>").appendTo("#buttonDiv").click(doToggle);
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
                                    //������������ ������������ �������
//////////////////

    css()  // ���������� ��� ������������� �������� ���������� �������� ��� ���� ���������
//////������//////
                                    $(function() {
                                        var sizeVal = $('label').css("font-size");
                                        console.log("������ ������: " + sizeVal);
                                        $('label').css("font-size", "1.5em");
                                    })
                                    // ����������  �������� ���������� ��������
                                    $(function() {
                                        $('label').css("font-size", "1.5em").css("color", "blue");
                                    })
                                  //������������� �������� ���������� ��������

                                    $(function() {
                                        var cssVals = {
                                            "font-size": "1.5em",
                                            "color": "blue"
                                        };
                                        $('label').css(cssVals);

                                    })
                                    //������������� �������� ���������� ��������

                                    $(function() {
                                        $('label:odd').css("font-size", "+=5")
                                        $('label:even').css("font-size", "-=5")
                                    })
                                    //�������� �������� ���������� ��������

//////////////////
    height() //���������� ������ (� ��������) ������� �� ���������, ������������ � ������� jQuery
    height(x)	// ������������� ������ ��� ���� ���������, ������������ � ������� jQuery
    innerHeight()	//���������� ���������� ������ (�.�. ������ ��������, ������� ���������� �������,
                   // �� �������� ������� � ����) ������� �� ���������, ������������ � ������� jQuery
    innerWidth()	//���������� ���������� ������ (�.�. ������ ��������, ������� ���������� �������,
                   // �� �������� ������� � ����) ������� �� ���������, ������������ � ������� jQuery
    offset() //���������� ���������� ������� �� ���������, ������������ � ������� jQuery,
             // ������������ ������ ���������
    outerHeight(x)	//���������� ������ ������� �� ���������, ������������ � ������� jQuery,
                  // ������� ���������� ������� � �������. �������� ����������,
                  // ������ �� ��� ���� ����������� ������ �����
    outerWidth(x)	//�������� ������ ������� �� ���������, ������������ � ������� jQuery,
                    // ������� ���������� ������� � �������. �������� ����������,
                    // ������ �� ��� ���� ����������� ������ �����
    position()	//���������� ���������� ������� �� ���������, ������������ � ������� jQuery,
                // ������������ ��� ������������� ��������, � �������� ����� ��� ����������������
    //////������//////
                            $(function() {
                                var pos = $('img').position();
                                console.log("������� �������� ������: " + pos.top + " �����: " + pos.left);
                            })
//////////////////
    scrollLeft(), scrollTop()	//�������� �������� ������� ��������� ����� ��� ������
                                // ��� ������� �� ���������, ������������ � ������� jQuery
    scrollLeft(x), scrollTop(x)	//������������� �������� ������� ��������� ����� ��� ������
                                  // ��� ���� ���������, ������������ � ������� jQuery
    width()//	�������� ������ ������� �� ���������, ������������ � ������� jQuery
    width(x)//	������������� ������ ��� ���� ���������, ������������ � ������� jQuery

    html() //���������� ��� ������������� HTML-���������� ������� �� ���������, ������������ � ������� jQuery
    //////������//////
                            $(function() {
                                var html = $('div.dcell').html();
                                console.log(html);
                            })
                                // ���������� HTML-����������

                            $(function() {
                                $('#row2 div.dcell').html($('div.dcell').html());
                            })
                            //������������� HTML-����������
//////////////////

    text() // �������� ��� ������������� ������������ ��������� ���������� ���� ���������, ������������ � ������� jQuery, � �� ��������
    //////������//////
                            $(function() {
                                $('label').css("border", "thick solid red").text(function(index, currentValue) {
                                    return "������ " + index;
                                });
                            });
                                //�������������
//////////////////

    val()//���������� �������� ������� �� ���������, ������������ � ������� jQuery
         //��� �������� �������� ���� ���������, ������������ � ������� jQuery
//////������//////
                                $(function() {
                                    $('input').each(function(index, elem) {
                                        console.log("���: " + elem.name + " ��������: " + $(elem).val());
                                    });
                                })
                                //���������� ��������
                                $(document).ready(function () {
                                    $("<button>Set Values</button>").appendTo("#buttonDiv")
                                        .click(function (e) {
                                            $("input").val(100);
                                            e.preventDefault();
                                        })
                                })
                                 //�������� ��������

                                $(document).ready(function() {
                                    $("input").val(function(index, currentVal) {
                                        return (index + 1) * 100;
                                    });
                                })
                                //�������� ��������
//////////////////
   .data( key, value ) //��������� ���� ��� ��������� ��� "����-��������" � ����������, ������������� � ������� jQuery
   .data( key ) //���������� �������� ���������� �����
   .data() //���������� ���� "����-��������",
   .removeData(key) //������� ������, ��������� � ���� ������, �� ���� ���������, ������������ � ������� jQuery
   .removeData() // ������� ��� �������� ������ �� ���� ���������, ������������ � ������� jQuery
    //////������//////
                                $(function() {
                                    // ���������� ������
                                    $('img').each(function () {
                                        $(this).data("product", $(this).siblings("input[name]").attr("name"));
                                    });
                                    // ����� �������� � ������� � �������� ��������
                                    $('*').filter(function() {
                                        return $(this).data("product") != null;
                                    }).each(function() {
                                        console.log("�������: " + this.tagName + " , ��������� ��������: " + $(this).data("product"));
                                    });
                                    // ������� ��� ������
                                    $('img').removeData();
                                })
//////////////////










   //////////////////////////////////////���������  �������//////////////////////////////////////////////////////////////////
// ����������� ������
    on() //������������� ����������� ������� �� ��������� �������� ��������.
    //////������//////
                                    $('#foo').on('click', function(){
                                        alert('�� ������ �� ������� "foo"');
                                    })

                                    $('ul').on('click', 'li', function(){
                                    })
                                    // �� ������ ������� li ����� ������� ����������

//////////////////
    off() //������� � ��������� ��������� �������� ����������� �������, ������������� � ������� ������ .on()
//////������//////
                                    function handler() {
                                        alert('��� ���� �� �����');
                                    };
                                    $('#foo').on('click', handler);  // ��������� ���������� ������� ������ ���� �� �������� foo
                                    $('#foo').off('click', handler); // ������ ����������
//////////////////


   bind( events, handler(eventObject)) // ����������� ���������� � �������.
    //////������//////
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
                                //������� ������������� ������ .bind()

                                $( "#foo" ).bind( "mouseenter mouseleave", function() {
                                    $( this ).toggleClass( "entered" );
                                })

                                $( "#foo" ).bind({
                                    click: function() {
                                        // ��� ������
                                    },
                                    mouseenter: function() {
                                        // ��� ��������� ����
                                    }
                                })
                               // ������������� �������

                                $( document ).ready(function() {
                                    $( "#foo" ).bind( "click", function( event ) {
                                        alert( "The mouse cursor is at (" +
                                            event.pageX + ", " + event.pageY +
                                            ")" );
                                    });
                                })
                               // ������ �������

//////////////////

    ///////////////////////////////////////////�������� � ������ ������� Event � jQuery///////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// data                      //  ���������� �������������� ������, ���������� ������ bind() ��� ����������� �����������
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           //���������� ������� �������, ������� �������� ��������������. ���� ������� �� ����������� ��������
// currentTarget             //  ���������� �������, ��� ��� ��������� ����� ���� �������� ��� �������� ��������� ����������� ���������
//                           // "��������" ������� ����� �� DOM-������. ��� ����������� ��������� ������� ����������
//                           //  ������������ �������� target
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  isDefaultPrevented()     //���������� true, ���� ��� ������� ������� ������� ����� ��������� ����� preventDefault()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                 //���������� true, ���� ��� ������� ������� ������� ����� ��������� ����� stopImmediatePropagation()
//isImmediatePropagationsStopped() //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  preventDefault()        //�������� ���������� �������� �� ���������, ��������� � ������ ��������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stopImmediatePropagation()//�������� ���������� ����� ������ ������������, ��������� � ������ ��������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//isPropagationsStopped()   //���������� true, ���� ��� ������� ������� ������� ����� ��������� ����� stopPropagation()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//stopPropagation()         // ������������� �������� ������� ����� �� �������� DOM, �� ��������� ������������, ���������
//                          //� ������� �������������� ���������, �������� ������ �������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//originalEvent             // ���������� �������������� DOM-������ Event
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//pageX, pageY              // ���������� ��������� ���� ������������ ������ �������� ���� ���������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// relatedTarget            // ��� ������� ���� ���������� ������ ������� ��������� � ������� ������, ���� ������� �������.
//                          // ����� ������ ����� ���� ������, ������� �� ����������� �������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//result                    // ���������, ������������ ������������ ������� ������� ��� ��� ��������� ������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// target                   // ���������� �������, ���������� ���������� �������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//timestamp                 //  ���������� ����� ����������� �������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//type                      // ���������� ��� �������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// which                    //���������� ���������� � ������� ������ ��� ������� ��� �������, ��������� � ����� ��� �����������
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////������//////
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

    //������ ��������� �������� �� ���������
//////������//////
                                            $(function() {
                                                $('button:submit').bind("click", function(e) {
                                                    e.preventDefault();
                                                });
                                            })
                                          // ���� ������� button ��������� ������ �������� form, �� ��������� �� ���������
                                          // ��� �������� �������� �������� �����. ����� ������������� ���������� ����� ��������,
                                          // ������� ������� ����� preventDefault() ��� ������� Event
                                          //�� ����������������� �������� ��������� �����, ��������� ������ ������� ��� � ������� Ajax.
//////////////////

unbind() //�������� ������������ �������
    //////������//////
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
 one() //��������� �������� ����������� �������
    //////������//////
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
trigger() //��������� ������� ��������� ���� � ��������� �����������, ������������ � ���������.
    //////������//////
                                            $( "#foo" ).on( "click", function() {
                                                alert( $( this ).text() );
                                            });
                                            $( "#foo" ).trigger( "click" );

//////////////////
   //////������ Event ����� ������������ ��� ������� ������������ �������, ������������� � ������ ���������.///////
    //////������//////
                                            $(document).ready(function() {
                                                $("#row1 img").bind("mouseenter", function() {
                                                    $(this).css("border", "thick solid red");
                                                });
                                                $("#row2 img").bind("mouseenter", function(e) {
                                                    $(this).css("border", "thick solid blue");
                                                    $("#row1 img").trigger(e);
                                                });
                                            })
                                            //������� �������� �� row1 ����������, ����� �������� �� row2, � ���� ������������ ���������� �� row1
//////////////////
 triggerHandler()  //����� ������������ ��� ������� ������������ �������, ������������� � ������ ���������
                   // �� ���� ��� ������� �� ���������, ������������ � ������� jQuery.
//////������//////
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

 ///////////////////////////////////////////////////////������������� ������ ������� �������///////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                             ������� ���������
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          //
// load()	//������������� ������� load, ������� ����������� ����� ��������� �������� ���� ����������� ��������� � �������� ���������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//ready()	����������� ����� ��������� ���� ���������, ������������ � ���������, � ���������� ���������� DOM-���������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//unload()	������������� ������� unload, ������� �����������, ����� ������������ �������� ��������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                               ������� ��������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// error()	������������� ������� error, ������� ����������� ��� ������������� ������� � ��������� ������� ��������, �������� �����������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// resize()	������������� ������� resize, ������� ����������� ��� ��������� ������� ���� ��������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// scroll()	������������� ������� scroll, ������� ����������� ��� ������������� ����� ���������
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                              ������� ����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//click()	������������� ������� click, ������� �����������, ����� ������������ ��������� ������ �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// dbclick()	������������� ������� dbclick, ������� �����������, ����� ������������ ��������� ������� ������ �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  focusin()	������������� ������� focusin, ������� ����������� ��� ������������� ����� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// focusout()	������������� ������� focusout, ������� �����������, ����� ������� ������ �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// hover()   	�����������, ����� ��������� ���� ������������ � ������� �������� ��� �������� ��
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  mousedown()	������������� ������� mousedown, ������� ����������� ��� ������ ����� ��� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   mouseenter()	������������� ������� mouseenter, ������� ����������� ��� ��������� ��������� ���� �� ������� ������, ���������� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseleave()	������������� ������� mouseleave, ������� �����������, ����� ��������� ���� �������� ������� ������, ���������� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mousemove()	������������� ������� mousemove, ������� �����������, ����� ��������� ���� ������������ � �������� ������� ������,
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseover()	������������� ������� mouseover, ������� �����������, ����� ��������� ���� ��������� � ������� ������, ���������� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//mouseout()	������������� ������� mouseout, ������� �����������, ����� ��������� ���� �������� ������� ������, ���������� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// mouseup()	������������� ������� mouseup, ������� ����������� ��� ���������� ����� ������� ������ ���� ��� ���������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                 ������� �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//blur()	������������� ������� blur, ������� �����������, ����� ������� ������ �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//change()	������������� ������� change, ������� ����������� ��� ��������� �������� ��������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//focus()	������������� ������� focus, ������� �����������, ����� ������� �������� �����
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// select()	������������� ������� select, ������� ����������� ��� ������ ������������� �������� ������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//submit()	������������� ������� submit, ������� ����������� ��� �������� ����� �������������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                          ������� ����������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  keydown()	������������� ������� keydown, ������� �����������, ����� ������������ �������� ������� �� ����������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//keypress()	������������� ������� keypress, ������� ����������, ����� ������������ �������� � ��������� ������� �� ����������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// keyup()	������������� ������� keyup, ������� �����������, ����� ������������ ��������� ������� �� ����������
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// ������ � hover()//////////////
//////������//////
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










/////////////////////////////////////////////////������� ������//////////////////////////////////////////////////////////////////

    hide() //���������� �������� ��� ��������, ������������ � ������� jQuery
    show() //���������� ���������� ��� ��������, ������������ � ������� jQuery
    //////������//////
                                                $(function() {
                                                $("<button>������</button><button>��������</button>").appendTo("#buttonDiv")
                                                    .click(function(e) {
                                                        if ($(e.target).text() == "������") {
                                                            $('#row1 div.dcell').hide();
                                                        } else {
                                                            $('#row1 div.dcell').show();
                                                        }
                                                        e.preventDefault();
                                                    });
                                                  })
//////////////////
    toggle() //������������ ��������� ���������
//////������//////
                                                $(function() {
                                                    $("<button>�����������</button>").appendTo("#buttonDiv")
                                                        .click(function(e) {
                                                            $('div.dcell:first-child').toggle();
                                                            e.preventDefault();
                                                        });
                                                })
//////////////////

//������� ����������� � �������� ��������� ����� �����������, ��������� ������ show(), hide() ��� toggle() ��������,////////
// �������� ������������ ��������.///////////////////////////////////////////////////////////////////////////////
//////������//////
                                    $(function() {
                                        $("<button>�����������</button>").appendTo("#buttonDiv")
                                            .click(function(e) {
                                                $('img').toggle('fast', 'linear');
                                                e.preventDefault();
                                            });

                                    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     /////////////////////////////////// �� ����� ��������� �������/////////////////////////////////////////////////////
    ////////////////////////////////// ������������	������������ �������� � �������������///////////////////////////////
    ////////////////////////////////// slow	������� ���������� �������� 600 ��//////////////////////////////////////////
    ///////////////////////////////// fast	������� ���������� �������� 200 ��//////////////////////////////////////////
    ///////////////////////////////// swing � linear. ����� swing ������������� ��������� ������ �������� � �����������/
    ///////////////////////////////// �� ���������� � ��������� ����������� � ����� ��������. ����� linear �������������
    ///////////////////////////////// ���������� �������� �������� �� ���������� ����� ��������////////////////////////
    ///////////////////////////////// ���� ���� �������� ������, �� �� ��������� ������������ �������� swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////

// //////////////////������� show(), hide() � toggle() ����� ���������� � �������� ���������/////////////////////////////
// //////////////////�������, ������� ����� ������� �� ��������� ��������.//////////////////////////////////////////////
//////������//////
                                        $(function() {
                                            var hiddenRow = "#row2";
                                            var visibleRow = "#row1";
                                            $(hiddenRow).hide();

                                            $("<button>��������</button>").insertAfter("#buttonDiv button")
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
                                        //������� �������� ��� ���������� ���� ���������� �������� ���������  �����
                                        // ����� ����������� ���������� � �������� �  �������� 2 ���,
                                        //������� ������ � ������ �� ���� ���������� ����, � ��� �� ������� ��������� �� ���������
                                        // � ����������� ���������� �������� � ������� ������� ������ ���
                                        // ������� ������� ��������� ��� �������� � hide ����������� ����� ��������
                                        // � ���� ������� ������������ ������ ���
                                        // ����� �� ������ ������� ���������� ����� ����� ����� ���� ��������

                                            $(function() {
                                                var hiddenRow = "#row2";
                                                var visibleRow = "#row1";
                                                $(hiddenRow).hide();
                                                $("<button>��������</button>").insertAfter("#buttonDiv button")
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
                                           //���� ����� ����� ���������
//////////////////
    slideDown() // ���������� �������� ����� �� �������� ��������� �� �������� � ����������� ����
    slideDown("fast")
    slideDown("fast",function(){})
    slideDown("fast","linear",function(){})

    slideUp()  //�������� �������� ����� �� �������� ����������� �� �������� � ����������� �����
    slideUp("fast")
    slideUp("fast",function(){})
    slideUp("fast","linear",function(){})

    slideToggle() //�������� ��������� ��������� ��������� ����� �� �������� ����������� � ����������� ����� � ��������� � ����������� ����
    slideToggle("fast")
    slideToggle("fast",function(){})
    slideToggle("fast","linear",function(){})
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// �� ����� ��������� �������/////////////////////////////////////////////////////
    ////////////////////////////////// ������������	������������ �������� � �������������///////////////////////////////
    ////////////////////////////////// slow	������� ���������� �������� 600 ��//////////////////////////////////////////
    ///////////////////////////////// fast	������� ���������� �������� 200 ��//////////////////////////////////////////
    ///////////////////////////////// swing � linear. ����� swing ������������� ��������� ������ �������� � �����������/
    ///////////////////////////////// �� ���������� � ��������� ����������� � ����� ��������. ����� linear �������������
    ///////////////////////////////// ���������� �������� �������� �� ���������� ����� ��������////////////////////////
    ///////////////////////////////// ���� ���� �������� ������, �� �� ��������� ������������ �������� swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////������//////
                                        $(function() {
                                            $("<button>�������� ����������</button>").insertAfter("#buttonDiv button")
                                                .click(function(e) {
                                                    $('h1').slideToggle("fast");
                                                    e.preventDefault();
                                                });
                                        })
//////////////////
    fadeOut() //�������� �������� ����� ���������� �� ��������������
    fadeOut("fast")
    fadeOut("fast",function(){})
    fadeOut("fast","linear",function(){})

    fadeIn() //���������� �������� ����� ���������� �� ��������������
    fadeIn("fast")
    fadeIn("fast",function(){})
    fadeIn("fast","linear",function(){})

    fadeTo("fast",0) //�������� �������������� �� ���������� ������
    fadeTo("fast",0,"linear",function(){})

    fadeToggle() //����������� ���������� � �������� �������� � �������������� ��������������
    fadeToggle("fast")
    fadeToggle("fast",function(){})
    fadeToggle("fast","linear",function(){})
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// �� ����� ��������� �������/////////////////////////////////////////////////////
    ////////////////////////////////// ������������	������������ �������� � �������������///////////////////////////////
    ////////////////////////////////// slow	������� ���������� �������� 600 ��//////////////////////////////////////////
    ///////////////////////////////// fast	������� ���������� �������� 200 ��//////////////////////////////////////////
    ///////////////////////////////// swing � linear. ����� swing ������������� ��������� ������ �������� � �����������/
    ///////////////////////////////// �� ���������� � ��������� ����������� � ����� ��������. ����� linear �������������
    ///////////////////////////////// ���������� �������� �������� �� ���������� ����� ��������////////////////////////
    ///////////////////////////////// ���� ���� �������� ������, �� �� ��������� ������������ �������� swing.//////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////������//////
                                                $(function() {
                                                    $("<button>�����������</button>").insertAfter("#buttonDiv button")
                                                        .click(function(e) {
                                                            $('img').fadeToggle();
                                                            e.preventDefault();
                                                        });
                                                })
                                                //����������� ������������

                                            $(function() {
                                                $("<button>���������� ��������</button>").insertAfter("#buttonDiv button")
                                                    .click(function(e) {
                                                        $('img').fadeTo("fast", 0);
                                                        e.preventDefault();
                                                    });
                                            })
                                            //���������� �������

//////////////////

    animate() //��������� �������� �� ���� �������� ��������� �������� CSS-�������
//////������//////
                                                $(function() {
                                                    $('form').css({"position": "fixed", "top": "70px", "z-index": "2"});
                                                    $('h1').css({"position": "fixed", "z-index": "1", "min-width": "0"});
                                                    $("<button>�����������</button>").insertAfter("#buttonDiv button")
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
                                                    // � cycleEffects ����������� ��������, �������� �������� �� �������
                                                    //�������� �� ��� ������� .slideDown(timespan, cycleEffects);
                                                    //���  ������� ��������� ������ ������������ ������� cycleEffects(),
                                                    // ������� �������� ��������� ������������ ������� � ������ ������.
//////////////////
    queue() //����������� ��������� �� ������� ��������
    //////������//////
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
                                                //� ������ ������� �������� ������� ����������� ����������
                                                // � ����� ������� ��������� ��� ��������
//////////////////

    stop() // ������������� ��� ���������� ������������ ������� ��� ���� ��������� ���������.
//////������//////
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

    delay() //��������� �������� ����� ����� ����� ���������, ������������ � �������
    //////������//////
                                            $(function() {
                                                $('form').css({"position": "fixed", "top": "70px", "z-index": "2"});
                                                $('h1').css({"position": "fixed", "z-index": "1", "min-width": "0"});
                                                var timespan = "slow";
                                                cycleEffects();
                                                function cycleEffects() {
                                                    $('h1')
                                                        .animate({left: "+=100"}, timespan)
                                                        .animate({left: "-=100"}, timespan)
                                                        .delay(1000) //��� ��� ��������
                                                        .animate({height: 223,width: 700}, timespan)
                                                        .animate({height: 30,width: 500}, timespan)
                                                        .delay(1000) //��� ��� ��������
                                                        .slideUp(timespan)
                                                        .slideDown(timespan, cycleEffects);
                                                }
                                            })
//////////////////






///////////////////////////////////////////////��������� ����///////////////////////////////////////////////////////////

.blur() //������������� ���������� ������ ������
.focus() //������������� ���������� ��������� ������

//////������//////

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

    //���

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

 .change()	//������������� ������� change, ������� ����������� ��� ��������� �������� ��������

//////������//////
    $("input").change(function(e) {
        var total = 0;
        $("input").each(function(index, elem) {
            total += Number($(elem).val());
        });
        $("#total").text(total);
    })

//////////////////

/////////////////////////////////////��������� ���� ��� ������ �������� ���� /////////////////////////////////////////







}