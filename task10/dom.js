var myForm = document.querySelector('#myForm');
var naam = document.getElementById('name');
var email = document.getElementById('email');
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
e.preventDefault();
localStorage.setItem('name',naam.value);
localStorage.setItem('email',email.value);
}