boxes = document.querySelectorAll('input');
btn = document.querySelector('button');
let p1 = '';

boxes.forEach(box => box.addEventListener('focusout', (e) =>{

    let valid = checkGood(box);
    if(!valid) setInvalid(box);
    else setValid(box);
}));



btn.addEventListener('click', (e) => {
    boxes.forEach( box => {
        let valid = checkGood(box);
        if(!valid) setInvalid(box);
        else setValid(box);
    })
})




function setValid(box){
    box.style.backgroundColor = '#bafc5d';
    box.style.border = '2px #8aff0d solid';
    removeErrorMessage(box);
    box.classList.remove('issue');
}

function setInvalid(box){
    box.style.backgroundColor='pink';
    box.style.border = '2px red solid';
    box.classList.add('issue');
    setErrorMessage(box);
}


function setErrorMessage(box){
    let msg;
    switch(box.type){
        case "text":
            msg = "This field is required";
            break;

        case "email":
            msg = "Please enter a valid email";
            break;
        
        case "tel":
            msg = "Please enter a valid phone number";
            break;
        
        case "password":
            if (box.id=="password") msg = "Must contain at least one capital, one number, and 3+ characters"
            if (box.id=="password2") msg= "Please enter a valid, matching password.";
            break;
        }

    const eBox = document.querySelector(`p.${box.id}`)
    eBox.textContent = msg;
}

function removeErrorMessage(box){
    const eBox = document.querySelector(`p.${box.id}`)
    eBox.textContent = '';
}

function checkGood(box){
    let result;
    let match;

    if(box.type == "text"){
        if (box.value == "") result = false;
        else result = true;
    }
    else if (box.type=="email"){
        match = box.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!(match === null)) result = true;
        else result = false;
    }

    else if (box.type=="tel"){
        match = box.value.match(/\+{0,1}[0-9]{0,3}\-{0,1}\({0,1}[0-9]{3}\){0,1}\-{0,1}[0-9]{2,3}\-{0,1}[0-9]{4}/);
        if (match===null || box.value !== match.join('')) result = false;
        else result = true;
        console.log(result);
    }

    else if(box.id == "password"){
        if(box.value.length<3) result = false;
        else if(!(/\d/.test(box.value))) result = false;
        else if(!(/[A-Z]/.test(box.value))) result = false;
        else result = true;
        console.log(result);
    }

    else if(box.id == "password2"){
        if(box.value == document.querySelector('#password').value) result = true;
        else result = false;
    }

    return result;
}
