import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL= 'http://localhost:4000/'


function AddNew(props) {
    const [character, setCharacter] = useState([]);
    const { id } = useParams()
    const URL = `${BASE_URL}characters/add-new`

    const getCharacters = async () => {

        try {
            const response = await fetch(URL)
            const characterData = await response.json()
            setCharacter(characterData)
        } catch (err) {
            console.log(err)
        }
    }


    const initForm = {
        name: "", 
        image: "",
        gender:"",
        hairColor: "",
        occupation: "",
        firstAppearance:""
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

            const URL = `${BASE_URL} + characters/add-new`
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
                        <input type="text" required name="gender" placeholder="Enter Character's Gender" onChange={handleChange} defaultValue={newForm.gender} />
                    </label>
                    <label>
                        <span>Hair Color</span>
                        <input type="text" required name="hair-color" placeholder="Enter Character's Hair Color" onChange={handleChange} defaultValue={newForm.hairColor} />
                    </label>
                    <label>
                        <span>Occupation</span>
                        <input type="text" required name="occupation" placeholder="Enter Character's Job" onChange={handleChange} defaultValue={newForm.occupation} />
                    </label>
                    <label>
                        <span>First Episode Appearance</span>
                        <input type="text" required name="first-episode" placeholder="Enter Character's Job" onChange={handleChange} defaultValue={newForm.firstEpisode} />
                    </label>
                    <label>
                        <span>Relatives</span>
                        <input type="text" required name="relatives" placeholder="Enter Character's Relatives" onChange={handleChange} defaultValue={newForm.relatives} />
                    </label>
                    <input type="Submit" defaultValue="Create Character" />
                </form>
            </section>
        </>
    )
}

export default AddNew;  