let form=document.querySelector('form')

let em=document.getElementById('logemail')
let pwd=document.getElementById('logpass')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let email=em.value
    let password=pwd.value
    let users = JSON.parse(localStorage.getItem("users")) || []
    let found = false;
    for (let i = 0; i < users.length; i++) {
    console.log(users[i].email, users[i].password);
        if (users[i].email === email && users[i].password === password) {
            found = true;
            localStorage.setItem("loggedInUser", JSON.stringify(users[i]));
            alert("Login Successful!");
            window.location.href = "../home/home.html";
            break
        }
    }
    if(!found){
        window.alert('Invalid Email or Password');
    }
})