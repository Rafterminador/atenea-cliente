import React from "react";
import Alumno from "../components/Alumno";
import bleft from "../assets/images/chevron_left.svg";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const AllAlumnos = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/ver/alumno");
  }  
  return (
    <div>
      <div className="flex m-5 text-center">
        <img src={bleft} alt="backleft" />
        <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]" onClick={handleBack}>
          Atrás
        </p>
        <p className="text-[16px] ml-[16px] font-semibold">Primero primaria</p>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] my-6"></div>

      <div className="m-5">
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
