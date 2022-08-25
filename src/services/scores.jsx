
export async function scores() {
  const URL = 'https://hide-and-seek-backend.herokuapp.com/'
  try{
    const response = await fetch(URL)
    return await response.json();
  } catch(error){
    return console.log('error :(((');
  }
}

export async function createScore(distance, name) {
  console.log(distance)
  const URL = 'https://hide-and-seek-backend.herokuapp.com/create'
  await fetch(URL, {
    method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify({ 
      name: name,
      score: distance
    }),
  });
  // scores()
  // const data = await response.json()
  // console.log(data)
  // return await data
}

