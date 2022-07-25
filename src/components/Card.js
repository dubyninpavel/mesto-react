function Card({ countLikes, nameCard, linkCard, handleCardClick }) {
    function handleClick() {
        handleCardClick({ nameCard, linkCard });
    }

    return (
        <li className="cards__item">
            <button className="cards__delete-button" type="button"></button>
            <img className="cards__photo" src={linkCard} alt={nameCard} onClick={handleClick} />
            <div className="cards__container">
                <h2 className="cards__place">{nameCard}</h2>
                <div className="cards__like-container">
                    <button className="cards__like" type="button"></button>
                    <p className="cards__count-likes">{countLikes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;