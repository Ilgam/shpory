$(document).ready(function(){
    var flag = true;

	$('.start').on('click', function(e){
        e.preventDefault();

	    var block = $('.title'),
		    string = block.text().trim(),
		    stringArray = string.split(''),
		    word = '',
		    animationState = $.Deferred();

	    
	    stringArray.forEach(function (letter) {

		    if (letter != ' ') {
			    var letterHtml = '<span class="letter-span">' + letter + '</span>';
		    } else {
			    var letterHtml = '<span class="letter-span_space">' + letter + '</span>';
		    }

		    word += letterHtml;
	    });

	    if (flag) {
		    flag = false;

		    block.html(word);

		    var letter = block.find('.letter-span'),
			    counter = 0,
			    timer,
			    duration = 3000 / stringArray.length;

		    function showLetters() {
			    var currenLetter = letter.eq(counter);

			    currenLetter.addClass('active');

			    counter++;

			    if (stringArray.length == counter) {
				    animationState.resolve();
			    }

			    if (typeof timer != 'undefined') {
				    clearTimeout(timer);
			    }

			    timer = setTimeout(showLetters, duration);
		    }

		    showLetters();


	    }

		animationState.done(function () {
			flag = true;
		});


    });
}); // -> ready_end;