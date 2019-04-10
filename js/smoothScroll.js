$( document ).ready(function() {


    $('.scroll').on('click', function(e){

        let targetHref = $(this).attr('href');

        $('html, body').animate({
        	scrollTop: $(targetHref).offset().top
        }, 1000);

        e.preventDefault();

    });










});