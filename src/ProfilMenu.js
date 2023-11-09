function ProfilMenu() {
    const userLogged = true
    const user = {
        firstname: "Jesse",
        lastname: "Granier",
        job: "Baby Dev (on commence un jour...)"
    }
    return (
        <>
        { userLogged ? 
                    (<li>Bonjour {user.firstname} {user.lastname} ! Tu es un {user.job} c'est ça ?</li>)
                :
                    (<li>Bonjour, connecte toi !</li>)
            }
        </>
    )

}
export default ProfilMenu;

