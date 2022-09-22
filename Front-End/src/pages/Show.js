import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = "http://localhost:4000/";

function ShowPage(props) {
    const [character, setCharacter] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}characters/${id}`
    // console.log(URL)

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
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <h2>{character.gender}</h2>
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
  