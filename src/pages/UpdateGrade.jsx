import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Student from "../assets/images/student.svg";
import Grade from "../assets/images/grade.svg";
import Teacher from "../assets/images/teacher.svg";
import DeleteConfirmation from "../assets/images/delete-confirmation.svg";
import Retroceder from '../components/Retroceder';
import { AlertButton } from "../utils/AlertButton";
import { getEnabledTeachers, getAllGrades, deleteGrade } from "../services/controllerDirector";

const UpdateGrade = () => {
    const navigate = useNavigate()
    const params = useParams()
    const Swal = require('sweetalert2')
    let gradeJSON = localStorage.getItem('grade')
    let grade = (JSON.parse(gradeJSON))
    const handleEdit = () => {
        navigate(`/grades/update/${params.id}/edit`)
    }
    const handleDelete = (e) => {
        e.preventDefault();
        Swal.fire(
            AlertButton.dataAlertUnBotonMorado('¿Eliminar grado?', 'Sí', 'Cancelar', DeleteConfirmation)
        ).then(async (result) => {
            if (result.isConfirmed) {
                let response = await deleteGrade(grade.id);
                if (response.status === 200) {
                    console.log(response.body);
                    Swal.fire(
                        AlertButton.dataAlertSuccess('Se a eliminado correctamente')
                    ).then(async () => {
                        let response = await getAllGrades()
                        if (response.status === 200) {
                            console.log(response.body);
                            const userJSON = JSON.stringify(response.body)
                            localStorage.setItem('grades', userJSON)
                        } else {
                            console.log(response.body);
                        }
                        navigate('/grades')
                    })
                } else {
                    console.log(response.body);
                }
            }
        })


    }
    useEffect(() => {
        const getEnabledTeachersBackend = async () => {
            let response = await getEnabledTeachers();
            if (response.status === 200) {
                console.log(response.body);
                const teachersJSON = JSON.stringify(response.body)
                localStorage.setItem('teachers', teachersJSON)
            } else {
                console.log(response.body);
            }
        }
        getEnabledTeachersBackend()
    }, []);
    return (
        <>
            <Retroceder text={grade.curso} />
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
                Eliminar grado
            </button>
            <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={handleEdit}>
                Editar grado
            </button>
        </>
    )
}

export default UpdateGrade