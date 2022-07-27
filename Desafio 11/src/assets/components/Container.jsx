import '../styles/components/Container.sass';
import Header from './Header';
import Main from './MainContent';

const Container = () => {
    return (
        <section id="container">
            <Header/>
            <Main/>
            <div id='light'></div>
        </section>
    )
}

export default Container