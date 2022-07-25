function ImagePopup({ isOpen, onClose, dateCard }) {
    return (
        <div className={`popup popup_photo ${ isOpen ? "popup_is-active" : "" }`}>
            <div className="popup__container">
                <img className="popup__image" src={dateCard.link} alt={dateCard.name} />
                <button className="popup__close" type="button" onClick={onClose}></button>
                <p className="popup__text">{dateCard.name}</p>
            </div>
        </div>
    );
}

export default ImagePopup;