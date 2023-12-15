const form = document.querySelector('form');
const userIdInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const userId = 'Dimond077';
  const password = 'jayesh077';

  if (userIdInput.value === userId && passwordInput.value === password) {
    // Login successful, redirect to cart page
    window.location.href = 'cart.html';
  } else {
    // Login failed, show error message
    alert('Invalid username or password.');
  }
});
