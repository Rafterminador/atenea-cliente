import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import StudentCourse from "../components/StudentCourse";

export default function Students() {
  return (
    <div>
      <Retroceder text="Alumnos" />
      <div className="contenedor-admin">
        <SearchBar />
        <p className="mt-5 mb-7">
          Cantidad de alumnos en el grado <span className="font-bold">38</span>
        </p>
        <StudentCourse
          value="Nombre"
          url="/grades/teacher/:id/courses/students/:id"
        />
      </div>
    </div>
  );
}
