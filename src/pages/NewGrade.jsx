import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ComboBox from '../components/ComboBox';
import { AlertButton } from "../utils/AlertButton";
import Retroceder from '../components/Retroceder';
import Button from "../components/Button";
import Input from "../components/Input";
import { createGrade, getAllGrades } from "../services/controllerDirector";
import { searchReferenceId } from '../utils/FunctionUtils';

const NewGrade = () => {
    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    const [levelGrade, setLevelGrade] = useState("")
    const [teacher, setTeacher] = useState("")
    const [gradeName, setGradeName] = useState("");
    const teachersJSON = localStorage.getItem('teachers')
    const teachers = JSON.parse(teachersJSON)
    const gradesJSON = localStorage.getItem('grades')
    const grades = JSON.parse(gradesJSON)
    const [teachersNames] = useState(() => {
        let teachersNamesAux = []
        teachers.forEach((value) => {
            teachersNamesAux.push(value.displayName)
        })
        return teachersNamesAux
    });
    //son los niveles pre-primario, nivel primario u otros (donde entran cursos como educación física)
    const [levelNames] = useState(() => {
        let levelNamesAux = []
        grades.forEach((value) => {
            levelNamesAux.push(value.level_name)
        })
        return levelNamesAux
    });
    const handleGetTeacher = (e) => {
        console.log(e)
        setTeacher(e)
    }
    const handleGetLevelName = (e) => {
        console.log(e)
        setLevelGrade(e)
    }
    function handleChangeGradeName(e) {
        setGradeName(e.target.value);
    }
    const handleGrade = async (e) => {
        e.preventDefault();
        document.getElementById('grade').value = ''
        console.log("creado con: ", levelGrade, teacher, gradeName)
        let indexTeacherReference = searchReferenceId(teachers, teacher, "displayName")
        let indexLevelReference = searchReferenceId(grades, levelGrade, "level_name")
        console.log(teachers[indexTeacherReference].id)
        console.log(grades[indexLevelReference].id)
        let response = await createGrade(gradeName, teachers[indexTeacherReference].id, grades[indexLevelReference].id);
        if (response.status === 200) {
            console.log(response.body);
            Swal.fire(
                AlertButton.dataAlertSuccess('Grado creado')
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
    return (
        <>
            <Retroceder text="Nuevo grado" />
            <form className='contenedor-admin' onSubmit={handleGrade}>
                <label htmlFor="grade" className='label-purple'>Nombre del grado<span className='span-field'>*</span></label>
                <Input id="grade" type="text" name="grade" onChange={handleChangeGradeName} placeholder="Ingresar nombre del grado" required={1} className="w-full" />
                <label htmlFor="grade" className='label-purple'>Nivel del grado<span className='span-field'>*</span></label>
                <ComboBox teachers={levelNames} placeholder='Seleccionar docente' function={handleGetLevelName} />
                <label htmlFor="grade" className='label-purple'>Docente a cargo<span className='span-field'>*</span></label>
                <ComboBox teachers={teachersNames} placeholder="seleccionar nivel" function={handleGetTeacher} />
                <Button
                    text=" Crear nuevo grado"
                    typeButton={"button-type-2"}
                    className=""
                    type="submit"
                    style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }}
                />
            </form>
        </>
    )
}

export default NewGrade
