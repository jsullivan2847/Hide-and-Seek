import React from 'react'
import { useState } from 'react';
import '../Score/ScoreForm.css'
export default function ScoreForm
({createScore, results, setOver}) {

  const [form, setForm] = useState()

  function handleChange(evt) {
    setForm({...form, [evt.target.name]: evt.target.value, score: results})
    console.log(form)
  }

  function handleSubmit(evt){
    evt.preventDefault();
    createScore(results,form.name)
    setOver(true)
  }

  return (
    <div className='score-form'>
        <h2>Enter your name for the leaderboards</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
