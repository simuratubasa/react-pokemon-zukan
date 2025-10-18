// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          margin: 0
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>🔴</span>
            ポケモン図鑑
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;

