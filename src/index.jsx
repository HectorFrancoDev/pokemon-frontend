import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import PokemonList from './components/PokemonList';
import NavBar from './components/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <p>
      <ul>
        <li>
          Author: Héctor Franco
        </li>
        <li>
          Website: 
          <a href="https://hectorfranco.dev"
            target="_blank" rel="noopener noreferrer">
            Héctor Franco - Portfolio
          </a>
        </li>
      </ul>

    </p>
    <br />
    <PokemonList />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
