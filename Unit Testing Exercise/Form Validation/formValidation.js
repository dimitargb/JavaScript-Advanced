function validate() {
    const companyFiled = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    companyCheck.addEventListener('change', () => {
        if (companyCheck.checked) {
            companyFiled.style.display = 'block';
        }
        else {
            companyFiled.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userNameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const comapnyNumberInput = document.getElementById('companyNumber');

        const validField = document.getElementById('valid');

        const usernamePattern = /^[a-zA-Z0-9]+$/;
        const passwordPattern = /^[\w]+$/;
        const emailPattern = /.*@.*\.*/;

        let userNameIsValid = false;
        let passIsValid = false;
        let confirmPasswordIsValid = false;
        let emailIsValid = false;
        let comapnyNumberIsValid = false;

        if (usernamePattern.test(userNameInput.value) && userNameInput.value.length >= 3 && userNameInput.value.length <= 20) {
            userNameIsValid = true;
        }

        if (emailPattern.test(emailInput.value)) {
            emailIsValid = true;
        }

        if (passwordPattern.test(passwordInput.value) &&
            passwordInput.value.length >= 5 &&
            passwordInput.value.length <= 15 &&
            passwordInput.value === confirmPasswordInput.value) {
            passIsValid = true;
            confirmPasswordIsValid = true;
        }

        if (companyCheck.checked) {
            if (comapnyNumberInput.value >= 1000 && comapnyNumberInput.value <= 9999) {
                comapnyNumberIsValid = true;
            }
        }
        else {
            comapnyNumberIsValid = true;
        }

        if (userNameIsValid && passIsValid && confirmPasswordIsValid && emailIsValid && comapnyNumberIsValid) {
            validField.style.display = 'block';
        }
        else {
            validField.style.display = 'none';
        }

        if (!userNameIsValid) {
            userNameInput.style.borderColor = 'red'
        } else {
            userNameInput.style.borderColor = 'none'
        }

        if (!passIsValid) {
            passwordInput.style.borderColor = 'red'
        }
        else {
            passwordInput.style.borderColor = 'none'
        }
        if (!confirmPasswordIsValid) {
            confirmPasswordInput.style.borderColor = 'red'
        }
        else {
            confirmPasswordInput.style.borderColor = 'none'
        }

        if (!emailIsValid) {
            emailInput.style.borderColor = 'red'
        }
        else {
            emailInput.style.borderColor = 'none'
        }

        if (!comapnyNumberIsValid) {
            comapnyNumberInput.style.borderColor = 'red'
        }
        else {
            comapnyNumberInput.style.borderColor = 'none'
        }
    });
}
