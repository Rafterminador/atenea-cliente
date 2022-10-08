import React from 'react'
import { useNavigate } from 'react-router-dom'
import ComboBox from '../components/ComboBox';
import { AlertButton } from "../utils/AlertButton";
import Retroceder from '../components/Retroceder';

const NewGrade = () => {
    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    const handleGrade = (e) => {
        e.preventDefault();
        document.getElementById('grade').value = ''
        Swal.fire(
            AlertButton.dataAlertSuccess('Grado creado')
        ).then(() => {
            navigate('/grades')
        })
    }
    return (
        <>
            <Retroceder text="Nuevo grado" />
            <form className='contenedor-admin' onSubmit={handleGrade}>
                <label htmlFor="grade" className='label-purple'>Nombre del grado<span className='span-field'>*</span></label>
                <input
                    id="grade"
                    name="grade"
                    className={`font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] w-full`}
                    placeholder="Ingresar nombre del grado"
                    required
                />
                <label htmlFor="grade" className='label-purple'>Docente a cargo<span className='span-field'>*</span></label>
                <ComboBox teachers={['Rubén	Argüero	Sánchez Juanajatoja', 'Anastasia Madeline Orellana Álvarez', 'Sara Josthyn Gutiérrez Lagos',
                    'Cain Nehemias Orellana Valenzuela', 'Yonathan Fabio Aguilera Poblete']} valueByDefault="" />
                <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} type="submit">
                    Crear nuevo grado
                </button>
            </form>
        </>
    )
}

export default NewGrade
