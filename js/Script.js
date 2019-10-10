$(document).ready(function () {
    $(window).scroll(function () { 
        var pos=$(window).scrollTop();
        if (pos>20) {
            $('#header').addClass('scrollHeader');
        }
        else {
            $('#header').removeClass('scrollHeader');
        }
    });
});