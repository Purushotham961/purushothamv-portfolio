// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Active Link Highlight =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-category, .cert-card, .blog-card, .project-card, .stat, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create mailto link
    const mailtoLink = `mailto:purushothamvilasagaram95@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Message prepared! Your email client will open.');
    contactForm.reset();
});

// ===== Notification Function =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const step = target / (duration / 16);
    
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(h3 => {
                const text = h3.textContent.trim();
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(h3, number);
                }
            });
            entry.target.classList.add('animated');
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('[class*="hero"]');
    
    parallaxElements.forEach(el => {
        if (el.style.backgroundImage) {
            el.style.backgroundPosition = `center ${scrollY * 0.5}px`;
        }
    });
});

// ===== Mouse Follow Effect (Optional) =====
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Update cursor position for potential glow effects
    document.documentElement.style.setProperty('--mouseX', mouseX + 'px');
    document.documentElement.style.setProperty('--mouseY', mouseY + 'px');
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// ===== Performance Optimization - Lazy Load Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ===== Add smooth page transitions =====
document.addEventListener('DOMContentLoaded', () => {
    // Fade in animations on page load
    const fadeElements = document.querySelectorAll('.hero-text, .hero-image');
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `${index === 0 ? 'slideInLeft' : 'slideInRight'} 0.8s ease 0.2s forwards`;
    });
});

// ===== Social Links Handler =====
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(10deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// ===== Scroll to Top Button (Optional - can be added later) =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Show scroll to top button if needed
    }
});

// ===== Form Validation =====
const contactFormInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

contactFormInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.borderColor = '#e5e7eb';
        }
    });
});

// ===== Accessibility Enhancements =====
document.addEventListener('keydown', (e) => {
    // Tab through navigation
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-link')) {
            focusedElement.classList.add('focus-visible');
        }
    }
});

// ===== Console Message =====
console.log(
    '%c🎯 Welcome to Purushotham\'s Portfolio!',
    'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
    '%cQA Automation Engineer | Test Automation Framework Designer',
    'font-size: 14px; color: #ec4899;'
);
console.log(
    '%cFor inquiries: purushothamvilasagaram95@gmail.com',
    'font-size: 12px; color: #666;'
);