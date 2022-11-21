import React from "react";
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
const GradeAssigned = (props) => {
  const navigate = useNavigate();
  localStorage.removeItem("seteargrado");
  localStorage.removeItem("areainfo");

  function handleClick() {
    const gradeJSON = JSON.stringify(props);
    localStorage.setItem("seteargrado", gradeJSON);
    navigate("/grades/teacher/courses");
  }

  return (
    <div className="grade-container">
      <p className="p-bold-administracion">{props.grado}</p>
      <div className="flex justify-between">
        <p className="p-info-administracion">
          Cantidad de alumnos:{" "}
          <span className="font-bold"> {props.alumnos} alumnos</span>
        </p>
        <img src={Arrow} alt="More information" onClick={handleClick} />
      </div>
      <hr className="administracion" />
    </div>
  );
};

export default GradeAssigned;
