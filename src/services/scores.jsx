
export default async function scores() {
  const URL = 'https://hide-and-seek-backend.herokuapp.com/'
  try{
    const response = await fetch(URL)
    return await response.json();
  } catch(error){
    return console.log('error :(((');
  }
}

