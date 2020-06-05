$(function(){

	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});

	window.onload = function() {
		scroll_effect();

		$(window).scroll(function(){
		scroll_effect();
		});

		function scroll_effect(){
		$('.fadein').each(function(){
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight){
		$(this).addClass('scrollin');
		}
		});
		}
	};

	if (window.matchMedia('(max-width: 620px)').matches) {
		$('.sumart').fadeIn('slow');
	} else if (window.matchMedia('(min-width:621px)').matches) {
		$('.pc').fadeIn('slow');
	}

});
