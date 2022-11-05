import React from "react";
import Notes from "../components/Notes";
// import BoletinCard from "../components/BoletinCard";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";

const Boletin = (props) => {
  return (
    <div className="flex flex-col">
      <Retroceder text="José Fernando Arredondo Aparicio" />

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
