let itemList=document.getElementById('items');
let input=document.getElementById('item');
let form=document.getElementById('addForm');
 form.addEventListener('submit',addItem);
 itemList.addEventListener('click',removeItem);
 
 function addItem(e){
    e.preventDefault();

    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(input.value));
    
    let deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-info btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
 }

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('are you sure?')){
        let li=e.target.parentElement;
        itemList.removeChild(li);
      }
    }
    
}