import { useState, useEffect } from 'react'

const AddNew = (props) => {

    const BASE_URL = 'http://localhost:3000/characters/add-new'

    const getCharacters = async (fn) => {

        try {
            const response = await fetch(BASE_URL);
            const allCharacters = await response.json()
    
            fn(allCharacters);
        } catch (err) {
            console.log(err);
        }
    };

    const initForm = {
        name: "", 
        image: "",
        gender:""
    }

    const [characters, setCharacters] = useState([]); 
    console.log(characters)

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
        </>
    )
}

export default AddNew;  