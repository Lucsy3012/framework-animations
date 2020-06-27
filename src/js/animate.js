window.onload = function() {

    animateIn();

    window.addEventListener('scroll', function() {
        animateIn();
    });

    function animateIn() {
        document.querySelectorAll('.animate--js').forEach(function(el) {
            let thisPosition = el.getBoundingClientRect().top + window.scrollY;
            let windowHeight = window.innerHeight;
            let scrolled = window.scrollY;

            let _visible = thisPosition <= ((windowHeight * 0.8) + scrolled);

            if (_visible) {
                el.classList.add('in');
            }
        });
    }

    // Slide up sequence
    const $slicedSequence = document.querySelectorAll('.sequence-sliced');

    $slicedSequence.forEach(function(el) {
        let text = el.textContent;

        el.innerHTML = '';

        for (let i=0; i < text.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = text[i];
            el.appendChild(span);
        }
    });

};