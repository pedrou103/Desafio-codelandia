import Card from '../Card/Card'
import './MainContent.sass'

function MainContent() {
    return (
        <main>
            <section id="cards">
                <p>Mais vendidas</p>
                <div>
                    <Card />
                </div>
            </section>
            <section id="about">
                <div>a</div>
            </section>
        </main>
    )
}

export default MainContent