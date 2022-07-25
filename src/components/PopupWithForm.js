function PopupWithForm({ isOpen, onClose, appellation, title, children, buttonSubmit }) {
    return (
        <div className={`popup popup_type_${appellation} ${ isOpen ? "popup_is-active" : "" }`}>
            <div className="popup__content">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <h2 className="popup__heading">{title}</h2>
                <form className="popup__form" name={appellation} noValidate>
                    <fieldset className="popup__fieldset">
                        {children}
                        <button className="popup__button popup__save" type="submit">{buttonSubmit}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;