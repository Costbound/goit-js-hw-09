import form from "./02-form";

const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";
const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
if (localStorageValue) {
    emailInput.value = localStorageValue.email;
    messageInput.value = localStorageValue.message;
}


form.addEventListener("input", onInputsUpdate);
form.addEventListener("submit", onSubmit);

function onInputsUpdate() {
    const inputsValues = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    }
    localStorage.setItem(localStorageKey, JSON.stringify(inputsValues));
}

function onSubmit(evt) {
    evt.preventDefault();
    if (emailInput.value.length > 0 && messageInput.value.length > 0) {
        console.log(emailInput.value);
        console.log(messageInput.value);
        localStorage.removeItem(localStorageKey);
        form.reset();
    }
}
