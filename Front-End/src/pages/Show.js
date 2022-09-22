import EditForm from '../components/EditForm'

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const BASE_URL = "http://localhost:3000/";

const ShowPage = (props) => {
    const [editForm, setEditForm] = useState(null); 
    const [characters, setCharacters] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}characters/${id}`

    const getCharacters = async () => {
        // console.log(URL)
        try {

            const response = await fetch(URL)
            const characterData = await response.json()
            setCharacters(characterData)
            setEditForm(characterData)
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

    const handleChange = (e) => setEditForm({...editForm, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        console.log('submit successful')
        e.preventDefault()
        const options = {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(editForm)
        }

        try {
            console.log(URL)
            const response = await fetch(URL, options)
            const updatedCharacter = await response.json()

            setCharacters(updatedCharacter)
            setEditForm(updatedCharacter)
        } catch (err) {
            console.log(err)
        }
    }

    const removeCharacter = async () => {
        try {
            const options = { method: 'DELETE'}
            const URL = "http://localhost:3000/characters/" + id
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
        getCharacters()}, [])

    return (
        <section>
            {editForm ?
            <EditForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                characterData={editForm}
                val={`Edit Character`}
                /> :null}

                {characters ? loaded() : loading()}

                <div className="button-wrapper">
                    <Link to='/'>Back To Home Page</Link>
                    <button
                        onClick={removeCharacter}
                        >
                            Remove Character
                        </button>
                </div>

        </section>
    )
}
  
  export default ShowPage;
  