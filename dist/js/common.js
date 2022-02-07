(function ($) {
	$(document).ready(function () {
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 30,
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
			}
		});
	
		$("#menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
		$("#menu-two").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});
})(jQuery);