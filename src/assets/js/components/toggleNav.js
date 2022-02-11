var nav = document.getElementById('nav');
var navLinks = nav.getElementsByClassName('nav__links');
var toggle = document.getElementById('toggleNav');

function toggleNav() {
    if(nav.classList.contains('nav--active'))
    {
        toggle.classList.remove('is-active');    
        nav.classList.remove('nav--active');
    }
    else
    {
        toggle.classList.add('is-active');
        nav.classList.add('nav--active');
    }
}

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for(var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        toggleNav();
    });
}