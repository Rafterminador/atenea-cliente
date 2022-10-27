import Button from "../components/Button";
import Units from "../components/Units";
import Retroceder from "../components/Retroceder";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/grades/teacher/:id/courses/:courseId/new/activity");
  }
  return (
    <div>
      <Retroceder text="Matematicas" />

      <div className="m-5">
        <Units unidad={"Primera unidad"} />
        <Units unidad={"Segunda unidad"} />
        <Units unidad={"Tercera unidad"} />
        <Units unidad={"Cuarta unidad"} />
      </div>

      <div className="fixed top-[720px] left-5 right-5">
        <Button
          text="Añadir actividad"
          typeButton={"button-type-2"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
