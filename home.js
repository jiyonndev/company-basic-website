const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');         // Animates hamburger to X
    offScreenMenu.classList.toggle('active');   // Slides menu in/out
});

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('active');
        const submenu = parent.querySelector('.submenu');
        submenu.classList.toggle('active');
    });
});

