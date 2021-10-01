const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.querySelector('.first-name').value;
  const lastName = document.querySelector('.last-name').value;
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  if (firstName === '') {
    addError('first-name', "First name can't be empty");
  } else {
    removeError('first-name');
  }

  if (lastName === '') {
    addError('last-name', "Last name can't be empty");
  } else {
    removeError('last-name');
  }

  if (email === '') {
    addError('email', "Email can't be empty");
  } else if (!validateEmail(email)) {
    addError('email', "Looks like the email isn't valid");
  } else {
    removeError('email');
  }

  if (password === '') {
    addError('password', "Password can't be empty");
  } else if (password.length < 4) {
    addError('password', "Pasword can't be shorter than 4 characters");
  } else {
    removeError('password');
  }

  if (
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0 &&
    validateEmail(email) &&
    password.length > 3
  ) {
    e.preventDefault();
    alert('Thank you for your submission!');
  }
});

function addError(field, msg) {
  const selectForm = document.querySelector('.' + field).parentNode;
  selectForm.classList.add('error');

  const errorMsg = selectForm.querySelector('.error-msg');
  errorMsg.innerHTML = msg;
}

function removeError(field) {
  const selectForm = document.querySelector('.' + field).parentNode;
  selectForm.classList.remove('error');
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
