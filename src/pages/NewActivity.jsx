import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import Button from "../components/Button";
import ComboBox from "../components/ComboBox";
import Input from "../components/Input";
import Retroceder from "../components/Retroceder";
import { AlertButton } from "../utils/AlertButton";
import { createActivity } from "../services/controllerDocentes";
import Spinner from "../components/Spinner";

export default function NewActivity() {
  let AreaInfoJSON = localStorage.getItem("areainfo");
  let useArea = JSON.parse(AreaInfoJSON);
  const Swal = require('sweetalert2')
  const [unitis] = useState([
    "Primera unidad",
    "Segunda unidad",
    "Tercera unidad",
    "Cuarta unidad",
  ]);
  const [activityName, setActivityName] = useState();
  const [activityValue, setActivityValue] = useState();
  const [getUnit, setGetUnit] = useState();
  const [areauid] = useState(useArea.uid);
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    let numberunidad = 0;

    if (getUnit === "Primera unidad") {
      numberunidad = 1;
    }
    if (getUnit === "Segunda unidad") {
      numberunidad = 2;
    }
    if (getUnit === "Tercera unidad") {
      numberunidad = 3;
    }
    if (getUnit === "Cuarta unidad") {
      numberunidad = 4;
    }

    let Activity = {
      activity_name: activityName,
      activity_value: activityValue,
      unit: numberunidad,
      areaRef: areauid
    };

    console.log(Activity);

    let response = await createActivity(Activity);
    if (response.status === 200) {
      console.log(response.body);
    } else {
      console.log(response.body);
    }
    setCargando(false);
    Swal.fire(
      AlertButton.dataAlertSuccess('Actividad añadida correctamente')
    ).then(() => {
      navigate(-1);
    })
  };

  function handleActivityName(e) {
    setActivityName(e.target.value);
    console.log(e.target.value);
  }

  function handleActivityValue(e) {
    setActivityValue(e.target.value);
    console.log(e.target.value);
  }

  const handleGetUnit = (e) => {
    console.log(e);
    setGetUnit(e);
    console.log("ver unidad aqui", getUnit);
  };

  return (
    <div>
      <Retroceder text="Nueva actividad" />
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <div className="h-full">
            <form onSubmit={handleSubmit} id="new-form">
              <div className="contenedor-admin flex flex-col gap-3">
                <label htmlFor="teacher">Unidad</label>
                <ComboBox
                  teachers={unitis}
                  function={handleGetUnit}
                  placeholder="Seleccionar Unidad"
                />
                <label htmlFor="name">Nombre</label>
                <Input
                  className={"w-full"}
                  id={"name"}
                  type={"text"}
                  name={"name"}
                  disabled={false}
                  required={true}
                  onChange={handleActivityName}
                />
                <label htmlFor="score">Puntaje</label>
                <Input
                  className={"w-full"}
                  id={"score"}
                  type={"number"}
                  name={"score"}
                  disabled={false}
                  required={true}
                  onChange={handleActivityValue}
                />
              </div>
            </form>
            <div className="contenedor-admin w-screen mb-5 fixed bottom-0">
              <Button
                typeButton={"button-type-2"}
                type={"submit"}
                text={"Confirmar actividad"}
                form="new-form"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
