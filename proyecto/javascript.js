const themeSwitcher = document.querySelector('.theme-switcher');
let isDarkMode = false;

// Comprobar la preferencia guardada y aplicarla
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitcher.textContent = '🌙';
    isDarkMode = true;
}

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        themeSwitcher.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        themeSwitcher.textContent = '🌞';
        localStorage.setItem('theme', 'light');
    }
});
