import { Button } from '../Button/Button'
import './Card.sass'

function Card() {
    return (
        <div id="card">
            <img src="" alt="" />
            <h2>La Cuma</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h1>R$ 23</h1>
            <Button texto='Comprar agora' />
        </div>
    )
}

export default Card