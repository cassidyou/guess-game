import React from 'react'

const Button = ({startNewGame}) => {
  return (
    <div className='btn-container'>
      <button onClick={() => startNewGame()}>New Game</button>
    </div>
  )
}

export default Button
