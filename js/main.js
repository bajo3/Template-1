document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.hamburger');
    var menuppal = document.querySelector(".menuppal");

    function toggleMenu(event) {
        menu.classList.toggle('is-active');
        menuppal.classList.toggle("is_active");
        event.preventDefault();
    }

    function closeMenu(event) {
        if (menu.classList.contains('is-active')) {
            toggleMenu(event);
        }
    }

    menu.addEventListener('click', toggleMenu, false);

    // Agregar un manejador de eventos a los enlaces del menú
    var menuLinks = document.querySelectorAll('.menuppal ul li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu, false);
    });
});
    
