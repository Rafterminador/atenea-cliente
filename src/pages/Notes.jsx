import { useEffect, useState } from "react";
import CursoNote from "../components/CursoNote";
import Retroceder from "../components/Retroceder";
import Spinner from "../components/Spinner";

export default function Notes() {
  const [UnitActivity, setUnitActivity] = useState([]);
  const [cargando] = useState(true);

  let activityInfo = localStorage.getItem("activityInfo");
  let activityInfor = JSON.parse(activityInfo);

  let nameAlumno = localStorage.getItem("alumno");
  let NameAlumno = JSON.parse(nameAlumno);
  useEffect(() => {
    let activityAreaJSON = localStorage.getItem("activityArea");
    let activityArea = JSON.parse(activityAreaJSON);
    setUnitActivity(activityArea);
    //  const {activities} = boletin;
  }, []);

  return (
    <div>
      <Retroceder text={"Notas"} />
      {cargando ? (
        <>
          <div className="contenedor-admin">
            <div className="text-center">
              <p className="mb-4">
                Notas de la Primera unidad de:{" "}
                <span className="font-bold">{activityInfor.name}</span>
              </p>
              <p>
                Del estudiante:{" "}
                <span className="font-bold">{NameAlumno.nombre}</span>
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
                    {UnitActivity?.map((activity) => (
                      <CursoNote
                        key={activity.id}
                        name={activity.activity_name}
                        note={activity.score}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <p className="text-[16px] opensansbold">Total</p>
                    <p className="ml-[40px]">
                      {UnitActivity?.map((item) => item.score).reduce(
                        (prev, curr) => prev + curr,
                        0
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
