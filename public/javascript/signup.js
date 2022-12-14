async function signupFormHandler(event) {
  event.preventDefault();

  const name_first = document.querySelector('#name_first-signup').value.trim();
  const name_last = document.querySelector('#name_last-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const interest = document.querySelector('#interest-signup').value;

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        name_first,
        name_last,
        username,
        email,
        password,
        interest,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
