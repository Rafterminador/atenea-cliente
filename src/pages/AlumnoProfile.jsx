import React from "react";
import CardAlumno from "../components/CardAlumno";

export default function AlumnoProfile() {
  return (
    <div>
      <div className="">
        <CardAlumno
          nombre={"José Fernando Arredondo Aparicio"}
          cumpleanios={"08 / 04 / 2008 - 14 años"}
          direccion={"Aldea Buenos Aires, Chiantla"}
          grado={"Sexto primaria"}
          nombre_encargado={"Priscilla Regina Aparicio Rabanales "}
          telefono={"5486 7889"}
        />
      </div>
    </div>
  );
}

export { AlumnoProfile };
