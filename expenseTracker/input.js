let expAmount = document.getElementById('Amount');
let desc = document.getElementById('desc');
let slctValue = document.getElementById('slctValue');
let newDiv = document.getElementById('new');

newDiv.addEventListener('click', removeYaEditItem);

let addExp = document.getElementById('addExp');
addExp.addEventListener('click', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(expAmount.value + " "));
    li.appendChild(document.createTextNode(desc.value + " "));
    li.appendChild(document.createTextNode(slctValue.value));
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    let sym = document.createTextNode('X');
    deleteButton.appendChild(sym);

    let editButton = document.createElement('button');
    editButton.className = 'edit';
    let editSym = document.createTextNode('Edit');
    editButton.appendChild(editSym);

    li.appendChild(deleteButton);
    li.appendChild(editButton);

    newDiv.insertAdjacentElement('afterbegin', li);

    const persist = {
        a: expAmount.value,
        d: desc.value,
        option: slctValue.value
    }
    let obj = JSON.stringify(persist);
    localStorage.setItem(slctValue.value, obj);
});

function removeYaEditItem(e) {
    e.preventDefault();
    let li = e.target.parentElement;
    if (e.target.classList.contains('edit')) {
        let thing = JSON.parse(localStorage.getItem(li.childNodes[2].textContent));
        expAmount.value = thing.a;
        desc.value = thing.d;
        slctValue.value = thing.option;
    }
    newDiv.removeChild(li);
    localStorage.removeItem(li.childNodes[2].textContent);
}

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    let it = document.getElementById('slctValue');
    Array.from(it).forEach((option) => {

        if (localStorage.getItem(option.value) != null) {
            let thing = JSON.parse(localStorage.getItem(option.value));
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(thing.a + " " + thing.d + " " + thing.option));
            let deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm float-right delete';
            let sym = document.createTextNode('X');
            deleteButton.appendChild(sym);

            let editButton = document.createElement('button');
            editButton.className='edit';
            let editSym = document.createTextNode('Edit');
            editButton.appendChild(editSym);

            li.appendChild(deleteButton);
            li.appendChild(editButton);
            newDiv.insertAdjacentElement('afterbegin', li);
        }
    })

})