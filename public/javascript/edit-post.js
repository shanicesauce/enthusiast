async function editFormHandler(event) {
  event.preventDefault();

  const post_text = document.querySelector('textarea[name=edit-post]').value.trim();
  const interest = document.querySelector('#interest-signup').value;
  const image = document.querySelector('input[name="image"]');

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      image: image.files[0],
      post_text,
      interest
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);