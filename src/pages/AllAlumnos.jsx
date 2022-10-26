import React from "react";
import Alumno from "../components/Alumno";
import SearchBar from "../components/SearchBar";
import Retroceder from '../components/Retroceder';

const AllAlumnos = () => {
  return (
    <div className="contenedor contenedor-admin">
      <Retroceder text="Primero Primaria" />

      <div className="my-2"> 
      <SearchBar/>
      </div>

      <div className="text-start m-5">
        <label className="font-sans text-[16px]">
          Número de alumnos en <label className="font-semibold text-[16px] text-[#4D3483]">
            Primero:{" "}
            <label className="font-semibold text-[16px]">
              15
            </label>
          </label>{" "}
        </label>
      </div>

      <div className="my-[30px]">
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />
        <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
        <Alumno nombre={"Arely Andy Sepúlveda Ortega"} />
        <Alumno nombre={"Ema Ronal Rojas Farías"} />
        <Alumno nombre={"Bastian Vincen Cárdenas Valenzuela"} />

      </div>
    </div>
  );
};

export default AllAlumnos;
