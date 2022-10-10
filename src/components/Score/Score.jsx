import React from 'react'

export default function Score({data}) {
    const {score, name, createdAt} = data
    const formatDate = (string) => {
      const s = string.split('')
      let b = ''
      for(let i = 0; i < s.length; i++){
        if(s[i] === 'T'){
          b = s.splice(0, i )
        }
        for(let i = 0; i < b.length; i++ ){
          if(b[i] === '-'){
            const c = b.slice(0,i + 1)
            c.unshift(c.pop())
            const d = c.join('')
            const e = b.splice(i+ 1, 15).join('') + d
            return e
          }
        }
      }
    }
    const date = formatDate(createdAt)



    if(!data){
      return <h1>Loading....</h1>
    }
    else{
      return (
        <>
        <tr >
        <td>{score}</td>
        <td><span className='name'>{name}</span></td>
        <td>{date}</td>
        </tr>
        </>
      )
    }
}
