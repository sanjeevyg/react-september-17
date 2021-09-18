import React from 'react';
import CharacterCard from './CharacterCard';
export default function characterContainer({characters}) {

    console.log(characters)
    const displayCharacter = () => characters.map(character => {
        return (<CharacterCard key={character.id} character={character}/>)}
    )

    return (
        <div>
            {displayCharacter()}
        </div>
    )
}
