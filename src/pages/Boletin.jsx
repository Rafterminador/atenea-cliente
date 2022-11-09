import React, { useEffect } from "react";
import Notes from "../components/Notes";
// import BoletinCard from "../components/BoletinCard";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import { useState } from "react";
import { getStudentScores } from "../services/controllerDirector";

const Boletin = (props) => {
  const [alumno, setAlumno] = useState({});
  const [firstUnit, setFirstUnit] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [fourth, setFourth] = useState({});

  useEffect(() => {
    let alumnJSON = localStorage.getItem("alumno");
    let alumn = JSON.parse(alumnJSON);
    console.log(alumn);
    setAlumno(alumn);


    console.log(alumn.uid, "sdsdsd");

    setTimeout(() => {
      GetStudentScores();
    }, 2000)

    

    
  }, []);

  const GetStudentScores = async () => {
    let response = await getStudentScores(`FaRk3iTfC5K9B1awXwYNx`);
    console.log(response.body);

    setFirstUnit(response.body.unit1);
    setSecond(response.body.unit2);
    setThird(response.body.unit3);
    setFourth(response.body.unit4);
  };
  return (
    <div className="flex flex-col">
      <Retroceder text={alumno.nombre} />

      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="m-5">
        <Notes
          unidad={"Primera unidad"}
          link={"/grades/teacher/:id/courses/students/:id/notes"}
        />
        <Notes
          unidad={"Segunda unidad"}
          link={"/grades/teacher/:id/courses/students/:id/notes"}
        />
        <Notes
          unidad={"Tercera unidad"}
          link={"/grades/teacher/:id/courses/students/:id/notes"}
        />
        <Notes
          unidad={"Cuarta unidad"}
          link={"/grades/teacher/:id/courses/students/:id/notes"}
        />
      </div>

      <div className="">
        {/* <BoletinCard
        /> */}
      </div>

      <div className="fixed top-[720px] left-5 right-5">
        <Button
          text="Exportar a PDF"
          typeButton={"button-type-2"}
          className=""
          type="submit"
          form="register-form"
        />
      </div>
    </div>
  );
};

export default Boletin;
