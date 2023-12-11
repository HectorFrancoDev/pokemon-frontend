import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Spinners from './Spinners';

const PokemonList = () => {

    const URL = 'https://backend-pokedex-technical-test.onrender.com/api/pokemon'

    // const [isData, setData] = useState(false)
    const [pokemonList, setPokemonList] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(URL);
                setPokemonList(response.data);
                // setData(true)
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        };

        fetchPokemon();
    }, []);

    // const handleSearch = async () => {
    //     try {
    //         const response = await axios.get(`${URL}/${searchTerm.toLowerCase().trim()}`);
    //         setPokemonList([response.data]);
    //     } catch (error) {
    //         console.error('Error searching for Pokemon:', error);
    //     }
    // };

    return (
        // <div>
        //     <input
        //         type="text"
        //         placeholder="Search Pokemon"
        //         value={searchTerm}
        //         onChange={(e) => setSearchTerm(e.target.value)}
        //     />
        //     <button onClick={handleSearch}>Search</button>

        <div>
            {pokemonList.length == 0 && <Spinners />}

            {pokemonList.length > 0 &&

                <div className="row">
                    {pokemonList.map((pokemon, index) => (
                        <div className="col-3">
                            <Pokemon key={index} pokemon={pokemon} />
                        </div>
                    ))}
                </div>

            }

        </div>

        // </div>
    );
};

export default PokemonList;
