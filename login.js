const loginForm = document.querySelector('#loginForm');
const loginMessage = document.querySelector('#loginMessage');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim().toLowerCase();
  const password = document.querySelector('#password').value;

  if (email === 'admin@campus.com' && password === 'admin123') {
    sessionStorage.setItem('campusUser', 'admin');
    window.location.href = 'Admin/admin.html';
  } else if (email === 'client@campus.com' && password === 'client123') {
    sessionStorage.setItem('campusUser', 'client');
    window.location.href = 'Client%20Side%20Web%20pages/client.html#home';
  } else {
    loginMessage.textContent = 'Invalid credentials. Try one of the demo accounts.';
  }
});

