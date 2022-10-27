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
  const [prePrimariaPreKinder, setPrePrimariaPreKinder] = useState([]);
  const [prePrimariaKinder, setPrePrimariaKinder] = useState([]);
  const [prePrimariaParvulos, setPrePrimariaParvulos] = useState([]);
  const [primariaPrimero, setPrimariaPrimero] = useState([]);
  const [primariaSexto, setPrimariaSexto] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    
  const handleGetAllStudents = async () => {
let response = await getAllStudents()
if (response.status === 200) {

      console.log(response.body)

      setPrePrimariaPreKinder(response.body.prePrimaria.preKinder.data)
      setPrimariaSexto(response.body.primaria.sexto.data)
      
      setStudent(response.body.primaria.sexto.data[1].name)
      setUID(response.body.primaria.sexto.data[1].uid)
      
      console.log(prePrimariaPreKinder)


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

      <Grado grado={"PreKinder"} total={"15"} />
      
      {prePrimariaPreKinder.map( estudiante => (<Alumno nombre={estudiante.name} uid={estudiante.uid} key={estudiante.uid}/>)
      
      )}

     


      <Grado grado={"Kinder"} total={"15"} />
      <Grado grado={"Párvulos"} total={"15"} />


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

        <Grado grado={"Cuarto primaria"} total={"9"} />
        <Grado grado={"Quinto primaria"} total={"9"} />
        <Grado grado={"Sexto primaria"} total={primariaSexto.length} />
        {primariaSexto.slice(0,4).map( estudiante => (<Alumno nombre={estudiante.name} uid={estudiante.uid} key={estudiante.uid}/>)
      
      )}
      </div>
      <AddButton function={handleAdd} />
    </div>
  );
}

export { VerAlumno };
