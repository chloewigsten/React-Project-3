import Character from '../components/Character'

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const BASE_URL = "http://localhost:3000/";

const ShowPage = (props) => {
    const [characters, setCharacters] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}characters/${id}`
    console.log(URL)

    const getCharacters = async () => {

        try {
            const response = await fetch(URL)
            const characterData = await response.json()
            setCharacters(characterData)
        } catch (err) {
            console.log(err)
        }
    }

    const loaded = () => {
        return characters.map(character => (
            <div className='character'>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <p>{character.gender}</p>
            </div>
        )
        )
    }

    const loading = () => {
        return (
            <h1> Loading... </h1>
        )
    }

    const removeCharacter = async () => {
        try {
            const options = { method: 'DELETE'}
            const URL = "http://localhost:3000/characters" + id
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedCharacter = await response.json()
            console.log(deletedCharacter)
            navigate('/')
        } catch (err) {
            console.log(err)
            navigate('http://localhost:3000/characters' + id)
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

        return (
            <>
           {characters ? loaded() : loading()}

        <div className="button-wrapper">
            <Link to='/'>Back To Home Page</Link>
                <button
                    onClick={removeCharacter}
                >
                 Remove Character
                </button>
            </div>
        </>
    )
}

  export default ShowPage;
  