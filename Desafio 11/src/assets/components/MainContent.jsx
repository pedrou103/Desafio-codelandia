import Card from "./Card"

import '../styles/components/Main.sass'
import { useRef, useState } from "react";

const images = [
    { id: 1, name: '01.png' },
    { id: 2, name: '02.png' },
    { id: 3, name: '03.png' },
    { id: 4, name: '04.png' },
    { id: 5, name: '05.png' },
    { id: 6, name: '06.png' },
    { id: 7, name: '07.png' },
    { id: 8, name: '08.png' },
    { id: 9, name: '09.png' },
];

const KeyGen = () => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
};

// Duplicando o array
const duplicateTheArray = (array) => {
    return array.concat(array);
};

//Mudando a ordem dos cards do array
const sortArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

//Regenerando o id do card
const regenerateCard = (array) => {
    return array.map((image) => ({ ...image, id: KeyGen() }));
}

//Juntando as 3 funções anteriores e passando como parametro o array(images)
const general = (images) => {
    return sortArray(regenerateCard(duplicateTheArray(images)));
};

const Main = () => {
    const [stateCards, setstateCards] = useState(() => {
        return general(images)
    });

    const first = useRef(null);
    const second = useRef(null);
    const unflip = useRef(false)

    const handleClick = (id) => {
        const newStateCards = stateCards.map(card => {
            //Se o id do card não for o id clicado não acontece nada
            if (card.id !== id) return card;
            alert(`${card.id}`)
            //Se o card já estiver visivel, não faz nada
            if (card.flipped) return card;

            if (unflip.current && first.current && second.current) {
                first.current.flipped = false;
                second.current.flipped = false;
                first.current = null;
                second.current = null;
                unflip.current = false;
            }

            //virar o card
            card.flipped = true;

            // Configura 1 e 2 clicados
            if (first.current === null) {
                first.current = card
            } else if (second.current === null) {
                second.current = card;
            }

            if (first.current && second.current) {
                if (first.current.back === second.current.back) {
                    //estado de acerto
                    first.current = null;
                    second.current = null;
                } else {
                    //estado de erro
                    unflip.current = true
                }
            }

            return card;
        });

        setstateCards(newStateCards);
    };

    return (
        <main id="cards">
            {stateCards.map((img, index) => (
                <Card key={index} name={`src/assets/img/${img.name}`} id={img.id} handleClick={handleClick} />
            ))}
            <div id='light' className='topo'></div>
            <div id='light' className='bottom'></div>
        </main>
    )

}

export default Main;