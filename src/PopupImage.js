import {Popup} from './Popup.js'


export class PopupImage extends Popup {
  constructor(element) {
    super(element);
    this.popupImage = this.element.querySelector('.popup__image');
  }

  getUrl(clickedImage) {
    const urlString = clickedImage.dataset.url;

    this.popupImage.setAttribute('src', urlString);
  }

  openClickedImg(event) {
    if (event.target.classList.contains('place-card__image')) {
      this.open();
      this.getUrl(event.target);
    }
  }
}
