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

const step1 = `
<div class="step1">
<h1 style="font-size: 40px;">Personal Info</h1>
<p class="sub-heading" style="font-size: 18px;">Please provide your name, email address and phone number</p>
<div class="form-input">
    <p>Name</p>
    <input placeholder="e.g. Rafiul Hasan" type="text">
</div>

<div class="form-input">
    <p>Email Address</p>
    <input placeholder="e.g. rafiulhasan@lorem.com" type="text">
</div>

<div class="form-input">
    <p>Phone Number</p>
    <input placeholder="e.g. 017********" type="text">
</div>
</div>
`

const step2 = `
<div class="step2">
<h1 style="font-size: 40px;">EDUCATIONAL Info</h1>
<p class="sub-heading" style="font-size: 18px;">Please provide your university name and ID</p>
<div class="form-input">
    <p>University Name</p>
    <input placeholder="e.g. United International University" type="text">
</div>

<div class="form-input">
    <p>ID</p>
    <input placeholder="e.g. 12345678910" type="text">
</div>

</div>
<div class="last-row">
<button class="hover next-btn">Next</button>
</div>
`


const step3 = `
<div class="step3">
    <h1 style="font-size: 40px;">Your Comment</h1>
    <p class="sub-heading" style="font-size: 18px;">Please provide your comment here</p>
    <div class="form-input">
        <p>Write here</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
</div>
<div class="last-row">
<button class="hover">Submit</button>
</div>
`
list_of_steps = [step1, step2, step3];

const s1 = document.getElementById('1');
const showStep1 = () =>{
    s3.classList.remove('num-focused');
    s2.classList.remove('num-focused');
    s1.classList.add('num-focused')
    return mainForm.innerHTML = step1;
};
s1.addEventListener('click',showStep1);


const s2 = document.getElementById('2');
const showStep2 = () =>{
    s1.classList.remove('num-focused');
    s3.classList.remove('num-focused');
    s2.classList.add('num-focused')
    return mainForm.innerHTML = step2;
};
s2.addEventListener('click',showStep2);


const s3 = document.getElementById('3');
const showStep3 = () =>{
    s1.classList.remove('num-focused');
    s2.classList.remove('num-focused');
    s3.classList.add('num-focused');
    mainForm.innerHTML = step3;
};
s3.addEventListener('click',showStep3);


const nextBtn = document.getElementById('