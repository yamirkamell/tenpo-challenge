import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './PokemonList.css';
import PokemonModal from '../pokemon-modal';

interface Pokemon {
  name: string;
  url: string; 
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  const [pokemonDetails, setPokemonDetails] = useState<{ [key: string]: any }>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return {
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((type: { type: { name: string } }) => type.type.name),
            abilities: data.abilities.map((ability: { ability: { name: string } }) => ability.ability.name),
          };
        })
      );
      const detailsMap = details.reduce((acc, detail) => {
        acc[detail.name] = detail;
        return acc;
      }, {} as { [key: string]: any });
      setPokemonDetails(detailsMap);
      setNoResults(details.length === 0);
    };

    if (pokemons.length > 0) {
      fetchPokemonDetails();
    } else {
      setNoResults(true); 
    }
  }, [pokemons]);

  const handleOpen = (pokemonName: string) => {
    setSelectedPokemon(pokemonDetails[pokemonName]);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="pokemon-list">
      {noResults && (
        <Typography variant="h6">
          No se encontró ningún Pokémon bajo ese filtro.
        </Typography>
      )}

      {pokemons.map((pokemon) => {
        const details = pokemonDetails[pokemon.name];
        const primaryType = details?.types[0];

        return (
          <Card key={pokemon.name} className={`pokemon-card ${primaryType}`} onClick={() => handleOpen(pokemon.name)}>
            <CardContent>
              {details && (
                <div className='pokemon-card'>
                  <img src={details.image} alt={details.name} className="pokemon-image" />
                  <div className='pokemon-name'>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      <PokemonModal open={openModal} onClose={handleClose} pokemon={selectedPokemon} />
    </div>
  );
};

export default PokemonList;