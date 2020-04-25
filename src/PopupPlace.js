import {Popup} from './Popup.js'
export class PopupPlace extends Popup {
  constructor(element, cardList, makeCard) {
    super(element)
    this.cardList = cardList;
    this.makeCard = makeCard;
    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
    this.element.querySelector('.popup__button_submit').addEventListener('click', this.submit.bind(this));
  }

  submit(event) {

    event.preventDefault();
    const name = document.querySelector('.popup__input_type_name').value;
    const link = document.querySelector('.popup__input_type_link-url').value;
    const newCard = this.makeCard(name, link);
    const newCardElem = newCard.create();
    this.cardList.addCard(newCardElem);

    this.close();
  }
}
