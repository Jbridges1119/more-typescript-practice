import { useEffect, useState } from 'react';
//MUI
import { Box, styled } from '@mui/material';
//Style
import './App.css';
//Components
import BackgroundCard from './components/BackgroundCard';
import {fetchCharacter} from './api'
//Type
import {Character} from './api'

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
padding-top: 20px;

button {
  margin-top: 20px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background: black;
  color: white;
  padding: 0 10px;
  cursor: pointer;
}
`
enum State {
  character,
  isLoading,
  characterId,
}

function App() {
  //Called "Type Casting" allows typescript to know the empty opject is a one time event and we want the type to be Character
  const [character, setCharacter] = useState<Character>({} as Character)
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState(1)

useEffect(() => {
  const fetchFromApi = async () => {
    setIsLoading(true);
    const result = await fetchCharacter(characterId)
    setIsLoading(false)
    setCharacter(result)
    console.log(result)
  }
  fetchFromApi()
}, [characterId])

  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ):(<>
<BackgroundCard name={character.name} imgUrl={character.img_url}/>
<button onClick={() => setCharacterId(Math.floor(Math.random() * 10) + 1)}>
  Random Character
</button>
</>
      )}
      
    </Wrapper>
  );
}

export default App;
