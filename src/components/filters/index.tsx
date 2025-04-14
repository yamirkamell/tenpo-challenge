import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './filters.css';

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  types: { name: string }[]; 
}

export const Filters: React.FC<FiltersProps> = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, types }) => {
  return (
    <div className="search-filter">
      <TextField
        className='search-bar'
        id="search-pokemon"
        label="Buscar Pokémon"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FormControl className='select-type'>
        <InputLabel>Seleccionar Tipo</InputLabel>
        <Select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <MenuItem value="">Todos</MenuItem>
          {types.map((type) => (
            <MenuItem key={type.name} value={type.name}>{type.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};