import Card from '../Card/Card'
import './MainContent.sass'

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
            </section>
            <section id="about">
                <div>a</div>
            </section>
        </main>
    )
}

export default MainContent