import ProfilMenu from './ProfilMenu';


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
                <li className='liHeader01'>Accueil</li>
                <li className='liHeader01'>Home</li>                
                <li className='liHeader01'>Contact</li> 
            </ul>
        </nav>
        </header>
    )
}
export default Header;