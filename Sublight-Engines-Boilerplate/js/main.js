// FORM FIELDS VALIDATIONS //

const form = document.getElementById('service_request_form');
const fullName = document.getElementById('request_fullname');
const email = document.getElementById('email');
const phone = document.getElementById('request_phone');

// If so, error messages will be displayed under the fields after clicking on "submit"//
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("#### test")
    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    if(fullNameValue === '') {
        setError(fullName, 'Full name is required');
    } else {
        setSuccess(fullName);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
};


// HAMBURGA' MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click"), () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})