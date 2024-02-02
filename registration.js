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
    // Password validation logic (as before)
}

function validateFirstName() {
    // First name validation logic (as before)
}

function validateLastName() {
    // Last name validation logic (as before)
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

