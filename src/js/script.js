// Fade in navbar, when news section is reached and vice versa.
(function ($) {
    $(document).ready(function () {

        // the height from where #navbar shall be displayed
        var height = document.getElementById("news").offsetTop - document.getElementById("navbar").offsetHeight - 2;

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

// Hide collapsed navbar's extended menu after a click.
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});

// Include HTML elements. Usage: <div data-include="name-of-html-file"></div>
$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

// Disable contact form submissions, if there are invalid fields.
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
