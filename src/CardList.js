
export class CardList {
  constructor(element, createCard, api, errHandler, userInfo) {
    this.createCard = createCard;
    this.element = element;
    this.api = api;
    this.errHandler = errHandler;
    this.userInfo = userInfo;
  }

  addCard(elem) {
    this.element.appendChild(elem);
  }

  render() {
    this.api.loadCards()
      .then(cards => {

        cards.forEach((item) => {
          const card = this.createCard(item.name, item.link, item._id, item.isMine);
          this.addCard(card.create());
        })
      })
      .catch(err => {
        alert(err + ' Запрос не выполнен.');
      });
  }

}