import Badge from "../components/Badge";
import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import StudentCourse from "../components/StudentCourse";
import { AlertButton } from "../utils/AlertButton";
import Exportacion from "../assets/images/exportacion.svg";
const Swal = require("sweetalert2");

export default function Courses() {
  const getGrade = localStorage.getItem("grade");
  const grade = JSON.parse(getGrade);
  const url = `/grades/teacher/${grade.id}/courses/`;

  function handleClick(e) {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "Exportación masiva",
        "Boletines",
        "Notas",
        Exportacion
      )
    ).then(() => {
      console.log("successfully");
    });
  }
  return (
    <div>
      <Retroceder text={grade.grade} />
      <div className="contenedor-admin">
        <div className=" flex items-center">
          <p className="font-bold text-[21.33px] text-[#4D3483]">Alumnos</p>
          <Badge total={38} />
        </div>
        <StudentCourse value={"Ver todos los alumnos"} url={`${url}students`} />
        <p className="h1-administracion">Materias</p>
        <StudentCourse value={"Matematicas"} url={`${url}${grade.courseId}`} />
      </div>
      <div className="contenedor-admin w-full mb-5 fixed bottom-0">
        <Button
          typeButton={"button-type-2"}
          type={"button"}
          onClick={handleClick}
          text={"Exportación masiva"}
        />
      </div>
    </div>
  );
}
