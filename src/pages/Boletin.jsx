import React from "react";
import bleft from "../assets/images/chevron_left.svg";
import Notes from "../components/Notes";

const Boletin = () => {
  return (
    <div>
      <div className="flex m-5 text-center">
        <img src={bleft} alt="backleft" />
        <p
          className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]"

        >
          Atrás
        </p>
        <p className="text-[16px] ml-[16px] font-sans">
          Boletín de: Jeremías Garrido Jara
        </p>
      </div>

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="m-5">
        <Notes/>

      </div>
    </div>
  );
};

export default Boletin;
