// FORM VALIDATIONS //

const form = document.getElementById('service_request_form');
const fullName = document.getElementById('request_fullname');
const email = document.getElementById('email');


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








// // As per the HTML Specification
// const emailRegExp =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// // Now we can rebuild our validation constraint
// // Because we do not rely on CSS pseudo-class, we have to
// // explicitly set the valid/invalid class on our email field
// window.addEventListener("load", () => {
//   // Here, we test if the field is empty (remember, the field is not required)
//   // If it is not, we check if its content is a well-formed e-mail address.
//   const isValid = email.value.length === 0 || emailRegExp.test(email.value);
//   email.className = isValid ? "valid" : "invalid";
// });

// // This defines what happens when the user types in the field
// email.addEventListener("input", () => {
//   const isValid = email.value.length === 0 || emailRegExp.test(email.value);
//   if (isValid) {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   } else {
//     email.className = "invalid";
//   }
// });

// // This defines what happens when the user tries to submit the data
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const isValid = email.value.length === 0 || emailRegExp.test(email.value);
//   if (!isValid) {
//     email.className = "invalid";
//     error.textContent = "I expect an e-mail, darling!";
//     error.className = "error active";
//   } else {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   }
// });