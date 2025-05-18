import React from 'react'

const Die = (props) => {

  return (
    <button className={props.isHeld ? "btn-held" : ""} onClick={() => props.hold(props.id)}>
      {props.value}
    </button>
  )
}

export default Die
