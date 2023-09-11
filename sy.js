
dan2.js
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const regBtn = document.getElementById("regBtn");

const arr = []

regBtn.addEventListener('click', ()=>{
    if (userName.value == "" || email.value == "" || password.value == "" || confirmPass.value == ""){
        alert("Input field cannot be empty")
    }else if(password.value !== confirmPass.value){
        alert('Password does not match')
    }else if(password.value.length < 8){
        alert("Password must be at least 8 characters")
    }else{
        const obj = {
            Username: userName.value,
            Email: email.value,
            Password: password.value,
            ConfirmPass: confirmPass.value
        }
        
        arr.push(obj)
        alert('Registration Successful!')
        userName.value = ""
        email.value = ""
        password.value = ""
        confirmPass.value = ""
        email.value = ""
    }
        
    console.log(arr)
})

function eye(){
    password.type === "password" ? password.type = "text"
    : password.type = "password"
}

function eye2(){
    confirmPass.type === "password" ? confirmPass.type = "text"
    : confirmPass.type = "password"
}

const mode = document.getElementById('mode')
const body = document.querySelector('body')
    
mode.style.color = "white"
mode.style.background = "black"
body.style.color = "black"
body.style.background = "white"

mode.addEventListener('click', () => {
    body.style.background == "white" ? body.style.background = "black"
    : body.style.background = "white"
    body.style.color == "black" ? body.style.color= "white" 
    : body.style.color= "black" 

    mode.style.color == "white" ? mode.style.color = "black"
    : mode.style.color = "white"
    mode.style.background == "black" ? mode.style.background = "white"
    : mode.style.background = "black"
})

