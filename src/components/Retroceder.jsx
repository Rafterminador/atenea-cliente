import React from 'react'
import Regresar from "../assets/images/regresar.svg";
import { useNavigate } from 'react-router-dom'

const Retroceder = (props) => {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate(-1)
    }
    return (
        <div className='contenedor-admin'>
            <div className='grid grid-cols-12 items-center'>
                <button onClick={handleReturn}>
                    <img src={Regresar} alt='Regresar' />
                </button>
                <p className='p-purple col-span-2'>Atrás</p>
                <p className='p-bold-administracion col-span-9'>{props.text}</p>
            </div>
        </div>
    )
}

export default Retroceder