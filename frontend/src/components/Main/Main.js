import imageEdit from '../../images/Vector.svg'
import imageAdd from '../../images/add_icon.svg'
import React, { useState, useEffect, useContext } from 'react'
import api from '../../utils/Api';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContextt/CurrentUserContext';
import Header from '../Header/Header';
import imageLogo from '../../images/logo.svg'
import { Link } from 'react-router-dom';


export default function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, onDelete, card, onCardLike, onCardDelete, email, signOut }) {
  const currentUser = useContext(CurrentUserContext)

 
  return (
    <>
      <Header>
        <div className="header__block">
        <p className="header__list">{email}</p>
        <Link to="/sign-in" className='header__list' onClick={signOut}>
          Выйти
        </Link>
        </div>
      </Header>
      <main className="content">
        <section className="profile">
          <div className="profile__list">
            <button
              type="button"
              aria-label="Изменить"
              className="profile__avatar-button"
              onClick={onEditAvatar}
            />
            <img className="profile__avatar" src={currentUser.avatar} alt="обложка" />
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__title"> {currentUser.name}</h1>
                <button
                  type="button"
                  aria-label="Редактировать"
                  className="profile__edit-button"
                  onClick={onEditProfile}
                >
                  <img
                    src={imageEdit}
                    className="profile__edit-button-img"
                    alt="знак редактирования"
                  />
                </button>
              </div>
              <p className="profile__subtitle" >{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Добавить"
            className="profile__add-button"
            onClick={onAddPlace}
          >
            <img
              src={imageAdd}
              className="profile__add-button-img"
              alt="знак добавить"
            />
          </button>
        </section>
        <section className="elements">
          <div className="elements__list-template">
            {card.map(data => {
              return (
                <div className="elements-template" key={data._id} >
                  <Card
                    card={data}
                    onCardClick={onCardClick}
                    onDelete={onDelete}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}