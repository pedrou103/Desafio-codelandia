import './Index.sass'

function Button({texto}) {
    return (
        <button>
            <img src="src/assets/img/gift.png" alt="" />
            {texto}
        </button>
    )
}

export default Button