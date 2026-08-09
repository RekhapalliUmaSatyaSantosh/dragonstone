const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

loginBtn.addEventListener("click", () => {
    window.location.href = "./login/login.html";
});

signupBtn.addEventListener("click", () => {
    window.location.href = "./register/register.html";
});