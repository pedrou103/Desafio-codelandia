import '../styles/components/Modal.sass'
import close from '../../assets/img/close.png'

const Modal = () => {
    return (
        <section id='modal'>
            <div id="modal-content">
                <img id="close" src={close} alt="" />
                <h1>Buuh!!</h1>
                <p>Parabéns, você terminou esse jogo da memória. Experimente jogar uma outra dificuldade ou jogue na mesma novamente.</p>
                <button>Jogar Novamente</button>
            </div>
        </section>
    )
}

export default Modal