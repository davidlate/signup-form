boxes = document.querySelectorAll('input')

boxes.forEach(box => box.addEventListener('focusout', (e) =>{
    let valid = box.checkValidity();

    if(!valid) setInvalid(box);
    else setValid(box);
}));


function setValid(box){
    box.style.backgroundColor = '#bafc5d';
    box.style.border = '2px #8aff0d solid';
}

function setInvalid(box){
    box.style.backgroundColor='pink';
    box.style.border = '2px red solid';
}
