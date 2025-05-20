import axios from "axios"
import { useState, useEffect } from "react"
import ReactCountryFlag from "react-country-flag"

// Ricerca movie + TV + people: https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${string}
// 
// Discover Movies:             https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}
// Discover TV:                 https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}
// 
// flag url:                    http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg

function App() {

  const apiKey = "e99307154c6dfb0b4750f6603256716d"

  const [movies, setMovies] = useState([])
  const [TV, setTV] = useState([])
  const [search, setSearch] = useState("")

  const searchMovie = (string) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${string}`)
      .then((response) => {
        // console.log(response.data.results)
        setMovies(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const searchTV = (string) => {
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${string}`)
      .then((response) => {
        // console.log(response.data.results)
        setTV(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const searchShows = (string) => {
    searchMovie(string);
    searchTV(string);
  }

  const flag = (string) => {
    let code = string.toUpperCase()

    const codesCorrection = {
      "EN": "US",
      "CS": "CZ",
      "JA": "JP",
      "DA": "DK",
      "KO": "KR",
    }

    code = codesCorrection[code] ? codesCorrection[code] : code

    return <ReactCountryFlag countryCode={code} />
  }

  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => searchShows(search)}>Search</button>

      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>
            <div className="movieCard">
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.original_title}</p>
              {flag(movie.original_language)}
              <div>
                <span>{movie.vote_average}</span> ({movie.vote_count})
              </div>
            </div>
          </li>
        })}
      </ul>

      <h2>TV</h2>

      <ul>
        {TV.map((show) => {
          return <li key={show.id}>
            <div className="movieCard">
              <h2>{show.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                alt={show.title}
              />
              <p>{show.original_title}</p>
              {flag(show.original_language)}
              <div>
                <span>{show.vote_average}</span> ({show.vote_count})
              </div>
            </div>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
