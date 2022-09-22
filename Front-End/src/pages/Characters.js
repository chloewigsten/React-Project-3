import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Character from '../components/Character'

const BASE_URL = "http://localhost:4000/characters";

// console.log(BASE_URL);

const getCharacters = async (fn) => {
    try {
        const response = await fetch(BASE_URL);
        const allCharacters = await response.json()

        fn(allCharacters);
    } catch (err) {
        console.log(err);
    }
};

const Characters = (props) => {

    const initForm = {
        name: "", 
        image: "",
        gender:""
    }

    const [characters, setCharacters] = useState([]); 

    const [newForm, setNewForm] = useState(initForm)

    useEffect(() => {
        setTimeout(() => {
            getCharacters(setCharacters);
        }, 1200);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newCharacter = {...newForm}

            const testingOutput = JSON.stringify(newCharacter)

            const options = {
                method: "POST", 
                headers: {
                    "Content-Type" : "application/json"
                }, 
                body: testingOutput
            }

            const URL = BASE_URL+"characters"
            const response = await fetch(URL, options)

            const responseData = await response.json()
            console.log(responseData)

            getCharacters(setCharacters)
            setNewForm(initForm)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
    }

    const loaded = () => {
        return characters?.map((character) => {
            return (
                <div key={character._id} className="character-card">
                    <Link to={`/characters/${character._id}`}>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.gender}</h3>
                    </Link>
                </div>
            )  
        })
    }

    const loading = () => (
        <section className="character-index">
            <h1>
                Loading... 
                <span>
                <img
                        role="presentation"
                        alt="spinner logo"
                        className="spinner"
                        src="https://freesvg.org/img/1544764567.png"
                    />{" "}
                </span>
            </h1>
        </section>
    )

    return (
        <>
        <section>
                <h2>Add in Your Favorite Character</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input type="text" required name="name" placeholder="Enter character's name" onChange={handleChange} defaultValue={newForm.name} />
                    </label>
                    <label>
                        <span>Photo</span>
                        <input type="text" required name="photo" placeholder="Enter Character's Photo" onChange={handleChange} defaultValue={newForm.image} />
                    </label>
                    <label>
                        <span>Gender</span>
                        <input type="text" required name="gender" placeholder="Enter Character's Gender" onChange={handleChange} defaultValue={newForm.title} />
                    </label>
                    <input type="Submit" defaultValue="Create Character" />
                </form>
            </section>
            <section className="character-list">
                {characters && characters.length ? loaded() : loading()}
            </section>
        </>
    )
    }

export default Characters;