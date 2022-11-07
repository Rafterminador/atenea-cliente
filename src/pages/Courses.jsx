import React, { useState, useEffect } from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import StudentCourse from "../components/StudentCourse";
import { AlertButton } from "../utils/AlertButton";
import Exportacion from "../assets/images/exportacion.svg";

import { getAllStudents } from "../services/controllerDirector";
const Swal = require("sweetalert2");
let gradoJSON = localStorage.getItem("seteargrado");
let seteargrado = JSON.parse(gradoJSON);


export default function Courses() {
  const url = `/grades/teacher/${seteargrado.id}/courses/`;
  const [actual, setActual] = useState([]);
  

  function handleClick(e) {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "Exportación masiva",
        "Boletines",
        "Notas",
        Exportacion
      )
    ).then(() => {
      console.log("successfully");
    });
  }


  useEffect(() => {
    // Update the document title using the browser API

    let gradoJSON = localStorage.getItem("seteargrado");
    let seteargrado = JSON.parse(gradoJSON);

    const handleGetAllStudents = async () => {
      let response = await getAllStudents();
      if (response.status === 200) {
        console.log(response.body);

        if (seteargrado.grado === "PreKinder") {
          setActual(response.body.prePrimaria.preKinder.data);
        }
        if (seteargrado.grado === "Kinder") {
          setActual(response.body.prePrimaria.kinder.data);
        }
        if (seteargrado.grado === "Parvulos") {
          setActual(response.body.prePrimaria.parvulos.data);
        }
        if (seteargrado.grado === "Primero primaria") {
          setActual(response.body.primaria.primero.data);
        }
        if (seteargrado.grado === "Segundo primaria") {
          setActual(response.body.primaria.segundo.data);
        }
        if (seteargrado.grado === "Tercero primaria") {
          setActual(response.body.primaria.tercero.data);
        }
        if (seteargrado.grado === "Cuarto primaria") {
          setActual(response.body.primaria.cuarto.data);
        }
        if (seteargrado.grado === "Quinto primaria") {
          setActual(response.body.primaria.quinto.data);
        }
        if (seteargrado.grado === "Sexto primaria") {
          setActual(response.body.primaria.sexto.data);
        }
      } else {
        console.log(response.body);
      }
    };

    handleGetAllStudents();
  }, []);

  return (
    <div>
      <Retroceder text={seteargrado.grado} />
      <div className="contenedor-admin">
        <div className=" flex items-center">
          <p className="font-bold text-[21.33px] text-[#4D3483]">Alumnos</p>
          <Badge total={actual.length} />
        </div>
        <StudentCourse value={"Ver todos los alumnos"} url={`${url}students`} />
        <p className="h1-administracion">Materias</p>
        <StudentCourse value={"Matematicas"} url={`${url}${seteargrado.courseId}`} />
      </div>
      <div className="contenedor-admin w-full mb-5 fixed bottom-0">
        <Button
          typeButton={"button-type-2"}
          type={"button"}
          onClick={handleClick}
          text={"Exportación masiva"}
        />
      </div>
    </div>
  );
}
