(function() {
    'use strict';
    jQuery(document).ready(function() {

        $('.active-slider').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: true,
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }

        });


    });
})();