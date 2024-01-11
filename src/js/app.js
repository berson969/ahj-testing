import cardsValidatorWidget from "../components/cardsValidatorWidget/cardsValidatorWidget";

const element = document.querySelector(".container");
const validator = new cardsValidatorWidget(element);

validator.bindToDOM();
