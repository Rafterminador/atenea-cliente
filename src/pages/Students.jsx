import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import StudentCourse from "../components/StudentCourse";

export default function Students() {
  return (
    <div>
      <TopBar text="Alumnos" />
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
