const loginPage = document.querySelector('button');
loginPage.textContent = "Login/Sign up here!";

loginPage.addEventListener('click', redirect);


function loginPageEvent() {
  let name = prompt('Enter a new name');
  loginPage.textContent = 'Player 1: ' + name;
}

function redirect()
{
  let url = loginPage.html;
  window.location(url);
}