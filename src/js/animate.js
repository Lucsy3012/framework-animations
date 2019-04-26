$(document).ready(function () {

    animateIn();

    $(window).on('scroll resize', function() {
        animateIn();
    });

    function animateIn() {
        $('.animate--js').each(function() {
            var $this = $(this),
                thisPosition = $this.offset().top,

                $window = $(window),
                windowHeight = $window.height(),
                scrolled = $window.scrollTop(),

                _visible = thisPosition <= ((windowHeight * 0.75) + scrolled);

            if (_visible) {
                $this.addClass('in');
            }
        });
    }

    /*
    completeSequence();

    function completeSequence() {
        $('.animate--js.sequence').each(function() {
            $(this).children().addClass('animate--js');
            $(this).removeClass('animate--js');
        });
    }
    */

});