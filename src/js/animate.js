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

                _visible = thisPosition <= ((windowHeight * 0.8) + scrolled);

            if (_visible) {
                $this.addClass('in');
            }
        });
    }

    // Slide up sequence
    var $slicedSequence = $('.sequence-sliced');

    $slicedSequence.each(function() {
        var $this = $(this),
            text = $this.text().split('');

        $this.html('');

        for (var i=0; i < text.length; i++) {
            var span = '<span>' + text[i] + '</span>';
            $this.append(span);
        }
    });

});