import React from 'react';

export default function characterCard({character, removeCharacter, toggle}) {
    console.log(character.name)
    const handleRemove = (event) => {
        event.preventDefault()
        removeCharacter(character)
    }

    const handleClick = () => {
        toggle()
    }


    return (
        <div className={toggle ? "red" : "blue"}>
            <h1>{character.name}</h1>
            <img key={character.id} src={character.image} alt={character.name} width={200} height={200}/>
            <h3 onClick={handleRemove}>Remove Character</h3>
            <button onClick={handleClick}>{toggle ? "ON" : "OFF"} </button>
        </div>
    )
}
