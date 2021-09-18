import './App.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CharacterContainer from './CharacterContainer';

function App() {

  const dispatch = useDispatch()

  const characters = useSelector(state => state.character)

  const getCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) => dispatch({
        type: "GET_CHARACTERS",
        characters: results
      }))
  }

  const toggleState = useSelector(state => state.toggle)
  console.log(toggleState)

  const removeCharacter = (characterD)=> {
    const newCharacterList = characters.filter(character => character !== characterD)
    dispatch({
      type: "DELETE_CHARACTER",
      newCharacterList: newCharacterList
    })
  }

  const change = () => {
    dispatch({
      type: "TOGGLE"
    })
  }


  useEffect(getCharacter, [])

  console.log(characters)
  


  return (
    <div className="App">
      <CharacterContainer characters={characters} removeCharacter={removeCharacter} change={change} toggleState={toggleState}/>
    </div>
  );
}

export default App;
