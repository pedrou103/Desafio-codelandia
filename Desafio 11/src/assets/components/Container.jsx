import '../styles/components/Container.sass';
import Header from './Header';
import Main from './MainContent';
import Modal from './Modal';

import bg from '../../assets/img/Rectangle.png'

const Container = () => {
    const containerStyle = {
        backgroundImage: `url(${bg})`
    };

    return (
        <section id="container" style={containerStyle}>
            <Header/>
            <Main/>
            <Modal/>
        </section>
    )
}

export default Container