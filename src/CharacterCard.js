import React from 'react';

export default function characterCard({character, removeCharacter, change, toggleState}) {

    const handleRemove = (event) => {
        event.preventDefault()
        removeCharacter(character)
    }

    const handleClick = () => {
        change()
    }

    return (
        <div >
            <h1>{character.name}</h1>
            <img key={character.id} src={character.image} alt={character.name} width={200} height={200}/>
            <button onClick={handleRemove} className={toggleState ? "red" : "blue"}>Remove Character</button>
            <button onClick={handleClick}>{toggleState ? "ON" : "OFF"} </button>
        </div>
    )
}
