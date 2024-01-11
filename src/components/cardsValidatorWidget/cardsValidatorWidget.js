import isValidLuhn from "./luhnAlgorithm";
import cardsDict from "../../js/cards";

export default class cardsValidatorWidget {
  constructor(element) {
    this.element = element;
    this.answerContainer = document.querySelector(".answer-container");

    this.onSubmit = this.onSubmit.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  static get createCards() {
    const cards = document.createElement("ul");
    cards.classList.add("cards");
    Object.keys(cardsDict).forEach((card) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.classList.add("card", card, "disabled");
      span.textContent = cardsDict[card].title;
      span.title = cardsDict[card].title;
      li.appendChild(span);
      cards.appendChild(li);
    });

    return cards;
  }

  renderWidget() {
    this.clearCards();
    this.renderAnswers("start");
    const title = document.querySelector(".title");
    this.element.insertBefore(
      cardsValidatorWidget.createCards,
      title.nextSibling
    );
  }

  clearCards() {
    const cards = this.element.querySelector(".cards");
    if (cards) {
      cards.remove();
    }
  }

  getCardNumber() {
    return document.getElementById("card_number").value.replace(/\s/g, "");
  }

  bindToDOM() {
    this.renderWidget();
    this.element.addEventListener("input", this.onFilter);
    this.element.addEventListener("submit", this.onSubmit);

    const button = this.element.querySelector(".btn");
    button.addEventListener("click", this.onSubmit);
  }

  onFilter(event) {
    event.preventDefault();

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      const type = this.checkTypeCard(this.getCardNumber());
      if (type) {
        this.renderWidget();
        this.element.querySelector(`.${type}`).classList.remove("disabled");
      }
    }, 300);
  }

  onSubmit(event) {
    event.preventDefault();
    const number = this.getCardNumber();
    if (isValidLuhn(number)) {
      this.renderAnswers("valid", cardsDict[this.checkTypeCard(number)].title);
    } else {
      this.renderAnswers("notvalid");
    }
  }

  checkTypeCard(number) {
    for (const type in cardsDict) {
      const startsWith = cardsDict[type].startsWith;

      if (Array.isArray(startsWith)) {
        for (const start of startsWith) {
          if (number.startsWith(start)) {
            return type;
          }
        }
      } else if (
        typeof startsWith === "string" &&
        number.startsWith(startsWith)
      ) {
        return type;
      }
    }

    return null;
  }

  renderAnswers(result, typeCard = null) {
    let makeUp;
    let luhnText;
    let typeCardText;
    this.cleanAnswers();
    switch (result) {
      case "valid":
        makeUp = this.makeOk();
        luhnText = `<p>The credit card number you entered <strong>passed</strong> the Luhn Check and is therefore a valid credit card number!</p>`;
        typeCardText = `<p>This credit card's issuer is <strong>${typeCard}</strong>.</p>`;
        break;
      case "notvalid":
        makeUp = this.makeNot();
        luhnText = ` <p>The credit card number you entered <strong>failed</strong> the Luhn Check. It's not valid, did you make a typo?</p>`;
        typeCardText = `<p></p>`;
        break;
      case "start":
        makeUp = this.makeBlue();
        luhnText = `<p>We'll check your number against the Luhn Algorithm to see if it is a valid credit card number.</p>`;
        typeCardText = `<p></p>`;
        break;
    }

    this.answerContainer.innerHTML = `<h3>Luhn Algorithm Check ${makeUp}</h3>
    ${luhnText}
   <h3>Issuer identification number ${makeUp}</h3>
    ${typeCardText}`;
  }

  cleanAnswers() {
    if (this.answerContainer) {
      while (this.answerContainer.firstChild) {
        this.answerContainer.removeChild(this.answerContainer.firstChild);
      }
    }
  }

  makeOk() {
    return `<span class="glyphicon glyphicon-ok validluhn" style="color: green; display: inline-block;"></span>`;
  }
  makeNot() {
    return `<span class="glyphicon glyphicon-remove novalidluhn" style="color: red; display: inline-block;"></span>`;
  }

  makeBlue() {
    return `<span class="glyphicon glyphicon-info-sign iconiin" style="color: blue; display: inline-block;"></span>`;
  }
}
