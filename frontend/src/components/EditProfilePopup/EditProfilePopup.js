import PopupWithForm from "../PopupWithForm/PopupWithForm"
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContextt/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const currentUser = useContext(CurrentUserContext);
    
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);
    //функция события отправки формы (имя, о себе)
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            firstname: name,
            description: description,
        });
    }
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__container-texts">
                <input
                    id="name"
                    type="text"
                    placeholder="Имя"
                    minLength={2}
                    maxLength={40}
                    name="firstname"
                    className="form__item form__item_type_name"
                    required=""
                    onChange={handleChangeName}
                    value={name || ''}
                   
                />
                <span id="name-error" className="error" ></span>
                <input
                    id="text"
                    type="text"
                    placeholder="О себе"
                    minLength={2}
                    maxLength={200}
                    name="description"
                    className="form__item form__item_type_job"
                    required=""
                    onChange={handleChangeDescription}
                    value={description || ''}
                    
                />
                <span id="text-error" className="error" />
            </div>
        </PopupWithForm>

    )
}
