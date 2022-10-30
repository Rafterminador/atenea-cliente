import React from 'react'
import Search from "../assets/images/search.svg";
const SearchBar = (props) => {
    return (
        <div className='input-search-container'>
            <div className='search-container'>
                <img src={Search} alt='search by grade' />
            </div>
            <input placeholder={props.placeholder} className='input-search-bar' onChange={props.onChange} />
        </div>
    )
}

export default SearchBar