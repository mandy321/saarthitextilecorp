// Loading screen animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after animation completes
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2500);

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    const navMenu = document.getElementById('nav-menu');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Scroll effect for navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-right').forEach(el => {
        observer.observe(el);
    });

    // Explore button scroll to products
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const productsSection = document.getElementById('products');
            productsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add animation to cards on hover
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (window.scrollY < heroSection.offsetHeight) {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
});

// Utility function for smooth number animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Any additional setup after all assets load
    console.log('Page loaded - all animations initialized');
});
