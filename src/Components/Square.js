import React from 'react'

function Square({value, chooseSquare}) {
  return (
    <div
    className='square' 
    onClick={chooseSquare}>
        {value}
    </div>
  )
}

export default Square