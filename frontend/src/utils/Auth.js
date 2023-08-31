export const BASE_URL = 'https://auth.nomoreparties.co';

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email, password)
  })
    .then(checkStatus);
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(checkStatus)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    })
  }

export const tokenCheck = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(checkStatus);
}





  // export const register = (password, email) => {
  //   return fetch(`${BASE_URL}/signup`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(password, email)
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       checkStatus()
  //     })
  // };
  // export const authorize = (password, email) => {
  //   return fetch(`${BASE_URL}/signin`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ password, email })
  //   })
  //     .then((response => response.json()))
  //     .then((res) => {
  //       return res;
  //     })
  //     .then((data) => {
  //       if (data.token) {
  //         localStorage.setItem('token', data.token);
  //         return data;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // };
  
  // export const tokenCheck = (token) => {
  //   return fetch(`${BASE_URL}/users/me`, {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     },
  //   })
  //       .then(res => {
  //         if (res.ok) return res.json()
  //       })
  //       .then(data => data)
  //       .catch((err) => {
  //         console.log(`Ошибка token ${err}`);
  //       })
  //   }