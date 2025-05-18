const Board = ({ currentWord, guessedWord, isGameOver }) => {
  const wordElements = currentWord.split("").map((letter, index) => {
    const isCorrectLetter = guessedWord.includes(letter);
    let status = "";
    if(isGameOver && isCorrectLetter){
      status = "won"
    }else if(isGameOver && !isCorrectLetter){
      status = "lost"
    }

    return (
      <span key={index} className={status}>
          { isCorrectLetter || isGameOver ? letter.toUpperCase() : "" }
      </span>
    );
  });

  return <div className="board-container">{wordElements}</div>;
};

export default Board;
