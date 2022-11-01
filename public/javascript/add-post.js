// eslint-disable-next-line no-unused-vars
async function newFormHandler(event) {
  event.preventDefault();

  const post_text = document.querySelector('textarea[name="post_text"]').value;
  const interest = document.querySelector('#interest-signup').value;
  const image = document.querySelector('input[name="image"]');

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      image: image.files[0],
      post_text,
      interest
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
