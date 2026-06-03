/**
 * PROSPECTA GUIDE - Interactive Design System
 * Version: 1.1.0
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const initMobileMenu = () => {
    const toggles = document.querySelectorAll('[data-mobile-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    
    if (!menu) return;

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const isOpen = menu.getAttribute('aria-hidden') === 'false';
        menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        menu.classList.toggle('translate-y-full', isOpen);
        menu.classList.toggle('translate-y-0', !isOpen);
        document.body.classList.toggle('overflow-hidden', !isOpen);
      });
    });
  };

  // Reveal on Scroll Animation
  const initScrollReveal = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });
  };

  // Header Scroll Effect
  const initHeaderScroll = () => {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        header.classList.add('bg-transparent');
      }
    });
  };

  // Initialize all systems
  initMobileMenu();
  initScrollReveal();
  initHeaderScroll();
});
