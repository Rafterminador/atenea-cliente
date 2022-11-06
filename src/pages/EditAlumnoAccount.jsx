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

  const [birthdate, setBirthDate] = useState();
  const [direction, setDirection] = useState();
  const [nameencargado, setNameEncargado] = useState();
  const [celencargado, setCelencargado] = useState();
  const [gradoactual, setGradoActual]= useState();
  const navigate = useNavigate();
  const [grades, setGrade] = useState("");
  const [gradeid, setGradeid] = useState([]);

  let gradeJSON = localStorage.getItem("grades");
  let grade = JSON.parse(gradeJSON);

  const [gradesNames] = useState(() => {
    let gradesNamesAux = [];
    let gradesIdAux = [];
    grade.forEach((value) => {
      console.log(value.grades);
      value.grades.forEach((grado) => {
        if (grado != null) {
          console.log(grado.grade_name);
          gradesNamesAux.push(grado.grade_name)
          gradesIdAux.push(grado.id)
        }
      });
    });
    setGradeid(gradesIdAux)
    return gradesNamesAux;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let graderefid;
    console.log(gradeid)
    for (let index = 0; index < gradesNames.length; index++) {
      if(grades===gradesNames[index]){

        console.log("hubo coincidencia", gradeid[index])
        graderefid = gradeid[index]
        
        break
      }
      console.log("no coincide");
      console.log(graderefid)
    }
    let Student = {
      name_complete: alumn.nombre,
      date_birth: birthdate.toString(),
      direction: direction,
      gradeRef: graderefid,
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

  function handleBirthDate(e) {
    setBirthDate(e.target.value);
  }

  function handleDirection(e) {
    setDirection(e.target.value);
  }


  function handleNameEncargado(e) {
    setNameEncargado(e.target.value);
  }

  function handleCelencargado(e) {
    setCelencargado(e.target.value);
  }

  const handleGetGrade = (e) => {
    console.log(e);
    setGrade(e);
  };

  useEffect(() => {

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
        console.log("vergrado", response.body.gradeRef)
        setGradoActual(response.body.gradeRef)

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
            teachers={gradesNames}
            valueByDefault={gradoactual}
            function={handleGetGrade}
            placeholder={gradoactual}
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
