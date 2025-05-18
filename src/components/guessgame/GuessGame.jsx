import { useEffect, useState } from "react";
import "./style.css";
import Header from "./Header";
import Language from "./Language";
import Board from "./Board";
import Notification from "./Notification";
import Keyboard from "./Keyboard";
import Button from "./Button";
import CountAttempt from "./CountAttempt";
import Timer from "./Timer";
import { getCurrentWord, getMessage, languages } from "./utils";
import Confetti from "react-confetti";

const GuessGame = () => {
  const [currentWord, setCurrentWord] = useState(() => getCurrentWord());
  const [guessedWord, setGuessedWord] = useState([]);
  const [duration, SetDuration] = useState(0.5) //Minutes
  const [timer, setTimer] = useState(duration);

  const incorrectGuess = guessedWord.filter(
    (letter) => !currentWord.includes(letter)
  );

  const isWon = currentWord
    .split("")
    .every((letter) => guessedWord.includes(letter));
  const isLost = incorrectGuess.length >= languages.length - 1;
  const isGameOver = isWon || isLost || timer === 0;
  

  const maxAllowedGuess = languages.length - 1;
  const IncorrectGuessCount = incorrectGuess.length;
  const guessLeft = maxAllowedGuess - IncorrectGuessCount;

  let message, lang;
  if (IncorrectGuessCount > 0) {
    lang = languages[IncorrectGuessCount - 1].name;
    const lastLetter = guessedWord[guessedWord.length - 1];
    if (!currentWord.includes(lastLetter)){
      message = getMessage(lang);
    }
  }


  //Add letter to guessed letters
  function addToGuessedLetters(letter) {
    //check if letter already in guessed letters
    const exists = guessedWord.find((a) => a === letter);

    //Add letter is not already in guessed letters
    if (!exists && !isGameOver) {
      setGuessedWord((prevLetters) => [...prevLetters, letter]);
    }
  }

  //Start new game 
  function startNewGame(){
    setCurrentWord(() => getCurrentWord())
    setGuessedWord([])
    setTimer(duration)
  }


  return (
    <div className="guess-container">
      <Header 
        guessLeft={guessLeft}
      />
      {IncorrectGuessCount > 0 && !isGameOver && message && (
        <Notification headingText={lang} paragraphText={message} status="info" />
      )}

      {isGameOver ? (
        isWon ? (
          <>
            <Notification
              headingText="You Won!"
              paragraphText="Congratulatons you have saved the world of programming"
              status="won"
            />
            <Confetti />
          </>
        ) : ( 
          <>
            <Notification
              headingText="You Lost"
              paragraphText="Oops! You lose, better start learning Assembly to safe the world of programming"
              status="lost"
            />
          </>
        )
      ) : null}

      <Language incorrectGuess={incorrectGuess} />
      <Board
        currentWord={currentWord}
        guessedWord={guessedWord}
        isGameOver={isGameOver}
      />
      <div className="count-timer">
        <CountAttempt guessLeft={guessLeft} />
        <Timer timer={timer} setTimer={setTimer} currentWord={currentWord} />
      </div>
      <Keyboard
        addToGuessedLetters={addToGuessedLetters}
        currentWord={currentWord}
        guessedWord={guessedWord}
      />
      {isGameOver && <Button startNewGame={startNewGame} />}
      
    </div>
  );
};

export default GuessGame;
