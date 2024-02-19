//1.)
function bigImg(x) {
    x.style.height = "360px";
    x.style.width = "320px";
}

function normalImg(x) {
    x.style.height = "260px";
    x.style.width = "220px";
}








//2.)
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        nameInput.classList.add('invalid');
        document.getElementById('nameMessage').textContent = 'Name is required';
    } else {
        nameInput.classList.remove('invalid');
        document.getElementById('nameMessage').textContent = '';
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('invalid');
        document.getElementById('emailMessage').textContent = 'Invalid email format';
    } else {
        emailInput.classList.remove('invalid');
        document.getElementById('emailMessage').textContent = '';
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (password.length < 8){
        passwordInput.classList.add('invalid');
        document.getElementById('passwordMessage').textContent = 'Password must be at least 6 characters long';
    } else {
        passwordInput.classList.remove('invalid');
        document.getElementById('passwordMessage').textContent = '';
    }
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

nameInput.addEventListener('focus', validateName);
emailInput.addEventListener('focus', validateEmail);
passwordInput.addEventListener('focus', validatePassword);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
});









// 3.)
const colorBox = document.getElementById('color-box');

function zmnena(key) {
    switch (key) {
        case 'b':
            colorBox.style.backgroundColor = 'blue';
            break;
        case 'r':
            colorBox.style.backgroundColor = 'red';
            break;
        case 'g':
            colorBox.style.backgroundColor = 'green';
            break;

        default:

            break;
    }
}
document.addEventListener('keydown', function(event) {
    const  klavesnice = event.key.toLowerCase();
    zmnena(klavesnice);
});