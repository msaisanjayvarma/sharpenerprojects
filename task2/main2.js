const ulman=document.querySelector('.items');
ulman.children[0].innerHTML = '<h1>Hi Sanjay</h1>';

ulman.addEventListener('mouseover',(e)=>{
    ulman.children[0].style.color="darkblue";
});
ulman.addEventListener('click',(e)=>{
    ulman.children[0].style.color="red";
});
ulman.addEventListener('mouseout',(e)=>{
    ulman.children[0].style.color="green";
});

const btn=document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
   e.preventDefault();
   const st= document.getElementById('name');
   const em=document.getElementById('email');
   const msg=document.getElementById('msg');
   if(st.value==='' || em.value===''){
     msg.innerHTML='<h4>please enter all fields</h4>';
     msg.style.color='red';
     setTimeout(()=>msg.remove(),3000);
   }else{
     const li=document.createElement('li');
     li.appendChild(document.createTextNode(`${st.value} : ${em.value}`));
     document.getElementById('users').appendChild(li);
     st.value='';
     em.value='';
   }
});