import React from "react";
import Arrow from "../../src/assets/images/arrow_right.svg";
import { Link } from "react-router-dom";

const ActiveTeachers = ({ uid, name, grado }) => {

  const handleClick = () => {
    const gradeJSON = JSON.stringify(uid)
    localStorage.setItem('docente', gradeJSON)

  }

  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">{name}</p>
        <Link to={`/cuenta/docente/${uid}`} onClick={handleClick}>
          <img className="mt-3 cursor-pointer" src={Arrow} alt="teacher" />
        </Link>
      </div>

      <div className="flex  space-x-2 mt-1 mb-2 ">
        <p className="text-xs">Docente de: </p>
        <p className="text-xs font-bold">{grado ? grado : "Ningún grado"}</p>
      </div>
      <hr className="bg-[#DBD8FF]" />
    </>
  );
};

export default ActiveTeachers;
