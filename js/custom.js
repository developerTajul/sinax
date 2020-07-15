(function($){

	jQuery(document).ready(function(){

    	/** main-slider **/	
    	$('.main-slider-active').slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    	});

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

		

	});

}(jQuery));