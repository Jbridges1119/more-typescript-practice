//MUI
import { Box, styled } from '@mui/material';
//Style
import './App.css';
//Components
import BackgroundCard from './components/BackgroundCard';

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


function App() {
  return (
    <Wrapper>
      <BackgroundCard name='Jeff' imgUrl='url'/>
    </Wrapper>
  );
}

export default App;
