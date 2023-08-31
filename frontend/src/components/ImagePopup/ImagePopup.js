import React from 'react'

export default function ImagePopup({card, onClose}){
    return(
    // <div className="popup popup_type_image" >
        <div className={`popup popup_type_image ${card.link && card.name && "popup_opened"}` } onClick={onClose}> 
        <figure className="popup__image-cntr">
          <button
            type="button"
            aria-label="Закрыть"
            className="popup__close popup__close_image-cls"
            onClick={onClose}>
            </button>
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__text">{card.name}</figcaption>
        </figure>
      </div>
    )
}
