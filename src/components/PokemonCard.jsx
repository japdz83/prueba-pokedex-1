import React from 'react'
import Data from '../data/type'


const PokemonCard = (props) => {
    const { typeItems } = Data;

    const { pokemon } = props



    return (
        <div className='pokemon-card' >
            <p>#{pokemon.id}</p>
            <div className="img-pokemon">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <h3>{pokemon.name}</h3>
            <div className="footer-card">
                <div className="pokemon-type">
                    {
                        pokemon.types.map((type, index) => {
                            return (
                                <div className={`${type.type.name} pokemon-type-text`} key={index}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default PokemonCard