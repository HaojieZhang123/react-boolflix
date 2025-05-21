import { createContext, useContext, useState } from "react";
import axios from "axios";

const ShowsContext = createContext();

const ShowsProvider = ({ children }) => {

    const apiKey = "e99307154c6dfb0b4750f6603256716d"

    const [movies, setMovies] = useState([]);
    const [TV, setTV] = useState([]);
    const [search, setSearch] = useState("");

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

    return (
        <ShowsContext.Provider value={{ movies, TV, search, setSearch, searchShows }}>
            {children}
        </ShowsContext.Provider>
    )
}

const useShows = () => {
    return useContext(ShowsContext)
}

export { ShowsProvider, useShows }
