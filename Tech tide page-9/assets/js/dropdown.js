document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const homeMenu = document.getElementById('home-menu');
    const homeSubmenu = document.getElementById('home-submenu');

    hamburgerMenu.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('active');
    });

    homeMenu.addEventListener('click', function(event) {
        event.preventDefault();
        homeSubmenu.classList.toggle('hidden');
    });

    // Optional: Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});
