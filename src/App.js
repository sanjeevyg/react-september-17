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

  const removeCharacter = (characterD)=> {
    const newCharacterList = characters.filter(character => character !== characterD)
    dispatch({
      type: "DELETE_CHARACTER",
      newCharacterList: newCharacterList
    })
  }

  const toggle = () => {
    dispatch({
      type: "TOGGLE"
    })
  }


  useEffect(getCharacter, [])

  console.log(characters)
  


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CharacterContainer characters={characters} removeCharacter={removeCharacter} toggle={toggle}/>
    </div>
  );
}

export default App;
