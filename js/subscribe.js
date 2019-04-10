$( document ).ready(function() {


    $('.subscribe').on('click', function(e){

       alert('Thank you for signing up! You will be receiving an email from us shortly!');

       $('#modalForm').modal('toggle');

    });


    $('.noThanks').on('click', function(e){

       alert('Maybe next time...');

       $('#modalForm').modal('toggle');

    });



});