import React from 'react'
import Button from "../components/Button";

import {
    getAllTeachers, getUserByID, disableTeacher, enableTeacher, updateRol, getAllStudents, getStudentsByGrade, getStudentByID, createStudent,
    updateStudent, disableStudent, enableStudent, getAllBoletines
} from "../services/controllerDirector"
const ControllerProving = () => {
    const handleGetAllUsers = async () => {
        let response = await getAllTeachers()
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleGetOneUser = async () => {
        let response = await getUserByID("5BACG91UmJRi8BPa9rXTJWNbt5z2")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleDisableTeacher = async () => {
        let response = await disableTeacher("5BACG91UmJRi8BPa9rXTJWNbt5z2")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleEnableTeacher = async () => {
        let response = await enableTeacher("5BACG91UmJRi8BPa9rXTJWNbt5z2")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    //Los roles son: admin, docente, director
    const handleUpdateRol = async () => {
        //let response = await updateRol("5BACG91UmJRi8BPa9rXTJWNbt5z2", "docente")
        let response = await updateRol("5BACG91UmJRi8BPa9rXTJWNbt5z2", "director")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleGetAllStudents = async () => {
        let response = await getAllStudents()
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleGetStudentsByGrade = async () => {
        let response = await getStudentsByGrade("4ipYcYTWIx9IlnS11tmh")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleGetStudentByID = async () => {
        let response = await getStudentByID("NrbX7ltacDhMkNubAiPo")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleCreateStudent = async () => {
        let newStudent = {
            name_complete: "Kelvin el UI DESIGNER",
            date_birth: "31/04/2002",
            direction: "Aldea Ocubila",
            gradeRef: "4ipYcYTWIx9IlnS11tmh",
            manager_name: "Jorge Esteban Lopez Herrera de las Casas",
            manager_phone: "+502 52858964",
            enable: true
        }
        let response = await createStudent(newStudent)
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleUpdateStudent = async () => {
        let newStudent = {
            name_complete: "Kelvin el UI DESIGNER y UX DESIGNER",
            date_birth: "31/04/2002",
            direction: "Aldea Ocubila",
            gradeRef: "4ipYcYTWIx9IlnS11tmh",
            manager_name: "Jorge Esteban Lopez Herrera de las Casas",
            manager_phone: "+502 52858964",
            enable: true
        }
        let response = await updateStudent(newStudent, "El9KmlsvMRSnLVL45D6u")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleDeleteStudent = async () => {
        let response = await disableStudent("El9KmlsvMRSnLVL45D6u")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleEnableStudente = async () => {
        let response = await enableStudent("El9KmlsvMRSnLVL45D6u")
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    const handleGetAllBoletines = async () => {
        let response = await getAllBoletines()
        if (response.status === 201) {
            console.log(response.body)
        } else {
            console.log(response.body)
        }
    }
    return (
        <div>
            <Button
                text="obtener todos los usuarios"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetAllUsers}
            />
            <Button
                text="obtener un usuario por ID"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetOneUser}
            />
            <Button
                text="Desahibilitar"
                typeButton={"button-type-2"}
                className=""
                onClick={handleDisableTeacher}
            />
            <Button
                text="Habilitar"
                typeButton={"button-type-2"}
                className=""
                onClick={handleEnableTeacher}
            />
            <Button
                text="Actualizar Rol"
                typeButton={"button-type-2"}
                className=""
                onClick={handleUpdateRol}
            />
            <Button
                text="Obtener todos los estudiantes"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetAllStudents}
            />
            <Button
                text="Obtener estudiantes por grado"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetStudentsByGrade}
            />
            <Button
                text="Obtener estudiante por ID"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetStudentByID}
            />
            <Button
                text="Crear estudiante"
                typeButton={"button-type-2"}
                className=""
                onClick={handleCreateStudent}
            />
            <Button
                text="Actualizar estudiante"
                typeButton={"button-type-2"}
                className=""
                onClick={handleUpdateStudent}
            />
            <Button
                text="Eliminar estudiante"
                typeButton={"button-type-2"}
                className=""
                onClick={handleDeleteStudent}
            />
            <Button
                text="Habilitar estudiante"
                typeButton={"button-type-2"}
                className=""
                onClick={handleEnableStudente}
            />
            <Button
                text="Obtener todos los boletines"
                typeButton={"button-type-2"}
                className=""
                onClick={handleGetAllBoletines}
            />
        </div>
    )
}

export default ControllerProving