window.addEventListener('load', function () {
    let loader = document.querySelector('.loader-container');
    var menu = document.querySelector('.hamburger');
    var menuppal = document.querySelector(".menuppal");

    loader.style.display = 'none';

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

    var menuLinks = document.querySelectorAll('.menuppal ul li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            closeMenu(event);
            var targetId = link.getAttribute('href').substring(1); // Obtén el ID de la sección
            var targetElement = document.getElementById(targetId); // Encuentra el elemento con el ID
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza hacia la sección
            }
        }, false);
    });
});
