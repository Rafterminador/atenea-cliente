import React from "react";
import { useNavigate } from "react-router-dom";
import CursoNote from "./CursoNote";

const BoletinCard = (props) => {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/grades/teacher/:id/courses/:courseId/activity/edit");
  }
  return (
    <div>
      <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
        <div className="grid grid-cols-2 text-center">
          <p className="text-[#FFB55F] font-sans text-[12px] .sml-title">
            Actividad
          </p>
          <p className="text-[#FFB55F] font-sans text-[12px] .sml-title ml-[75px]">
            Pts.
          </p>
        </div>

        <div onClick={handleClick}>
          <CursoNote name={"Actividad #1"} note={"5"} />
        </div>
      </div>
    </div>
  );
};

export default BoletinCard;
