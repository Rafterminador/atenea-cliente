import React from "react";
import bleft from "../assets/images/chevron_left.svg";
import Notes from "../components/Notes";
import BoletinCard from "../components/BoletinCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Boletin = () => {

  const navigate = useNavigate();
  function handleBack() {
    navigate("/perfil/alumno");
  }
  return (
    <div className="flex flex-col">
      <div className="flex m-5 text-center">
        <img src={bleft} alt="backleft" />
        <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]" onClick={handleBack}>
          Atrás
        </p>
        <p className="text-[16px] ml-[16px] font-sans">
          Boletín de: Jeremías Garrido Jara
        </p>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="m-5">
        <Notes unidad={"Primera unidad"} />
        <Notes unidad={"Segunda unidad"} />
        <Notes unidad={"Tercera unidad"} />
        <Notes unidad={"Cuarta unidad"} />
      </div>

      <div className="">
        {/* <BoletinCard
        /> */}
      </div>

      <div className="fixed top-[720px] left-5 right-5">
        <Button
          text="Exportar a PDF"
          typeButton={"button-type-2"}
          className=""
          type="submit"
          form="register-form"
        />
      </div>
    </div>
  );
};

export default Boletin;
