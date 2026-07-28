const cartCount = document.querySelector('[data-cart-count]');
const favoriteCounter = document.querySelector('[data-favorite-counter]');
const modal = document.querySelector('[data-search-modal]');
let cart = 0;
let favorites = 0;

document.querySelectorAll('[data-add-to-cart]').forEach((button) => {
  button.addEventListener('click', () => {
    cart += 1;
    cartCount.textContent = cart;
    button.textContent = 'Añadido ✓';
    setTimeout(() => { button.innerHTML = button.classList.contains('book-card__add') ? 'Añadir <span>+</span>' : '+'; }, 1200);
  });
});

document.querySelectorAll('[data-favorite]').forEach((button) => {
  button.addEventListener('click', () => {
    const active = button.classList.toggle('book-card__favorite--active');
    button.textContent = active ? '♥' : '♡';
    favorites += active ? 1 : -1;
    favoriteCounter.textContent = favorites;
  });
});

document.querySelector('[data-search-button]').addEventListener('click', () => {
  modal.classList.add('search-modal--open');
  modal.setAttribute('aria-hidden', 'false');
  document.querySelector('#search-input').focus();
});
document.querySelector('[data-search-close]').addEventListener('click', () => modal.classList.remove('search-modal--open'));
modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('search-modal--open'); });

document.querySelector('[data-newsletter]').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('[data-newsletter-message]').textContent = '¡Gracias! Muy pronto tendrás noticias nuestras.';
  event.currentTarget.reset();
});
