# Ungdomsstödet - Mobile-Friendly Youth Support Website

A modern, responsive website for a Swedish youth support organization, built with mobile-first principles and accessibility in mind.

## 🎯 Project Overview

This website represents "Ungdomsstödet" (Youth Support), a fictional Swedish organization providing mental health and counseling services for young people. The site is designed to be welcoming, professional, and easily accessible across all devices.

## ✨ Key Features

### Core Functionality
- **Responsive Navigation**: Mobile-first hamburger menu with smooth animations
- **Hero Section**: Compelling call-to-action with clear messaging
- **Service Cards**: Overview of different support services offered
- **Contact Forms**: Comprehensive contact form with validation
- **Resources Section**: Educational content and self-help materials
- **News/Blog**: Latest updates and articles
- **Emergency Contact**: Prominent crisis hotline information

### Technical Features
- **Mobile-First Design**: Optimized for screens from 320px to 1920px+
- **Performance Optimized**: Lazy loading, image optimization, efficient CSS
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **SEO Optimized**: Semantic HTML, meta tags, structured data
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

## 🎨 Design System

### Colors
- **Primary**: #3182ce (Professional Blue)
- **Secondary**: #2b6cb0 (Darker Blue)
- **Accent**: #38a169 (Success Green)
- **Emergency**: #e53e3e (Alert Red)
- **Neutral**: #f7fafc to #1a202c (Light to Dark)

### Typography
- **Font Stack**: System fonts for optimal performance
- **Base Size**: 16px minimum for readability
- **Line Height**: 1.6 for body text, 1.2 for headings
- **Weights**: 400 (regular), 600 (semibold), 700-800 (bold/black)

### Spacing
- **System**: 8px base unit (8, 16, 24, 32, 48, 64px)
- **Touch Targets**: Minimum 44px for interactive elements
- **Breakpoints**: 480px, 768px, 1024px, 1200px

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Default: 320px - 767px (Mobile)
768px - 1023px (Tablet)
1024px+ (Desktop)
```

## 🛠 File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS with mobile-first responsive design
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Test responsiveness** by resizing the browser or using developer tools
4. **Customize content** by editing the HTML, CSS, and JavaScript files

## 📋 Features Breakdown

### Navigation System
- Fixed header with backdrop blur effect
- Mobile hamburger menu with smooth animations
- Keyboard accessible with proper ARIA labels
- Auto-closes on link clicks and outside clicks

### Hero Section
- Eye-catching gradient background
- Clear value proposition
- Multiple call-to-action buttons
- Responsive image placement

### Services Section
- Grid layout adapting to screen size
- Hover effects and micro-interactions
- Icon system using inline SVGs
- Clear action buttons for each service

### Contact System
- Comprehensive contact form with validation
- Real-time field validation
- Accessible form labels and error messages
- Emergency contact information prominently displayed

### Performance Features
- Lazy loading for images
- Smooth scroll behavior
- Intersection Observer for animations
- Optimized CSS with minimal repaints

## 🎯 Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Screen Reader Support**: ARIA labels and descriptions
- **Keyboard Navigation**: Tab order and skip links
- **Color Contrast**: WCAG AA compliant ratios
- **Focus Indicators**: Clear focus styles for keyboard users
- **Alternative Text**: Descriptive alt text for all images

## 📊 Performance Optimizations

- **CSS**: Mobile-first approach reduces initial payload
- **JavaScript**: Event delegation and throttled scroll handlers
- **Images**: Lazy loading and optimized formats
- **Fonts**: System font stack for instant loading
- **Critical Path**: Inline critical CSS, defer non-critical JavaScript

## 🔧 Customization Guide

### Updating Content
1. **Text Content**: Modify HTML content directly in `index.html`
2. **Images**: Replace image URLs with your own (Pexels URLs included)
3. **Contact Info**: Update phone numbers, emails, and address
4. **Services**: Modify service cards in the services section

### Styling Changes
1. **Colors**: Update CSS custom properties for consistent theming
2. **Typography**: Modify font stacks and sizes in the CSS
3. **Spacing**: Adjust the 8px spacing system as needed
4. **Layout**: Modify grid layouts and flexbox arrangements

### Adding New Sections
1. **HTML**: Add new sections following the existing structure
2. **CSS**: Create corresponding styles following the design system
3. **JavaScript**: Add any interactive functionality needed

## 🌐 Browser Support

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Internet Explorer**: Basic functionality (no advanced CSS features)
- **Mobile Browsers**: Optimized for iOS Safari and Chrome Mobile

## 📈 SEO Considerations

- **Meta Tags**: Complete set of meta tags for social sharing
- **Semantic HTML**: Proper document structure
- **Schema Markup**: Ready for structured data implementation
- **URL Structure**: Clean, semantic URLs
- **Loading Speed**: Optimized for Core Web Vitals

## 🔒 Security Considerations

- **Form Validation**: Client-side and server-side validation needed
- **XSS Prevention**: Sanitize all user inputs
- **HTTPS**: Always use HTTPS in production
- **CSP**: Implement Content Security Policy headers

## 📞 Contact Information (Fictional)

This is a fictional organization created for demonstration purposes. In a real implementation, replace with actual contact details:

- **Phone**: 070-000 00 00
- **Email**: info@ungdomsstodet.se
- **Address**: Storgatan 123, Stockholm

## 🤝 Contributing

To improve this website:

1. **Test** across different devices and browsers
2. **Validate** HTML and CSS using W3C validators
3. **Check** accessibility using tools like WAVE or axe
4. **Optimize** images and assets for web delivery
5. **Monitor** performance using Lighthouse

## 📄 License

This project is for educational and demonstration purposes. Feel free to use and modify for your own projects.

---

**Note**: This website uses stock photos from Pexels for demonstration. In production, replace with authentic images that represent your organization.