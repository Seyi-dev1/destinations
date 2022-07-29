const Card = (props)=>{
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.stuff.coverImg} alt="tile"></img>
            </div>
            <div className="card-text">
                <span>{props.stuff.location}</span>
                <span><a href={props.stuff.mapsLink}>View on Google Maps</a></span>
                <h2>{props.stuff.title}</h2>
                <p className="date"></p>
                <p className="description"></p>
            </div>
        </div>
    )
}
export default Card