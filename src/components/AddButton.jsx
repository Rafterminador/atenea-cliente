import React from 'react'
import Add from "../assets/images/add.svg";

const AddButton = (props) => {
    return (
        <button className='add-button' onClick={props.function}>
            <img src={Add} alt='Add grade' />
        </button>
    )
}

export default AddButton