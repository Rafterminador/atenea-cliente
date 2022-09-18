import React from 'react'
import Search from "../assets/images/search.svg";
const SearchBar = () => {
    return (
        <div className='input-search-container'>
            <div className='search-container'>
                <img src={Search} alt='search by grade' />
            </div>
            <input placeholder='Buscar a un alumno' className='input-search-bar' />
        </div>
    )
}

export default SearchBar