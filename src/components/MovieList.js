import React, { useState } from 'react'
import { MovieCard } from './MovieCard'
import { Pagination } from './Pagination';

export const MovieList = ({ movies }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(5);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className="movie-list row">
                {currentMovies.map((movie, index) =>
                    <MovieCard movie={movie} key={index} />
                )}
            </div>
            <div className="row">
                <Pagination
                    moviesPerPage={moviesPerPage}
                    totalMovies={movies.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}
