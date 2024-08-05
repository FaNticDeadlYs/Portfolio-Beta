const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
});

var typed = new Typed(".multiple-text", {
	strings: ["Student","Programmer","Cosmic Enthutiast","Gamer" ],
	typeSpeed: 50,
	backSpeed: 50,
	backDelay: 4000,
	loop: true
})

const greetings = ["< title > नमस्ते < / title >", "< title > Hola < / title >", "< title > Bonjour < / title >", "< title > 안녕하세요 < / title >", "< title > Hello < / title >","< title > こんにちは < / title >"];
document.getElementById('title').addEventListener('click', function() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    this.innerHTML = randomGreeting;
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

window.onload = function() {
    window.location.hash = '#home';
    document.querySelector('#navbar-nav .nav-link[href="#home"]').classList.add('active');
};

function updateActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navItems.forEach(item => item.classList.remove('active'));
            navItems[index].classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavItem);

updateActiveNavItem();