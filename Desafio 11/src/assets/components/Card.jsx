import '../styles/components/Card.sass';

const Card = ({ id, name, flipped, handleClick}) => {
    const classNamesContentInCard = ['card_content'];
    flipped && classNamesContentInCard.push('card_content--flipped');

    const handleClickFn = (id) => {
        if (handleClick) {
            handleClick(id);
        }
    };

    return (
        <div className='card' onClick={() => handleClickFn(id)}>
            <div className={classNamesContentInCard.join(' ')}>
                <div className='card-face card-front'>?</div>
                <div className='card-face card-back'><img src={name} alt="" /></div>
            </div>
        </div>
    );
}

export default Card;