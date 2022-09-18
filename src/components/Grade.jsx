import React from 'react'
import Arrow from "../assets/images/arrow.svg";
const Grade = (props) => {
    return (
        <div className='grade-container'>
            <p className='p-bold-administracion'>{props.curso}</p>
            <div className='flex justify-between'>
                <p className='p-info-administracion'>{props.encargado}</p>
                <img src={Arrow} alt='More information' />
            </div>
            <hr className='administracion' />
        </div>
    )
}

export default Grade