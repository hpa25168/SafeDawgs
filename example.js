const loginPage = document.querySelector('button');
loginPage.textContent = "Login/Sign up here!";

loginPage.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a name');
  loginPage.textContent = 'Your name is: ' + name;
}