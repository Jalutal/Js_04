import ProfilMenu from './ProfilMenu';


function Header() {
    const user = {
        firstname: "Jesse",
        lastname: "Granier",
        job: "Baby Dev (on commence un jour...)"
    }
        
    return (
        <header>
        <h1>Mon super Header qui déchire. Un gros titre, quoi.</h1>
        <nav>
            <ul>
            <ProfilMenu />
                <li>Accueil</li>
                <li>Home</li>                
                <li>Contact</li> 
            </ul>
        </nav>
        </header>
    )
}
export default Header;