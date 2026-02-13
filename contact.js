document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.getElementById('formSuccess').style.display = 'none';
            
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '') {
                document.getElementById('nameError').textContent = 'Name is required';
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            if (email === '') {
                document.getElementById('emailError').textContent = 'Email is required';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Enter a valid email';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            if (message === '') {
                document.getElementById('messageError').textContent = 'Message cannot be empty';
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                document.getElementById('formSuccess').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            const successDiv = document.getElementById('newsletter-success');
            const successMsg = document.getElementById('newsletter-success');
            // Use translation if available, else fallback
            const lang = localStorage.getItem('ssbc_lang') || 'en';
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                successDiv.textContent = translations[lang]?.['newsletter_success'] || 'Thank you for subscribing!';
                successDiv.style.display = 'block';
                newsletterForm.reset();
                setTimeout(() => successDiv.style.display = 'none', 4000);
            } else {
                successDiv.textContent = translations[lang]?.['newsletter_invalid'] || 'Please enter a valid email.';
                successDiv.style.display = 'block';
                successDiv.style.color = '#ff6b6b';
                setTimeout(() => successDiv.style.display = 'none', 4000);
            }
        });
    }
});