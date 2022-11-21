import React from "react";
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
const GradeAssigned = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/calificar/${props.url}`);
  };
  return (
    <div className="grade-container" onClick={handleClick}>
      <p className="p-bold-administracion">{props.grade}</p>
      <div className="flex justify-between">
        <p className="p-info-administracion">
          Cantidad de alumnos:{" "}
          <span className="font-bold"> {props.alumnos} alumnos</span>
        </p>
        <img src={Arrow} alt="More information" />
      </div>
      <hr className="administracion" />
    </div>
  );
};

export default GradeAssigned;
