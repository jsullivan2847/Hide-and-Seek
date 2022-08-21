import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <form action="">
              <Button color={"rgb(81,239,13)"}
              text={'Play Again?'}
              active={true}
              classes={"btn"}
              />
              </form>
            <Link to={'/'}>
            <Button color={"rgb(109,255,255)"}
            text={'Main Menu'}
            active={true}
            classes={"btn"}
            />
            </Link>
            </div> 
  )
}
