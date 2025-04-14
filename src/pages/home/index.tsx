import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Filters } from '../../components/filters';
import { Layout } from '../../components/layout/layout';
import PokemonList from '../../components/pokemon-list';
import { PaginationContainer } from './styled';

interface Type {
  name: string;
}

interface Pokemon {
  name: string;
  url: string; 
}

export const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [types, setTypes] = useState<Type[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000');
      setPokemons(response.data.results);
      setFilteredPokemons(response.data.results);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
    };

    fetchTypes();
  }, []);

  useEffect(() => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      const fetchPokemonsByType = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);
        const typePokemons = response.data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon);
        setPage(1);
        filtered = filtered.filter((pokemon) => 
          typePokemons.some((typePokemon: { name: string; }) => typePokemon.name === pokemon.name)
        );

        setFilteredPokemons(filtered);
      };

      fetchPokemonsByType();
    } else {
      setFilteredPokemons(filtered);
    }
  }, [searchTerm, selectedType, pokemons]);

  const paginatedPokemons = filteredPokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Layout>
      <Filters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
        types={types} 
      />
      <PokemonList pokemons={paginatedPokemons} />
      <PaginationContainer
        className='pagination-home'
        count={Math.ceil(filteredPokemons.length / itemsPerPage)}
        page={page}
        onChange={(_e, value) => setPage(value)}
        color="primary"
      />
    </Layout>
  );
};