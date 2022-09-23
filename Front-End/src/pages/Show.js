import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = "http://localhost:4000/";

function ShowPage(props) {
    const [character, setCharacter] = useState([]);
    const { id } = useParams()
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
                    <p className='character-details'><b className='bold'>Gender: </b>{character.gender}</p>
                    <p className='character-details'><b className='bold'>Hair Color: </b>{character.hairColor}</p>
                    <p className='character-details'><b className='bold'>Occupation: </b>{character.occupation}</p>
                    <p className='character-details'><b className='bold'>First Appearance: </b>{character.firstEpisode}</p>
                    </div>
            </div>
        )

    }


    const loading = () => {
        return (
            <h1> Loading... </h1>
        )
    }
    useEffect(() => {
        getCharacter();
    }, []);

        return (
            <div className='return-section'>
           {character ? loaded() : loading()}
           <Link to='/characters' className='return-link'>
                <div className='return'>
                        <img src="https://i.imgur.com/LnixoOK.png" alt="arrow" />
                <p className='return-link'><b>Back To Index Page</b></p>
                <img className='return-burger' src="https://i.imgur.com/9rZqDPW.png" alt="burger"/>
                </div>
            </Link>
        </div>
    )
}

  export default ShowPage;