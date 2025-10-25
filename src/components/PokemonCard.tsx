// src/components/PokemonCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export type PokemonDetail = {
  name: string;
  url: string;
  japaneseName: string;
  number: string;
}

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.15s ease-in-out',
        cursor: 'pointer',
        position: 'relative'
      }}>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          margin: 0,
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem'
        }}>
          No. {pokemon.number}
        </p>
        <img 
          src={imageUrl} 
          alt={pokemon.japaneseName} 
          style={{
            width: '5rem',
            height: '5rem',
            objectFit: 'contain'
          }}
        />
        <h2 style={{
          marginTop: '0.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          textAlign: 'center',
          margin: '0.5rem 0 0 0'
        }}>
          {pokemon.japaneseName}
        </h2>
      </div>
    </Link>
  );
};

export default PokemonCard;

