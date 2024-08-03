// Add this to your existing JavaScript file

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