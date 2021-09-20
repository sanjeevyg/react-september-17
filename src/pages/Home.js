import '../App.css';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CharacterContainer from '../CharacterContainer';
import {GET_CHARACTERS, DELETE_CHARACTER, TOGGLE} from '../actions';

export default function Home() {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.character)

    const getCharacter = () => {
      fetch('https://rickandmortyapi.com/api/character/?page=7')
        .then(response => response.json())
        .then(({results}) => dispatch(GET_CHARACTERS(results)))
    }

    const toggleState = useSelector(state => state.toggle)

    const removeCharacter = (characterD)=> {
      const newCharacterList = characters.filter(character => character !== characterD)
      dispatch(DELETE_CHARACTER(newCharacterList))
    }

    const change = () => {
      dispatch(TOGGLE())
    }

    useEffect(getCharacter, [])

    return (
        <div className="App">
         <CharacterContainer characters={characters} removeCharacter={removeCharacter} change={change} toggleState={toggleState}/>
        </div>
    )
}
