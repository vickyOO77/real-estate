import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-key': '3e7e777cecmsh754aad8aa9f7fcdp1c37edjsnbf267603477f' ,
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    },
  });
    
  return data;
}