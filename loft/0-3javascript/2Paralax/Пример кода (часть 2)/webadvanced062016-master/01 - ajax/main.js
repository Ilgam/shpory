$('button').on('click', function (e) {
  e.preventDefault(); //Отмена действия браузера
  var data = new FormData(document.forms.loftschool); //Объекты FormData позволяют вам легко конструировать наборы пар ключ-значение, представляющие поля формы и их значения, которые в дальнейшем можно отправить
  // !!! ПРИМЕЧАНИЕ !!!
  // FormData использует такой же формат на выходе, как если бы мы отправляли обыкновенную форму с encoding установленным в "multipart/form-data".
  // !!! КОНЕЦ ПРИМЕЧАНИЮ !!!
  $.ajax({
    xhr: function() { // Функция для создания объекта XMLHttpRequest. Если доступно, то создается ActiveXObject (IE), в ином случае XMLHttpRequest. Можно создать свою собственную усовершенствованную реализацию объекта XMLHttpRequest.
      var xhr = $.ajaxSettings.xhr();
      xhr.upload.onprogress = function(e) {
        var per = Math.floor(e.loaded / e.total *100);
        $('.progress').show();
        $('.progress-bar').css('width', per+'%')
        $('#progress').text(per + '%');
      };
      // xhr.upload.onload = function() {
      //   console.log( 'Данные полностью загружены на сервер!' );
      // }
      // xhr.upload.onerror = function() {
      //   console.log( 'Произошла ошибка при загрузке данных на сервер!' );
      // }
      return xhr;
    },
    url: 'send.php', // URL к запросу.
    type: 'POST', // Тип запроса («POST» или «GET»), по умолчанию «GET».
    data: data, // Данные, которые отсылаются на сервер. Если данные не являются строкой, то они конвертируются в строку запроса. Для запросов типа GET данные прикрепляются к URL. Для предотвращения этого, используйте опцию processData.
    processData: false, // По умолчанию, данные, переданные в параметр data в качестве объекта (с технической точки зрения, что-либо кроме строки), будут обработаны и преобразованы в строку запроса, для соответствия типу данных по умолчанию — «application/x-www-form-urlencoded». Если необходимо отослать документ DOM или другие специфические данные, то установите данную опцию в false.
    contentType: false // При отсылке данных на сервер, указывайте тип данных. По умолчанию: «application/x-www-form-urlencoded», что подходит для большинства случаев.
  });
});