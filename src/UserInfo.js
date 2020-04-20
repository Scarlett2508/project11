export class UserInfo {
  constructor(elem, api, errHandler) {
    this.elem = elem;
    this.api = api;
    this.errHandler = errHandler;
    this.userName = "";
    this.userJob = "";
    this.id = null;
  }


  updateUserInfo(name, job) {
    this.api.editUserProfile(name, job)
      .then(data => {
        console.log(data);
        this.setUserInfo(data.name, data.about, data.avatar);
      })
     
      .catch(err => {
        console.log(err);
      })
  }

  returnUserInfo(){
    const userData = {
      name: this.userName,
      job: this.userJob
    }
    return userData;
  }

  setUserInfo(newName, newJob, newAvatar) {
    this.userName = newName;
    this.userJob = newJob;
    this.newAvatar = newAvatar;
    document.querySelector('.user-info__name').textContent = this.userName;
    document.querySelector('.user-info__job').textContent = this.userJob;
    document.querySelector('.user-info__photo').style.backgroundImage = `url(${this.newAvatar})`;
    
  }

  getInfo() {
    this.api
      .getUserInfo()
      .then(data => {
        const { name, about, avatar, _id } = data;
        console.log(data);
        this.id = _id; 
        this.setUserInfo(name, about, avatar);
      })
      .catch(err => {
        this.errHandler.showError(err);
      });
  }

  getMyId() {
    return this.id;
  }

 
}

