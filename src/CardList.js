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
    // добавляет обработчик кликов
    // this.setRemoveHandler();
  }
  // setRemoveHandler() {
  //   this.elem.addEventListener('click', this.removeCard.bind(this));
  // }
  // removeCard(event) {
  //   if (!event.target.classList.contains('popup__close')) {
  //     return;
  //   }
  //   const cardElem = event.target.closest('.card');
  //   const id = cardElem.dataset.id;
  //   console.log('remove card, id:', id);
  //   this.api
  //     .deleteCard(id)
  //     .then(res => {
  //       console.log(res);
  //       const card = this.elem.querySelector(`[data-id="${id}"]`); // DOM-элемент
  //       card.remove();
  //     })
  //     .catch(err => {
  //       this.errHandler.showError(err);
  //     });
  // }
}