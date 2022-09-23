const EditForm = ({handleSubmit, handleChange, characterData, val}) => {
    return (
        <form className="EditForm" onSubmit={handleSubmit}>
                <label>
                        <span>Name</span>
                        <input type="text" required name="name" placeholder="Enter character's name" onChange={handleChange} defaultValue={characterData.name} />
                    </label>
                    <label>
                        <span>Photo</span>
                        <input type="text" required name="photo" placeholder="Enter Character's Photo" onChange={handleChange} defaultValue={characterData.image} />
                    </label>
                    <label>
                        <span>Gender</span>
                        <input type="text" required name="gender" placeholder="Enter Character's Gender" onChange={handleChange} defaultValue={characterData.gender} />
                    </label>
                    <label>
                        <span>Hair Color</span>
                        <input type="text" required name="hair-color" placeholder="Enter Character's Hair Color" onChange={handleChange} defaultValue={characterData.hairColor} />
                    </label>
                    <label>
                        <span>Occupation</span>
                        <input type="text" required name="occupation" placeholder="Enter Character's Job" onChange={handleChange} defaultValue={characterData.occupation} />
                    </label>
                    <label>
                        <span>First Episode Appearance</span>
                        <input type="text" required name="first-episode" placeholder="Enter Character's Job" onChange={handleChange} defaultValue={characterData.firstEpisode} />
                    </label>
                    <label>
                        <span>Relatives</span>
                        <input type="text" required name="relatives" placeholder="Enter Character's Relatives" onChange={handleChange} defaultValue={characterData.relatives} />
                    </label>
        </form>
    )
}

export default EditForm;