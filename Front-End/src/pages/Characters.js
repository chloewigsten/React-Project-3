import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

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
        <div className='page-title'>
            <h1>Browse All Characters</h1>
            <div className='parent-index'>
                {characters ? characters.map((character, idx) => {
                    return (
                        <div className='character-index'>
                            <Link to={`/characters/${character._id}`}>
                                <img src={character.image} alt={character.name} className="character-index-image"/>
                            </Link>
                            <h1>{character.name}</h1>
                            <p>{character.occupation}</p>
                            <div clasName='learn-more-section'>
                                <Link className='link' to={`/characters/${character._id}`}>
                                    <p className='learn-more-button'>Learn More</p>
                                </Link>
                            </div>
                        </div>
                )
        }) : <h1>Loading...</h1>
    }
        </div>
        </div>

    )
}

export default Characters;