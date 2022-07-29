import plane from './images/icons8-plane-64.png'
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src={plane} alt='logo'></img>
                <h3>Travelis</h3>
            </div>
            <div className="title">
                <a href='a.com'>Home</a>
                <a href='a.com'>About</a>
                <a href='a.com'>Contact</a>
            </div>
        </div>
    )
}
export default Header