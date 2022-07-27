import '../styles/components/Card.sass';

import img1 from '../img/01.png';
import img2 from '../img/02.png';
import img3 from '../img/03.png';
import img4 from '../img/04.png';
import img5 from '../img/05.png';
import img6 from '../img/06.png';
import img7 from '../img/07.png';
import img8 from '../img/08.png';

const images = [
    {id: 1, name: {img1}, state: "open"},
    {id: 2, name: {img2}, state: "open"},
    {id: 3, name: {img3}, state: "open"},
    {id: 4, name: {img4}, state: "open"},
    {id: 5, name: {img5}, state: "open"},
    {id: 6, name: {img6}, state: "open"},
    {id: 7, name: {img7}, state: "open"},
    {id: 8, name: {img8}, state: "open"},
];
const Card = () => {
    return (
        <div className='card'>
            <img src={images.name} alt="" />
        </div>
    )
}

export default Card