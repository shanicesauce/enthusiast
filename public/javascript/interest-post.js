async function getInterestpost(event) {
  event.preventDefault();


  const interest = event.target.value;

  document.location.replace(`/interest/${interest}`);
}


document
  .querySelector('#interest-signup')
  .addEventListener('change', getInterestpost);