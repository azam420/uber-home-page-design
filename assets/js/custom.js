$(document).ready(function() {

    $('#slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        autoHeight: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1199: {
                items: 3,
            }
        }
    });




});
$(document).ready(function() {
    $('#drive').click(function() {
        $('.con1').slideDown('slow'),
            $('.con2').slideUp('slow'),
            $('.con5').slideUp('slow'),
            $('.con4').slideUp('slow'),
            $('.con3').slideUp('slow');

    });
    $('#close').click(function() {
        $('.con1').slideUp('slow');
    });
});
$(document).ready(function() {
    $('#ride').click(function() {
        $('.con2').slideDown('slow'),
            $('.con1').slideUp('slow'),
            $('.con4').slideUp('slow'),
            $('.con5').slideUp('slow'),
            $('.con3').slideUp('slow');

    });
    $('#close2').click(function() {
        $('.con2').slideUp('slow');
    });
});
$(document).ready(function() {
    $('#more').click(function() {
        $('.con3').slideDown('slow'),
            $('.con2').slideUp('slow'),
            $('.con4').slideUp('slow'),
            $('.con5').slideUp('slow'),
            $('.con1').slideUp('slow');

    });
    $('#close3').click(function() {
        $('.con3').slideUp('slow');
    });
});
$(document).ready(function() {
    $('#signIn').click(function() {
        $('.con4').slideDown('slow'),
            $('.con3').slideUp('slow'),
            $('.con2').slideUp('slow'),
            $('.con5').slideUp('slow'),
            $('.con1').slideUp('slow');

    });
    $('#close4').click(function() {
        $('.con4').slideUp('slow');
    });
});

$(document).ready(function() {
    $('#signUp').click(function() {
        $('.con5').slideDown('slow'),
            $('.con3').slideUp('slow'),
            $('.con4').slideUp('slow'),
            $('.con2').slideUp('slow'),
            $('.con1').slideUp('slow');

    });
    $('#close5').click(function() {
        $('.con5').slideUp('slow');
    });
});
$(document).ready(function() {
    $('#rs-list').click(function() {
        $('.con6').slideToggle('slow');

    });

});