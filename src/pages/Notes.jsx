import Button from "../components/Button";
import CursoNote from "../components/CursoNote";
import Retroceder from "../components/Retroceder";

export default function Notes(props) {
  return (
    <div>
      <Retroceder text={"Notas"} />
      <div className="contenedor-admin">
        <div className="text-center">
          <p className="mb-4">
            Notas de la Primera unidad de:{" "}
            <span className="font-bold">Comunicacion y lenguaje L2</span>
          </p>
          <p>
            Del estudiante:{" "}
            <span className="font-bold">
              Brandon Celeste Maldonado Gallardo
            </span>
          </p>
        </div>
        <div className="">
          <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
            <div className="">
              <div className="grid grid-cols-2 text-center">
                <p className="text-[#FFB55F] font-sans text-[12px] .sml-title">
                  Actividad
                </p>
                <p className="text-[#FFB55F] font-sans text-[12px] .sml-title ml-[75px]">
                  Nota
                </p>
              </div>
              <div className="">
                <CursoNote name={"Comunicacion y lenguaje L1"} note={"92"} />
                <CursoNote name={"Comunicación y lenguaje L2"} note={"38"} />
                <CursoNote name={"Comunicación y lenguaje L3"} note={"27"} />
                <CursoNote name={"Matemáticas"} note={"73"} />
                <CursoNote name={"Medio Social y Natural"} note={"98"} />
                <CursoNote name={"Formación Ciudadana"} note={"13"} />
                <CursoNote name={"Expresión Artística"} note={"100"} />
                <CursoNote name={"Educación Física"} note={"36"} />
              </div>
              <div className="flex justify-end">
                <p className="text-[16px] opensansbold">Total</p>
                <p className="ml-[40px]">100pts</p>
              </div>
            </div>
          </div>
        </div>
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
}
