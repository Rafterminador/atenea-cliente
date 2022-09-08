import React from 'react'
import Ghover from "../assets/images/githubhover.svg";

const AboutProfile = ( props ) => {

console.log (props.ruta)

  return (

    <div className="flex flex-col items-center ml-[-14px]">
    <div className="cf flex items-center">
      <img className="bottom" src={Ghover} alt="git" />
     <img className="top" src={props.ruta} alt="avatar" />
    </div>
    <p className="font-bold text-[28.43px] mt-[20px]">{props.nombre}</p>
    <p className="font-sans text-[21.33px]">
    {props.rol}
    </p>
  </div>




  )
}

AboutProfile.propTypes = {}

export default AboutProfile