import React from 'react'
import Add from "../assets/images/add.svg";
import { useNavigate } from 'react-router-dom'
const AddGrade = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/grades/create')
    }
    return (
        <button className='add-button' onClick={handleClick}>
            <img src={Add} alt='Add grade' />
        </button>
    )
}

export default AddGrade