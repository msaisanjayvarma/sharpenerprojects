
let myForm = document.querySelector('#myForm');  
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
e.preventDefault();
let user_name = e.target.username.value;
let email = e.target.email.value;
let phno = e.target.ph.value;
var myObj = {
    user_name,
    email,
    phno
};
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem(email,myObj_serialized);
};