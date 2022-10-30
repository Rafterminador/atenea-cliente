import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import ComboBox from "../components/ComboBox";
import Input from "../components/Input";
import Retroceder from "../components/Retroceder";
import { AlertButton } from "../utils/AlertButton";

export default function NewActivity() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    Swal.fire(AlertButton.dataAlertSuccess("Actividad añadida")).then(() => {
      navigate(-1);
    });
  }
  return (
    <div>
      <Retroceder text="Nueva actividad" />
      <div className="h-full">
        <form>
          <div className="contenedor-admin flex flex-col gap-3">
            <label htmlFor="teacher">Unidad</label>
            <ComboBox
              teachers={[
                "Primera unidad",
                "Segunda unidad",
                "Tercera unidad",
                "Cuarta unidad",
              ]}
              placeholder={"Seleccionar Grado"}
            />
            <label htmlFor="name">Nombre</label>
            <Input
              className={"w-full"}
              id={"name"}
              type={"text"}
              name={"name"}
              disabled={false}
              required={true}
            />
            <label htmlFor="score">Puntaje</label>
            <Input
              className={"w-full"}
              id={"score"}
              type={"number"}
              name={"score"}
              disabled={false}
              required={true}
            />
          </div>
          <div className="contenedor-admin w-screen mb-5 fixed bottom-0">
            <Button
              typeButton={"button-type-2"}
              type={"submit"}
              text={"Confirmar actividad"}
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
