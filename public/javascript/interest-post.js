async function getInterestpost(event) {
  event.preventDefault();


  const interest = event.target.value;

  document.location.replace(`/interest/${interest}`);
}

//   if (interest) {
// const response = await fetch(`/api/interest/${interest}`, {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
// });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }


document
  .querySelector('#interest-signup')
  .addEventListener('change', getInterestpost);