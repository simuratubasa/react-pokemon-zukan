import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

