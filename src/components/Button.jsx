import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='buttonl'>
            <span>{props.name}</span>
        </button>

    </div>
  )
}

export default Button