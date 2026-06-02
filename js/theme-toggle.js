// Dark/Light Theme Toggle

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
    }
    
    // Listen for theme toggle changes
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            if (themeToggleIcon) themeToggleIcon.textContent = '🌙';
        }
    });
    
    // Respect system preferences if no saved preference
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
            if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
        }
    }
});
