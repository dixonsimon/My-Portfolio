        // Navigation Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Enhanced animation on scroll with earlier triggering
        function animateOnScroll() {
            const aboutImg = document.querySelector('.about-img');
            const projectCards = document.querySelectorAll('.project-card');
            const contactItems = document.querySelectorAll('.contact-item');
            const contactForm = document.querySelector('.contact-form');
            
            // About image animation - triggers when element is 20% in viewport
            if (isInViewport(aboutImg, 20)) {
                aboutImg.classList.add('animated');
            }
            
            // Project cards animation - triggers when element is 15% in viewport
            projectCards.forEach((card, index) => {
                if (isInViewport(card, 15)) {
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                }
            });
            
            // Contact items animation - triggers when element is 10% in viewport
            contactItems.forEach((item, index) => {
                if (isInViewport(item, 10)) {
                    setTimeout(() => {
                        item.classList.add('animated');
                    }, index * 150);
                }
            });
            
            // Contact form animation - triggers when element is 10% in viewport
            if (isInViewport(contactForm, 10)) {
                contactForm.classList.add('animated');
            }
        }
        
        // Improved viewport detection with threshold
        function isInViewport(element, threshold = 0) {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const thresholdPixel = (threshold / 100) * windowHeight;
            
            return (
                rect.top <= windowHeight - thresholdPixel &&
                rect.bottom >= thresholdPixel
            );
        }
        
        window.addEventListener('scroll', animateOnScroll);
        // Initial check on page load
        window.addEventListener('load', animateOnScroll);
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });