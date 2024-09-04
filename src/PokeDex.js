import React, { useState } from 'react';
import useAxios from './hooks/useAxios'; // Adjust the path as needed
import PokemonSelect from './PokemonSelect'; // Adjust the path as needed
import PokemonCard from './PokemonCard'; // Adjust the path as needed
import "./PokeDex.css";

function PokeDex() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, fetchPokemon, isLoading, error] = useAxios('https://pokeapi.co/api/v2/pokemon/');

  const handlePokemonSelect = (name) => {
    setPokemonName(name);
    fetchPokemon(name + '/'); // Fetch data for the selected Pokémon
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={handlePokemonSelect} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
