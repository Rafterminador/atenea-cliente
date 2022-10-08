import React from 'react'
import Regresar from "../assets/images/regresar.svg";
import { useNavigate } from 'react-router-dom'

const Retroceder = (props) => {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="flex ml-5 mt-[21px] mb-[13px] items-cente" onClick={handleReturn}>
                <img src={Regresar} alt="backleft" />
                <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]"> Atrás</p>
                <p className="ml-[16px] p-bold-administracion ">{props.text}</p>
            </div >
            <hr className='administracion' />
        </>
    )
}

export default Retroceder