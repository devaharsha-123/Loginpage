document.addEventListener("DOMContentLoaded", function () {
    // Validate password on input change
    document.getElementById("password").addEventListener("input", validatePassword);

    // Validate first name on input change
    document.getElementById("fname").addEventListener("input", validateFirstName);

    // Validate last name on input change
    document.getElementById("lname").addEventListener("input", validateLastName);

    // Validate username on input change
    document.getElementById("username").addEventListener("input", validateUsername);

    // Form submission event
    document.querySelector("form").addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function validatePassword() {
     function validatePassword() {
    const password = document.getElementById("password").value;
    const upperRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const numberRegex = /\d/g;

    document.getElementById("upper").classList.toggle("valid", upperRegex.test(password));
    document.getElementById("sp_char").classList.toggle("valid", specialCharRegex.test(password) && specialCharRegex.test(password));
    document.getElementById("number").classList.toggle("valid", numberRegex.test(password) && numberRegex.test(password));
    document.getElementById("length").classList.toggle("valid", password.length >= 15);
}
}

function validateFirstName() {
    function validateFirstName() {
    const firstName = document.getElementById("fname").value;
    const nameRegex = /^[A-Za-z]+$/;

    const isValid = nameRegex.test(firstName);

    if (isValid) {
        document.getElementById("fname-error").classList.remove("error");
    } else {
        document.getElementById("fname-error").classList.add("error");
    }
}
}

function validateLastName() {
    function validateLastName() {
    const lastName = document.getElementById("lname").value;
    const nameRegex = /^[A-Za-z]+$/;

    const isValid = nameRegex.test(lastName);

    if (isValid) {
        document.getElementById("lname-error").classList.remove("error");
    } else {
        document.getElementById("lname-error").classList.add("error");
    }
}
}

function validateUsername() {
    const username = document.getElementById("username").value;
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    const isValid = usernameRegex.test(username);

    if (isValid) {
        document.getElementById("username-error").classList.remove("error");
    } else {
        document.getElementById("username-error").classList.add("error");
    }
}

function validateForm() {
    // Basic form validation can be added here
    // For now, it returns true, allowing form submission
    return true;
}
<span id="username-error" class="error">Invalid username</span>

