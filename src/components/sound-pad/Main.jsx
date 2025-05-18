import React, { useState } from 'react'
import padsData from './pads'
import Pad from './Pad';


const Main = () => {
    const [pads, setPads] = useState(padsData);

    function toggle (id) {

        setPads(prevPad => {
            const newPads = prevPad.map(item => {
                return item.id === id ? {...item, on: !item.on} : item
            })

            return newPads;
        });
    }

    function resetAll() {
        setPads(prevPads => prevPads.map(item => {
            return {...item, on: false}
        }))
    }


    function turnAll () {
        setPads(prevPads => prevPads.map(item => {
            return {...item, on: true}
        }))
    }

    const buttonElelments = pads.map(pad => (
        <Pad 
            key={pad.id} 
            color={pad.color} 
            on={pad.on} 
            id={pad.id}
            toggle={toggle}
        />
    ));
  return (
    <>
        <div className='pads-container'>
        {buttonElelments}
        </div>
        <button onClick={resetAll}>Reset All</button>
        <button onClick={turnAll}>Turn All</button>
    </>
  )
}

export default Main
