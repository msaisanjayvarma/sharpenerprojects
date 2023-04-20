
let classList = document.querySelectorAll('.list-group-item');

classList[2].style.backgroundColor='green';
classList.forEach((li)=>{
    li.style.fontWeight='bold';
});