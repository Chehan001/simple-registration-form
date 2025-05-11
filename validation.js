export function emailValidation() {
    const error = document.getElementById("mailError");
    const mail = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = emailRegex.test(mail);
    error.innerText = result ? "Valid email address" : "Please enter a valid email address";
    error.style.color = result ? "green" : "red";
    return result;
}

export function noValidation() {
    const error = document.getElementById("noError");
    const no = document.getElementById("mobile").value;
    const noRegex = /^[0-9]{10}$/;
    const result = noRegex.test(no);
    error.innerText = result ? "Valid mobile number" : "Please enter a valid mobile number";
    error.style.color = result ? "green" : "red";
    return result;
}
