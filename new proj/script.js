document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggleButton.textContent = currentTheme === 'dark-mode' ? 'DARK' : 'LIGHT';
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        themeToggleButton.textContent = newTheme === 'dark-mode' ? 'DARK' : 'LIGHT';
        localStorage.setItem('theme', newTheme);
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
