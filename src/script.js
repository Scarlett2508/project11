import './pages/index.css'

import {Api} from './Api.js'
import {Card} from './Card.js'
import {CardList} from './CardList.js'
import {ErrorHandler} from './ErrorHandler.js'
import {FormValidator} from './FormValidator.js'
import {PopupImage} from './PopupImage.js'
import {PopupPlace} from './PopupPlace.js'
import {PopupProfile} from './PopupProfile.js'
import {UserInfo} from './UserInfo.js'




export const api = new Api(API_URL, 'cohort9', '3deb33ce-b5f1-474c-aed8-a353bcbe5719');
const errorElem = document.querySelector('.error-text');
const errHandler = new ErrorHandler(errorElem);



// user info
const userInfoElem = document.querySelector(".user-info");
const userInfo = new UserInfo(userInfoElem, api, errHandler);

userInfo.getInfo();


// cards

function card(name,link) {return new Card(name,link); }
const createCard = (name, link, id, isMine) =>
new Card(name, link, id, isMine, api);
const cardListElem = document.querySelector('.places-list');
const cardList = new CardList( cardListElem,
  createCard,
  api,
  errHandler,
  userInfo
);
cardList.render();


// popup

const popupEdit = document.querySelector('.edit__button');
const popupButton = document.querySelector('.user-info__button');

const popup = new PopupPlace(document.querySelector('.popup__picture'), cardList, card);

const popupForEdit = new PopupProfile(document.querySelector('.popup__edit'), userInfo, document.querySelector('.popup__profile-form'));

// popup.open

popupButton.addEventListener('click', popup.open);
popupEdit.addEventListener('click', popupForEdit.open);

// image

const popupImage = new PopupImage(document.querySelector("#zoom-image"));
document.querySelector('.places-list').addEventListener('click', popupImage.openClickedImg.bind(popupImage));


// submit for profile

const popupButtonEdit = document.querySelector('.popup__button_edit');

popupButtonEdit.addEventListener('click', popupForEdit.submit);

// валидация

const formValidator = new FormValidator(document.querySelector(".popup__picture-form"));
formValidator.setEventListeners();




