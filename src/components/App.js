import { useState } from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
        
    }

    function handleOpenImageClick({ nameCard , linkCard }) {
        setSelectedCard({ 
            name: nameCard,
            link: linkCard
        })
        setIsImagePopupOpen(!isImagePopupOpen);
    }

    function handleCloseImage() {
        setIsImagePopupOpen(!isImagePopupOpen);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleOpenImageClick}
            />
            <Footer />
            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={handleEditAvatarClick}
                appellation="avatar"
                title="Обновить аватар"
                children={(
                    <fieldset className="popup__fieldset">
                        <input className="popup__input popup__subline" id="popup__avatarLink" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error popup__avatarLink-error"></span>
                        <button className="popup__button popup__save" type="submit">Сохранить</button>
                    </fieldset>
                )}
            />
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={handleEditProfileClick}
                appellation="edit-profile"
                title="Редактировать профиль"
                children={(
                    <fieldset className="popup__fieldset">
                            <input className="popup__input popup__name" id="popup__profileName" type="text" name="name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
                            <span className="popup__input-error popup__profileName-error"></span>
                            <input className="popup__input popup__subline" id="popup__profileSubline" type="text" name="about" placeholder="Чем занимаетесь?" minLength="2" maxLength="200" required />
                            <span className="popup__input-error popup__profileSubline-error"></span>
                            <button className="popup__button popup__save" type="submit" disabled>Сохранить</button>
                    </fieldset>
                )}
            />
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={handleAddPlaceClick}
                appellation="add-cards"
                title="Новое место"
                children={(
                    <fieldset className="popup__fieldset">
                        <input className="popup__input popup__name" id="popup__cardName" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="popup__input-error popup__cardName-error"></span>
                        <input className="popup__input popup__subline" id="popup__cardLink" type="url" name="link" placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error popup__cardLink-error"></span>
                        <button className="popup__button popup__save" type="submit">Создать</button>
                    </fieldset>
                )}
            />
            <PopupWithForm
                appellation="delete-card"
                title="Вы уверены?"
                children={(
                    <button className="popup__button popup__save popup__delete" type="submit">Да</button>
                )}
            />
            <ImagePopup
                isOpen = {isImagePopupOpen}
                onClose = {handleCloseImage}
                dateCard = {selectedCard}
            />
        </div>
    );
}

export default App;