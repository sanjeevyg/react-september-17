import React from 'react';
import CharacterCard from './CharacterCard';
export default function characterContainer({characters, removeCharacter, change, toggleState}) {

    console.log(characters)
    const displayCharacter = () => characters.map(character => {
        return (<CharacterCard key={character.id} character={character} removeCharacter={removeCharacter} change={change} toggleState={toggleState}/>)}
    )

    return (
        <div>
            {displayCharacter()}
        </div>
    )
}
