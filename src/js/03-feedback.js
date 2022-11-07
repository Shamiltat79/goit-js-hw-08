const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const formData = {};
const KEY_STORAGE = "feedback-form-state";

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', storagClear);

logFormData();

function handleInput(event) {
    formData[event.target.name] = event.target.value;    
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}
function storagClear(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(KEY_STORAGE);
    console.log(formData);

} 
function logFormData() {
    const email = document.querySelector('input');
    const message = document.querySelector('textarea');
    // console.log(email);
    // console.log(message);
    const formDataToStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if(formDataToStorage) {email.value = formDataToStorage.email;
    message.value = formDataToStorage.message;
}}
   
