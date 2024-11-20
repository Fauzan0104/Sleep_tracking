import React, { useState } from 'react';
import Home from './Home';
import Sleep from './Sleep';
import Result from './Result';

function App() {
  const [page, setPage] = useState('home');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleStart = () => {
    setStartTime(new Date());
    setPage('sleep');
  };

  const handleStop = () => {
    setEndTime(new Date());
    setPage('result');
  };

  return (
    <>
      {page === 'home' && <Home onStart={handleStart} />}
      {page === 'sleep' && <Sleep onStop={handleStop} />}
      {page === 'result' && <Result startTime={startTime} endTime={endTime} />}
    </>
  );
}

export default App;
