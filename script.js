$('document').ready(function () {
    
    //animate extend function (can now use .animateCss('animation') without adding class)
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    //custom functions


    //By default hide everything but landing page
    $('#landingpage').animateCss('fadeIn').show();
    $('#about').hide();
    $('#games').hide();
    $('#download').hide();
    $('#contact').hide();

    $('#landing-button').on('click', function () {
        $('#landingpage').show().animateCss('fadeIn');

        $('#about').hide();
        $('#games').hide();
        $('#contact').hide();
        $('#download').hide();
    })

    $('#about-button').on('click', function () {

        $('#about').show().animateCss('fadeIn');

        $('#landingpage').hide();
        $('#games').hide();
        $('#download').hide();
        $('#contact').hide();
    });

    $('#games-button').on('click', function () {

        $('#games').show().animateCss('fadeIn');

        $('#landingpage').hide();
        $('#about').hide();
        $('#download').hide();
        $('#contact').hide();
    });

    $('#download-button').on('click', function () {

        $('#download').show().animateCss('fadeIn');

        $('#landingpage').hide();
        $('#about').hide();
        $('#games').hide();
        $('#contact').hide();
    });

    $('#contact-button').on('click', function () {
 
        $('#contact').show().animateCss('fadeIn');

        $('#landingpage').hide();
        $('#about').hide();
        $('#games').hide();
        $('#download').hide();
    });

});