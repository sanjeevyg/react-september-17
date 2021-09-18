import React from 'react';
import CharacterCard from './CharacterCard';
export default function characterContainer({characters, removeCharacter, toggle}) {

    console.log(characters)
    const displayCharacter = () => characters.map(character => {
        return (<CharacterCard key={character.id} character={character} removeCharacter={removeCharacter} toggle={toggle}/>)}
    )

    return (
        <div>
            {displayCharacter()}
        </div>
    )
}
