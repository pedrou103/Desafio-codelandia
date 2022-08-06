import Button from "../Button/Index"

function Doacao({principal1, principal2, description, texto}) {
    return (
        <div className="texto">
            <h1 id="title">{principal1}<br />{principal2}</h1>
            <p>{description}</p>
            <Button texto={texto} />
        </div>
    )
}

export default Doacao