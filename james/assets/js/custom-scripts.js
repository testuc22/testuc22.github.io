jQuery(document).ready(function($){
	const swiper = new Swiper('.swiper', {
	  	speed: 400,
	  	spaceBetween: 20,
	  	slidesPerView: 3,
	  	autoplay:false,
	  	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	  	breakpoints: {
		    320: {
		      slidesPerView: 1,
		      spaceBetween: 30
		    },
		    640: {
		      slidesPerView: 2,
		      spaceBetween: 40
		    },
		    767:{
		    	slidesPerView: 3
		    }
	  	}

	});
	console.log(swiper,"swiper");

});