import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                id="search-box"
                className="pa3 ba b--gray shadow-4" 
                type="search" 
                placeholder="search kittens"
                onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;