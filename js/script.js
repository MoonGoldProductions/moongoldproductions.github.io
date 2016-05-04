// Function for smooth scrolling on the page, when a navigation link is clicked.
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var offset = 50;
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            var test = target.selector;
            if (target.selector === "#menu") {
                offset = 0;
            }
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
                return false;
            }
        }
    });
});

// Fade in #navbar, when news section is reached and vice versa
(function ($) {
    $(document).ready(function () {

        // the height from where #navbar shall be displayed
        var height = document.getElementById("news").offsetTop - document.getElementById("navbar").offsetHeight - 1;

        // hide #navbar first
        $("#navbar").hide();

        // fade in and out #navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn #navbar
                if ($(this).scrollTop() > height) {
                    $('#navbar').fadeIn(200);
                } else {
                    $('#navbar').fadeOut(200);
                }
            });
        });
    });
}(jQuery));
