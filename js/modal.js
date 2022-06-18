// Модальне вікно Замовлення

const buttonOrder = document.querySelectorAll('.button-order');
const overlayOrder = document.querySelector('.overlay-order');

buttonOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay-active');
    const order = overlayOrder.querySelector('.modal__order');
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayOrder || target.closest('.close-button')) {
    overlayOrder.classList.remove('overlay-active');
  }
});

// Модальне вікно Консультація

const buttonConsultation = document.querySelectorAll('.button-consultation');
const overlayConsultation = document.querySelector('.overlay-consultation');

buttonConsultation.forEach(buttonConsultation => {
  buttonConsultation.addEventListener('click', () => {
    overlayConsultation.classList.add('overlay-active');
    const order = overlayConsultation.querySelector('.modal__order');
    order.value = buttonConsultation.dataset.order;
  });
});

overlayConsultation.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayConsultation || target.closest('.close-button')) {
    overlayConsultation.classList.remove('overlay-active');
  }
});
