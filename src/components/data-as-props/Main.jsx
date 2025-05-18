import React, { useState } from 'react'
import Count from './Count';

const Main = () => {
    const [count, setCount] = useState(0);

    function add () {
        setCount(prev => prev + 1);
    }


    function subtract () {
        setCount(prev => prev - 1);
    }



  return (
    <div>
        <Count number={count} subtract={subtract} add={add} />
      
    </div>
  )
}

export default Main
