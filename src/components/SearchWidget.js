import React from 'react'

export const SearchWidget = (props) => {
    return (
        <div className='input-wrapper'>
            <input
                className="search-input"
                placeholder='Search a movie'
                value={props.searchInput}
                onChange={(e) => props.setSearchInput(e.target.value)}
            />
            <button type="submit" onClick={props.findMovie}>Search</button>
        </div>
    )
}
