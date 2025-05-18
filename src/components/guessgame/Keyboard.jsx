
const Keyboard = ({addToGuessedLetters, currentWord, guessedWord}) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz"

    
    function getButtonStatus (letter){
      const isGuessed = guessedWord.includes(letter);
      const isCorrect = isGuessed && currentWord.includes(letter);
      const isWrong = isGuessed && !currentWord.includes(letter);

      if(isCorrect){
        return "right"
      } else

      if(isWrong){
        return "wrong"
      }else{

        return ""
      }

    }
    
    const lettersElements = alphabets.split("").map(letter => {

        return <button 
        key={letter}
        className={getButtonStatus(letter)}
          onClick={() => addToGuessedLetters(letter)}
        >{letter.toUpperCase()}</button>
    })
  return (
    <div className='keyboard-container'>
      {lettersElements}
    </div>
  )
}

export default Keyboard
