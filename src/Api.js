export class Api {
  constructor(baseUrl, groupId, token) {
    this.baseUrl = `${baseUrl}/${groupId}`;

    this.token = token;
  }

  getUserInfo() {

    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this.token
      }
    })
      .then(res => this.parseResponce(res))
      .catch(err => {
        throw err;
      });
  }

  loadCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => this.parseResponce(res))
      .catch(err => {
        throw err;
      });
  }

  parseResponce(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  editUserProfile(newName, newAbout) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${newName}`,
        about: `${newAbout}`
      })
    })
      .then(res => this.parseResponce(res))
      .catch(err => {
        throw err;
      });
  }
}



