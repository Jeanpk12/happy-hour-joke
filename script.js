
function redirectYes() {
  window.open("https://www.google.com/maps/search/bares+perto+de+mim", "_blank");
}

function redirectNo() {
  const buttonYes = document.querySelector('.button:first-child');
  const buttonNo = document.querySelector('.button:last-child');

  buttonNo.innerHTML = buttonYes.innerHTML;
  buttonNo.onclick = buttonYes.onclick;

  buttonNo.classList.add('active');
}

