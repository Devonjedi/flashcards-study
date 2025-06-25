import './Navigation.css';

function Navigation({ onNext, onPrev, onShuffle, isAtStart, isAtEnd }) {
  return (
    <div className="navigation">
      <button
        className="next-button"
        onClick={onPrev}
        disabled={isAtStart}
      >
        Previous
      </button>

      <button
        className="next-button"
        onClick={onShuffle}
      >
        Shuffle
      </button>

      <button
        className="next-button"
        onClick={onNext}
        disabled={isAtEnd}
      >
        Next
      </button>
    </div>
  );
}

export default Navigation;
