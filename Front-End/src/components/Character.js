function Character ({character}) {
    console.log(character);
    return (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <h2>{character.gender}</h2>
        </>
    )
}

export default Character;