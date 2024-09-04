import React from 'react';
import useAxios from './hooks/useAxios'; // Adjust the path as needed
import PlayingCard from './PlayingCard'; // Adjust the path as needed
import './PlayingCardList.css';

function CardTable() {
  const [cards, fetchCards, isLoading, error] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => fetchCards()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {isLoading && <p>Loading...</p>}
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
