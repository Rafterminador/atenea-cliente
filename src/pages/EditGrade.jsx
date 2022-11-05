import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ComboBox from '../components/ComboBox';
import { AlertButton } from "../utils/AlertButton";
import Retroceder from '../components/Retroceder';
import { updateGrade, getAllGrades } from "../services/controllerDirector";
import { searchReferenceId } from '../utils/FunctionUtils';
import Input from "../components/Input";

const EditGrade = () => {
    const teachersJSON = localStorage.getItem('teachers')
    const teachers = JSON.parse(teachersJSON)
    let gradeJSON = localStorage.getItem('grade')
    let grade = (JSON.parse(gradeJSON))
    const [teacher, setTeacher] = useState(grade.encargado)
    const [gradeName, setGradeName] = useState(grade.curso)
    const [teachersNames] = useState(() => {
        let teachersNamesAux = []
        teachers.forEach((value) => {
            teachersNamesAux.push(value.displayName)
        })
        return teachersNamesAux
    });
    const handleGetTeacher = (e) => {
        console.log(e)
        setTeacher(e)
    }
    function handleChangeGradeName(e) {
        setGradeName(e.target.value);
    }
    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    const handleEdit = async (e) => {
        e.preventDefault();
        console.log(teacher)
        let indexTeacherReference = searchReferenceId(teachers, teacher, "displayName")
        console.log(teachers[indexTeacherReference])
        console.log(gradeName, teachers[indexTeacherReference].id, grade.levelRef, grade.id)
        let response = await updateGrade(gradeName, teachers[indexTeacherReference].id, grade.levelRef, grade.id);
        if (response.status === 200) {
            console.log(response.body);
            Swal.fire(
                AlertButton.dataAlertSuccess('Datos actualizados')
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
        document.getElementById('grade').value = ''
    }
    return (
        <>
            <Retroceder text="Editar datos" />
            <form className='contenedor-admin' onSubmit={handleEdit}>
                <label htmlFor="grade" className='label-purple'>Nombre del grado<span className='span-field'>*</span></label>
                <Input id="grade" type="text" name="grade" onChange={handleChangeGradeName} placeholder="Ingresar nombre del grado" required={1} className="w-full" defaultValue={grade.curso} />
                {/* <input
                    id="grade"
                    name="grade"
                    className={`font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] w-full`}
                    placeholder="Ingresar nombre del grado"
                    required
                    
                /> */}
                <label htmlFor="grade" className='label-purple'>Docente a cargo<span className='span-field'>*</span></label>
                <ComboBox teachers={teachersNames} valueByDefault={grade.encargado} function={handleGetTeacher} />
                <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }}>
                    Actualizar datos
                </button>
            </form>
        </>
    )
}

export default EditGrade