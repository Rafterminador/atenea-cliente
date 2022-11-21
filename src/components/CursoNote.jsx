import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CursoNote = (props) => {
  const location = useLocation();

  

  const navigate = useNavigate();
  function handleClick(e) {
    const activityInfoJSON = JSON.stringify(props);
    localStorage.setItem("activityInfo", activityInfoJSON);

    console.log("desde curso note" , props.activities)
    const activityAreaJSON = JSON.stringify(props.activities);
    localStorage.setItem("activityArea", activityAreaJSON);

    if (location.pathname === "/boletin/docentes") {
      navigate("/grades/teacher/:id/courses/students/:id/notes")
    } else if (location.pathname === "/grades/teacher/unidades") {
      navigate("/grades/teacher/courses/activity/edit");
    } else {
      navigate("#")
    }
   
  }

  return (
    <>
      {props.link ? (
        <a
          href={props.link}
          className="flex flex-row justify-between mr-4 my-2 items-center"
        >
          <p className="text-[12.8px] text-[#4D3483] .sml-title" onClick={handleClick}>
            {props.name}
          </p>
          <p className="text-[16px] text-[#000000] .sml-text-2">{props.note}</p>
        </a>
      ) : (
        <div className="flex flex-row justify-between mr-4 my-2 items-center" onClick={handleClick}>
          <p className="text-[12.8px] text-[#4D3483] .sml-title">
            {props.name}
          </p>
          <p className="text-[16px] text-[#000000] .sml-text-2">{props.note}</p>
        </div>
      )}
    </>
  );
};

export default CursoNote;
