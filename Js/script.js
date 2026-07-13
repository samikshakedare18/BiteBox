function loggin()
{
    let email= document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let error=document.getElementById("error");
    if(email==="admin@123" && pass==="123")
    {
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user","email");
        window.location.href="index.html";
    }
    else{
        error.innerText="Invalid Email and Password";
        
    }

}
function togglePassword() {
    let passwordInput = document.getElementById("password");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput. type = "password";
    }
}