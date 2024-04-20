"use client";
import { useState } from 'react';
import MainScreen from './mainScreen';

export default function Page() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <main className='flex flex-col justify-center items-center h-screen font-serif'>
        <div className='flex justify-center font-bold m-10 text-blue-700 text-3xl'>
            <p>Welcome to the Word Game Zone</p>
        </div>

      {gameStarted ? (
        <MainScreen />
      ) : (
        <button className='flex justify-center bg-green-500 text-white p-4 m-4 rounded-full text-2xl' onClick={startGame}>
          Start Game
        </button>
      )}
      <div className='flex justify-center font-bold m-10 text-gray-500 text-2xl'>
        <p>I use API as an Additional</p>
      </div>
    </main>
  );
}
