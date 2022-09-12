import axios from "axios";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
}

export const fetchCharacter = async (id: number) => {
  return(
  axios.get(
    `https://finalspaceapi.com/api/v0/character/${id}`
  ).then(data => {return data})
  .catch(err => console.log('Error', err ))
  )
};