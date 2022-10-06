import React from 'react'
import Face from "../assets/images/face.svg";
import Cake from "../assets/images/cake.svg";
import Location from "../assets/images/location.svg";
import School from "../assets/images/school.svg";


const CursoNote = (props) => {
  return (
    <div className="flex flex-row justify-between mr-4 my-2 items-center">

    <p className='text-[12.8px] text-[#4D3483] .sml-title'>{props.name}</p>
    <p className='text-[16px] text-[#000000] .sml-text-2'>{props.note}</p>

  </div>
  )
}

export default CursoNote;