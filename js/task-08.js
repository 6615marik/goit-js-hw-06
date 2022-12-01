const ref = {
    form: document.querySelector('.login-form'),
    mailInput: document.getElementsByName('email'),
    passwordInput: document.getElementsByName('password'),
    btn: document.querySelector('button'),
 }

ref.form.addEventListener('submit', LogIn);
 
function LogIn(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    let rezLogIn = {
        Email: email.value,
        Password:password.value,
    }
    
    console.log(rezLogIn);
    event.currentTarget.reset()
}
