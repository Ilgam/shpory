$("#buttonDiv").addClass("bd");
$(".bd").clone().attr('id', "button2").css('text-align', 'center')
    .appendTo('form').children().text("hide").attr('id', 'but2').removeAttr('type');

$("#but2").click(function(e){
    e.preventDefault();
    $(".dcell").hide();
})