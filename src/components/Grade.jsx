import React from 'react'
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from 'react-router-dom'
const Grade = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        const gradeJSON = JSON.stringify(props)
        localStorage.setItem('grade', gradeJSON)
        navigate('/grades/update/' + props.id)
    }
    return (
        <div className='grade-container' onClick={handleClick} >
            <p className='p-bold-administracion'>{props.curso}</p>
            <div className='flex justify-between'>
                <p className='p-info-administracion'>A cargo de: <span className='grade-props-data'>{props.encargado}</span></p>
                <img src={Arrow} alt='More information' />
            </div>
            <hr className='administracion' />
        </div>
    )
}

export default Grade