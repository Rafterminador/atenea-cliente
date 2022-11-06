import React from "react";
import GradoIcon from "../../src/assets/images/classes.svg";
const Grades = ({id, name}) => {
  return (
    <>
      <div className="flex space-x-5 mb-2">
        {name ? (
          <>
            <img src={GradoIcon} alt="cuarto" />
            <p>{name} Primaria</p>
          </>
        ) : (
          <p className="text-[#7B7B7B]">Ninguno</p>
        )}
      </div>
    </>
  );
};

export default Grades;
