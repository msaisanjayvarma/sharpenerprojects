let items=document.querySelector('#items');
items.parentElement.style.backgroundColor='grey';

items.lastElementChild.textContent='Vaibhav';
items.lastChild.textContent='thankyou';

let sharp=document.createElement('div');
sharp.className='sh';
sharp.setAttribute('title','children');
let txtSharp=document.createTextNode('Hello Sharpeners');
sharp.appendChild(txtSharp);
 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 container.insertBefore(sharp,h1);
 sharp.style.fontSize='30px';
 items.firstElementChild.textContent='Yash Prasad';
 items.firstChild.textContent='Blessed to have you';

 console.log(items.previousSibling);
 items.previousElementSibling.style.color='blue';

 let clForm=document.querySelector('.title');
 clForm.nextSibling.textContent='sharpener';
 clForm.nextElementSibling.style.backgroundColor='yellow';

 let txtChild=document.createElement('li');
 txtChild.className='list-group-item';
 let txt=document.createTextNode('Hello mentors');
 txtChild.appendChild(txt);
let bef= document.querySelectorAll('.list-group-item')
 items.insertBefore(txtChild,bef[0]);




 
