import { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card, isFlipped, onFlip, onGuess }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const normalize = (str) => str.replace(/[^\w\s]/g, '').toLowerCase();

  // Partial match ignoring punctuation/case
  const checkGuess = () => {
    const correct =
      normalize(card.answer).includes(normalize(guess)) && guess.trim() !== '';
    setFeedback(correct ? 'Correct!' : 'Incorrect!');
    onGuess(correct);
  };

  // Prevent card flip when using input/button
  const stopFlip = (e) => e.stopPropagation();

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{card.question}</p>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onClick={stopFlip}
            placeholder="Your guess here"
          />
          <button
            onClick={(e) => {
              stopFlip(e);
              checkGuess();
            }}
          >
            Submit
          </button>
          {feedback && <p>{feedback}</p>}
        </div>
        <div className="flashcard-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
