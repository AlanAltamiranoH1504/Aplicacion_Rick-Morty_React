import {useState} from 'react'
import './App.css'
import imagenRicjYMorty from './img/rick-morty.png'
import Personajes from "./componets/Personajes.jsx";

function App() {
    //States
    const [personajes, setPersonajes] = useState(null);

    const reqApi = async () => {
        //Hacemos peticion a la api
        const api = await fetch('https://rickandmortyapi.com/api/character');
        //Scamos la informacion que nos intersa
        const {results} = await api.json();
        setPersonajes(results);
    }
    return (
        <>
            <div>
                <h1 className="title">Aplicacion Rick & Morty - CURSO GRATIS REACT</h1>
                {personajes ? (
                    <Personajes personajes={personajes} setPersonajes={setPersonajes}/>
                ) : (
                    <>
                        <img src={imagenRicjYMorty} alt="Ric & Morty" className="img-home"/>
                        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
                    </>
                )}
            </div>
        </>
    )
}

export default App
