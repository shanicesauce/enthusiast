async function newFormHandler(event) {
  event.preventDefault();

  const post_text = document.querySelector('textarea[name="post_text"]').value;
  const image = document.querySelector('input[name="image"]').value;

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      image,
      post_text
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

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
