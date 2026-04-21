// FORM VALIDATION
const form = document.getElementById('applicationForm');
const message = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const roleSelect = document.getElementById('role').value;
    const cvInput = document.getElementById('cv').value.trim();

    if (!nameInput || !emailInput || !phoneInput || !roleSelect || !cvInput) {
      message.textContent = 'Please fill in all fields.';
      message.style.color = 'red';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      message.textContent = 'Please enter a valid email.';
      message.style.color = 'red';
      return;
    }

    message.textContent = 'Application submitted successfully.';
    message.style.color = 'green';
    form.reset();
  });
}

// DARK MODE TOGGLE
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggle.textContent = 'Light Mode';
  } else {
    toggle.textContent = 'Dark Mode';
  }
});
