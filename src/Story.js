import Header from './Header';
import Footer from './Footer';

function Story() {

    return (
        <main className="contactOrigin">
        <Header />
        <p className='contactName'>Même className, même centrage, 0 fatigue</p>
        <span className='imgStory'><img src="01.png" alt="" /></span>
        <p className='contactName'>Ceci est l'histoire du Pokémon Légendaire Chris. Une histoire à suivre ici même dans quelques... années. Ouais, années.</p>
        <Footer />
        </main>
    )
}

export default Story;