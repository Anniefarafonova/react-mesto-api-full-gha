import React from 'react'

export default function PopupWithForm({ name, title, button, children, isOpen, onClose, onSubmit }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onClose}>
            <div className="popup__container">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="popup__close"
                    onClick={onClose}
                ></button>
                <form  className="form" name={name} noValidate onSubmit={onSubmit}>
                    <h2 className={`form__container-title ${name ==='confirm' ? "form__container-title_confirm" : " "}` }>{title}</h2>
                    {children}
                    <button
                        type="submit"
                        aria-label="Сохранить"
                        className={`popup__saved-button ${name ==='confirm' ? "popup__saved-button_confirms" : " "}` }
                    >
                        {button || 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
        // <div className={`popup popup_type_${name}`}>
        //     <div className="popup__container">
        //         <button
        //             type="button"
        //             aria-label="Закрыть"
        //             className="popup__close"
        //         ></button>
        //         <form className="form" name="form-edit" noValidate="">
        //             <h2 className="form__container-title">{title}</h2>
        //             <div className="form__container-texts">
        //             </div>
        //             <button
        //                 type="submit"
        //                 aria-label="Сохранить"
        //                 className="popup__saved-button"
        //             >
        //               {button}
        //             </button>
        //         </form>
        //     </div>
        // </div>
    )
}