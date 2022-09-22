import { useState, useEffect } from 'react'
import Character from '../components/Character'

function Characters(props) {
    const [characters, setCharacters] = useState(null);
    const BASE_URL = 'http://localhost:4000/characters/'

    const getCharacters = async () => {
        try {
            const response = await fetch(BASE_URL);
            const allCharacters = await response.json();
            setCharacters(allCharacters)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <>
        {characters ? characters.map((character, idx) => {
            return (
                <div className='character-index'>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name}/>
                    <p>{character.gender}</p>
                </div>
            )
        }) : <h1>Loading...</h1>
    }
        </>

    )
}

export default Characters;