$(document).ready(function () {

	$(function () {
		var imgs = [];

		$.each($('*'), function () {
			var $this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');

			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');

				imgs.push(path);
			}

			if (img) {
				var path = $this.attr('src');

				if (path) {
					imgs.push(path);
				}
			}
		});

		var percents = 1;

		for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function () {
				setPercents(imgs.length, percents);
				percents++;
			});
		}

		function setPercents(total, current) {
			var percent = Math.ceil(current / total * 100);

			if (percent >= 100) {
				$('.wrap').css('display', 'block');
			}

			$('.loader-bar').css({
				'width' : percent + '%'
			}).text(percent + '%');
		}
	});

	(function () {
		var counter = 1;

		$('.slider__controls-top').on('click', function(e){
		    e.preventDefault();

			var $this = $(this),
				container = $this.closest('.slider'),
				items = container.find('.slider__item'),
				activeItem = container.find('.slider__item.active');

			if (counter >= items.length) {
				counter = 0;
			}

			var reqItem = items.eq(counter);

			activeItem.animate({
				'top' : '100%'
			}, 300);

			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});

			counter++;

		});
	}());
	
	(function () {

		$('.slideshow__link').on('click', function(e){
		    e.preventDefault();
		    
		    var $this = $(this),
			    path = $this.attr('href'),
			    container = $this.closest('.slideshow'),
			    display = container.find('.slideshow__display-pic'),
			    preloader = $('#preloader');

			display.fadeOut(300, function () {
				preloader.show();

				display.attr('src', path).load(function () {
					$(this).fadeIn();
					preloader.hide();
				});
			});
		});
	}());
});

$(window).scroll(function() {
	var
		wScroll = $(window).scrollTop(),
		menu = $('.static .menu'),
		sidebar = $('.static .menu__wrapper '),
		stickyStart = sidebar.offset().top,
		menuClone = sidebar.clone(),
		fixedSidebar = $('.fixed .left__col');

	if (wScroll >= stickyStart) {

		// menu.css({
		// 	top : wScroll - stickyStart + 'px'
		// });

		if (!fixedSidebar.find('.menu__wrapper').length) {
			fixedSidebar.append(menuClone);
			menu.hide();
		}


	} else {
		fixedSidebar.find('.menu__wrapper').remove();
		menu.show();
	}

});



// $(window).load(function () {
// 	console.log('load');
// });