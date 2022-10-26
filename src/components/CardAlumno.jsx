import React from "react";
import Face from "../assets/images/face.svg";
import Cake from "../assets/images/cake.svg";
import Location from "../assets/images/location.svg";
import School from "../assets/images/school.svg";
import Cel from "../assets/images/cel.svg";
import { useNavigate } from "react-router-dom";

const CardAlumno = (props) => {
  let alumnJSON = localStorage.getItem('alumno')
  let alumn = (JSON.parse(alumnJSON))
  console.log(props.ruta);
  const navigate = useNavigate();
  function handleBoletin() {
    navigate("/boletin");
  }

  return (
    <div className="">
      <div className="">
        <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
          <div className="">
            <p className="text-[#4D3483] font-sans text-[16px] mb-2">
              Datos del alumno
            </p>

            <div className="flex my-2">
              <img src={Face} alt="Face" />
              <p className="font-sans text-[16px] ml-[18px] pr-4">
                {alumn.nombre}
              </p>
            </div>
            <div className="flex my-2">
              <img src={Cake} alt="Cake" />
              <p className="font-sans text-[16px] ml-[19px]">
                {props.cumpleanios}
              </p>
            </div>
            <div className="flex my-2">
              <img src={Location} alt="Location" />
              <p className="font-sans text-[16px] ml-[20px]">
                {props.direccion}
              </p>
            </div>
            <div className="flex my-2">
              <img src={School} alt="School" />
              <p className="font-sans text-[16px] ml-[15px]">{props.grado}</p>

              <span className=" text-[#7064FF] font-sans text-[12.8px] ml-[61px] w-[68px] h-[24px] mt-[1px]" onClick={handleBoletin}>
                Ver boletin
              </span>

            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 h-[138px] pb-4 pt-4 pl-4 pr-4">
          <p className="text-[#4D3483] font-sans text-[16px] mb-2">
            Datos del encargado
          </p>

          <div className="flex my-2">
            <img src={Face} alt="Face" />
            <p className="font-sans text-[16px] ml-[18px] pr-4">
              {props.nombre_encargado}
            </p>
          </div>
          <div className="flex my-2">
            <img src={Cel} alt="Cel" />
            <p className="font-sans text-[16px] ml-[18.03px]">
              {props.telefono}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardAlumno.propTypes = {};

export default CardAlumno;
