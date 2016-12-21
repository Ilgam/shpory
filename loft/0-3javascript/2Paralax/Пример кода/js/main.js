$(window).scroll(function(){
	var wScroll = $(window).scrollTop();
	
	(function(){
	    
		var
			bg = $('.hero__bg'),
			sectionText = $('.hero__section-img'),
			user = $('.hero__user-block');

		slideIt(bg, wScroll / 50);
		slideIt(sectionText, wScroll / 30);
		slideIt(user, wScroll / 3);

		function slideIt(block, strafeAmount) {
			var strafe = -strafeAmount + '%',
				transormString = 'translate3d(0,' + strafe + ',0)';

			block.css({
				'transform' : transormString
			});
		}
	}());
	
	
	(function(){
		var
		    svg = $('#heisenberg'),
		    svgPath = svg.find('.group'),
		    svgPos = svg.offset().top,
		    windowMargin = $(window).height() / 3,
		    startAnimate = wScroll - svgPos + windowMargin,
		    pixelsElapsed = svgPos - wScroll,
		    percentsElapsed = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
		    percentsDraw = 1200 / 100 * percentsElapsed;


		if (startAnimate >= 0) {
			if (percentsDraw > 0) {
				svgPath.css({
					'stroke-dashoffset' : percentsDraw
				});
			}
		}

		var
			svg = $('#heisenberg'),
			svgPaths = svg.find('.group'),
			svgPos = svg.offset().top,
			windowMargin = $(window).height() / 3,
			startAnimate = wScroll - svgPos + windowMargin,
			pixelsElapsed = svgPos - wScroll,
			percentsElapsed =  100 - Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
			percentsDraw = 1200 / 100 * percentsElapsed;


		if (startAnimate >= 0) {

			var drawAmount = 1200 - percentsDraw;

			if (drawAmount > 0) {
				svgPaths.css({
					'stroke-dashoffset' : drawAmount
				});
			}

			// console.log('идет :', startAnimate);
			// console.log('====== ! ========');
			// console.log('осталось:', pixelsElapsed);
			// console.log('====== ! ========');
			// console.log('осталось процентов:', percentsElapsed);
		}
	}());
}); // -> scroll_end;



$(document).ready(function(){
	setBlur();
}); // -> ready_end;

$(window).resize(function(){
	setBlur();
}); // -> resize_end;

function setBlur() {
	var
		imgWidth = $('.blur__background').width(),
		blur = $('.blur__form'),
		blurSection = $('.blur'),
		posTop = blurSection.offset().top - blur.offset().top,
		posLeft = blurSection.offset().left - blur.offset().left;

	blur.css({
		'background-size' : imgWidth + 'px' + ' ' + 'auto',
		'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
	});
}