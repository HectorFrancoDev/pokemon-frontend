import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pokemon({ pokemon }) {

    const URL = 'https://backend-pokedex-technical-test.onrender.com/api/pokemon'

    const [itemPokemon, setItemPokemon] = useState({})

    useEffect(() => {
        const getPokemon = async () => {

            try {
                // const api = await axios.get(`${URL}/${pokemon.name}`)
                const api = await axios.get(`${pokemon.url}`)
                setItemPokemon(api.data)
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        }

        getPokemon()
    })

    return (

        <div className="card" style={{ width: 18 + "rem", marginBottom: 15 + 'px' }} >
            <img src={itemPokemon?.sprites?.front_default} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
                <h5 className="card-title">Pokedex index: {itemPokemon?.id} </h5>
                <p className="card-text">
                    <ul>
                        <li>Abilitiy: {itemPokemon?.abilities[0]?.ability?.name}</li>
                        <li>Type: {itemPokemon?.types[0]?.type?.name}</li>
                    </ul>
                </p>
            </div>
        </ div>
    )
}

export default Pokemon