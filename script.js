const counter = document.querySelector(".count");

const ADD_BUTTON_CLASS = 'add';
const RESET_BUTTON_CLASS = 'reset';
const SUBSTRACT_BUTTON_CLASS = 'substract';

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains(ADD_BUTTON_CLASS)) {
        console.log("Adding...");
        counter.innerHTML++;
    }

    if (event.target.classList.contains(RESET_BUTTON_CLASS)) {
        console.log("You have reset the counter");
        counter.innerHTML = 0;
    }

    if (event.target.classList.contains(SUBSTRACT_BUTTON_CLASS)) {
        console.log("Substracting...");
        counter.innerHTML--;
    }
})