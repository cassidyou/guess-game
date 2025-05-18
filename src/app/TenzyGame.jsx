import React, { useState, useRef, useEffect } from 'react'
import Die from '../components/die/Die'
import { nanoid } from '@reduxjs/toolkit';
import Confetti from 'react-confetti'

const TenzyGame = () => {
    const [dice, setDice] = useState(() => generateAllNewDice());
    const buttonRef = useRef(null);


   const gameWon =  dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() =>{
        if (gameWon) {
            buttonRef.current.focus();
        }
        
    }, [gameWon])

    function generateAllNewDice() {
       
        return new Array(10).fill(0).map(() => ({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }))
    }

    function rollDice() {
        setDice(prevDice => {
            const newDice = prevDice.map(item => {
                return !item.isHeld ? {...item, value: Math.ceil(Math.random() * 6)} : item
            })

            return newDice;
        })
    }

    function hold(id) {
       setDice(prevDice => {
           const newDice = prevDice.map(item => {
                return item.id === id ? {...item, isHeld: !item.isHeld} : item
           })

           return newDice;
        });
    }

    const diceElements = dice.map(dice => (
    <Die key={dice.id} id={dice.id} isHeld={dice.isHeld} value={dice.value} hold={hold} />
))

  return (
    <div className='tenzy-container'>
      <main>
        {gameWon && <Confetti />}
        <div className='header'>
            <h3>Tenzies</h3>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice-container">
           {diceElements}
        </div>
        {gameWon ? (
            <button ref={buttonRef} onClick={() => setDice(generateAllNewDice)} className="roller">New Game</button>
        ) : (
            <button onClick={rollDice} className="roller">Roll</button>

        )}
      </main>
    </div>
  )
}

export default TenzyGame
