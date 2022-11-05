import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";



const Grado = (props) => {
  console.log(props.ruta);

  const navigate = useNavigate();

  function handleMore() {
    const gradoJSON = JSON.stringify(props)
    localStorage.setItem('seteargrado', gradoJSON)
    navigate("/alumnos/completos");
  }

  return (
    <div className="items-center min-w-min my-3">

      <div className="grid grid-cols-5 items-center">

        <div className="col-span-4 flex items-center">
          <p className="font-bold text-[21.33px] text-[#4D3483]">
            {props.grado}
          </p>
          <Badge total={props.total} />
        </div>

        <div className="text-end">
          <span className="text-[#776694] font-sans text-[12.8px]" onClick={handleMore}>
            Ver más
          </span>
        </div>

      </div>
    </div>
  );
};

Grado.propTypes = {};

export default Grado;
