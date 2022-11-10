import React from "react";
import Arrow from "../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";


function AreaInfo(props) {
  const navigate = useNavigate();
  function handleMore() {
    const areadataJSON = JSON.stringify(props);
    localStorage.setItem("areainfo", areadataJSON);
    navigate("/grades/teacher/unidades");
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

export default AreaInfo;
