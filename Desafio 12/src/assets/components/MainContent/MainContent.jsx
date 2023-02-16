import Card from '../Card/Card'
import './MainContent.sass'

import tomate from '../../img/img2.png'
import pizza2 from '../../img/img3.png'
import pimenta from '../../img/img5.png'
import peixe from '../../img/img6.png'
import img_estranha from '../../img/img7.png'
import folha from '../../img/img8.png'
import image16 from '../../img/image16.png'

import restaurant from '../../img/restaurant.png'
import { Button } from '../Button/Button';

// import * as images from '../../img'


const infoCards = [
    {
        id: 1,
        imageName: 'image16.png',
        title: 'La Cuma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 2,
        imageName: 'image17.png',
        title: 'La Menta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 3,
        imageName: 'image18.png',
        title: 'La Bana',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 4,
        imageName: 'image19.png',
        title: 'La Toca',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
];

function MainContent() {

    return (
        <main>
            <img id='pimenta' src={pimenta} alt="imagem de pimenta" />
            <section id="cards">
                <p>Mais vendidas</p>
                <div id="content">
                    {infoCards.map((card) => (
                        <Card
                            key={card.id}
                            imageName={card.imageName}
                            title={card.title}
                            description={card.description}
                            price={card.price}
                            textButton={card.buttonText} />
                    ))}
                </div>
                <img id='peixe' src={peixe} alt="imagem de um peixe" />
                <img id='img_estranha' src={img_estranha} alt="imagem de uma coisa estranha" />
                <img id='folha' src={folha} alt="imagem de uma folha" />
            </section>
            <section id="about">
                <div id="container">
                    <div id="image">
                        <img src={restaurant} alt="imagem do restaurante" />
                        <div id="circle1">
                            <img src={'/src/assets/img/img1.png'} alt="imagem da pizza" />
                        </div>
                    </div>
                    <div id="txt">
                        <h1>Sobre a La P<span>i</span><span>z</span><span>z</span>a</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
                        <Button texto="Ler Mais" />
                    </div>
                    <img id='tomate' src={tomate} alt="imagem de tomate" />
                    <div id="circle2">
                        <img src={pizza2} alt="imagem de pizza" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainContent