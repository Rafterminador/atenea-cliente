import React, { useEffect } from "react";
import Notes from "../components/Notes";
// import BoletinCard from "../components/BoletinCard";
import Button from "../components/Button";
import TopBar from "../components/TopBar";
import { useState } from "react";
import { getStudentBoletin } from "../services/controllerDirector";

const Boletin = () => {
  const [alumno, setAlumno] = useState({});
  const [firstUnit, setFirstUnit] = useState({});
  const [areasFirstUnit, setareasFirstUnit] = useState([]);
  const [second, setSecond] = useState({});
  const [areasSecond, setareasSecond] = useState([]);
  const [third, setThird] = useState({});
  const [areasThird, setareasThird] = useState([]);
  const [fourth, setFourth] = useState({});
  const [areasFourth, setareasFourth] = useState([]);
  const [msg, setMsg] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    let alumnJSON = localStorage.getItem("alumno");
    let alumn = JSON.parse(alumnJSON);
    console.log(alumn);
    setAlumno(alumn);

    let boletinJSON = localStorage.getItem("boletin");
    let boletin = JSON.parse(boletinJSON);

    if (boletin === "Este estudiante no esta asignado a ningun grado") {
      setMsg(boletin);
      setEstado(false);

      return;
    }

    setFirstUnit(boletin.unit1);

    setareasFirstUnit(boletin.unit1.areas);
    setSecond(boletin.unit2);

    setareasSecond(boletin.unit2.areas);
    setThird(boletin.unit3);
    setareasThird(boletin.unit3.areas);
    setFourth(boletin.unit4);
    setareasFourth(boletin.unit4.areas);
  }, []);

  const handleExportarPdf = async () => {
    await getStudentBoletin(alumno.uid, alumno.nombre);
  };

  return (
    <div className="flex flex-col">
      <TopBar text={alumno.nombre} />

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      {estado ? (
        <div className="m-5">
          <Notes
            firstUnit={firstUnit}
            areas={areasFirstUnit}
            unidad={"Primera unidad"}
            //  link={"/grades/teacher/:id/courses/students/:id/notes"}
          />
          <Notes
            firstUnit={second}
            unidad={"Segunda unidad"}
            areas={areasSecond}
            link={"/grades/teacher/:id/courses/students/:id/notes"}
          />
          <Notes
            firstUnit={third}
            areas={areasThird}
            unidad={"Tercera unidad"}
            link={"/grades/teacher/:id/courses/students/:id/notes"}
          />
          <Notes
            firstUnit={fourth}
            areas={areasFourth}
            unidad={"Cuarta unidad"}
            link={"/grades/teacher/:id/courses/students/:id/notes"}
          />
        </div>
      ) : (
        <p className="m-5">{msg}</p>
      )}

      <div className="">
        {/* <BoletinCard
        /> */}
      </div>

      {estado ? (
        <div className="fixed top-[720px] left-5 right-5">
          <Button
            onClick={handleExportarPdf}
            text="Exportar a PDF"
            typeButton={"button-type-2"}
            className=""
            type="submit"
            form="register-form"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Boletin;
