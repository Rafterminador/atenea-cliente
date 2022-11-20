import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

const NameAsistencia = ({ id, name_student }) => {
  const [hidden, setHidden] = useState("hidden");
  const [presente, setPresente] = useState("");
  const [ausente, setAusente] = useState("hidden");

  const hladleHidden = () => {
    setHidden("");
    setPresente("hidden");

    const asistenciaJSON = localStorage.getItem("asistencia");
    const asistencia = JSON.parse(asistenciaJSON);

    asistencia.push({ student: id, attendence: true });

    const AsistenciaJSON = JSON.stringify(asistencia);
    localStorage.setItem("asistencia", AsistenciaJSON);

    console.log(asistencia);
  };

  const handleEliminar = () => {
    setHidden("hidden");
    setPresente("hidden");
    setAusente("");

    const asistenciaJSON = localStorage.getItem("asistencia");
    const asistencia = JSON.parse(asistenciaJSON);

    asistencia.push({ student: id, attendence: false });

    const AsistenciaJSON = JSON.stringify(asistencia);
    localStorage.setItem("asistencia", AsistenciaJSON);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="">
        <div className="container-asistencia pr-[20px] m-[20px] w-auto h-[288px]">
          <p className="text-center ">Está presente</p>
          <div className="grid grid-cols-3 mt-4">
            <p className="text-[28px] font-[1100]">¿</p>
            <p className="text-center font-bold">{name_student}</p>
            <p className="text-[28px] text-end  font-[1100]">?</p>
          </div>

          <div className={`justify-between mt-10 ${presente}`}>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <Button
                  onClick={hladleHidden}
                  text={`Presente  `}
                  typeButton={"button-type-2"}
                  className="my-5 mt-10"
                  type="button" 
                />
              </div>

              <div className="col-span-2">
                <Button
                  onClick={handleEliminar}
                  text="No"
                  typeButton={"button-type-1"}
                  className="my-5 mt-10"
                  type="button"
                />
              </div>
            </div>
          </div>

          <div className={` ${hidden} `}>
            <Button
              // onClick={handleEliminar}
              text="Presente"
              typeButton={"button-type-4"}
              className="my-5 mt-20"
              type="button"
            />
          </div>

          <div className={`${ausente} `}>
            <Button
              // onClick={handleEliminar}
              text="Ausente"
              typeButton={"button-type-5"}
              className="my-5 mt-20"
              type="button"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default NameAsistencia;
