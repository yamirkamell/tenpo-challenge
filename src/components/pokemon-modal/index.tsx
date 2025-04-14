import React from 'react';
import { Modal, Box, List, ListItemIcon, ListItemText, ListItem} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import './PokemonModal.css';

interface PokemonModalProps {
  open: boolean;
  onClose: () => void;
  pokemon: {
    name: string;
    image: string;
    types: string[];
    abilities: string[];
  } | null;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const PokemonModal: React.FC<PokemonModalProps> = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <Modal open={open} onClose={onClose} >
      <Box className= {`pokemon-modal ${pokemon.types[0]}`} sx={modalStyle}>
        <div className='pokemon-name-modal'>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image-modal" />
        <List className='pokemon-type-modal'>Tipos:</List>
        {
            pokemon.types.map((type) => 
                <ListItem className='pokemon-type-modal' disablePadding>
                    <ListItemIcon>
                        <CatchingPokemonIcon />
                    </ListItemIcon>
                    <ListItemText primary={<span className="pokemon-type-modal">{type.charAt(0).toUpperCase() + type.slice(1)}</span>}  />
                </ListItem>
            )
        }
        <List className='pokemon-type-modal'>Habilidades:</List>
        {
            pokemon.abilities.map((ability) => 
                <ListItem disablePadding>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={<span className="pokemon-type-modal">{ability.charAt(0).toUpperCase() + ability.slice(1)} </span>}/>
                </ListItem>
            )
        }
      </Box>
    </Modal>
  );
};

export default PokemonModal;