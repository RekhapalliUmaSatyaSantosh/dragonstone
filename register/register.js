console.log("REGISTER JS LOADED");

form = document.querySelector(".form");

console.log("FORM:", form);
let firstName = document.getElementById("fname");

let email = document.getElementById("email");
let lastName = document.getElementById("lname");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let fname = firstName.value;
    let lname = lastName.value;
    let userEmail = email.value;
    let userPassword = password.value;
    let confirm = confirmPassword.value;

    if (!fname || !lname || !userEmail || !userPassword || !confirm) {
        alert("Please fill all fields.");
        return;
    }

    if (userPassword !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.some(user => user.email === userEmail);

    if (exists) {
        alert("Email already registered.");
        return;
    }

    const user = {
        firstName: fname,
        lastName: lname,
        email: userEmail,
        password: userPassword
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    form.reset();

    window.location.href = "../login/login.html";
});