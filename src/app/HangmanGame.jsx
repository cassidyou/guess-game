import React, { useState } from 'react'
import { languages } from './languages'
import { getFarewellText, getCurrentWord } from './utils';
import Confetti from 'react-confetti';

const HangmanGame = () => {
    const [currentWord, setCurrentWord] = useState(() => getCurrentWord());
    const [guessedLetters, setGuessedLetters] = useState([]);

    const alphabets = "abcdefghijklmnopqrstuvwxyz"

    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
   

    const isGameLost = wrongGuessCount >= languages.length - 1; 
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));

    const isGameOver = isGameLost || isGameWon;
    
    
    
    function displayFarewellText() {
        
        const lastGussedLetter = guessedLetters[guessedLetters.length - 1];
        const islastGuessedLetterCorrect = currentWord.includes(lastGussedLetter)

        if (wrongGuessCount > 0 && !isGameOver){
            const wrongCount = wrongGuessCount - 1;
            const lang = languages[wrongCount].name
            const  farewellText = getFarewellText(lang)

            if (!islastGuessedLetterCorrect){
                
                return (
                     <div className="game-status" style={{backgroundColor: "purple"}}>
                        {farewellText}
                    </div>
                )
            }

        }

        return null;
        
    }


    const langaugeElements = languages.map((language, index) => {
        const isLanguageLost = index < wrongGuessCount; 

        return <div className={isLanguageLost? "lost" : ''}
            style={{ color: language.color, backgroundColor: language.backgroundColor }}
            key={language.id}
        >
            {language.name}
        </div>
    })

    function addGuessedLetter(letter) {
        if(!isGameOver) {
            setGuessedLetters(prevLetters => {
              return prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
            })
        }
    }

    const letterElements = currentWord.split("").map((letter, index) => {
        const isCorrect = guessedLetters.includes(letter);
        const style = {
            backgroundColor: isGameOver && !isCorrect ? "red" : "green",
            color: "white"
        }

        return (
            <span key={index}>
                {isCorrect && (<span style={{backgroundColor: isGameOver ? "green" : ""}}>{letter.toUpperCase()}</span>)}
                {isGameLost && !isCorrect && (<span  style={style}>{letter.toUpperCase()}</span>)}
            </span>)
            

        // return (
        // <span key={index}>
        //         {isCorrect && letter.toUpperCase()}
        // </span>)

    })

    const alphabetElements = alphabets.split("").map(letter => {

        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);

        let status = "";
        if(isCorrect){
            status = "right"
        }

        if(isWrong){
            status = "wrong"
        }

       return (<button 
            className={status}
            disabled={isGameOver}
            onClick={() => addGuessedLetter(letter)} 
            key={letter}> {letter.toUpperCase()}
        </button>)
    })

    function renderGameStatus () {
        if(!isGameOver){
            return null;
        }


        if (isGameWon){
            return (
                <div className='game-status'>
                    <h2>You win!</h2>
                    <p>Well done!</p>
                </div>
            )
        }else{
            return (
                <div className='game-status danger'>
                    <h2>Gameover!</h2>
                    <p>You better start learning Assemblly to save the world!</p>
                </div>
            )
        }
    }


    function resetGame() {
      setGuessedLetters([])
      setCurrentWord(getCurrentWord())
    }

    function getGuessesLeft() {
        const totalGuess = languages.length - 1;
        const guessLeft = totalGuess - wrongGuessCount;

        if(!guessLeft <= 0) return `You have ${guessLeft} guess${guessLeft > 1 ? "es" : ''} left.`
        
    }


  return (
    <div className='hangman-container'>
        {
            isGameWon && <Confetti recycle={false} numberOfPieces={1000} />
        }
        <div className="container">
            <header>
                <h1>Hangman: Game</h1>
                <p>
                    Guess the word within 8 attempts to keep the 
                    programming world safe from Assemblly!
                </p>
            </header>

            {displayFarewellText()}
            {renderGameStatus()}

            <div className="language-container">
                {langaugeElements}
            </div>
            <main>
                <div className="letter-container">
                    {letterElements}
                </div>
                 <h4 style={{ textAlign: "center", marginTop: "20px" }}>
                    {getGuessesLeft()}
                </h4>
                <div className="keyboard">
                    {alphabetElements}
                </div>
                {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
                
            </main>
        </div>
    </div>
  )
}

export default HangmanGame
