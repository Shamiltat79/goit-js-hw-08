const formData = document.querySelector("feedback-form");
const throttle = require('lodash.throttle');

let userData = {};
formData.addEventListener('input', throttle(saveData, 500));

function saveData(event) {
    userData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

if (localStorage.getItem("feedback-form-state")) {
    const { email, message } = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email.value = email;
    formData.message.value = message;
    userData.email = email;
    userData.message = message;
}


formData.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state")
    formData.reset();
    
    
}
