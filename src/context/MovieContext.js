import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const MovieContext = createContext()

const API_KEY = '4659a8fd';
// const API_URL = `http://www.omdbapi.com/?t=${searchInput}&apikey=${API_KEY}`;

const MovieFinder = ({ children }) => {
    const [movies, setMovies] = useState();
    const [search, setSearch] = useState('');

    const getMovie = async (searchValue) => {
        const response = await axios(
            `http://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`
        );
        const data = response.data;
        setMovies(data.Search);
    }

    useEffect(() => {
        getMovie(search);
    }, []);

    return (
        <MovieContext.Provider
        value={{
            setSearch,
            movies,
            getMovie,
            searchValue
        }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieFinder;
