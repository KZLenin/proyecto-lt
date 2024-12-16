import React from 'react';
import '../styles/deportes.css';

function Deportes() {
  return (
    <div className='DeporteFavorito'>
      <h2>Deportes Favoritos</h2>
      <div className="gallery">
        <div className="card">
          <img src="/assets/soccer.png" alt="Fútbol" />
          <h3>Fútbol</h3>
        </div>
        <div className="card">
          <img src="/assets/logo-Real-Madrid.png" alt="Real Madrid" />
          <h3>Real Madrid</h3>
        </div>
        <div className="card">
          <img src="/assets/CRISTIANO.jpg" alt="Cristiano Ronaldo" />
          <h3>Cristiano Ronaldo</h3>
        </div>
      </div>
    </div>
  );
}

export default Deportes;
