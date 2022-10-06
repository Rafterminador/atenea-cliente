import React from "react";
import CardAlumno from "../components/CardAlumno";
import bleft from "../assets/images/chevron_left.svg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const AlumnoProfile  = () => {

  const navigate = useNavigate();

  function handleBack() {
    navigate("/ver/alumno");
  }  

  function handleEdit() {
    navigate("/editar/alumno");
  }  

  function handleBoletin() {
    navigate("/boletin");
  }  

  return (
    <div className="flex flex-col justify-between">
      <div className="flex m-5 text-center">
        <img src={bleft} alt="backleft" />
        <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]" onClick={handleBack}>
          Atrás
        </p>
        <p className="text-[16px] ml-[16px] font-semibold">
          José Fernando Arredondo Aparicio
        </p>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="">
        <CardAlumno
          nombre={"José Fernando Arredondo Aparicio"}
          cumpleanios={"08 / 04 / 2008 - 14 años"}
          direccion={"Aldea Buenos Aires, Chiantla"}
          grado={"Sexto primaria"}
          nombre_encargado={"Priscilla Regina Aparicio Rabanales "}
          telefono={"5486 7889"}
        />
      </div>


      <div className="fixed top-[620px] left-5 right-5">
        <button
          className="min-w-full bg-transparent border-[#FF54B0] border-2 text-[#FF54B0] mt-[32px] h-[49px] text-[21.33px]"
        >
          Eliminar alumno
        </button>

        <Button
          onClick={handleEdit}
          text="Editar datos"
          typeButton={"button-type-2"}
          className="my-5"
          type="submit"
          form="register-form"
        />
      </div>
    </div>
  );
};

export default AlumnoProfile;
