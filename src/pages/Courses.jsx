import React, { useState, useEffect } from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import StudentCourse from "../components/StudentCourse";
import AreaInfo from "../components/AreaInfo";
import { AlertButton } from "../utils/AlertButton";
import Exportacion from "../assets/images/exportacion.svg";

import { GetGradesAreas } from "../services/controllerDocentes";

const Swal = require("sweetalert2");

export default function Courses() {
  const [myAreas, setMyAreas] = useState([]);
  localStorage.removeItem("areainfo");
  localStorage.removeItem("activityInfo");
  let gradoJSON = localStorage.getItem("seteargrado");
  let seteargrado = JSON.parse(gradoJSON);
  const url = `/grades/teacher/courses/`;

  

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

    const handleGetAreas = async () => {
      let response = await GetGradesAreas(seteargrado.uidgrade);
      if (response.status === 200) {
        console.log(response.body);
        setMyAreas(response.body.areas);
        console.log("estas areas", myAreas);
      } else {
        console.log(response.body);
      }
    };

    handleGetAreas();
  }, []);

  return (
    <div>
      <Retroceder text={seteargrado.grado} />
      <div className="contenedor-admin">
        <div className=" flex items-center">
          <p className="font-bold text-[21.33px] text-[#4D3483]">Alumnos</p>
          <Badge total={seteargrado.alumnos} />
        </div>
        <StudentCourse value={"Ver todos los alumnos"} url={`${url}students`} />
        <p className="h1-administracion">Materias</p>
            {myAreas.map((areas) => (
            <AreaInfo
            value={areas.area_name}
              uid={areas.id}
              key={areas.id}
            />
          ))}
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
