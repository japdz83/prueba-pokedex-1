import React, { useState } from 'react'

const Formulario = (props) => {
    const { onSearch } = props
    const [buscar, setBuscar] = useState('')

    const handleOnChange = (e) => {
        setBuscar(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(buscar)
        onSearch(buscar)
    }

    return (
        <>
            <div className="flex">
                <form className="search-style" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Buscar Pokemon...' onChange={handleOnChange} />
                </form>
            </div>

        </>
    )
}

export default Formulario