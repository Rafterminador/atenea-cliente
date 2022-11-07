import React from "react";
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
const StudentCourse = (props) => {
  const navigate = useNavigate();
  function handleMore() {
    navigate("/todos/alumnos");
  }
  return (
    <div className="grade-container">
      <div className="flex justify-between">
        <p className="p-bold-administracion">{props.value}</p>
        <img src={Arrow} alt="More information" onClick={handleMore}/>
      </div>
      <hr className="administracion" />
    </div>
  );
};

export default StudentCourse;
