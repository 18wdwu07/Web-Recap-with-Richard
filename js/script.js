$(document).ready(function(){
    // alert("jquery has loaded");

    // $('div')
    // $('.box')
    // $('#box1')

    $('.box').click(function(){
        // $('#heading').css('color', 'red');
        $('#heading').css({
            'color':'red',
            'text-transform':'uppercase'
        });

        $(this).toggleClass('large other');




    });

    $('#box1').click(function(){
        $('#box3').toggle();
    });



});
