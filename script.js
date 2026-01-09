// DreamTravel Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contactForm');

    // Header Background Change on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else if (!document.querySelector('body').classList.contains('secondary-page')) {
            // Only remove if not on a secondary page that needs scrolled style by default
            // But for simplicity, we checked the URL in a more robust way if needed.
            // For now, let's keep it consistent.
            if(window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/DREAM%20TR/') {
                header.classList.remove('scrolled');
            }
        }
    });

    // Form Submission Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success message (alert for now, could be a toast)
            alert(`Thank you, ${name}! Your inquiry has been sent. We will contact you at ${email} soon.`);
            
            contactForm.reset();
        });
    }

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Animation on Scroll (Fade In)
    const fadeElements = document.querySelectorAll('.card, .section-title');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
