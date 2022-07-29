import { Button } from '../Button/Button'
import './Card.sass'

function Card({imageName, title, description, price, textButton}) {
    return (
        <div id="card">
            <img src={imageName} alt="" />
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <h1>{price}</h1>
            <Button texto={textButton} />
        </div>
    )
}

export default Card