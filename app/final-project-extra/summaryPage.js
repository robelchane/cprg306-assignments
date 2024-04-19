export default function SummaryPage ({ word, correctGuesses, incorrectGuesses, accuracy, startOver }) {
  return (
    <div className='flex flex-col justify-center items-center font-serif'>
      <h2 className='text-3xl font-bold mb-4'>Summary</h2>
      <div className='text-center'>
        <p className='text-lg mb-2'>Word: {word}</p>
        <p className='text-lg mb-2'>Correct Guesses: {correctGuesses}</p>
        <p className='text-lg mb-2'>Incorrect Guesses: {incorrectGuesses}</p>
        <p className='text-lg mb-2'>Accuracy: {(accuracy * 100).toFixed(2)}%</p>
        <button onClick={startOver} className='bg-green-500 text-white p-3 text-xl rounded-full'>
          Try Again
        </button>
      </div>
    </div>
  );
}

