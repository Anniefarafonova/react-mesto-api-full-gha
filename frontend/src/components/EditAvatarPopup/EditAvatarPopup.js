import PopupWithForm from "../PopupWithForm/PopupWithForm"
import { useState, useEffect, useContext, useRef } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext";


export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatar =useRef()

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatar.current.value
        });
      } 

      return (
        <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        button='Да'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <div className="form__container-texts">
          <input
            id="avatar"
            type="url"
            placeholder="Ссылка на картинку аватара"
            name="avatar"
            className="form__item form__item_type_job"
            required=""
            ref={avatar}
          />
          <span id="avatar-error" className="error" />
        </div>
      </PopupWithForm>
      )
}