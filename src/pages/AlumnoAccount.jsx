import React, { useState } from "react";
import ComboBox from "../components/ComboBox";
import Input from "../components/Input";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import { useNavigate } from "react-router-dom";

import { createStudent } from "../services/controllerDirector";

const AlumnoAccount = () => {
  const [username, setUsername] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [direction, setDirection] = useState("");
  // const [grade, setGrade] = useState("4ipYcYTWIx9IlnS11tmh");
  const [nameencargado, setNameEncargado] = useState("");
  const [celencargado, setCelencargado] = useState("");
  // const [enable, setEnable] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newStudent = {
      name_complete: username,
      date_birth: birthdate,
      direction: direction,
      gradeRef: "4ipYcYTWIx9IlnS11tmh",
      manager_name: nameencargado,
      manager_phone: celencargado,
      enable: true,
    };
    let response = await createStudent(newStudent);
    if (response.status === 201) {
      console.log(response.body);
    } else {
      console.log(response.body);
    }
    alert("Alumno guardado correctamente");
    navigate("/ver/alumno");
  };

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleBirthDate(e) {
    setBirthDate(e.target.value);
  }

  function handleDirection(e) {
    setDirection(e.target.value);
  }

  // function handleGrade(e) {
  //   setGrade(e.target.value);
  // }

  function handleNameEncargado(e) {
    setNameEncargado(e.target.value);
  }

  function handleCelencargado(e) {
    setCelencargado(e.target.value);
  }
  return (
    <div>
      <Retroceder text="Nuevo alumno" />
      <form onSubmit={handleSubmit} id="register-form">
        <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold text-start text-[16px] m-5">
          <label htmlFor="username">Nombre completo</label>
          <Input
            id="username"
            type="text"
            name="username"
            onChange={handleUsername}
            className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="Ingresar nombre completo"
          />
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <Input
            id="birthdate"
            type="date"
            name="birthdate"
            onChange={handleBirthDate}
            className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="DD / MM / AAAA"
          />
          <label htmlFor="direction">Dirección</label>
          <Input
            id="direction"
            type="text"
            name="direction"
            onChange={handleDirection}
            className="font-normal border-solid border-2 rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="Ingresar dirección"
          />
          <label htmlFor="grade">Grado</label>
          <ComboBox
            teachers={[
              "Primero",
              "Segundo",
              "Tercero",
              "Cuarto",
              "Quinto",
              "Sexto",
            ]}
            valueByDefault={"Seleccionar Grado"}
          />
          <label htmlFor="nameencargado">
            Nombre del encargado:{" "}
            <label className="text-[12px]">padre, madre u otro</label>{" "}
          </label>
          <Input
            id="nameencargado"
            type="text"
            list="value"
            name="nameencargado"
            onChange={handleNameEncargado}
            className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="Ingresar nombre completo"
          />
          <label htmlFor="celencargado">
            Teléfono del encargado:{" "}
            <label className="text-[12px]">padre, madre u otro</label>{" "}
          </label>
          <Input
            id="celencargado"
            type="text"
            list="value"
            name="celencargado"
            onChange={handleCelencargado}
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
  );
};

export default AlumnoAccount;
