import React from 'react'
import { SearchWidget } from './SearchWidget'

export const Header = (props) => {

    return (
        <header className="header">
            <div className="header__wrapper container">
                <div className="header__searchBar">
                    <h1>OMDB SEARCH</h1>
                    <SearchWidget
                        searchInput={props.searchInput}
                        setSearchInput={props.setSearchInput}
                        findMovie={props.findMovie}
                    />
                </div>
            </div>
        </header>
    )
}
