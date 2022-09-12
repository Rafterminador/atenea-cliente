import React from "react";
import Alumno from "../components/Alumno";
import Grado from "../components/Grado"
import SearchB from "../assets/images/search.svg"
import AddB from "../assets/images/add.svg"

export default function VerAlumno() {
  return (
    <div>
    <div className="my-[30px]">
      <Grado grado={"Primero primaria"} total={"15"} />
      <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
      <Alumno nombre = {"Arely Andy Sepúlveda Ortega"}/> 
      <Alumno nombre = {"Ema Ronal Rojas Farías"}/> 
      <Alumno nombre = {"Bastian Vincen Cárdenas Valenzuela"}/> 

      <Grado grado={"Segundo primaria"} total={"18"} />
      <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
      <Alumno nombre = {"Arely Andy Sepúlveda Ortega"}/> 
      <Alumno nombre = {"Ema Ronal Rojas Farías"}/> 
      <Alumno nombre = {"Bastian Vincen Cárdenas Valenzuela"}/>

      <Grado grado={"Tercero primaria"} total={"9"} />
      <Alumno nombre={"Jeremías Mathyas Garrido Jara"} />
      <Alumno nombre = {"Arely Andy Sepúlveda Ortega"}/> 
      <Alumno nombre = {"Ema Ronal Rojas Farías"}/> 
      <Alumno nombre = {"Bastian Vincen Cárdenas Valenzuela"}/>
    </div>

<div className="bg-white flex justify-end w-screen">
    <div className="addsearchradius bg-transparent border-[1px] border-[#DBD8FF] w-[42px] h-[40px] -mx-2">
    <button> <img src={SearchB} alt="search" /> </button>
    </div>
    <div className="addsearchradius bg-[#776694] border-2 w-[42px] h-[40px] mx-4">
    <button> <img src={AddB} alt="add" /></button>
    </div>
</div>

    </div>
  );
}

export { VerAlumno };
