
export class Card {
  constructor(name, link, id, isMine, api) {
    this.name = name;
    this.link = link;
    this.id = id;
    this.elem = null;
    this.isMine = isMine;
    this.api = api;
    this.likeButton = document.querySelector('.place-card__like-icon');
    this.removeButton = null;
  }

  remove() {
    this.elem.remove();
  }

  like() {
    this.likeButton.classList.toggle('place-card__like-icon_liked');
  }

  create() {

    this.elem = document.createElement('div');   // ${} — интерполяция, когда надо что-то вставить (переменную или вычисление)
    this.elem.classList.add('card');
    this.elem.dataset.id = this.id;
    const template = `<div class="place-card">
        <div class="place-card__image" style="color:rgb(1,1,1);background-image: url(${this.link})" data-url="${this.link}">
        <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">${this.name}</h3>

         <button class="place-card__like-icon"></button>
        </div>
      </div>`;
    this.elem.insertAdjacentHTML('beforeend', template);
    this.eventListeners();
    return this.elem;

  }

  eventListeners() {
    this.likeButton = this.elem.querySelector('.place-card__like-icon');
    this.likeButton.addEventListener('click', this.like.bind(this));  //this привязан к методу

    this.removeButton = this.elem.querySelector('.place-card__delete-icon');
    this.removeButton.addEventListener('click', this.remove.bind(this));
  }

}


