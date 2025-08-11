document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const navLinksContainer = document.getElementById('navLinks');

navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetSection = document.getElementById(targetId);
                    
targetSection.scrollIntoView({
behavior: 'smooth'
});
navLinksContainer.classList.remove('active');
navLinks.forEach(l => l.classList.remove('active'));
this.classList.add('active');
});
});
mobileMenu.addEventListener('click', function() {
navLinksContainer.classList.toggle('active');
});

window.addEventListener('scroll', function() {
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}

let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.offsetHeight;
if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
current = section.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').substring(1) === current) {
link.classList.add('active');
}
});
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, observerOptions);

sections.forEach(section => {
observer.observe(section);
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(contactForm);
const data = Object.fromEntries(formData);
                
alert('Thank you for your message! We\'ll get back to you soon.');
contactForm.reset();
});
document.querySelectorAll('.contact-item').forEach(item => {
item.addEventListener('mouseenter', function() {
this.style.transform = 'translateX(10px) scale(1.02)';
});
item.addEventListener('mouseleave', function() {
this.style.transform = 'translateX(0) scale(1)';
});
});
});

window.addEventListener('scroll', function() {
const scrolled = window.pageYOffset;
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach((element, index) => {
const speed = (index + 1) * 0.5;
element.style.transform = `translateY(${scrolled * speed}px)`;
});
});