import React from 'react'




const PokemonCard = (props) => {
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
                                <div className='pokemon-type-text' key={index}>{type.type.name}</div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default PokemonCard