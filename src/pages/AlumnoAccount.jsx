import React from "react";
import bleft from "../assets/images/chevron_left.svg"
import ComboBox from "../components/ComboBox"
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const AlumnoAccount = () => {
  const navigate = useNavigate();
  function handleBack() {
    navigate("/ver/alumno");
  }
  return (
    <div>

<div className="flex m-5 text-center">
    <img src={bleft} alt="backleft" />
    <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]" onClick={handleBack}>Atrás</p> 
    <p className="text-[16px] ml-[16px] font-semibold">Nuevo alumno</p>
    </div>

<div className="bg-[#DBD8FF] h-[1px] my-6"></div>

        <div>
        <form>
          <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold text-start text-[16px] m-5">
            <label htmlFor="username">Nombre completo</label>
            <Input
              id="username"
              type="text"
              name="username"
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
              placeholder="Ingresar nombre completo"
            />
            <label htmlFor="useremail">Fecha de nacimiento</label>
            <Input
              id="useremail"
              type="date"
              name="useremail"
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
              placeholder="DD / MM / AAAA"
            />
            <label htmlFor="password">Dirección</label>
            <Input
              id="password"
              type="text"
              name="password"
              className="font-normal border-solid border-2 rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
              placeholder="Ingresar dirección"
            />
            <label htmlFor="username">Grado</label>
            <ComboBox teachers={['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto']} valueByDefault={'Seleccionar Grado'} />
            <label htmlFor="username">Nombre del encargado: <label className="text-[12px]">padre, madre u otro</label>  </label>
            <Input
              id="username"
              type="text"
              list="value"
              name="username"
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
              placeholder="Ingresar nombre completo"
            />
            <label htmlFor="username">Teléfono del encargado: <label className="text-[12px]">padre, madre u otro</label>  </label>
            <Input
              id="username"
              type="text"
              list="value"
              name="username"
              className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
              placeholder="Ingresar número telefónico"
            />
          </div>
        </form>

        <div className="fixed top-[720px] left-5 right-5">
        <Button
          text="Crear nuevo alumno"
          typeButton={"button-type-2"}
          className=""
          type="submit"
          form="register-form"
        />
      </div>
      </div>
    </div>
  );
};

export default AlumnoAccount;