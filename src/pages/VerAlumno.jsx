import React, { useState, useEffect } from 'react';
import Alumno from "../components/Alumno";
import Grado from "../components/Grado";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import AddButton from '../components/AddButton'

import {getAllStudents} from '../services/controllerDirector'

const ControllerProving = () => {


}
export default function VerAlumno() {
  localStorage.clear()
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/cuenta/alumno");
  }

  const [nameestudiante, setStudent] = useState();
  const [uid, setUID] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    
  const handleGetAllStudents = async () => {
let response = await getAllStudents()
if (response.status === 200) {

      console.log(response.body)

      setStudent(response.body.primaria.sexto.data[2].name)
      setUID(response.body.primaria.sexto.data[2].uid)

      console.log(nameestudiante)


    } else {
      console.log(response.body)
      }
  }

handleGetAllStudents()
  });

  return (
    <div className="contenedor contenedor-admin">
      <SearchBar />
      <div className="my-[10px]">
        <Grado grado={"Primero primaria"} total={"15"} />
        <Alumno nombre={nameestudiante} uid={uid} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />

        <Grado grado={"Segundo primaria"} total={"18"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />

        <Grado grado={"Tercero primaria"} total={"9"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
      </div>
      <AddButton function={handleAdd} />
    </div>
  );
}

export { VerAlumno };
