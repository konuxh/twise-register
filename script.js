const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');

const loginPhoneInput = document.getElementById('loginPhone');
const loginPasswordInput = document.getElementById('loginPassword');

const loginBtn = document.getElementById('loginBtn');

// Parollar bir xil ekanligini tekshirish
function checkPasswords() {
    if (passwordInput.value && confirmPasswordInput.value && passwordInput.value === confirmPasswordInput.value) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);

// Parol ko'rinishini o'zgartirish
function togglePassword(id, element) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        element.textContent = "🙈";
    } else {
        input.type = "password";
        element.textContent = "👁️";
    }
}

// Ro'yxatdan o'tish
registerBtn.addEventListener('click', () => {
    const phone = "+998" + phoneInput.value;
    const password = passwordInput.value;

    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userPassword', password);

    alert("Ro'yxatdan o'tdingiz. Endi tizimga kiring.");
    showLogin();
});

// Tizimga kirish
loginBtn.addEventListener('click', () => {
    const savedPhone = localStorage.getItem('userPhone');
    const savedPassword = localStorage.getItem('userPassword');

    const enteredPhone = "+998" + loginPhoneInput.value;
    const enteredPassword = loginPasswordInput.value;

    if (enteredPhone === savedPhone && enteredPassword === savedPassword) {
        alert("Muvaffaqiyatli tizimga kirdingiz!");
        window.location.href = "home.html"; // Bosh sahifaga o'tish (home.html faylini yaratishingiz kerak)
    } else {
        alert("Telefon raqami yoki parol noto'g'ri!");
    }
});

// Sahifalar almashinuvi
function showLogin() {
    document.getElementById('register-container').style.display = "none";
    document.getElementById('login-container').style.display = "block";
}

function showRegister() {
    document.getElementById('register-container').style.display = "block";
    document.getElementById('login-container').style.display = "none";
}
