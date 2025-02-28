// Toggle dark/light mode
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Cek localStorage untuk tema yang disimpan
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// Tambahkan event listener untuk toggle switch
themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});