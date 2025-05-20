import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const [movies, setMovies] = useState([])

  const [filteredMovies, setFilteredMovies] = useState([])

  const [search, setSearch] = useState("")

  const getMovies = () => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs")
      .then((response) => {
        setMovies(response.data.results)
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getMovies();
  }, [])

  // useEffect(() => {
  //   setFilteredMovies(movies.filter((movie) => {
  //     return movie.title.toLowerCase().includes(search.toLowerCase())
  //   }))
  // }, [search, movies])

  const searchMovie = () => {
    setFilteredMovies(movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    }))
  }

  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchMovie}>Search</button>

      <ul>
        {filteredMovies.map((movie) => {
          return <li key={movie.id}>
            <div className="movieCard">
              <h2>{movie.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <p>{movie.original_title}</p>
              <p>{movie.original_language}</p>
              <span>{movie.vote_average}</span> ({movie.vote_count})
            </div>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
