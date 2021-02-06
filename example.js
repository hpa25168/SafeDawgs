const myHeading = document.querySelector('Button');
myHeading.textContent = "Click 'here' to enter your name";

myHeading.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a name');
  myHeading.textContent = 'Your name is: ' + name;
}