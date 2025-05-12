const navbar = document.getElementById('navbar');

/* Add to event */
window.addEventListener('scroll', () => {

    /* When it scrolled down */
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');

    /* When it scrolled up */
    } else {
        navbar.classList.remove('scrolled');
    }
});
