//night mode button
const nightModeBtn = document.getElementById("night-mode");
const modeHoverIn = () =>{
    const parent = document.getElementsByClassName("btn-row");
    const hoverBg = document.createElement("div");
    hoverBg.classList.add("night-mode");
    parent[0].appendChild(hoverBg);
    
}

const modeHoverOut = () =>{
    const hoverBg = document.getElementsByClassName("night-mode");
    hoverBg[0].remove();
};

const modeChange = () =>{
    const b = document.getElementsByTagName("body");
    
    if(b[0].id=="dark"){
        b[0].id = "light";
    }else{
        b[0].id = "dark";
    }
    console.log(b[0]);
};

nightModeBtn.addEventListener("mouseover",modeHoverIn);
nightModeBtn.addEventListener("mouseleave",modeHoverOut);
nightModeBtn.addEventListener("click",modeChange);








//form control
const mainForm = document.getElementById("main-form");

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const s1 = document.getElementById('1');
const showStep1 = () =>{
    s3.classList.remove('num-focused');
    s2.classList.remove('num-focused');
    s1.classList.add('num-focused')
    step1.classList.remove("hide");
    step2.classList.add("hide");
    step3.classList.add("hide");
};
s1.addEventListener('click',showStep1);


const s2 = document.getElementById('2');
const showStep2 = () =>{
    s1.classList.remove('num-focused');
    s3.classList.remove('num-focused');
    s2.classList.add('num-focused')
    step2.classList.remove("hide");
    step1.classList.add("hide");
    step3.classList.add("hide");
};
s2.addEventListener('click',showStep2);


const s3 = document.getElementById('3');
const showStep3 = () =>{
    s1.classList.remove('num-focused');
    s2.classList.remove('num-focused');
    s3.classList.add('num-focused');
    step3.classList.remove("hide");
    step1.classList.add("hide");
    step2.classList.add("hide");
};
s3.addEventListener('click',showStep3);


const next1 = () =>{
    nameValidate() && emailValidate() &&phoneValidate() ? showStep2() : 1;
};

const next2 = () =>{
    uniValidate() && idValidate() ? showStep3() : 1;
}
const nextBtnPI = document.getElementById('next-pi');
nextBtnPI.addEventListener('click',next1);
const nextBtnEI = document.getElementById('next-yc');
nextBtnEI.addEventListener('click', next2);




// form validation
const nameValidate = () =>{
    const  name = document.getElementById('name').value;
    const error = document.getElementById('name-error');
    const pattern = /^[a-zA-Z\s]+$/;
    if(name.match(pattern)){
        error.innerText = " ";
        return true;

    }else{
        error.innerText = "Please enter a valid name";
        return false;
    }
}


const emailValidate = () =>{
    const  email = document.getElementById('email').value;
    const error = document.getElementById('email-error');
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(pattern)){
        error.innerText = " ";
        return true;

    }else{
        error.innerText = "Please enter a valid email address";
        return false;
    }
}


const phoneValidate = () =>{
    const  phone = document.getElementById('phone').value;
    const error = document.getElementById('phone-error');
    const pattern =  /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    if(phone.match(pattern)){
        error.innerText = " ";
        return true;

    }else{
        error.innerText = "Please enter a valid phone address";
        return false;
    }
}


const uniValidate = () =>{
    const  uni = document.getElementById('uni').value;
    const error = document.getElementById('uni-error');
    const pattern =  /^[a-zA-Z\s]+$/;
    if(uni.match(pattern)){
        error.innerText = " ";
        return true;

    }else{
        error.innerText = "Please enter a valid university name";
        return false;
    }
}

const idValidate = () =>{
    const  id = document.getElementById('id').value;
    const error = document.getElementById('id-error');
    const pattern =  /^\d+$/;
    if(id.match(pattern)){
        error.innerText = " ";
        return true;

    }else{
        error.innerText = "Please enter a valid ID";
        return false;
    }
}




// after submittiing the form
const finalSubmit = document.getElementById('final-submit');

const submitHandler  = () =>{
    const container = document.getElementsByClassName('container');
    const name = document.getElementById('name').value;
    container[0].classList.add('centerize');
    const thankyou = `
    <div>
        <h1>Thank You, ${name}</h1>
        <p>for providing these informations</p>
    </div>
    `;
    container[0].innerHTML = thankyou;
}
finalSubmit.addEventListener('click', submitHandler);
