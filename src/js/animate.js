$(document).ready(function () {

    animateIn();

    $(window).on('scroll resize', function() {
        animateIn();
    });

    function animateIn() {
        $('.animate:not(.in)').each(function() {
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

});