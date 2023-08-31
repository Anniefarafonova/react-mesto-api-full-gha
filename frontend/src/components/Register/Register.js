import React, { useState, useEffect, useContext, useRef } from "react";
import imageLogo from '../../images/logo.svg'
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Login from "../Login/Login";
import { register } from "../../utils/Auth";
import * as Auth from "../../utils/Auth";

export default function Register({ onRegister }) {
    const initialValuesRegister = {
        email: '',
        password: '',
    };
    const [valuesRegister, setValuesRegister] = useState(initialValuesRegister);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValuesRegister({
            ...valuesRegister,
            [name]: value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        onRegister(valuesRegister)
        reset(e)
    }
    function reset(e) {
        setValuesRegister(initialValuesRegister)
    }
    return (
        <>
            <Header>
                <Link to="/sign-in" className='header__list'>
                    Войти
                </Link>
            </Header>
            <main className="content">
                <section className="login">
                    <div className="login__container">
                        <form className="form form_login" name="form-login" onSubmit={handleSubmit}>
                            <h2 className="form__container-title form__container-title_login">Регистрация</h2>
                            <div className="form__container-texts form__container-texts_login" >
                                <input id="email" type="email" placeholder="Электронная почта" name="email"
                                    className="form__item form__item_type_job form__item_login-email" required onChange={handleChange} value={valuesRegister.email} autoComplete="email" />
                                <input id="password" type="password" placeholder="Пароль" name="password"
                                    className="form__item form__item_type_job form__item_login-password" required onChange={handleChange} value={valuesRegister.password} autoComplete="on" />
                            </div>
                            <button type="submit" aria-label="Зарегистрироваться" className="login__saved-button" >Зарегистрироваться</button>
                        </form>
                        <Link to="/sign-in" className='login__subtitle'>Уже зарегистрированы? Войти </Link>
                    </div>
                </section>
            </main>
        </>
    )
}


     // const [password, setPassword] = useState(" ");
    // const [email, setEmail] = useState(" ");

    // const [formValue, setFormValue] = useState({
    //     email: '',
    //     password: '',
    // })

       // function handleChangePassword(e) {
        //     setFormValue(e.target.value);
        // }
        // function handleChangeEmail(e) {
        //     setFormValue(e.target.value);
        // }
        // function handleSubmit(e) {
            // e.preventDefault();
            // onRegister(valuesRegister)
            // console.log('Register');
            // e.target.reset();
            // reset(e)
            // Auth.register(formValue.email, formValue.password).then((res) => {
            // Auth.register(formValue.email, formValue.password).then((res) => {
            //     navigate('/sign-in', { replace: true });
            // })
        // }