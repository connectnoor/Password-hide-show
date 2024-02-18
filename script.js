let passwordInput = document.getElementById('password');
let icon = document.getElementById('eye-icon');

icon.addEventListener('click' , () => {
    if (passwordInput.type === "password"){
        passwordInput.type = "text"
        icon.src = "./assets/eye-close.png"
    } else{
        passwordInput.type = "password"
        icon.src = "./assets/eye-open.png"
    }
})
