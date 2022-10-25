async function newFormHandler(event) {
  event.preventDefault();

  const post_text = document.querySelector('textarea[name="post_text"]').value;
  const image = document.querySelector('input[name="image"]');
  debugger
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      image: image.files[0],
      post_text
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    debugger
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);

// module.exports = image;
