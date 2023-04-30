
let myForm = document.querySelector('#myForm');  
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
e.preventDefault();
let user_name = e.target.username;
let email = e.target.email;
const myObj = {
    name : user_name.value,
    email: email.value
};
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem("user",myObj_serialized);
};