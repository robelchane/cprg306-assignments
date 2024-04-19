"use client";
import { useState, useEffect } from 'react';
import SummaryPage from './summaryPage';

export default function MainScreen () {
  const [targetWord, setTargetWord] = useState('');
  const [word, setWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [money, setMoney] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordMeaning, setWordMeaning] = useState('');

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      if (!response.ok) {
        throw new Error('Failed to fetch random word');
      }
      const data = await response.json();
      const randomWord = data[0].toLowerCase();

      const tripleWord = randomWord.split('').map((letter, index) => index % 3 === 0 ? letter : '_');

      setWord(tripleWord);
      setTargetWord(randomWord);

      fetchWordMeaning(randomWord);

      setGameStarted(true);
    } catch (error) {
      console.error('Error fetching random word:', error);
    }
  };

  const fetchWordMeaning = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Failed to fetch word meaning');
      }
      const data = await response.json();
      if (data && data[0] && data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions) {
        const firstDefinition = data[0].meanings[0].definitions[0];
        setWordMeaning(firstDefinition.definition);
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && !gameComplete) {
      setGuessedLetters([...guessedLetters, letter]);
      const newWord = word.map((char, index) => targetWord[index] === letter ? letter : char);
      setWord(newWord);
      if (targetWord.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        setIncorrectLetters([...incorrectLetters, letter]);
        setMoney(money - 10);
      }
    }
  };

  useEffect(() => {
    const checkGameCompletion = () => {
      if (word.join('') === targetWord) {
        setGameComplete(true);
      }
    };

    checkGameCompletion();
  }, [word, targetWord]);

  const resetGame = () => {
    setScore(score + money);
    setMoney(100);
    setGuessedLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setGameComplete(false);
    setWordMeaning('');
    fetchRandomWord();
  };

  const revealWord = () => {
    setMoney(0);
    setWord(targetWord.split(''));
  };

  return (
    <main>
      {gameStarted && (
        <div className='flex flex-col justify-center items-center h-screen'>
          <div className='absolute top-4 right-4 text-2xl text-black'>
            <p>Score: {score}</p>
          </div>
          <h1 className='text-3xl mb-8'>Money: {money}</h1>
          <div className='flex flex-wrap justify-center'>
            {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
              <button
                key={letter}
                onClick={() => handleGuess(letter)}
                className={`m-2 p-2 bg-gray-300 ${guessedLetters.includes(letter) || gameComplete ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={guessedLetters.includes(letter) || gameComplete}
              >
                {letter}
              </button>
            ))}
          </div>
          <p className='text-2xl mt-8'>{word.join(' ')}</p>
          {wordMeaning && <p className='text-xl'>Meaning: {wordMeaning}</p>}
          <button className='m-4 p-3 bg-blue-500 text-white rounded-full' onClick={revealWord}>Show Word</button>
          {(money === 0 || gameComplete) && (
            <SummaryPage
              word={targetWord}
              correctGuesses={correctLetters.length}
              incorrectGuesses={incorrectLetters.length}
              accuracy={correctLetters.length / (correctLetters.length + incorrectLetters.length)}
              startOver={resetGame}
            />
          )}
        </div>
      )}
    </main>
  );
}

