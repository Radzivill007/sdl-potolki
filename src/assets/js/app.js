//= ../../../node_modules/jquery/dist/jquery.js

//= ../../../node_modules/inputmask/dist/jquery.inputmask.js
//= components/toggleNav.js

//= ../../../node_modules/@glidejs/glide/dist/glide.js

//= components/slider.js

//= components/tabs.js



//= components/inputMask.js
//= components/sales.js
//= components/calc.js
//= components/lead.js

//плавный переход по якорям

$(document).ready(function() {
    

    var $root = $('html, body');

    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');

        if (href.length) {
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
        }
        return true;
    });
});