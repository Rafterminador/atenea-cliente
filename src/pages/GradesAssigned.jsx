import { useState } from "react";
import { useEffect } from "react";
import GradeAssigned from "../components/GradeAssigned";

import { GetTeacherGradesByID } from "../services/controllerDocentes";

export default function GradesAssigned() {
  const [vacio, setVacio] = useState(false);
  const [info, setInfo] = useState();
  const [myGrades, setMyGrades] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    let userJSON = localStorage.getItem("usuario");
    let useUser = JSON.parse(userJSON);

    const handleMyGrades = async () => {
      let response = await GetTeacherGradesByID(useUser.uid);
      if (response.status === 201) {
        console.log(response.body);
        setMyGrades(response.body);
        setVacio(false);
        if (
          response.body === "No hay grados a cargo del docente por el momento"
        ) {
          setVacio(true);
          setInfo("No hay grados asignados por el momento");
        }
      } else {
        console.log(response);
      }
    };

    handleMyGrades();
  }, []);

  return (
    <div className="relative">
      {!vacio ? (
        <>
          {" "}
          <div className="contenedor contenedor-admin">
            <h1 className="h1-administracion">Mis Grados</h1>
            {myGrades.map((estudiante) => (
              <GradeAssigned
                grado={estudiante.grade_name}
                alumnos={estudiante.size}
                id={1}
                url="/grades/teacher/courses"
                key={estudiante.id_grade}
                uidgrade={estudiante.id_grade}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p>{info}</p>
        </>
      )}
    </div>
  );
}
