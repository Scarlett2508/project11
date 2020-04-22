import {Popup} from './Popup.js'
// // import * as api from './Api.js'
// import {Api as api} from './Api.js'
import {api} from './script.js'

export class PopupProfile extends Popup {
  constructor(element, userInfo) {
    super(element)
    this.userName = null;
    this.jobName = null;
    this.userInfo = userInfo;
    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
    this.api = api;
  }
  open() {
    super.open();
    this.userName = document.forms.edit.who;

    this.jobName = document.forms.edit.description;
    this.userName.value = this.userInfo.returnUserInfo().name;
    this.jobName.value = this.userInfo.returnUserInfo().job;
  }



  submit(event) {
    event.preventDefault();
    const name = this.userName.value;
    const about = this.jobName.value;

    this.api.editUserProfile(name, about)
      .then(res => {
        this.userInfo.updateUserInfo(name, about)
        this.close()
      })

      .catch(err => {
        throw err;
      });


  }
}
