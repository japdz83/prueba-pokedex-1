import { useState, useEffect } from 'react'
import Header from './components/Header'
import Pokedex from './components/Pokedex'
import Types from './components/Types'
import { getPokemons, getPokemonData, searchPokemon } from './data/api'



function App() {

  const [pokemons, setPokemons] = useState([])

  const listPokemon = async () => {
    try {
      const data = await getPokemons()
      const promise = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promise)
      setPokemons(results)
      // console.log(results);
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    listPokemon()
  }, [])

  const onSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    if (!result) {
      console.log('No hay Resultado...');
    } else {
      setPokemons([result])
    }

  }


  return (
    <div >
      <Header onSearch={onSearch} />
      <div className="container">
        <Types />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  )
}

export default App
