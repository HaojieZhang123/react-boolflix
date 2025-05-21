import React from 'react'
import { useShows } from "../context/ShowsContext";
import ShowCard from "../components/ShowCard";

const Homepage = () => {

    const { movies, TV } = useShows();

    return (
        <>
            <h2>Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <ShowCard show={movie} type="movie" />
                    </li>
                ))}
            </ul>
            <h2>TV Shows</h2>
            <ul>
                {TV.map(tv => (
                    <li key={tv.id}>
                        <ShowCard show={tv} type="tv" />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Homepage