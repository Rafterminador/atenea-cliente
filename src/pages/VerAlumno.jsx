import React from "react";
import Alumno from "../components/Alumno";
import Grado from "../components/Grado";
import AddB from "../assets/images/add.svg";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";



export default function VerAlumno() {
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/cuenta/alumno");
  }


  return (
    <div className="flex flex-col">
      <div className="m-5">
      <SearchBar/>
      </div>
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

      <div className="bg-white w-screen fixed top-[670px] left-[280px]">
        <div className="addsearchradius bg-[#776694] border-2 w-[42px] h-[40px] mx-4">
          <button>
            {" "}
            <img src={AddB} alt="add" onClick={handleAdd}/> 
          </button>
        </div>
      </div>
    </div>
  );
}

export { VerAlumno };
