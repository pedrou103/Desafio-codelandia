import './Index.sass'

function Circle({url}) {
    return (
        <div className="circle">
            <img src={`src/assets/img/${url}`} alt="" />
        </div>
    )
}

export default Circle