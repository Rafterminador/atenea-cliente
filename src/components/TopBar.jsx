import React from "react";
import iconBack from "../assets/images/icon-back-button.svg";
import { useNavigate } from "react-router-dom";

const TopBar = (props) => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  console.log(props.variant);

  if (props.variant === "primary") {
    return (
      <>
        <div className="h-16 w-full py-4 px-2 box-border border-b-2 border-[#DBD8FF]">
          <img src={iconBack} alt="icon-back-button" onClick={handleReturn} />
          <p className="med-title absolute left-0 top-4 w-full text-center -z-50">
            {props.text}
          </p>
        </div>
      </>
    );
  } else if (props.variant === "secondary" || props.variant === undefined) {
    return (
      <>
        <div className="h-16 flex flex-row items-center gap-4 px-2 box-border border-b-2 border-[#DBD8FF]">
          <img src={iconBack} alt="icon-back-button" onClick={handleReturn} />
          <p className="p-bold-administracion">{props.text}</p>
        </div>
      </>
    );
  }
};

export default TopBar;
