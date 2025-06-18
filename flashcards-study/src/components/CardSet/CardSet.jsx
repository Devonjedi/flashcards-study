import './CardSet.css';

function CardSet({ title, description, totalCards }) {
  return (
    <div className="card-set">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p className="card-count">Total cards: {totalCards}</p>
    </div>
  );
}

export default CardSet;
