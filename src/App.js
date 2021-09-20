import './App.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CharacterContainer from './CharacterContainer';
import {INCREMENT, DECREMENT, GET_CHARACTERS, DELETE_CHARACTER, TOGGLE} from './actions';

function App() {

  const dispatch = useDispatch()

  const characters = useSelector(state => state.character)
  const count = useSelector(state => state.count) 

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

  const increaseCount = () => {
    const nr = 5
    dispatch(INCREMENT(nr))
  } 
  
  const decreaseCount = () => {
    const nr = 1
    dispatch(DECREMENT(nr))
  } 
  
  useEffect(getCharacter, [])

  return (
    <div className="App">
      <button onClick={increaseCount}>INCREASE</button>
      <h1>{count}</h1>
      <button onClick={decreaseCount}>DECREASE</button>
      <CharacterContainer characters={characters} removeCharacter={removeCharacter} change={change} toggleState={toggleState}/>
    </div>
  );
}

export default App;
