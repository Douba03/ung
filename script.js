// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contact-form');

// Navigation Toggle
function toggleNav() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

navToggle.addEventListener('click', toggleNav);

// Close navigation when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        toggleNav();
    }
});

// Close navigation on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleNav();
    }
});

// Header Scroll Effect
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Header background on scroll
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    if (scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Throttled scroll handler for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = null;
        }, 16); // ~60fps
    }
});

// Back to top functionality
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Skip if href is just '#' (invalid selector)
        if (href === '#') {
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation and Submission
const formFields = {
    name: {
        element: document.getElementById('name'),
        error: document.getElementById('name-error'),
        validate: (value) => {
            if (!value.trim()) return 'Namn är obligatoriskt';
            if (value.trim().length < 2) return 'Namn måste vara minst 2 tecken';
            return null;
        }
    },
    email: {
        element: document.getElementById('email'),
        error: document.getElementById('email-error'),
        validate: (value) => {
            if (!value.trim()) return 'E-post är obligatoriskt';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Ange en giltig e-postadress';
            return null;
        }
    },
    phone: {
        element: document.getElementById('phone'),
        error: document.getElementById('phone-error'),
        validate: (value) => {
            if (value && value.trim()) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(value)) return 'Ange ett giltigt telefonnummer';
                if (value.replace(/\D/g, '').length < 8) return 'Telefonnummer måste vara minst 8 siffror';
            }
            return null;
        }
    },
    subject: {
        element: document.getElementById('subject'),
        error: document.getElementById('subject-error'),
        validate: (value) => {
            if (!value) return 'Välj ett ämne';
            return null;
        }
    },
    message: {
        element: document.getElementById('message'),
        error: document.getElementById('message-error'),
        validate: (value) => {
            if (!value.trim()) return 'Meddelande är obligatoriskt';
            if (value.trim().length < 10) return 'Meddelandet måste vara minst 10 tecken';
            return null;
        }
    },
    privacy: {
        element: document.getElementById('privacy'),
        error: null,
        validate: (checked) => {
            if (!checked) return 'Du måste godkänna integritetspolicyn';
            return null;
        }
    }
};

// Real-time validation
Object.entries(formFields).forEach(([fieldName, field]) => {
    if (field.element && field.error) {
        const validateField = () => {
            const value = field.element.type === 'checkbox' ? field.element.checked : field.element.value;
            const error = field.validate(value);
            
            if (error) {
                field.element.classList.add('error');
                field.error.textContent = error;
                field.error.setAttribute('role', 'alert');
            } else {
                field.element.classList.remove('error');
                field.error.textContent = '';
                field.error.removeAttribute('role');
            }
            
            return !error;
        };
        
        field.element.addEventListener('blur', validateField);
        field.element.addEventListener('input', validateField);
    }
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        Object.entries(formFields).forEach(([fieldName, field]) => {
            const value = field.element.type === 'checkbox' ? field.element.checked : field.element.value;
            const error = field.validate(value);
            
            if (error) {
                isValid = false;
                if (field.error) {
                    field.element.classList.add('error');
                    field.error.textContent = error;
                    field.error.setAttribute('role', 'alert');
                }
            }
        });
        
        if (!isValid) {
            // Focus on first error field
            const firstErrorField = Object.values(formFields).find(field => 
                field.error && field.error.textContent
            );
            if (firstErrorField) {
                firstErrorField.element.focus();
            }
            return;
        }
        
        // Get submit button
        const submitButton = contactForm.querySelector('.form-submit');
        const originalButtonText = submitButton.textContent;
        
        try {
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Skickar...';
            submitButton.classList.add('loading');
            
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            const successMessage = document.getElementById('form-success');
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form
            contactForm.reset();
            Object.values(formFields).forEach(field => {
                if (field.element) {
                    field.element.classList.remove('error');
                }
                if (field.error) {
                    field.error.textContent = '';
                    field.error.removeAttribute('role');
                }
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Ett fel uppstod vid skickandet. Försök igen eller kontakta oss direkt.');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            submitButton.classList.remove('loading');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll(
    '.service-card, .resource-card, .news-card, .about-content, .contact-content'
);

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card,
    .resource-card,
    .news-card,
    .about-content,
    .contact-content {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Start observing elements
animatedElements.forEach(el => observer.observe(el));

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 40);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

// Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('loading');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    img.classList.add('loading');
    imageObserver.observe(img);
});

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // Skip to main content with keyboard
    if (e.key === 'Tab' && !e.shiftKey && e.target === document.querySelector('.skip-nav')) {
        document.getElementById('main-content').focus();
    }
});

// Handle form keyboard navigation
const formElements = contactForm?.querySelectorAll('input, select, textarea, button');
formElements?.forEach((element, index) => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && element.type !== 'textarea' && element.type !== 'submit') {
            e.preventDefault();
            const nextElement = formElements[index + 1];
            if (nextElement) {
                nextElement.focus();
            }
        }
    });
});

// Service Worker Registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics and user interaction tracking
const trackEvent = (eventName, eventProperties = {}) => {
    // Replace with your analytics solution (GA, Mixpanel, etc.)
    console.log('Event:', eventName, eventProperties);
};

// Track important user interactions
document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (target) {
        const eventType = target.classList.contains('btn') ? 'button_click' : 'link_click';
        trackEvent(eventType, {
            text: target.textContent.trim(),
            href: target.href || null,
            location: window.location.pathname
        });
    }
});

// Track form interactions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('form_submit', {
            form_name: 'contact_form',
            location: window.location.pathname
        });
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    // Track page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            trackEvent('page_performance', {
                load_time: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                dom_ready: Math.round(perfData.domContentLoadedEventEnd - perfData.loadEventStart),
                location: window.location.pathname
            });
        }
    }
});

// Error tracking
window.addEventListener('error', (e) => {
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        location: window.location.pathname
    });
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Set initial scroll position
    handleScroll();
    
    // Add focus indicators for keyboard users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    console.log('Ungdomsstödet website initialized successfully');
});