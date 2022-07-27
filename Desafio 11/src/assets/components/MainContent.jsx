import Card from "./Card"

import '../styles/components/Main.sass'

const images = [
    {id: 1, name: '01.png', state: "open"},
    {id: 2, name: '02.png', state: "open"},
    {id: 3, name: '03.png', state: "open"},
    {id: 4, name: '04.png', state: "open"},
    {id: 5, name: '05.png', state: "open"},
    {id: 6, name: '06.png', state: "open"},
    {id: 7, name: '07.png', state: "open"},
    {id: 8, name: '08.png', state: "open"},
    {id: 9, name: '09.png', state: "open"},
    {id: 10, name: '01.png', state: "open"},
    {id: 11, name: '02.png', state: "open"},
    {id: 12, name: '03.png', state: "open"},
    {id: 13, name: '04.png', state: "open"},
    {id: 14, name: '05.png', state: "open"},
    {id: 15, name: '06.png', state: "open"},
    {id: 16, name: '07.png', state: "open"},
    {id: 17, name: '08.png', state: "open"},
    {id: 18, name: '09.png', state: "open"},
];

const Main = () => {

    return (
        <main id="cards">
            {images.map((img) => (
                <Card key={img.id} name={`src/assets/img/${img.name}`} state={img.state} />
            ))}
        </main>
    )

}

export default Main;