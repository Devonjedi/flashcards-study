import { useState } from 'react';
import CardSet from './components/CardSet/CardSet';
import Flashcard from './components/Flashcard/Flashcard';
import Navigation from './components/Navigation/Navigation';
import { cardData } from './data/cardData';
import './App.css';

function App() {
  const [cards, setCards] = useState(cardData.cards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  // Track streaks
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGuess = (correct) => {
    if (correct) {
      setCurrentStreak((prev) => {
        const updated = prev + 1;
        if (updated > longestStreak) setLongestStreak(updated);
        return updated;
      });
    } else {
      setCurrentStreak(0);
    }
  };

  // Move to next card (ordered list, no wrap-around)
  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  // Move to previous card (ordered list, no wrap-around)
  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  // Shuffle the cards
  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="app-container">
      <CardSet
        title={cardData.title}
        description={cardData.description}
        totalCards={cards.length}
      />

      <Flashcard
        key={currentCardIndex}
        card={cards[currentCardIndex]}
        onFlip={flipCard}
        isFlipped={isFlipped}
        onGuess={handleGuess}
      />

      <Navigation
        onNext={nextCard}
        onPrev={prevCard}
        onShuffle={shuffleCards}
        isAtStart={currentCardIndex === 0}
        isAtEnd={currentCardIndex === cards.length - 1}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>
    </div>
  );
}

export default App;
