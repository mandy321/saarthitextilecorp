// Advanced animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Observe and animate elements as they come into view
    const observerOptions = {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate fade-in
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('visible');
                }
                // Animate fade-in-up
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.classList.add('visible');
                }
                // Animate fade-in-right
                if (entry.target.classList.contains('fade-in-right')) {
                    entry.target.classList.add('visible');
                }
                
                // Animate stat numbers
                if (entry.target.classList.contains('stat')) {
                    const statValue = entry.target.querySelector('h3');
                    if (statValue && !statValue.hasAttribute('data-animated')) {
                        statValue.setAttribute('data-animated', 'true');
                        const text = statValue.textContent;
                        const number = parseInt(text);
                        if (!isNaN(number)) {
                            animateCounter(statValue, 0, number, 2000);
                        }
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="fade-in"], .stat').forEach(el => {
        animationObserver.observe(el);
    });

    // Counter animation function
    function animateCounter(element, start, end, duration) {
        const startTime = Date.now();
        const suffix = element.textContent.replace(/[\d]/g, '').trim();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            let currentValue;
            if (progress < 1) {
                currentValue = Math.floor(start + (end - start) * easeOutQuad(progress));
            } else {
                currentValue = end;
            }

            element.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    // Easing function for smooth animation
    function easeOutQuad(t) {
        return 1 - (1 - t) * (1 - t);
    }

    // Product card parallax on scroll
    const productCards = document.querySelectorAll('.product-card');
    let ticking = false;

    function updateParallax() {
        productCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

            if (scrollPercent > 0 && scrollPercent < 1) {
                const translateY = (1 - scrollPercent) * 30;
                card.style.transform = `translateY(${translateY}px)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Animate hero floating cards with enhanced movement
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            // Add staggered animation
            card.style.animationDelay = (index * 0.3) + 's';

            // Add interactive movement on hover
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-20px) scale(1.05)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });

            // Add click interaction to scroll to products
            card.addEventListener('click', function() {
                const productsSection = document.getElementById('products');
                productsSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Animate text reveal on scroll
    const revealElements = document.querySelectorAll('.hero-text h2, .hero-text p');
    revealElements.forEach(el => {
        const text = el.textContent;
        const words = text.split(' ');
        el.textContent = '';

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.animation = `fadeIn 0.6s ease forwards`;
            span.style.animationDelay = (index * 0.1) + 's';
            el.appendChild(span);
        });
    });

    // Smooth page transition on load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Clean up old ripples
            const oldRipples = this.querySelectorAll('.ripple');
            oldRipples.forEach(r => r.remove());

            this.appendChild(ripple);
        });
    });

    // Add keyboard navigation support
    const navLinks = document.querySelectorAll('.nav-link');
    let currentLinkIndex = -1;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            // Allow natural tab behavior
            return;
        }
    });

    // Lazy load images when available
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
}
