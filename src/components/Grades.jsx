import React from "react";
import GradoIcon from "../../src/assets/images/classes.svg";
const Grades = ({ id, name }) => {
  return (
    <div className="flex flex-row items-center p-0 gap-4 self-stretch">
      <img src={GradoIcon} alt="cuarto" />
      <p>{name}</p>
    </div>
  );
};

export default Grades;
