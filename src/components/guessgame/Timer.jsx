import { useEffect, useState } from 'react'

const Timer = ({timer, setTimer, currentWord}) => {
    const [timeLeft, setTimeLeft] = useState("")

    useEffect(() =>{
      

        const targetDate = new Date().getTime() + (timer * 60 * 1000); 
         
         const timerInterval = setInterval(function() {

              const currentDate = new Date().getTime();
              const remainingTime = targetDate - currentDate;
    
              let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
              let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
              let seconds = Math.floor((remainingTime / 1000) % 60);
    
              const timeLeft = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              
              setTimeLeft(timeLeft)
    
              if (hours <= 0 && minutes <= 0 && seconds <= 0) {
                hours = minutes = seconds = 0;
                  clearInterval(timerInterval);
                  setTimer(0)
              }
              
         }, 1000);

         return () => clearInterval(timerInterval);
        
      
    },[currentWord])
  
  return (
    <div className='timer-container'>
      <h4>Time left: {timeLeft}</h4>
    </div>
  )
}

export default Timer
