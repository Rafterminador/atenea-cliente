import React from "react";
import Arrow from "../assets/images/rightarrow.svg";
import { useNavigate } from "react-router-dom";

const Alumno = (props) => {
  console.log(props.ruta);

  const navigate = useNavigate();

  function handleProfile() {
    const alumnJSON = JSON.stringify(props)
    localStorage.setItem('alumno', alumnJSON)
    navigate("/perfil/alumno");




  }
  return (
    <div className="min-w-min my-1">

      <div className="grid grid-cols-2 items-center">
        <div className="w-[296px] h-[24px]">
          <p className="font-sans text-[16px]">{props.nombre}</p>
        </div>

        <div className="justify-self-end">
          <img src={Arrow} alt="rarrow" onClick={handleProfile} />
        </div>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] min-w-full mt-1"></div>
    </div>
  );
};

Alumno.propTypes = {};

export default Alumno;
