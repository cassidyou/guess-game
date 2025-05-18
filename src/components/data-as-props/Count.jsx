import React from 'react'

const Count = (props) => {
  return (
    <>
        <div className="count-countainer">
            <div className="count">{props.number}</div>
            <div className="count-btn-container">
                <button onClick={props.subtract}>-</button>
                <button onClick={props.add}>+</button>
            </div>
      </div>
    </>

  )
}
export default Count
