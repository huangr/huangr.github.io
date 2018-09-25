$(document).ready(function() {

    console.log("Hello, world");
    
    adjust = function() {
        if ($(window).scrollTop() <= 100) {
            $('#navbar').removeClass('opaque');
        } else {
            $('#navbar').addClass('opaque');
        }
    }
    
    adjust();

    $(window).scroll(function(scroll) {
        adjust();
    });

    $('.collapsible').collapsible();
});
