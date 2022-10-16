import Button from "../components/Button";
import Retroceder from "../components/Retroceder";
import StudentCourse from "../components/StudentCourse";

export default function Courses() {
  const getGrade = localStorage.getItem("grade");
  const grade = JSON.parse(getGrade);
  const url = `/grades/teacher/${grade.id}/courses/`;
  return (
    <div>
      <Retroceder text={grade.grade} />
      <div className="contenedor-admin">
        <p className="h1-administracion flex items-center">
          Alumnos
          <span className="text-xs font-bold bg-[#DBD8FF] px-2 py-1 rounded-[10px] ml-2">
            {grade.alumnos}
          </span>
        </p>
        <StudentCourse value={"Ver todos los alumnos"} url={`${url}students`} />
        <p className="h1-administracion">Materias</p>
        <StudentCourse value={"Matematicas"} url={`${url}${grade.courseId}`} />
      </div>
      <div className="contenedor-admin w-full mb-5 fixed bottom-0">
        <Button
          typeButton={"button-type-2"}
          type={"button"}
          // onClick={handle}
          text={"Exportación masiva"}
        />
      </div>
    </div>
  );
}
