import '../styles/components/Container.sass';
import Header from './Header';
import Main from './MainContent';
import Modal from './Modal';

const Container = () => {
    return (
        <section id="container">
            <Header/>
            <Main/>
            <Modal/>
        </section>
    )
}

export default Container