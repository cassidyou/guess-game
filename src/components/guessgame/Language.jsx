import React from "react";
import { languages } from "./utils";

const Language = ({incorrectGuess}) => {


  const langElements = languages.map((lang) => {

    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span 
        style={style} 
        key={lang.id} 
        className={incorrectGuess.length >= lang.id ? "lost" : ''}
        >
        {lang.name}
      </span>
    );
  });

  return <div className="lang-container">{langElements}</div>;
};

export default Language;
