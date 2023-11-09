import ProfilMenu from './ProfilMenu';
import { Link } from "react-router-dom";


function Header() {
    const user = {
        firstname: "Jesse",
        lastname: "Granier",
        job: "Baby Dev (on commence un jour...)"
    }
        
    return (
        <header className='header01'>
        <h1>Mon super Header qui déchire. Un gros titre, quoi.</h1>
        <nav className='navHeader01'>
            <ul className='ulHeader01'>
            <ProfilMenu />
                <li>Accueil</li>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/story">Story</Link></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header;