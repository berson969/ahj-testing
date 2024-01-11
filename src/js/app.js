import cardsValidatorWidget from "../components/cardsValidatorWidget/cardsValidatorWidget";

const element = document.querySelector(".container");
const answerContainer = document.querySelector(".answer-container");

const validator = new cardsValidatorWidget(element, answerContainer);

validator.bindToDOM();
