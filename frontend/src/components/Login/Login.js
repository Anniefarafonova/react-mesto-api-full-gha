import React, { useState } from 'react'
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';


export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formValue.email, formValue.password)
  }

  return (
    <>
      <Header>
        <Link to="/sign-up" className='header__list'>
          Регистрация
        </Link>
      </Header>
      <main className="content">
        <section className="login">
          <div className="login__container">
            <form className="form form_login" name="form-login"  onSubmit={handleSubmit}>
              <h2 className="form__container-title form__container-title_login">Вход</h2>
              <div className="form__container-texts form__container-texts_login">
                <input id="email" type="email" placeholder="Электронная почта" name="email"
                  className="form__item form__item_type_job form__item_login-email" required onChange={handleChange} />
                <input id="password" type="password" placeholder="Пароль" name="password"
                  className="form__item form__item_type_name form__item_login-password" required onChange={handleChange} />
              </div>
              <button type="submit" aria-label="Войти" className="login__saved-button">Войти</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

// Auth.authorize(formValue.password, formValue.email)
// .then((data) => {
//   // if (data) {
//     // setIsDone(true)
//     setFormValue({ password: '', email: '' });
//     onLogin()
//     navigate('/', { replace: true });
//   })
// // })
// .catch(err => console.log(err));
// // setIsDone(false)