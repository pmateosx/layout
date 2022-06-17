let state = 0;
const products = document.querySelector('.products');
const order = document.querySelector('.order');
const dropdown = document.querySelector('.dropdown');
const dropdownOrder = document.querySelector('.dropdown-order');

products.addEventListener('click', function(){
  if (state === 0) {
    dropdown.classList.add('open')
    dropdown.classList.remove('hide')
    state = 1;
  } else {
    dropdown.classList.remove('open')
    dropdown.classList.add('hide')
    state = 0;
  }
});

order.addEventListener('click', function(){
    if (state === 0) {
      dropdownOrder.classList.add('open')
      dropdownOrder.classList.remove('hide')
      state = 1;
    } else {
      dropdownOrder.classList.remove('open')
      dropdownOrder.classList.add('hide')
      state = 0;
    }
  });