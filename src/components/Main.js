import { useEffect, useState } from "react";
import api from '../utils/Api.js';
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [ userName, setUserName ] = useState("");
    const [ userDescription, setUserDescription ] = useState("");
    const [ userAvatar, setUserAvatar ] = useState("");
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        api.getAllData()
            .then((items) => {
                const [ dataFromUserPromise, dataFromCardsPromise ] = items;
                setUserName(dataFromUserPromise.name);
                setUserDescription(dataFromUserPromise.about);
                setUserAvatar(dataFromUserPromise.avatar);
                setCards(dataFromCardsPromise);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        <main className="content">
          <section className="profile">
              <div className="profile__container">
                  <div className="profile__main">
                      <div className="profile__avatar" onClick={onEditAvatar}>
                          <div className="profile__cursor"></div>
                          <img className="profile__image" src={userAvatar} alt="Аватарка" />
                      </div>
                      <div className="profile__info">
                          <div className="profile__window">
                              <h1 className="profile__name">{userName}</h1>
                              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                          </div>
                          <p className="profile__subline">{userDescription}</p>
                      </div>
                  </div>
                  <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
              </div>
          </section>
          <section className="cards">
              <ul className="cards__list">
                {cards.map(({ likes,  _id, name, link }) => (
                    <Card
                        handleCardClick = {onCardClick}
                        key={_id}
                        countLikes = {likes}
                        nameCard = {name}
                        linkCard = {link}
                    />
                ))}
              </ul>
          </section>
        </main>
    );
}

export default Main;