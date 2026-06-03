// PROSPECTA GUIDE - Theme Scripts

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelectorAll('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const isOpen = mobileMenu.getAttribute('aria-hidden') === 'false';
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        mobileMenu.classList.toggle('translate-y-full', isOpen);
        mobileMenu.classList.toggle('translate-y-0', !isOpen);
      });
    });
  }
});
