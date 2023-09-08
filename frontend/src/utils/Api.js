class Api {
  constructor(options) {
    this._url = options.baseUrl
    // this._headers = options.headers
    // this._authorization = options.headers.authorization
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        //   authorization: this._authorization,
        //   'Content-Type': 'application/json'
        // }
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
  getCard(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
  setUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.firstname,
        about: data.description,
      })
    })
      .then(this._checkResponse)
  }
  setUserAvatar(data, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then(this._checkResponse)
  }
  addCard(data, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      })
    })
      .then(this._checkResponse)
  }
  addLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        // 'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        // 'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
  changeLikeCardStatus(cardId, isLiked, token) {
    if (isLiked) {
      return this.addLike(cardId, token);
    } else if (!isLiked) {
      return this.deleteLike(cardId, token);
    }
  }


  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        // 'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)

  }
}


const api = new Api({
  baseUrl: 'http://localhost:3000',
  // headers: {
  //     authorization: '26786be3-fed9-4d83-9ae2-1348eee1b7d5',
  //     'Content-Type': 'application/json'
  // }
});

export default api