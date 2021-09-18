import React from 'react';

export default function characterCard({character}) {
    console.log(character.name)
    return (
        <div>
            <h1>{character.name}</h1>
            <img key={character.id} src={character.image} alt={character.name} width={200} height={200}/>
        </div>
    )
}
