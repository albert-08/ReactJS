import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action="">
          <input placeholder='Movie...' type="text" />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
