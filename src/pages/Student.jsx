import CardAlumno from "../components/CardAlumno";
import Retroceder from "../components/Retroceder";

export default function Student() {
  return (
    <div>
      <Retroceder text="Student Name" />
      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

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
