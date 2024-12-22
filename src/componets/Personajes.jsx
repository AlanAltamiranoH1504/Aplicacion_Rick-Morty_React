export default function Personajes(props) {
    const {personajes, setPersonajes} = props;
    const resetPersonajes = () =>{
        setPersonajes(null);
    }
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetPersonajes}>Volver a Pagina Principal</span>
            <div className="container-characters">
                {personajes.map((personaje, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={personaje.image} alt={personaje.name}/>
                        </div>
                        <div>
                            <h3>{personaje.name}</h3>
                            <h6>{personaje.status === "Alive" ? (
                                <>
                                    <span className="alive">Alive</span>
                                </>
                            ):(
                                <>
                                    <span className="dead">Dead</span>
                                </>
                            )}</h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{personaje.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{personaje.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetPersonajes}>Volver a Home</span>
        </div>
    )
}