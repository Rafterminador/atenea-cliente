import React from "react";
import CursoNote from "./CursoNote";

const BoletinCard = (props) => {
  return (
    <div className="">
      <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
        <div className="">
          <div className="grid grid-cols-2 text-center">
            <p className="text-[#FFB55F] font-sans text-[12px] .sml-title">
              Curso
            </p>
            <p className="text-[#FFB55F] font-sans text-[12px] .sml-title ml-[75px]">
              Nota
            </p>
          </div>

          <div className="">
            <CursoNote
              name={"Comunicacion y lenguaje L1"}
              note={"92"}
              link={props.link}
            />
            <CursoNote
              name={"Comunicación y lenguaje L2"}
              note={"38"}
              link={props.link}
            />
            <CursoNote
              name={"Comunicación y lenguaje L3"}
              note={"27"}
              link={props.link}
            />
            <CursoNote name={"Matemáticas"} note={"73"} link={props.link} />
            <CursoNote
              name={"Medio Social y Natural"}
              note={"98"}
              link={props.link}
            />
            <CursoNote
              name={"Formación Ciudadana"}
              note={"13"}
              link={props.link}
            />
            <CursoNote
              name={"Expresión Artística"}
              note={"100"}
              link={props.link}
            />
            <CursoNote
              name={"Educación Física"}
              note={"36"}
              link={props.link}
            />
          </div>

          <div className="grid grid-cols-2 ml-[80px]">
            <p className="text-[16px] opensansbold">Promedio</p>

            <p className="ml-[40px]">65pts</p>

            <p className="text-[16px] opensansbold">Inasistencias</p>

            <p className="ml-[50px]">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoletinCard;
