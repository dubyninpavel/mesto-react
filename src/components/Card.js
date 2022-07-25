function Card({ countLikes, name, link, handleCardClick }) {
    function handleClick() {
        handleCardClick({ name, link });
    }

    return (
        <li className="cards__item">
            <button className="cards__delete-button" type="button"></button>
            <img className="cards__photo" src={link} alt={name} onClick={handleClick} />
            <div className="cards__container">
                <h2 className="cards__place">{name}</h2>
                <div className="cards__like-container">
                    <button className="cards__like" type="button"></button>
                    <p className="cards__count-likes">{countLikes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;