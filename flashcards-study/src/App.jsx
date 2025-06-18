import { useState } from 'react'
import './App.css'
import { cardData } from './data/cardData'
import CardSet from './components/CardSet/CardSet'
import Flashcard from './components/Flashcard/Flashcard'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [cards] = useState(cardData.cards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const getRandomCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCardIndex && cards.length > 1);

    setCurrentCardIndex(randomIndex);
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
        card={cards[currentCardIndex]}
        isFlipped={isFlipped}
        onFlip={flipCard}
      />

      <Navigation onNext={getRandomCard} />
    </div>
  )
}

export default App

