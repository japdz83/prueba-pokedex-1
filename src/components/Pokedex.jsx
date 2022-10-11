import React from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = (props) => {
    const { pokemons } = props
    return (
        <div>
            <h1 className='pokedex-title'>Pokedex</h1>
            <div className="pokedex-grip">
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pokedex