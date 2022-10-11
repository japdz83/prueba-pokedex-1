import React from 'react'
import Formulario from './Formulario'


const Header = ({ onSearch }) => {
    const logo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    return (
        <>
            <div className="bg-header">
                <div className="img-logo">
                    <img alt="PokéAPI Logo" src={logo} />
                </div>
                <Formulario onSearch={onSearch} />
            </div>
        </>
    )
}

export default Header