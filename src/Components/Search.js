import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
    return (
        <div className="search-bar mx-4">
            <input type="text" placeholder="Pesquisar..." />
            <button className='btn-search' type="submit">
                <FaSearch />
            </button>
        </div>
    )
}

export default Search