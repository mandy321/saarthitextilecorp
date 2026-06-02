import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      {/* Existing gallery content */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Product Gallery & Manufacturing</h1>
          <p>Explore our premium textile products and world‑class manufacturing process</p>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="manufacturing-section">
        <div className="container">
          <h2 className="section-title">Our Manufacturing Process</h2>
          <p className="section-subtitle">Excellence in every step of production</p>

          <div className="process-grid">
            {/* Process cards remain unchanged – Tailwind handles dark mode via the .dark class */}
            <div className="process-card fade-in">
              <div className="process-number">01</div>
              <div className="process-image" style={{ background: 'linear-gradient(135deg, #8B7355 0%, #A0826D 100%)' }}></div>
              <h3>Raw Material Selection</h3>
              <p>We carefully source premium raw materials from trusted suppliers worldwide. Each batch undergoes rigorous quality testing to ensure excellence.</p>
            </div>

            <div className="process-card fade-in">
              <div className="process-number">02</div>
              <div className="process-image" style={{ background: 'linear-gradient(135deg, #6B5B4A 0%, #8B7355 100%)' }}></div>
              <h3>Advanced Processing</h3>
              <p>Using state‑of‑the‑art machinery and proven techniques, we process raw materials into fine textile fibers with consistent quality standards.</p>
            </div>

            <div className="process-card fade-in">
              <div className="process-number">03</div>
              <div className="process-image" style={{ background: 'linear-gradient(135deg, #A0826D 0%, #C9A961 100%)' }}></div>
              <h3>Weaving & Dyeing</h3>
              <p>Our expert craftsmen weave and dye fabrics using traditional techniques combined with modern technology for superior results.</p>
            </div>

            <div className="process-card fade-in">
              <div className="process-number">04</div>
              <div className="process-image" style={{ background: 'linear-gradient(135deg, #C9A961 0%, #D4AF76 100%)' }}></div>
              <h3>Quality Assurance</h3>
              <p>Every product undergoes comprehensive testing including strength, durability, color fastness, and finish quality before shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="products-gallery">
        <div className="container">
          <h2 className="section-title">Our Product Collection</h2>
          <p className="section-subtitle">Premium textiles for every industry</p>

          {/* Filter Buttons */}
          <div className="gallery-filters">
            <button className="filter-btn active" data-filter="all">All Products</button>
            <button className="filter-btn" data-filter="sports">Sports</button>
            <button className="filter-btn" data-filter="home">Home</button>
            <button className="filter-btn" data-filter="fashion">Fashion</button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {/* Items unchanged – dark mode handled by Tailwind */}
            <div className="gallery-item fade-in" data-category="sports">
              <div className="gallery-image" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}>
                <div className="image-overlay">
                  <button className="zoom-btn" onclick="openGalleryModal(0)">View Details</button>
                </div>
              </div>
              <h3>Tennis Ball Felt</h3>
              <p className="product-specs">Professional Grade • Premium Quality • ISO Certified</p>
              <p className="product-desc">Premium felt designed for professional tennis balls with superior durability and consistent performance characteristics.</p>
            </div>

            {/* Additional items omitted for brevity – they inherit dark mode styles */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Premium Textiles?</h2>
          <p>Contact us today for samples, pricing, and bulk orders</p>
          <a href="/#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;