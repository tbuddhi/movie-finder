import React, { useState } from 'react'
import { Header } from '../components/Header';
import { MovieList } from '../components/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [welcome, setWelcome] = useState(true);
    const [alert, setAlert] = useState(false);

    const findMovie = async () => {

        const API_KEY = '4659a8fd'; // Activated OMDB API key 
        const API_URL = `https://www.omdbapi.com/?s=${searchInput}&apikey=${API_KEY}`; // set search word and api-key to api url 

        try {
            const res = await fetch(API_URL); // fetch movies from omdb
            const jsonData = await res.json(); // convert response data to json

            setMovies(jsonData.Search); // set response search data to movies array
            setWelcome(false); // hide welcome note when load data
            setAlert(true) // show alert msg when unmatched keyword search

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} findMovie={findMovie} />
            <main className="main-content container">
                {welcome ?
                    <div className="alert-welcome">Welcome to OMDB Search, search something in the bar above!</div> : null
                }
                {movies?.length > 0 ?
                    <MovieList movies={movies} /> :
                    <div>
                        {alert ?
                            <div className="alert-warning">No movies found!</div>
                            : null}
                    </div>
                }
            </main>
        </>
    )
}

export default Home