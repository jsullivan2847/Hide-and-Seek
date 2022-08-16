import React from 'react'
import './button.css'

export default function AltButton({label}) {
  return (
    <div className='button' data-testid="button">
        {label}
    </div>
  )
}
