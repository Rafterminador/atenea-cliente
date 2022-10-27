import React from "react";
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";
const StudentCourse = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const gradeJSON = JSON.stringify(props);
    localStorage.setItem("grade", gradeJSON);
    navigate(props.url);
  };
  return (
    <div className="grade-container" onClick={handleClick}>
      <div className="flex justify-between">
        <p className="p-bold-administracion">{props.value}</p>
        <img src={Arrow} alt="More information" />
      </div>
      <hr className="administracion" />
    </div>
  );
};

export default StudentCourse;
