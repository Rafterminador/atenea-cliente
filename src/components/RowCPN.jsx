import React from "react";
import iconArrow from "../assets/images/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";
const RowCPN = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const gradeJSON = JSON.stringify(props);
    localStorage.setItem("grade", gradeJSON);
    navigate("/grades/update/" + props.id);
  };
  return (
    <div
      className="box-border flex justify-between items-center p-0 border-b-[1.5px] border-[#DBD8FF]"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center items-start p-0 gap-[2px] truncate">
        <h3 className="sml-title">{props.curso}</h3>
        <p className="sml-text text-[#9695A2] pb-[9px]">
          {props.text}:{" "}
          <span className="text-[#9695A2] opensansbold">{props.encargado}</span>
        </p>
      </div>
      <img src={iconArrow} alt="icon right arrow" />
    </div>
  );
};

export default RowCPN;
