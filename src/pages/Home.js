import '../App.css';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CharacterContainer from '../CharacterContainer';
import {GET_CHARACTERS, DELETE_CHARACTER, TOGGLE} from '../actions';
import { Link } from 'react-router-dom';

export default function Home(props) {
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

    const handleClick = (event) => {
        event.preventDefault()
        props.history.push("/about")
    }

    useEffect(getCharacter, [])

    return (
        <div className="App">
            <button onClick={handleClick}>About</button>
            <Link to="/counter">Counter</Link>
            <Link to="/SumoForm">Sumo Form</Link>
            <CharacterContainer characters={characters} removeCharacter={removeCharacter} change={change} toggleState={toggleState}/>
        </div>
    )
}
