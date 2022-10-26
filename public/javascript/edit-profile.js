async function editProfileHandler(event) {
  event.preventDefault();

  const name_first = document.querySelector('#name_first-edit').value.trim();
  const name_last = document.querySelector('#name_last-edit').value.trim();
  const username = document.querySelector('#username-edit').value.trim();
  const email = document.querySelector('#email-edit').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  const interest = document.querySelector('#interest-edit').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/profile/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name_first,
      name_last,
      username,
      email,
      interest
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/profile/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.edit-profile-form').addEventListener('submit', editProfileHandler);