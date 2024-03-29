import { Button } from '../Button/Button'
import './Card.sass'


function Card({ imageName, title, description, price, textButton }) {

    return (
        <div id="card">
            <img src={imageName} alt="imagem de pizza" />
            <span>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25761 6.74886C0.354391 4.02342 1.97719 1.78789 3.78447 1.22126C5.54745 0.668513 6.84574 1.23146 7.49485 2.02837C8.14402 1.23146 9.44226 0.670687 11.1984 1.22126C13.1234 1.82481 14.6354 4.02342 13.7314 6.74886C12.5903 10.2801 8.14403 13 7.49483 13C6.84563 13 2.43699 10.3213 1.25761 6.74886Z"
                        fill="#CF3031"
                        stroke="#CF3031"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </span>
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <h1>{price}</h1>
            <Button texto={textButton} />
        </div>
    )
}

export default Card