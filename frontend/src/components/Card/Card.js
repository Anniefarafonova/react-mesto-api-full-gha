import React, { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContextt/CurrentUserContext';


export default function Card({ card, onCardClick, onDelete, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext)
    //показ удалялки
    const isOwn = card.owner._id === currentUser._id;
    // опред поставки лайка
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked && 'element__like-button_active'}`
    );;
    //функция открытия картинки
    function handleCardClick() {
        onCardClick(card);
    }
    //функция like
    function handleLikeClick() {
        onCardLike(card);
    }
   
    return (
        <article className="element">
            <img className="element__image"
                src={card.link}
                alt={card.name}
                onClick={handleCardClick}
            />
            {/* <button className="element__delete" aria-label="Значок удаления" onClick={onDelete}/>  */}
            {isOwn && <button className="element__delete" onClick={() => onDelete(card._id)} />}
            <div className="element__list">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__button-container">
                {/* <button type="button" className="element__like-button" aria-label="Значок лайк" ></button> */}
                <button type="button" className={cardLikeButtonClassName} aria-label="Значок лайк" onClick={handleLikeClick} ></button>
                <div className="element__like-count">{card.likes.length}</div>
                </div>
            </div>
        </article>
    )
}