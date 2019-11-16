(function(window, document, $) {

	$( function() {
		var slideIndex = 0;
		var $slides = $('.mySlides');
		var $dots = $('.dot');
		var $stop = $('.stop');
		window.control = false;
		window.auto = true;
		window.stop = false;
		
		
		$slides.hide();
		$slides.removeClass('hide');
		
		autoSlide();  
		
		 
		$dots.on('click', function() {
			clearTimeout(timer);
			console.log($(this).index());
			slideIndex = $(this).index();
			window.auto = false;
			autoSlide();
		});
		
		$('.next').on('click', function() {
			window.control = true;
			showSlides(slideIndex += 1);
			slideIndex += -1;
			window.control = false;
			window.auto = false;
			showSlides();
			console.log("executes-next");
			});
										
		$('.prev').on('click', function() {
			window.control = true;
			showSlides(slideIndex += -1);
			slideIndex += -1;
			window.control = false;
			window.auto = false;
			showSlides();
			});
		
		$stop.on('click', function(event) {
			event.preventDefault();
			if (!window.stop) {
			$(this).text('Start');
			clearTimeout(timer);
			window.stop = true;
			} else {
				$(this).text('Stop');
				autoSlide();
				window.stop = false;
			}
		});
		
		function showSlides(n) {
			if (!window.control) {
				autoSlide();
			} else {
				controlSlide(n)
			}
		}
		
		function myTimer(func) {
			 timer = setTimeout(func, 3000); 
		}
			
		function autoSlide() {
			$stop.text('Stop');
			window.stop = false;
			$slides.each( function() {
				$(this).hide();
			});
			slideIndex += 1;
			if (!window.auto) {
				if (slideIndex > $slides.length) {slideIndex = 0};
				$slides.eq(slideIndex - 1).show();
			} else {
			if (slideIndex> $slides.length) {slideIndex = 1};
			$slides.eq(slideIndex - 1).show();
			}
			$('.active').removeClass('active');
			$dots.eq(slideIndex - 1).addClass('active');
			myTimer(autoSlide);
			window.execute = true;
		}
		
		function controlSlide(n) {
			if (n > $slides.length) slideIndex = 1;
			if (0 > n) slideIndex = $slides.length-1;
			$slides.each( function() {
				$(this).hide();
			});
			$slides.eq(slideIndex-1).show();
			clearTimeout(timer);
		}
			
	});
		
	})(window, document, window.jQuery); 