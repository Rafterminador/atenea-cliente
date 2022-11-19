import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import Button from "../components/Button";
import ComboBox from "../components/ComboBox";
import Input from "../components/Input";
import Retroceder from "../components/Retroceder";
import { AlertButton } from "../utils/AlertButton";
import Delete from "../assets/images/delete.svg";
import { updateActivity } from "../services/controllerDocentes";
import { deleteActivity } from "../services/controllerDocentes";
import Spinner from "../components/Spinner";

export default function EditActividy() {
  let ActivityInfoJSON = localStorage.getItem("activityInfo");
  let useActivity = JSON.parse(ActivityInfoJSON);
  const [change, setChange] = useState(true);
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState(useActivity.name);
  const [activityValue, setActivityValue] = useState(useActivity.note);
  const [getUnit, setGetUnit] = useState(useActivity.unidad);
  const [unitis] = useState([
    "Primera unidad",
    "Segunda unidad",
    "Tercera unidad",
    "Cuarta unidad",
  ]);
  const [cargando, setCargando] = useState(false);
  // const params = useParams()
  const Swal = require('sweetalert2')
  
  function handleCancel(e) {
    e.preventDefault();
    setChange(!change);
  }

  // function handleDelete(e) {
  //   e.preventDefault();
  //   Swal.fire(
  //     AlertButton.dataAlertUnBotonMorado(
  //       "¿Eliminar actividad?",
  //       "Sí, hacerlo",
  //       "No",
  //       Delete
  //     )
  //   ).then((result) => {
  //     if (result.isConfirmed) {
  //       handleDeleteActivity();
  //       navigate(-1);
        
  //     }
  //   });
  // }

//   const handleDeleteActivity = async () => {
//     let response = await deleteActivity(useActivity.idactivity)
//     if (response.status === 200) {
//         console.log(response.body)
//     } else {
//         console.log(response.body)
//     }
// }

const handleDelete = (e) => {
  e.preventDefault();
  console.log("entrando a delete");
  Swal.fire(
      AlertButton.dataAlertUnBotonMorado('¿Eliminar actividad?', 'Sí', 'Cancelar', Delete)
  ).then(async (result) => {
      if (result.isConfirmed) {
        console.log("enviando id", useActivity.idactivity )
          let response = await deleteActivity(useActivity.idactivity);
          if (response.status === 200) {
              console.log(response.body);
              Swal.fire(
                  AlertButton.dataAlertSuccess('Se ha eliminado correctamente')
                  
              ).then(async () => {
              })
              navigate(-1);
          } else {
              console.log(response.body);
          }
      }
  })


}


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("unidad", getUnit);

    let numberunidad = 0;

    if (getUnit === "Primera unidad") {
      numberunidad=1;
    }
    if (getUnit === "Segunda unidad") {
      numberunidad=2;
    }
    if (getUnit === "Tercera unidad") {
      numberunidad=3;
    }
    if (getUnit === "Cuarta unidad") {
      numberunidad=4;
    }

    let Activity = {
      activity_name: activityName,
      activity_value: activityValue,
      unit: numberunidad,
    };

    console.log(Activity);
    setCargando(true);
    let response = await updateActivity(Activity, useActivity.idactivity);
    if (response.status === 200) {
      console.log(response.body);
    } else {
      console.log(response.body);
    }
    alert("Datos actualizados correctamente");
    setCargando(false);
    navigate(-1);
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
      <Retroceder text={useActivity.name} />
      {cargando ? (
        <Spinner />
      ) : (
<div>
      {change ? (
        <div className="h-full">
          <div className="contenedor-admin flex flex-col gap-3">
            <label htmlFor="teacher">Unidad</label>
            <Input
              className={"w-full"}
              id={"name"}
              type={"text"}
              name={"name"}
              disabled={true}
              required={true}
              placeholder={"Unidad"}
              defaultValue={useActivity.unidad}
            />
            <label htmlFor="name">Nombre</label>
            <Input
              className={"w-full"}
              id={"name"}
              type={"text"}
              name={"name"}
              disabled={true}
              required={true}
              defaultValue={useActivity.name}
            />
            <label htmlFor="score">Puntaje</label>
            <Input
              className={"w-full"}
              id={"score"}
              type={"number"}
              name={"score"}
              disabled={true}
              required={true}
              defaultValue={useActivity.note}
            />
          </div>
          <div className="contenedor-admin w-screen mb-5 fixed bottom-0 flex flex-col gap-5">
            <Button
              typeButton={"button-type-3"}
              type={"submit"}
              text={"Eliminar actividad"}
              onClick={handleDelete}
            />
            <Button
              typeButton={"button-type-2"}
              type={"submit"}
              text={"Editar datos"}
              onClick={handleCancel}
            />
          </div>
        </div>
      ) : (
      <form onSubmit={handleSubmit} id="edit-form">
        <div className="h-full">
          <div className="contenedor-admin flex flex-col gap-3">
            <label htmlFor="teacher">Unidad</label>
            <ComboBox
              teachers={unitis}
              valueByDefault={useActivity.unidad}
              function={handleGetUnit}
              placeholder="Seleccionar Unidad"
            />
            <label htmlFor="name">Nombre</label>
            <Input
              className="w-full"
              id="name"
              type="text"
              name="name"
              defaultValue={useActivity.name}
              onChange={handleActivityName}
            />
            <label htmlFor="score">Puntaje</label>
            <Input
              className="w-full"
              id="score"
              type="number"
              name="score"
              onChange={handleActivityValue}
              defaultValue={useActivity.note}
            />
          </div>
          <div className="contenedor-admin w-screen mb-5 fixed bottom-0 flex flex-col gap-5">
            <Button
              typeButton={"button-type-3"}
              type={"submit"}
              text={"Cancelar"}
              onClick={handleCancel}
            />
            <Button
              typeButton="button-type-2"
              text="Actualizar datos"
              className=""
              type="submit"
              form="edit-form"
            />
          </div>
        </div>
        </form>
      )} 
      </div>
      )};
    </div>
  );
}
