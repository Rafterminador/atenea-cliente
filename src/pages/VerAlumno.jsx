import React from "react";
import Alumno from "../components/Alumno";
import Grado from "../components/Grado";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import AddButton from '../components/AddButton'


export default function VerAlumno() {
  localStorage.clear()
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/cuenta/alumno");
  }


  return (
    <div className="contenedor contenedor-admin">
      <SearchBar />
      <div className="my-[10px]">
        <Grado grado={"Primero primaria"} total={"15"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
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
