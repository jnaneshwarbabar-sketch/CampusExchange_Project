// Beginner-friendly client-side interactions for the Campus Exchange prototype.
const searchBox = document.querySelector('.search');
const cards = document.querySelectorAll('.product-card');

if (searchBox) {
  searchBox.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    cards.forEach(function (card) {
      card.style.display = card.textContent.toLowerCase().includes(searchText) ? '' : 'none';
    });
  });
}

document.querySelectorAll('.product-card .dark-button').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelector('#product').scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.categories button').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.categories button').forEach(function (item) {
      item.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});

document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! This demo form was submitted successfully.');
  });
});

document.querySelectorAll('.details button').forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.textContent.includes('Need')) {
      alert('Product added to your cart.');
    } else if (button.textContent.includes('Wishlist')) {
      alert('Product added to your wishlist.');
    } else {
      document.querySelector('#chat').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.cart-row button').forEach(function (button) {
  button.addEventListener('click', function () {
    const quantityText = button.parentElement.textContent;
    if (button.textContent.includes('−')) {
      alert('Quantity decreased in this demo.');
    } else if (button.textContent.includes('＋')) {
      alert('Quantity increased in this demo.');
    } else {
      button.parentElement.parentElement.remove();
    }
  });
});

document.querySelectorAll('.action-link').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    alert(link.textContent.includes('Settings') ? 'Settings page will be added with the backend.' : 'No saved searches yet.');
  });
});

