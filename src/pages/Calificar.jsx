import { useEffect, useState } from "react";
import Calificaciones from "../components/Calificaciones";
import Spinner from "../components/Spinner";
import { getAreas } from "../services/controllerDocentes";

export default function Calificar() {
  const [info, setInfo] = useState();
  const [vacio, setVacio] = useState(false);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    grades();
  }, []);

  const grades = async () => {
    const getLocalInfo = localStorage.getItem("grados");
    const localInfo = JSON.parse(getLocalInfo);
    setInfo(localInfo);
    if (localInfo !== "No hay grados a cargo del docente por el momento") {
      const getActividades = localStorage.getItem("actividades");
      const localActividades = JSON.parse(getActividades);
      console.log(localActividades);
      if (localActividades === null) {
        const response = await Promise.all(
          localInfo.map(async (item) => await getAreas(item.id))
        );

        const areas = response.map((item) =>
          item.body?.areas?.map((item) => item.area_name)
        );

        localStorage.setItem("areas", JSON.stringify(areas));
        const actividades = response.map((item) =>
          item.body?.areas?.map((item) => item.activities)
        );

        localStorage.setItem("actividades", JSON.stringify(actividades));
      }
      setVerify(true);
      setVacio(false);
    } else {
      setVacio(true);
    }
  };
  return (
    <div className="contenedor contenedor-admin">
      {!vacio ? (
        verify ? (
          <Calificaciones info={info} />
        ) : (
          <Spinner />
        )
      ) : (
        <p>{info}</p>
      )}
    </div>
  );
}
