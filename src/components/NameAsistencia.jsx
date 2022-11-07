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
      <div className="contenedor-admin">
        <div className="container-asistencia">
          <div className="grid grid-cols-3">
            <p className="text-[28px] font-[1100]">¿</p>
            <p className="text-center ">{name_student}</p>
            <p className="text-[28px] text-end  font-[1100]">?</p>
          </div>

          <div className={`flex justify-between mt-10 ${presente}`}>
            <div>
              <Button
                onClick={hladleHidden}
                text="Presente"
                typeButton={"button-type-2"}
                className="my-5"
                type="button"
              />
            </div>

            <div>
              <Button
                onClick={handleEliminar}
                text="No"
                typeButton={"button-type-1"}
                className="my-5"
                type="button"
              />
            </div>
          </div>

          <div className={`${hidden}`}>
            <Button
              // onClick={handleEliminar}
              text="Presente"
              typeButton={"button-type-4"}
              className="my-5"
              type="button"
            />
          </div>

          <div className={`${ausente}`}>
            <Button
              // onClick={handleEliminar}
              text="Ausente"
              typeButton={"button-type-5"}
              className="my-5"
              type="button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NameAsistencia;
