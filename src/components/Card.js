import pin from './images/location (1).png'
const Card = (props)=>{
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.stuff.coverImg} alt="tile"></img>
            </div>
            <div className="card-text">
            <div className='spans'>
                <span><img src={pin} alt='pin'></img></span>
                <span className="location">{props.stuff.location}</span>
                <span className="link"><a href={props.stuff.mapsLink}>View on Google Maps</a></span>
                </div>
                <h2>{props.stuff.title}</h2>
                <div className='date'>
                <span>{props.stuff.startDate} - </span>
                <span>{props.stuff.endDate}</span>
                </div>
                <p className="description">{props.stuff.description}</p>
            </div>
        </div>
    )
}
export default Card