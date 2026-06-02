// Gallery Page Functionality

const productDetails = [
    {
        title: 'Tennis Ball Felt',
        image: 'linear-gradient(135deg, #FFD700, #FFA500)',
        description: 'Premium felt specially designed for professional tennis balls. Our Tennis Ball Felt is manufactured using high-quality materials and advanced processing techniques to ensure consistent performance in sports applications.',
        specs: [
            'Professional Grade Quality',
            'ISO 2247 Certified',
            'Consistent Bounce Performance',
            'UV Resistant',
            'Durable & Long-lasting',
            'Available in Multiple Colors'
        ]
    },
    {
        title: 'Woolen Blankets',
        image: 'linear-gradient(135deg, #8B4513, #D2691E)',
        description: 'Our woolen blankets are crafted from 100% pure wool, providing ultimate comfort and warmth. Perfect for home furnishings, hotels, and commercial applications. Each blanket is meticulously woven for superior quality and durability.',
        specs: [
            '100% Pure Wool',
            'Machine Washable',
            'Hypoallergenic',
            'Thermal Insulation',
            'Soft & Luxurious Feel',
            'Available in Multiple Sizes'
        ]
    },
    {
        title: 'Tweed Fabric',
        image: 'linear-gradient(135deg, #6B4423, #A0826D)',
        description: 'Classic and sophisticated tweed fabric with timeless appeal. Ideal for premium clothing, upholstery, and home décor applications. Our tweed features a tight weave and superior craftsmanship that ensures longevity and elegance.',
        specs: [
            'Classic Design Pattern',
            'Premium Weave Quality',
            'Versatile Applications',
            'Color-Fast Dyes',
            'Heavy-Duty Construction',
            'Suitable for Fashion & Upholstery'
        ]
    },
    {
        title: 'Endless Felt',
        image: 'linear-gradient(135deg, #C0C0C0, #808080)',
        description: 'Durable and flexible felt perfect for industrial and craft applications. Our Endless Felt is manufactured with consistent quality standards and can be customized for various industrial uses. Cost-effective without compromising on quality.',
        specs: [
            'Versatile Applications',
            'Excellent Durability',
            'Cost Effective',
            'Customizable Thickness',
            'Chemical Resistant',
            'Available in Rolls'
        ]
    }
];

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', function() {
    setupGalleryFilters();
    setupAnimations();
});

// Setup gallery filter buttons
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.6s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Open gallery modal
function openGalleryModal(index) {
    const modal = document.getElementById('galleryModal');
    const product = productDetails[index];
    
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDesc').textContent = product.description;
    
    // Build specs list
    const specsHtml = product.specs
        .map(spec => `<li>✓ ${spec}</li>`)
        .join('');
    document.getElementById('modalSpecs').innerHTML = `<h4>Key Features:</h4><ul>${specsHtml}</ul>`;
    
    // Set image background
    document.querySelector('.modal-image').style.background = product.image;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close gallery modal
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeGalleryModal();
    }
});

// Setup scroll animations
function setupAnimations() {
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
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Add keyboard navigation for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
    }
});
