import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

const PokemonList = () => {

    const URL = 'https://backend-pokedex-technical-test.onrender.com/api/pokemon'

    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(URL);
                setPokemonList(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemon();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${URL}/${searchTerm.toLowerCase().trim()}`);
            setPokemonList([response.data]);
        } catch (error) {
            console.error('Error searching for Pokemon:', error);
        }
    };

    return (
        // <div>
        //     <input
        //         type="text"
        //         placeholder="Search Pokemon"
        //         value={searchTerm}
        //         onChange={(e) => setSearchTerm(e.target.value)}
        //     />
        //     <button onClick={handleSearch}>Search</button>

        <div className="row">
            {pokemonList.map((pokemon, index) => (
                <div className="col-3">
                    <Pokemon key={index} pokemon={pokemon} />
                </div>
            ))}
        </div>

        // </div>
    );
};

export default PokemonList;
