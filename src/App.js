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


  useEffect(getCharacter, [])

  console.log(characters)
  


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CharacterContainer characters={characters}/>
    </div>
  );
}

export default App;
