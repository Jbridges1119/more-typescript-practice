import { styled, Card } from '@mui/material'
import React from 'react'

const FlashCard = styled(Card)`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
width: 340px;
height: 420px;
padding-bottom: 20px;
background: lightblue;
border-radius: 1rem;
box-sizing: border-box;
img {
  border-radius: 1rem;
  border: 1px solid lightcoral;
  width: 300px;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
}
`;
type Props = {
  name: string;
  imgUrl: string;
}

const BackgroundCard: React.FC<Props> = ({ name, imgUrl}) => {
  return (
    <FlashCard>
      <p>{name}</p>
      <p>{imgUrl}</p>
    </FlashCard>
  )
}

//THIS IS THE OTHERWAY TO TYPE PROPS
// const BackgroundCard = ({ name, imgUrl}: Props) => {
//   return (
//     <FlashCard>
//       <p>{name}</p>
//       <p>{imgUrl}</p>
//     </FlashCard>
//   )
// }
export default BackgroundCard