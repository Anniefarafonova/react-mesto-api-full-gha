class Api {
    constructor(options) {
      this._url = options.baseUrl
      this._headers = options.headers
      this._authorization = options.headers.authorization
    }
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  
    getInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
    getCard() {
      return fetch(`${this._url}/cards`, {
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
    setUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.firstname,
          about: data.description,
        })
      })
        .then(this._checkResponse)
    }
    setUserAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar,
        })
      })
      .then(this._checkResponse)
    }
    addCard(data){
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.title,
          link: data.link,
        })
      })
      .then(this._checkResponse)
    }
    addLike(cardId){
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
        authorization: this._authorization,
        }
      })
      .then(this._checkResponse)
    }
    deleteLike(cardId){
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
        authorization: this._authorization,
        }
      })
      .then(this._checkResponse)
    }
    changeLikeCardStatus(cardId, isLiked){
      if (isLiked) {
        return this.addLike(cardId);
    } else if (!isLiked){
        return this.deleteLike(cardId);
    }
  }

    deleteCard(cardId){
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
        authorization: this._authorization,
        }
      })
      .then(this._checkResponse)
  
    }
  }


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: '26786be3-fed9-4d83-9ae2-1348eee1b7d5',
        'Content-Type': 'application/json'
    }
});

export default  api