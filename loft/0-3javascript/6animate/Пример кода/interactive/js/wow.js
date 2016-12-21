var animateCSS = (function(){
	
	var checkDistance = function (scrollTop, elem) {
		var offset = elem.offset().top,
			windowHeight = Math.ceil($(window).height() / 2),
			topBorder = offset - scrollTop - windowHeight,
			bottomEdge = elem.outerHeight(true) + offset,
			bottomBorder = scrollTop + windowHeight - bottomEdge;

		return topBorder <= 0 && bottomBorder <= 0

	};

	var animationsActions = {
		toTop : function () {
			$(this).addClass('toTop');
		},

		toRight : function () {
			$(this).addClass('toRight');
		},
		
		width : function () {
			var $this = $(this),
				width = $this.width() + 20;

			$this.css('opacity', 1);
			$this.width(width);
		}
	};
    
    
    return {
	    init : function () {
		    $(window).scroll(function(){
			    var scrollTop = $(window).scrollTop();
			    
			    $('.animate').each(function () {
				    var $this = $(this);

				    if ( checkDistance(scrollTop, $this)) {
						var animationType = $this.data('animate');

					    if (typeof $this.data('animated') == 'undefined') {
						    $this.data('animated', true);
						    animationsActions[animationType].call($this);
					    }

				    }
			    });
		    }); // -> scroll_end;
	    }
    }
    
}());

animateCSS.init();