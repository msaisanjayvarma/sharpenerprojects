let itemList=document.getElementById('items');
let input=document.getElementById('item');
let desc=document.getElementById('itemDesc');
let filter=document.getElementById('filter');
let form=document.getElementById('addForm');
 form.addEventListener('submit',addItem);
 itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
 
 function addItem(e){
    e.preventDefault();

    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(document.createTextNode(" # "+desc.value));
    
    let deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-info btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
 }

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('confirm ?')){
        let li=e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.childNodes;
        var dumelem= document.createElement('li');
        for(var i=0;i<itemName.length;i++){
          dumelem.appendChild(document.createTextNode(itemName[i].textContent));
        }
        if(dumelem.textContent.toLowerCase().indexOf(text) != -1){
          item.style.display='block';
         }
         else{
          item.style.display='none';
         }
    });
}