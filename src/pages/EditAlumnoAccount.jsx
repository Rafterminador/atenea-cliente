import React, { useState, useEffect } from "react";
import ComboBox from "../components/ComboBox";
import Button from "../components/Button";
import Input from "../components/Input";
import Retroceder from "../components/Retroceder";
import { useNavigate } from "react-router-dom";

import { updateStudent } from "../services/controllerDirector";
import { getStudentByID } from "../services/controllerDirector";

const EditAlumnoAccount = () => {
  let alumnJSON = localStorage.getItem("alumno");
  let alumn = JSON.parse(alumnJSON);

  // const [username, setUsername] = useState();
  const [birthdate, setBirthDate] = useState();
  const [direction, setDirection] = useState();
  // const [grade, setGrade] = useState("4ipYcYTWIx9IlnS11tmh");
  const [nameencargado, setNameEncargado] = useState();
  const [celencargado, setCelencargado] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let Student = {
      name_complete: alumn.nombre,
      date_birth: birthdate.toString(),
      direction: direction,
      gradeRef: "4ipYcYTWIx9IlnS11tmh",
      manager_name: nameencargado,
      manager_phone: celencargado,
      enable: true,
    };

    let response = await updateStudent(Student, alumn.uid);
    if (response.status === 201) {
      console.log(response.body);
    } else {
      console.log(response.body);
    }
    alert("Datos actualizados correctamente");
    navigate("/ver/alumno");
  };

  // function handleUsername(e) {
  //   setUsername(e.target.value);
  // }

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

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let alumnJSON = localStorage.getItem("alumno");
    let alumn = JSON.parse(alumnJSON);

    const handleGetStudentData = async () => {
      let response = await getStudentByID(alumn.uid);
      if (response.status === 200) {
        console.log(response.body);

        setNameEncargado(response.body.manager_name);
        setCelencargado(response.body.manager_phone);
        console.log(response.body.date_birth);
        setBirthDate(response.body.date_birth.substring(0, 10));
        setDirection(response.body.direction);
        // setGrade(response.body.gradeRef);
      } else {
        console.log(response.body);
      }
    };

    handleGetStudentData();
  }, []);

  return (
    <div>
      <Retroceder text="Editar datos" />
      <form onSubmit={handleSubmit} id="edit-form">
        <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold text-start text-[16px] m-5">
          <label htmlFor="username">Nombre completo</label>

          <Input
            id="username"
            type="text"
            name="username"
            // onChange={handleUsername}
            className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="Ingresar nombre completo"
            defaultValue={alumn.nombre}
          />
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <Input
            id="birthdate"
            type="text"
            name="birthdate"
            onChange={handleBirthDate}
            className="font-normal border-solid border-[1px] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="DD / MM / AAAA"
            defaultValue={birthdate}
            disabled={true}
          />
          <label htmlFor="direction">Dirección</label>
          <Input
            id="direction"
            type="text"
            name="direction"
            onChange={handleDirection}
            className="font-normal border-solid border-2 rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] h-[42px]"
            placeholder="Ingresar dirección"
            defaultValue={direction}
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
            defaultValue={"Grado Actual"}
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
            defaultValue={nameencargado}
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
            defaultValue={celencargado}
          />
        </div>
      </form>

      <div className="fixed top-[720px] left-5 right-5">
        <Button
          text="Actualizar datos"
          typeButton={"button-type-2"}
          className=""
          type="submit"
          form="edit-form"
        />
      </div>
    </div>
  );
};

export default EditAlumnoAccount;
