import '../styles/components/Container.sass';
import Header from './Header';
import Main from './Main';

const Container = () => {
    return (
        <section id="container">
            <Header/>
            <Main/>
        </section>
    )
}

export default Container