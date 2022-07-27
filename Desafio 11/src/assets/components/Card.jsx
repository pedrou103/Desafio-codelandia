import '../styles/components/Card.sass';

const Card = ({ id, name, state }) => {

    return (
        <div className='card'>
            <div className={state}>
                <img src={name} alt="" />
            </div>
        </div>
    )
}

export default Card;