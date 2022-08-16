function Personaje(props) {
    return (
        <div className="text-center p-5">
            <h3 >{props.personaje.name}</h3>
            <img className="img-fluid rounded-pill" src={props.personaje.image} alt={props.personaje.name} />
            <p>{props.personaje.origin.name}</p>
        </div>
    )
}

export default Personaje