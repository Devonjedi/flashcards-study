import './Navigation.css';

function Navigation({ onNext }) {
  return (
    <div className="navigation">
      <button className="next-button" onClick={onNext}>
        Next Card
      </button>
    </div>
  );
}

export default Navigation;
