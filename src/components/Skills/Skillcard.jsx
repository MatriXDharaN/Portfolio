import React from 'react'
import './Skillcard.css'

const Skillcard = (props) => {
  return (
    <div className='skillcard'>
       <h3 className='skillname'>{props.name}</h3>
    </div>
  )
}

export default Skillcard