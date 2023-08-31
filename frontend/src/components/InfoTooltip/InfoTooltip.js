
import imageUnionNot from '../../images/Unionnot.png'
import imageUnion from '../../images/Union.png'

export default function InfoTooltip({ isOpen, onClose, isDone }) {

    return (
        <div className={`popup popup_type_info ${isOpen && 'popup_opened'}`} onClick={onClose}>
            <div className=" popup__container popup__container_info">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="popup__close"
                    onClick={onClose}
                ></button>
                <div className={`popup__infoTooltip-logo ${!isDone ? 'popup__infoTooltip-logo_error' : '' }`} />
                {/* src={isDone ? { imageUnion } : { imageUnionNot }}
                alt={isDone
                    ? "Удачная регистрация"
                    : "Неудачная попытка"
                } /> */}
                <h3 className="popup__title">
                    {isDone
                        ? "Вы успешно зарегистрировались"
                        : "Что-то пошло не так! Попробуйте еще раз."
                    }
                </h3>
            </div>
        </div>
    )
}

 // <PopupWithForm
        //     name='union'
        //     title='Что-то пошло не так! Попробуйте ещё раз.'
        //     // button='Да'
        //     isOpen={isOpen}
        //     onClose={onClose}
        // //  onSubmit={handleCardDeleteSubmit} */}
        // >
        //     <div className="info__container">
        //         <img
        //             className="infoTooltip__logo"
        //             src={imageUnion}
        //             alt="Неудачная попытка" />
        //     </div>
        // </PopupWithForm>
        //     <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onClose}>
        //     <div className="popup__container">
        //         <button
        //             type="button"
        //             aria-label="Закрыть"
        //             className="popup__close"
        //             onClick={onClose}
        //         ></button>
        //         <form  className="form" name={name} >
        //         <img
        //                 className="infoTooltip__logo"
        //                 src={imageUnion}
        //                 alt="Неудачная попытка"/>
        //             <h2 className={`form__container-title ${name ==='confirm' ? "form__container-title_confirm" : " "}` }>{title}</h2>
        //         </form>
        //     </div>
        // </div>