import React, { useState } from 'react'

const Pad = (props) => {
    
    const style = {
        backgroundColor: props.color,
    }


  return (
      <button
        style={style}
        className={props.on ? "on" : ""}
        onClick={() => props.toggle(props.id)}></button>
  )
}

export default Pad
