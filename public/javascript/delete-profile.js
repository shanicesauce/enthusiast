async function deleteProfileHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/signup');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('#delete-profile-btn').addEventListener('click', deleteProfileHandler);