import { useEffect, useState } from 'react';

const Timer = () => {
  const countdownDate = new Date('09/26/2023').getTime();
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);

    if (state.seconds < 0) {
      clearInterval(interval);
    }
  }, [state.seconds]);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <div className=' text-white'>
      {state.seconds < 0 ? (
        <div className='inline-flex gap-5 lg:mt-16 my-6 mx-auto lg:mx-0'>
        <div className='inline-block'>
          <div className='text-5xl lg:text-6xl  font-unica'>00<span className='text-sm'>H</span></div>
          
        </div>
        
        <div className='inline-block'>
          <div className='text-5xl lg:text-6xl font-unica'>00<span className='text-sm'>M</span></div>
          
        </div>
        <div className='inline-block'>
          <div className='text-5xl lg:text-6xl font-unica'>00<span className='text-sm'>S</span></div>
          
        </div>
      </div>
      ) : (
        <div className='inline-flex gap-5 lg:mt-16 my-6 mx-auto lg:mx-0'>
          <div className='inline-block'>
            <div className='text-5xl lg:text-6xl  font-unica'>{state.hours || '00'}<span className='text-sm'>H</span></div>
            
          </div>
          
          <div className='inline-block'>
            <div className='text-5xl lg:text-6xl font-unica'>{state.minutes || '00'}<span className='text-sm'>M</span></div>
            
          </div>
          <div className='inline-block'>
            <div className='text-5xl lg:text-6xl font-unica'>{state.seconds || '00'}<span className='text-sm'>S</span></div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
