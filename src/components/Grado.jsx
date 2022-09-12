import React from "react";
const Grado = (props) => {
  console.log(props.ruta);

  return (
    <div className="items-center ml-[20px] mr-[20px] min-w-min my-3">

      <div className="grid grid-cols-3 items-center">

        <div className="w-screen">
          <p className="font-bold text-[21.33px] text-[#4D3483]">
            {props.grado}
          </p>

        </div>

        <div className="bg-[#DBD8FF] w-[30px] h-[24px] text-center alumnoborder items-center ml-[90px]">
            <p className="text-[#000000] font-semibold text-[12px] my-[3px]">{props.total}</p>
          </div>

       <div className="text-end">
       <span className="text-[#776694] font-sans text-[12.8px]">
            Ver más
          </span>
       </div>
  
      </div>
    </div>
  );
};

Grado.propTypes = {};

export default Grado;
