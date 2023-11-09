import Header from '../component/Header';
import Footer from '../component/Footer';

function Profil() {

    return (
        <main className="profilOrigin">
        <Header />
        <p className='profilName'>Voici une présentation rapide de mon profil. Déjà une photo :</p>
        <span className='imgStory'><img src="./001.jpg" alt="" /></span>
        <p className='profilName'>en 2023, j'étais ici.</p>
        <p className='profilName'>en 2022, j'étais en burn-out mais au moins j'avais chaud. Burn, chaud... Y'a la ref là ?</p>
        <p className='profilName'>en 2021, j'étais directeur d'une usine à vieux.</p>
        <p className='profilName'>Avant ça, j'étais psy. Ouais, c'est inquiétant.</p>
        <Footer />
        </main>
    )
}

export default Profil;