import Card from '../Card/Card'
import './MainContent.sass'

import restaurant from '../../img/restaurant.png'
import { Button } from '../Button/Button';

const infoCards = [
    {
        id: 1,
        imageName: 'image 16.png',
        title: 'La Cuma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 2,
        imageName: 'image 17.png',
        title: 'La Menta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 3,
        imageName: 'image 18.png',
        title: 'La Bana',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
    {
        id: 4,
        imageName: 'image 19.png',
        title: 'La Toca',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'R$ 23',
        buttonText: 'Comprar agora'
    },
];

function MainContent() {

    return (
        <main>
            <img id='pimenta' src="src/assets/img/img5.png" alt="imagem de pimenta" />
            <section id="cards">
                <p>Mais vendidas</p>
                <div id="content">
                    {infoCards.map((card) => (
                        <Card
                            key={card.id}
                            imageName={`src/assets/img/${card.imageName}`}
                            title={card.title}
                            description={card.description}
                            price={card.price}
                            textButton={card.buttonText} />
                    ))}
                </div>
                <img id='peixe' src="src/assets/img/img6.png" alt="imagem de um peixe" />
                <img id='img_estranha' src="src/assets/img/img7.png" alt="imagem de uma coisa estranha" />
                <img id='folha' src="src/assets/img/img8.png" alt="imagem de uma folha" />
            </section>
            <section id="about">
                <div id="container">
                    <div id="image">
                        <img src={restaurant} alt="imagem do restaurante" />
                        <div id="circle1">
                            <img src="src/assets/img/img1.png" alt="imagem da pizza" />
                        </div>
                    </div>
                    <div id="txt">
                        <h1>Sobre a La P<span>i</span><span>z</span><span>z</span>a</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
                        <Button texto="Ler Mais"/>
                    </div>
                    <img id='tomate' src="src/assets/img/img2.png" alt="imagem de tomate" />
                    <div id="circle2">
                        <img src="src/assets/img/img3.png" alt="imagem de pizza" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainContent