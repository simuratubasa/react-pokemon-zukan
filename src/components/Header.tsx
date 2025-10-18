// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container">
        <h1 className="text-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-decoration-none">
            <span>🔴</span>
            ポケモン図鑑
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;

