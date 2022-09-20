import React from "react";
import { Link } from "react-router-dom";
import Buttom from "../../src/assets/images/button.svg";
import Alummnos from "../../src/assets/images/alumnos.svg";
import Docentes from "../../src/assets/images/docentes.svg";
import Hamburguesa from "../../src/assets/images/hamburguesa.svg";
const TabBar = () => {
  return (
    <>
      <div className="w-full h-auto bordeblur bg-white fixed left-0 bottom-0  flex   items-center justify-center  ">
        <div className="grid grid-cols-4 space-x-7 ">
          <Link to="/">
            <div className="flex flex-col items-center justify-center">
              <img className="w-10" src={Buttom} />

              <p>Grados</p>
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center ">
              <img className="w-10" src={Alummnos} />

              <p>Alumnos</p>
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center ">
              <img className="w-10" src={Docentes} />

              <p>Docentes</p>
            </div>
          </Link>

          <Link to="/">
            <div className="flex flex-col items-center justify-center ">
              <img className="w-10" src={Hamburguesa} />

              <p>Mas</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabBar;
