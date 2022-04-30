// alert("hello");
const password = document.getElementById("password");
const eye = document.getElementById("eye");
const crossedEye = document.getElementById("crossedEye");
function showPassword() {
    password.type = "text";
    eye.style.display = "none";
    crossedEye.style.display = "block";
    password.focus();
}
function hidePassword() {
    password.type = "password";
    eye.style.display = "block";
    crossedEye.style.display = "none";
    password.focus();
}
eye.addEventListener("click", showPassword);
crossedEye.addEventListener("click", hidePassword);
