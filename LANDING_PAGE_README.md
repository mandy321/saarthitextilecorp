# Saarthi Textile Corp - Modern Landing Page

A modern, responsive landing page for Saarthi Textile Corp featuring premium textile products with engaging animations and lead capture functionality.

## 🎯 Features

### Visual Design
- **Modern Hero Section**: Clean, gradient background with floating product cards
- **Tennis Ball Animation**: Engaging loading animation featuring a bouncing tennis ball
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in and scroll-reveal animations throughout
- **Premium Typography**: Custom fonts (Playfair Display + Poppins) for elegant presentation

### Core Sections
1. **Navigation**: Fixed navbar with smooth scrolling and mobile hamburger menu
2. **Hero**: Eye-catching hero section with floating product cards and CTA button
3. **Products**: 4-column grid showcasing:
   - Tennis Ball Felt
   - Woolen Blankets
   - Tweed Fabric
   - Endless Felt
4. **About**: Company overview with statistics and achievements
5. **Contact**: Integrated Google Maps and contact information
6. **Chatbot**: Lead capture widget for customer inquiries
7. **Footer**: Copyright and policy links

### Interactive Features
- **Chatbot Widget**: Collects user name, email, and inquiry details
- **Smooth Navigation**: Click navigation scrolls smoothly to sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll Animations**: Elements animate as they come into view
- **Loading Screen**: Custom tennis ball animation on page load

## 📁 Project Structure

```
saarthitextilecorp/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css           # Main stylesheet with layout and components
│   └── animations.css     # Animation keyframes and effects
├── js/
│   ├── main.js            # Core functionality and navigation
│   ├── chatbot.js         # Chatbot widget logic
│   └── animations.js      # Advanced animations and scroll effects
└── Old Website Screenshots/ # Reference screenshots
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required - runs directly in browser

### Installation
1. Clone the repository:
```bash
git clone https://github.com/mandy321/saarthitextilecorp.git
cd saarthitextilecorp
```

2. Open in browser:
```bash
# Option 1: Open directly
open index.html

# Option 2: Using Python (local server)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node.js
npx http-server
```

## 📱 Responsive Design

- **Desktop**: Optimized for screens 1024px and above
- **Tablet**: Fully responsive layout for 768px - 1023px
- **Mobile**: Touch-friendly interface for screens below 768px

## 🎨 Color Scheme

- **Primary Yellow**: `#E8E744` - Brand accent color (tennis ball inspired)
- **Dark Text**: `#1a1a1a` - Headers and emphasis
- **Light Gray**: `#f5f5f9` - Section backgrounds
- **Accent Red**: `#FF6B6B` - Interactive elements
- **Gray Text**: `#666666` - Body copy

## 🔧 Configuration

### Google Maps Integration
Update the Maps embed URL in `index.html` (Contact section) with your actual location:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```

### Chatbot Backend
To enable lead capture to your backend, uncomment and configure the API call in `js/chatbot.js`:
```javascript
fetch('/api/leads', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData)
})
```

### Contact Information
Update contact details in the Contact section:
- Phone number
- Email address
- Business hours
- Physical address

## ✨ Key Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (Vanilla)**: No frameworks required
- **Intersection Observer API**: Efficient scroll animations
- **Google Fonts**: Professional typography
- **Google Maps Embed**: Location integration

## 🎬 Animations

1. **Loading Screen**: Tennis ball bounces (2.5 seconds) before page reveal
2. **Fade-In**: Elements fade in as they enter viewport
3. **Floating Cards**: Product cards float with staggered timing
4. **Hover Effects**: Cards lift on hover with shadow enhancement
5. **Counter Animation**: Statistics count up when visible
6. **Parallax**: Subtle parallax effect on scroll

## 📊 Performance Features

- Lazy loading support for images
- Debounced scroll events
- RequestAnimationFrame for smooth animations
- CSS transitions for GPU acceleration
- Optimized for reduced motion preferences

## 📞 Chatbot Integration

The chatbot captures:
- User Name (required)
- Email Address (validated)
- Message/Inquiry (required)
- Timestamp
- Source (website_chatbot)

Currently logs to console; ready for backend integration.

## 🌐 Browser Support

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ⚠️ Limited support (animations may not work)

## 📝 Customization Tips

### Changing Colors
Update CSS variables in `styles/main.css`:
```css
:root {
    --primary-color: #E8E744;
    --dark-color: #1a1a1a;
    --accent-color: #FF6B6B;
}
```

### Adding New Sections
1. Add section to HTML with unique `id`
2. Add navigation link pointing to `id`
3. Style in CSS (use same spacing patterns)
4. Add fade-in classes for animations

### Disabling Animations
Remove or comment out animation classes from HTML elements:
- `.fade-in`
- `.fade-in-up`
- `.fade-in-right`

## 🔐 Security Notes

- All form validation happens client-side
- No sensitive data is stored client-side
- Ready for backend integration with proper HTTPS
- No external dependencies = no supply chain risks

## 📈 SEO Optimization

- Semantic HTML structure
- Meta viewport for mobile
- Descriptive page title
- Alt text placeholders for images
- Schema markup ready (can be added)

## 🤝 Contributing

Suggestions for improvements:
- Product image gallery
- Customer testimonials section
- Blog/News section
- Product comparison tool
- Advanced contact form with validation
- Dark mode toggle
- Multi-language support

## 📄 License

All rights reserved - Saarthi Textile Corp

## 📧 Support

For updates or issues, contact info@saarthitextile.com

---

**Built with ❤️ for Saarthi Textile Corp**  
*Premium textiles, Premium experience*
