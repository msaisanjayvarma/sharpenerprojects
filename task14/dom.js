let myForm=document.getElementById('myForm');
let pDiv=document.getElementById('parentdiv');

myForm.addEventListener('submit',onSubmit);
pDiv.addEventListener('click',removeItem);

function onSubmit(event){
  event.preventDefault();
  let li_elem=document.createElement('li');

  let user_name=document.querySelector('#name').value;
  let email=document.querySelector('#email').value;
  let phno=document.querySelector('#phno').value;
  let txt=document.createTextNode( user_name+" - ");
  let txt1=document.createTextNode(email);
  let txt2=document.createTextNode(" - "+phno);

  li_elem.appendChild(txt);
  li_elem.appendChild(txt1);
  li_elem.appendChild(txt2);

  let delete_elem = document.createElement('button');
  delete_elem.className='delete';
  delete_elem.appendChild(document.createTextNode('Delete'));
  let edit_button = document.createElement('button');
  edit_button.className='edit';
  edit_button.appendChild(document.createTextNode('Edit'));

  li_elem.appendChild(delete_elem);
  li_elem.appendChild(edit_button);
  myForm.insertAdjacentElement('afterend',li_elem);

  const user_det={
    user_name,
    email,
    phno
  };
  let ser_user=JSON.stringify(user_det);

  localStorage.setItem(email,ser_user);

};

function removeItem(e){
    if(e.target.className=='delete' || e.target.className=='edit'){
        let todel=e.target.parentElement;
        if(e.target.className=='edit'){
          let thing=localStorage.getItem(todel.childNodes[1].textContent);
          let wantedthing=JSON.parse(thing);
          document.getElementById('name').value=wantedthing.user_name;
          document.getElementById('email').value=wantedthing.email;
          document.getElementById('phno').value=wantedthing.phno;
        }
        pDiv.removeChild(todel);
        localStorage.removeItem(todel.childNodes[1].textContent);
        
    }
}
