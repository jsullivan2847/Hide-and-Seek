import React from 'react'

export default function Score({data}) {
    console.log(data)
    const {score, name, createdAt} = data

    if(!data){
      return <h1>Loading....</h1>
    }
    else{
      return (
        <>
        <div>
        <h1>{score}</h1>
        <p>{name}</p>
        <p>{createdAt}</p>
        </div>
        </>
      )
    }
}
