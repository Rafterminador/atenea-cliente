import React, { useState, useEffect } from "react";
import CardAlumno from "../components/CardAlumno";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";

import { getStudentByID } from "../services/controllerDirector";
import { disableStudent } from "../services/controllerDirector";

const AlumnoProfile = () => {
  let alumnJSON = localStorage.getItem("alumno");
  let alumn = JSON.parse(alumnJSON);

  const navigate = useNavigate();

  function handleEdit() {
    navigate("/editar/alumno");
  }

  const handleEliminar = async () => {
    let response = await disableStudent(alumn.uid)
    if (response.status === 201) {
        console.log(response.body)
    } else {
        console.log(response.body)
    }
    alert("eliminandoo");
    navigate("/ver/alumno");
}

  const [nameencargado, setManager_Name] = useState();
  const [celencargado, setManager_Phone] = useState();
  const [datebirth, setDate_Brith] = useState();
  const [direction, setDirection] = useState();
  const [grade, setGrade] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let alumnJSON = localStorage.getItem("alumno");
    let alumn = JSON.parse(alumnJSON);

    const handleGetStudentData = async () => {
      let response = await getStudentByID(alumn.uid);
      if (response.status === 200) {
        console.log(response.body);

        setManager_Name(response.body.manager_name);
        setManager_Phone(response.body.manager_phone);
        setDate_Brith(response.body.date_birth);
        setDirection(response.body.direction);
        setGrade(response.body.gradeRef);
      } else {
        console.log(response.body);
      }
    };

    handleGetStudentData();
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <Retroceder text={alumn.nombre} />
      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>
      <div className="">
        <CardAlumno
          nombre={alumn.nombre}
          cumpleanios={datebirth}
          direccion={direction}
          grado={grade}
          nombre_encargado={nameencargado}
          telefono={celencargado}
        />
      </div>

      <div className="fixed top-[620px] left-5 right-5">
        <Button
          onClick={handleEliminar}
          text="Eliminar alumno"
          typeButton={"button-type-3"}
          className="my-5"
          type="button"
        />
        <Button
          onClick={handleEdit}
          text="Editar datos"
          typeButton={"button-type-2"}
          className="my-5"
          type="click"
          form="register-form"
        />
      </div>
    </div>
  );
};

export default AlumnoProfile;
