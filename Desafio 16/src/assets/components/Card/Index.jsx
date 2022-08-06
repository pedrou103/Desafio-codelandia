import './Index.sass'

function Card({url, title, description}) {
    return (
        <div id='card'>
            <img src={`src/assets/img/${url}`} alt={`imagem de ${title}`} />
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )
}

export default Card