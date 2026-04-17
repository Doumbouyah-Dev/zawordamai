
/* ----------------------------------------
 * NAVIGATION INTERACTIONS
 * ----------------------------------------
 *  */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-links-wrapper');
    
    menuToggle.addEventListener('click', () => {
        const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle the active class for sliding animation
        navWrapper.classList.toggle('active');
        
        // Update ARIA state for accessibility
        menuToggle.setAttribute('aria-expanded', !isOpened);
        
        // Optional: Simple hamburger to "X" animation toggle logic
        // You could add a 'close' class to the hamburger here if desired
    });

    // Close menu when clicking a link (useful for mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navWrapper.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});

/** 
 * ----------------------------------------------------------------
 * UI Interactions for Hero Section
 * ----------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        // Soften the hover transition via JS if not handled by CSS
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Optional: Simple Parallax effect for the background elements
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -0.01);
        const moveY = (e.clientY * -0.01);
        const geo = document.querySelector('.geo-squares');
        if (geo) {
            geo.style.transform = `rotate(15deg) translate(${moveX}px, ${moveY}px)`;
        }
    });
});


// ---------------------------------------------------------------------------------------------
//    NEWS & ANNOUNCEMENTS SECTION
// ---------------------------------------------------------------------------------------------    
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.news-card');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for each card to create a staggered effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        // Set initial state via JS to ensure visibility if JS is disabled
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        revealOnScroll.observe(card);
    });
});

// ---------------------------------------------------------------------------------------------
//    GET STARTED SECTION
// ---------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cta-card');

    cards.forEach(card => {
        const link = card.querySelector('a');
        
        // Make the entire card clickable
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            link.click();
        });

        // Prevent double trigger if clicking the link specifically
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Add keyboard support (Enter/Space to click)
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
});

// ---------------------------------------------------------------------------------------------
//    FOOTER INTERACTIONS
// ---------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Automatically update the copyright year
    const copyrightBar = document.querySelector('.bar-container p');
    if (copyrightBar) {
        const currentYear = new Date().getFullYear();
        copyrightBar.innerHTML = copyrightBar.innerHTML.replace('2026', currentYear);
    }
});


// ---------------------------------------------------------------------------------------------
//   PRIVACY POLICY & TERMS OF SERVICE
// ---------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.policy-section');
    const navLinks = document.querySelectorAll('.toc-link');

    // Smooth Scrolling for TOC
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // ScrollSpy Logic: Highlight TOC link on scroll
    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


// ---------------------------------------------------------------------------------------------
//    PRINCIPAL'S BIOGRAPHY PAGE
// ---------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const narrativeBeats = document.querySelectorAll('[data-reveal]');

    const revealBeats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealBeats.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    narrativeBeats.forEach(beat => {
        beat.style.opacity = '0';
        beat.style.transform = 'translateY(30px)';
        beat.style.transition = 'all 0.8s ease-out';
        revealBeats.observe(beat);
    });
});