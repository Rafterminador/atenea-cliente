import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Regresar from "../assets/images/regresar.svg";
import Student from "../assets/images/student.svg";
import Grade from "../assets/images/grade.svg";
import Teacher from "../assets/images/teacher.svg";
import DeleteConfirmation from "../assets/images/delete-confirmation.svg";
const UpdateGrade = () => {
    const navigate = useNavigate()
    const params = useParams()
    const Swal = require('sweetalert2')
    let gradeJSON = localStorage.getItem('grade')
    let grade = (JSON.parse(gradeJSON))
    const handleReturn = () => {
        navigate(-1)
    }
    const handleEdit = () => {
        navigate(`/grades/update/${params.id}/edit`)
    }
    const handleDelete = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'question',
            title: `¿Eliminar grado?`,
            iconHtml: `<img src=${DeleteConfirmation}>`,
            customClass: {
                icon: 'no-border',
                cancelButton: 'sweet-cancel-button',
                confirmButton: 'sweet-confirmation-button'
            },
            buttonsStyling: false,
            titleStyling: false,
            showCancelButton: true,
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire('Saved!', '', 'success')
            }
            navigate('/grades')
        })
    }
    return (
        <>
            <div className='contenedor-admin'>
                <div className='grid grid-cols-12 items-center'>
                    <button onClick={handleReturn}>
                        <img src={Regresar} alt='Regresar' />
                    </button>
                    <p className='p-purple col-span-2'>Atrás</p>
                    <p className='p-bold-administracion col-span-9'>{grade.curso}</p>
                </div>
            </div>
            <hr className='administracion' />
            <div className='contenedor-admin'>
                <div className='container-grade'>
                    <h2 className='h2-administracion' style={{ marginBottom: '16px' }}>
                        Datos del grado
                    </h2>
                    <div className='flex' style={{ marginBottom: '15px' }}>
                        <img src={Grade} alt='Grade' />
                        <p style={{ marginLeft: '18px' }}>{grade.curso}</p>
                    </div>
                    <div className='flex' style={{ marginBottom: '15px' }}>
                        <img src={Teacher} alt='Teacher' />
                        <p style={{ marginLeft: '18px' }}>{grade.encargado}</p>
                    </div>
                    <div className='flex' style={{ marginBottom: '15px' }}>
                        <img src={Student} alt='Student' />
                        <p style={{ marginLeft: '18px' }}>{grade.alumnos}</p>
                    </div>
                </div>
            </div>
            <button className='delete-button' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '90px' }} onClick={handleDelete}>
                Eliminar datos
            </button>
            <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={handleEdit}>
                Editar datos
            </button>
        </>
    )
}

export default UpdateGrade