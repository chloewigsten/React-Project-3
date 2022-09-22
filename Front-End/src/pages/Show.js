import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = "http://localhost:4000/";

function ShowPage(props) {
    const [character, setCharacter] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}characters/${id}`

    const getCharacter = async () => {

        try {
            const response = await fetch(URL)
            const characterData = await response.json()
            setCharacter(characterData)
            console.log(character)
        } catch (err) {
            console.log(err)
        }
    }

    const loaded = () => {
        return (
            <div className='character'>
                <img src={character.image} alt={character.name} className='character-headshot' />
                <div className='character-info'> 
                    <h1 className='character-name'>{character.name}</h1>
                    <p>Gender: {character.gender}</p>
                    <p>Hair Color: {character.hairColor}</p>
                    <p>Occupation: {character.occupation}</p>
                    <p>First Appearance: {character.firstEpisode}</p>
                    </div>
            </div>
        )

    }


    const loading = () => {
        console.log(character)
        return (
            <h1> Loading... </h1>
        )
    }

    const removeCharacter = async () => {
        try {
            const options = { method: 'DELETE'}
            const URL = "http://localhost:4000/characters" + id
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedCharacter = await response.json()
            console.log(deletedCharacter)
            navigate('/')
        } catch (err) {
            console.log(err)
            navigate('http://localhost:4000/characters' + id)
        }
    }

    useEffect(() => {
        getCharacter();
    }, []);

        return (
            <>
           {character ? loaded() : loading()}

        <div className="button-wrapper">
                <button
                    onClick={removeCharacter}
                >
                 Remove Character
                </button>
                <div>
                <Link to='/'>Back To Home Page</Link>
                </div>
            </div>
        </>
    )
}

  export default ShowPage;