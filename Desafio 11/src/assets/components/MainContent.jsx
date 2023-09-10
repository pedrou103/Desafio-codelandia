import Card from "./Card"
import img01 from '../../assets/img/01.png'
import img02 from '../../assets/img/02.png'
import img03 from '../../assets/img/03.png'
import img04 from '../../assets/img/04.png'
import img05 from '../../assets/img/05.png'
import img06 from '../../assets/img/06.png'
import img07 from '../../assets/img/07.png'
import img08 from '../../assets/img/08.png'
import img09 from '../../assets/img/09.png'

import '../styles/components/Main.sass'
import { useRef, useState } from "react";

const images = [
    { id: 1, name: img01, flipped: false },
    { id: 2, name: img02, flipped: false },
    { id: 3, name: img03, flipped: false },
    { id: 4, name: img04, flipped: false },
    { id: 5, name: img05, flipped: false },
    { id: 6, name: img06, flipped: false },
    { id: 7, name: img07, flipped: false },
    { id: 8, name: img08, flipped: false },
    { id: 9, name: img09, flipped: false },
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
    const unflip = useRef(false);
    const [mathes, setMatches] = useState(1);

    const handleClick = (id) => {
        const newStateCards = stateCards.map(card => {
            //Se o id do card não for o id clicado não acontece nada
            if (card.id !== id) return card;
            //Se o card já estiver visivel, não faz nada
            if (card.flipped) return card;

            //virar o card
            card.flipped = true;

            if (unflip.current && first.current && second.current) {
                first.current.flipped = false;
                second.current.flipped = false;
                first.current = null;
                second.current = null;
                unflip.current = false;
            }

            if (first.current == null) {
                first.current = card
            } else if (second.current == null) {
                second.current = card
            }

            if (first.current && second.current) {
                if (first.current.name === second.current.name) {
                    first.current = null;
                    second.current = null;
                    setMatches((m) => m + 1);
                } else {
                    unflip.current = true
                }
            }

            if (mathes >= images.length) {
                console.log(unflip.current)
                if (first.current == null && second.current == null) {
                    document.getElementById('modal').style.visibility = "visible";
                    document.getElementById('close').addEventListener("click", function () {
                        document.getElementById('modal').style.visibility = "hidden";
                    });
                    document.querySelector('button').addEventListener("click", function () {
                        unflip.current = false;
                        document.getElementById('modal').style.visibility = "hidden";
                    });
                }
            }

            return card;
        });

        setstateCards(newStateCards);

    };

    return (
        <main id="cards">
            {stateCards.map((img, index) => (
                <Card key={index} name={`${img.name}`} flipped={img.flipped} id={img.id} handleClick={handleClick} />
            ))}
            <div id='light' className='topo'></div>
            <div id='light' className='bottom'></div>
        </main>
    )

}

export default Main;