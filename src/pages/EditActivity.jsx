import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import ComboBox from "../components/ComboBox";
import Input from "../components/Input";
import Retroceder from "../components/Retroceder";
import { AlertButton } from "../utils/AlertButton";
import Delete from "../assets/images/delete.svg";

export default function EditActividy() {
  const [change, setChange] = useState(true);
  const navigate = useNavigate();
  function handleCancel(e) {
    e.preventDefault();
    setChange(!change);
  }
  function handleUpdate(e) {
    e.preventDefault();
    Swal.fire(AlertButton.dataAlertSuccess("Datos actualizados")).then(() => {
      navigate(-1);
    });
  }
  function handleDelete(e) {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Eliminar actividad?",
        "Sí, hacerlo",
        "No",
        Delete
      )
    ).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
        // Swal.fire('Saved!', '', 'success')
      }
    });
  }
  return (
    <div>
      <Retroceder text="Lectura #1" />
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
              placeholder={"Primera Unidad"}
            />
            <label htmlFor="name">Nombre</label>
            <Input
              className={"w-full"}
              id={"name"}
              type={"text"}
              name={"name"}
              disabled={true}
              required={true}
            />
            <label htmlFor="score">Puntaje</label>
            <Input
              className={"w-full"}
              id={"score"}
              type={"number"}
              name={"score"}
              disabled={true}
              required={true}
              placeholder={"hola"}
            />
          </div>
          <div className="contenedor-admin w-screen mb-5 fixed bottom-0 flex flex-col gap-5">
            <Button
              typeButton={"button-type-1"}
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
        <div className="h-full">
          <div className="contenedor-admin flex flex-col gap-3">
            <label htmlFor="teacher">Unidad</label>
            <ComboBox
              teachers={[
                "Primera unidad",
                "Segunda unidad",
                "Tercera unidad",
                "Cuarta unidad",
              ]}
              valueByDefault={"Primera unidad"}
            />
            <label htmlFor="name">Nombre</label>
            <Input
              className={"w-full"}
              id={"name"}
              type={"text"}
              name={"name"}
              required={true}
            />
            <label htmlFor="score">Puntaje</label>
            <Input
              className={"w-full"}
              id={"score"}
              type={"number"}
              name={"score"}
              required={true}
              placeholder={"hola"}
            />
          </div>
          <div className="contenedor-admin w-screen mb-5 fixed bottom-0 flex flex-col gap-5">
            <Button
              typeButton={"button-type-1"}
              type={"submit"}
              text={"Cancelar"}
              onClick={handleCancel}
            />
            <Button
              typeButton={"button-type-2"}
              type={"submit"}
              text={"Actualizar datos"}
              onClick={handleUpdate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
