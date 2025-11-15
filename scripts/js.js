function Darkmode(){
    let themeToggle = document.getElementById('theme-toggle');
    let body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if(body.classList.contains('dark-mode')){
            localStorage.setItem('theme', 'dark');
        }
        else {
            localStorage.setItem('theme', 'light');
        }
    });
}
