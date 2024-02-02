document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const username = document.getElementById('Username').value;
        const password = document.getElementById('password').value;
        const fname = document.getElementById('Fname').value;
        const lname = document.getElementById('Lname').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const termsCheckbox = document.getElementById('terms');

        
        if (
            !validateUsername(username) ||
            !validatePassword(password) ||
            !validateFirstName(fname) ||
            !validateLastName(lname) ||
            !validatePhoneNumber(phoneNumber) ||
            !termsCheckbox.checked
        ) 
        {
            alert('Please fill in all the required fields correctly and accept the terms & conditions.');
        } 
        else {
            // You can submit the form or perform other actions here
            alert('Registration successful!');
            
            // form.submit();
        }
    }

    function validateUsername(username) {
        // Username should have a minimum of 5 characters and a maximum of 15 characters
        const minLength = 5;
        const maxLength = 15;

        if (username.length < minLength || username.length > maxLength) {
            alert('Username must be between 5 and 15 characters.');
            return false;
        }

        

        return true;
    }

    function validatePassword(password) {
        // Password should have a minimum of 8 characters
        const minLength = 8;

        // Password should contain at least one uppercase, one lowercase, one number, and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;

        if (password.length < minLength || !regex.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }

        return true;
    }
    function validateFirstName(fname) {
        // First name should have a minimum of 5 characters, a maximum of 15 characters, and contain only alphabets
        const minLength = 5;
        const maxLength = 15;
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (fname.length < minLength || fname.length > maxLength || !alphabetRegex.test(fname)) {
            alert('First name must be between 5 and 15 characters and contain only alphabets.');
            return false;
        }

        return true;
    }

    function validateLastName(lname) {
        // Last name should have a minimum of 5 characters, a maximum of 15 characters, and contain only alphabets
        const minLength = 5;
        const maxLength = 15;
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (lname.length < minLength || lname.length > maxLength || !alphabetRegex.test(lname)) {
            alert('Last name must be between 5 and 15 characters and contain only alphabets.');
            return false;
        }

        return true;
    }

    function validatePhoneNumber(phoneNumber) {
        // Phone number validation for Indian format /^[6-9]\d{9}$/
        const regex = /^[6-9]\d{9}$/;

        if (!regex.test(phoneNumber)) {
            alert('Please enter a valid Indian phone number.');
            return false;
        }

        return true;
    }

   
});
