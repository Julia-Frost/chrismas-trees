(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuIcon = document.querySelector('[data-menu-icon]');
  const mobileMenuCross = document.querySelector('[data-menu-cross]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuIcon.classList.toggle('is-open');
    mobileMenuCross.classList.toggle('is-open');
  });
})();
