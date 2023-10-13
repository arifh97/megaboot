(function() {
    'use strict';
    jQuery(document).ready(function() {

        $.browserDetection(true);

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

let copyText = document.querySelector(".copy__text");
copyText.querySelector("button").addEventListener("click", function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand('copy');
    copyText.classList.add('active');
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copyText.classList.remove("active");
    }, 2500)
})