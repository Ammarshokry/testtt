let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let confirm = document.querySelector("#confirm")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^\d{6,9}$/;
const handleSubmit = (event) => {
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;
    let obj = { email, password };
    let errors = 0;
    if (!emailRegex.test(email)) {
        alert("not valid email")
        errors++
    }
    if (!passwordRegex.test(password)) {
        alert("must put at least 6 numbers and maximum 9")
        errors++
    }
    if (errors > 0) {
        alert("fix the problems")

    } else {
        alert("email and password are good")
        window.location.href = "./products.html"
    }
}

