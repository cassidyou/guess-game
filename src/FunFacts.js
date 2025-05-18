import React, { useState } from 'react';
import { animals } from './components/animals';
import background from './assets/ocean.jpg';



function FunFacts() {
  const [fact, setFact] = useState('')

  const title = "";
  const animalFacts = <h1>{ !title? "Click an animal for a fun fact" : title}</h1>;
  const backgroundImage =  <img className='background-img' src={background} />;
 

  const displayFact = (e) => {
    const name = e.target.alt;
    const facts = animals[name].facts;
    
    setFact(facts[Math.floor(Math.random() * facts.length)]);

  }




  const images = [];
  for(let animal in animals) {
    images.push(
        <img
          src={animals[animal].image}
          alt={animal}
          role='button'
          onClick={displayFact}
      />
    );

  }





  return (
    <div className='app'>
      {backgroundImage}
      <div className='fact-ctn'><h3>{fact}</h3></div>
      <div className='image-ctn'>
        {images}
      </div>
    </div>
  );
}

export default FunFacts;
