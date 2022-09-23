function Character ({character}) {
    console.log(character);
    return (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>{character.gender}</p>
            <p>{character.hairColor}</p>
            <p>{character.occupation}</p>
            <p>{character.firstEpisode}</p>
        </>
    )
}

export default Character;