import React from 'react'

export const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav >
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="pagination__item">
                            <button onClick={() => paginate(number)} className="pagination__link">{number}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
