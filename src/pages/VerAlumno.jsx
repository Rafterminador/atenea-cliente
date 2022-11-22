import React, { useState, useEffect } from "react";
import Alumno from "../components/Alumno";
import Grado from "../components/Grado";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import uuid from "react-uuid";
import Spinner from "../components/Spinner";
import { getAllGrades } from "../services/controllerDocentes";
import { searchByStudentName3 } from "../utils/FunctionUtils";

const VerAlumno = () => {
  localStorage.removeItem("alumno");
  localStorage.removeItem("boletin");
  const navigate = useNavigate();

  function handleAdd() {
    navigate("/cuenta/alumno");
  }

  const [hidden, setHidden] = useState("my-[10px]");
  const [Students, setStudents] = useState([]);
  let [allStudents, setAllStudents] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const handleGetAllStudents = async () => {
      setCargando(true);
      let response = await getAllGrades();
      if (response.status === 200) {
        console.log(response.body);
        setStudents(response.body);
      } else {
        console.log(response.body);
      }
      setCargando(false);
    };

    handleGetAllStudents();
  }, []);

  const getStudents = Students.map((levelGrade) =>
    levelGrade.grades.map((grade, index) =>
      grade.students.map((student, index2) => (
        <div key={uuid()}>
          {index2 === 0 ? (
            <Grado
              grado={grade.grade_name}
              total={grade.students.length}
              uidgrade={grade.id}
            />
          ) : (
            ""
          )}
          {index2 < 4 ? (
            <Alumno
              nombre={student.name_complete}
              uid={student.id}
              key={uuid()}
            />
          ) : (
            ""
          )}
        </div>
      ))
    )
  );

  const handleSearchAlumno = (e) => {
    if (e.target.value === "") {
      setHidden("my-[10px]");
    } else {
      setHidden("my-[10px] hidden");
      let arrayAux = [];
      Students.map((levelGrade) =>
        levelGrade.grades.map((grade, index) =>
          grade.students.map((student, index2) => (
            arrayAux.push(student)
          ))
        )
      );
      setAllStudents(arrayAux);
      console.log("AllStudents", allStudents);
      allStudents = searchByStudentName3(arrayAux, e.target.value);
      setAllStudents(allStudents);
      console.log("AllStudents", allStudents);
    }
  };

  return (
    <>
      <div className="contenedor contenedor-admin mb-[80px]">
        <SearchBar
          onChange={handleSearchAlumno}
          placeholder="Buscar un Alumno"
        />
        {cargando ? (
          <Spinner />
        ) : (
          <>
            <div className={hidden}>
              {getStudents}
            </div>
            <div className="my-[10px]">
              {allStudents.map((estudiante) => (
                <Alumno
                  nombre={estudiante.name_complete}
                  uid={estudiante.id}
                  key={estudiante.id}
                />
              ))}
            </div>
            <AddButton function={handleAdd} />
          </>
        )}
      </div>
    </>
  );
};

export default VerAlumno;
