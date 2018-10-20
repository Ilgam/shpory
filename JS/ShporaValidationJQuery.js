window.onload = function(){
// Вообще можно самому валидайшн прописать, но есть и плагин его нужно скачать с https://jqueryvalidation.org/
//или в bower.json прописать -" jquery-validation" : "1.15.0"
// и потом прописать  путь к файлу <script src="jquery.validate.js"></script>

  ////////сразу пример///////////
    $(document).ready(function () {

        var data = { flowers: [
            { name: "Aster", product: "aster", stock: "10", price: "2.99" },
            { name: "Daffodil", product: "daffodil", stock: "12", price: "1.99" },
            { name: "Rose", product: "rose", stock: "2", price: "4.99" },
            { name: "Peony", product: "peony", stock: "0", price: "1.50" },
            { name: "Primula", product: "primula", stock: "1", price: "3.12" },
            { name: "Snowdrop", product: "snowdrop", stock: "15", price: "0.99" }]
        };

        var templResult = $("#flowerTmpl").template(data).filter("*");
        templResult.slice(0, 3).appendTo("#row1");
        templResult.slice(3).appendTo("#row2");

        $("form").validate({
            highlight: function (element, errorClass) {
                $(element).add($(element).parent()).addClass("invalidElem");
            },
            unhighlight: function (element, errorClass) {
                $(element).add($(element).parent()).removeClass("invalidElem");
            },
            errorElement: "div",
            errorClass: "errorMsg"
        });

        $.validator.addClassRules({
            flowerValidation: {
                min: 0
            }
        })

        $("input").addClass("flowerValidation").change(function (e) {
            $("form").validate().element($(e.target));
        });
    });
  // Сначала определим объект data,
  // его скомперируем в шаблон
  //Потом объявим валидацию для формы
  // в нем пропишем четырех параметров (highlight, unhighlight, errorElement и errorClass)
  //потом добавми правила для валидации (addClassRules)
 // потом добаим сласс к элементам которые хоти проверить
 // $('form').validate().element($(e.target)) - вот это непосредственно занимается роверкой
 //  .errorMsg {color: red}                          - эти две строчки надо прописать в css
 //   .invalidElem {border: medium solid red}
/////////////////////////
    highlight   //указвает функцию которая служит для визиульного выделения некорректного объета

    highlight: function (element, errorClass) {
        $(element).add($(element).parent()).addClass("invalidElem");
    }
    // первый атрибут это некоректный  элемент
    // второй атрибут это класс который будет добавлен к этому элементу
    // то есть например к input будет добавлен класс errorClass
    // в самой вункции ижется родительский элемент
    // к нему тоже добавляется класс, но другой
    // например в нем будет бордер который подсечивается красным

    unhighlight // все тоже самое но наобото отмена

    unhighlight: function (element, errorClass) {
        $(element).add($(element).parent()).removeClass("invalidElem");
    }
    // первый атрибут это некоректный  элемент
    // второй атрибут это класс который будет отменен
    // в самой вункции от родителя некоректного элемента
    // удаляется класс который ранее мы ему дали

    errorElement: "div" //  элемент, в кторый должно быть помещено сообщение об оштибке
    // по умолчанию label

    errorClass // с помощью его задается класс который связывется с
               // некорректным элементам

    errorContainer: "#errorSummary", // от балды так вот это контейнер где будут отображаться ошибки

    errorLabelContainer: "#errorsList", // Список где будут ошибки повторяю пишу от балды

     wrapper: "li", // обуртка для единиц списка



///////////////////////////////////////правила для проверки//////////////////////////////////////
// эх надо добавлять в объект который находиться в  addClassRules
    creditcard: true	//Значение должно содержать номер кредитной карты
    date: true	//Значение должно быть действительной датой JavaScript
    digits: true//	Значение должно содержать лишь цифры
    email: true	//Значение должно быть действительным адресом электронной почты
    max: maxVal	//Значение не должно превышать maxVal
    maxlength: length //Значение должно содержать не более length символов
    min: minVal	//Значение не должно быть меньше minVal
    minlength: length //Значение должно содержать не менее length символов
    number: true //Значение должно быть десятичным числом
    range: [minVal, maxVal]	//Значение должно находиться в пределах указанного диапазона
    rangelength: [minLen, maxLen] //Значение должно содержать не менее minLen и не более maxLen символов
    required: true //Значение обязательно должно быть указано
    url: true //Значение должно быть URL-адресом
    remote: { //добавление дистанционной проверке на сервекре
        url: "http://node.jacquisflowershop.com/stockcheck",
            type: "post",
            global: false
    }

///////////Пример////////////////
    $.validator.addClassRules({
        flowerValidation: {
            required: true,
            digits: true,
            min: 0,
            max: 100
        }
    })

//////////////////////////

.rules("add" , {}) // Можнео применять правила к определенным элементам,

///////////пример//////////////
    $.validator.addClassRules({
        flowerValidation: {
            required: true,
            digits: true,
            min: 0,
            max: 100
        }
    })

    $('#row1 input').each(function(index, elem) {
        $(elem).rules("add", {
            min: 10,
            max: 20
        })
    })
}
////////////////////////////

messages: {} // ообщения об ошибках(они прописываются в правилах)

///////////пример//////////
$.validator.addClassRules({
    flowerValidation: {
        required: true,
        digits: true,
        min: 0,
        max: 100
    }
})

$('#row1 input').each(function(index, elem) {
    $(elem).rules("add", {
        min: 10,
        max: 20,
        messages: {
            max: "Вы заказали больше 20 цветов",
            min: "Вы заказали меньше 10 цветов"
        }
    })
})
////////////////////////////
////////////////////Вручную выводить сообщение о ошибках через validate///////////////////
var elem = $("input").get(0);
var err = new Object();
err[elem.name] = "No products selected";
$("#orderForm").validate().showErrors(err);

    //сначало выберем эелемнт чтобы когда мы передадим валидатору,
    //чтобы он мог видеть в каком элементе как бы ошибка,
    //потом создаем новый объект, потом в этот объект суем имя элемента
    //ввиде свойства, а его значение будет сообщение ошибки
    //потом для формы вызыаваем метод validate, но вместо привычного
    //.element($(e.target)) пишем showErrors и суем в него наш объект

