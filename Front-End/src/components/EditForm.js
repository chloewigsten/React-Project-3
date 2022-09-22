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
                        <input type="text" required name="gender" placeholder="Enter Character's Gender" onChange={handleChange} defaultValue={characterData.title} />
                    </label>
        </form>
    )
}

export default EditForm