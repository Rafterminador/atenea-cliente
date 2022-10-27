import React from 'react'
import Arrow from "../../src/assets/images/arrow_right.svg";

const InactiveTeachers = ({id, name, grado}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">{name}</p>
        <img className="mt-3 cursor-pointer" src={Arrow} alt="arrow" />
      </div>

      <div className="flex  space-x-2 mt-1 mb-2 ">
        <p className="text-xs">Docente de: </p>
        <p className="text-xs font-bold">{grado}</p>
      </div>
      <hr className="bg-[#DBD8FF]" />
    </>
  )
}

export default InactiveTeachers