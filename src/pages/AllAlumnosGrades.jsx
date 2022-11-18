import React, { useState, useEffect } from "react";
import Alumno from "../components/Alumno";
import SearchBar from "../components/SearchBar";
import Retroceder from "../components/Retroceder";
import { searchByStudentName2 } from "../utils/FunctionUtils";
import { GetGradesByID } from "../services/controllerDocentes";

const AllAlumnosGrades = () => {
  let gradoJSON = localStorage.getItem("seteargrado");
  let seteargrado = JSON.parse(gradoJSON);
  const [actual, setActual] = useState([]);
  const [hidden, setHidden] = useState("");
  const [myStudents, setMyStudents] = useState([]);
  let [allStudents, setAllStudents] = useState([]);

  const handleSearchAlumno = (e) => {
    console.log(allStudents)
    if (e.target.value === "") {
      setHidden("");
      setAllStudents([]);
    } else {
      setHidden("hidden");
      // let arrayAux = actual;
      // setAllStudents(arrayAux);
      // console.log("Concatenados", arrayAux);
      console.log("AllStudents", allStudents);
      console.log("ver arreglo", myStudents)
      allStudents = searchByStudentName2(myStudents, e.target.value);
      setAllStudents(allStudents);
      console.log("AllStudents", allStudents);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    let uidgradeJSON = localStorage.getItem("seteargrado");
    let useGrade = JSON.parse(uidgradeJSON);

    const handleMyStudents = async () => {
      let response = await GetGradesByID(useGrade.uidgrade);
      if (response.status === 200) {
        console.log(response.body);
        setMyStudents(response.body.students);
        // setAllStudents(response.body.students);
        console.log("ver 43", myStudents)
      } else {
        console.log(response);

      }
    };

    handleMyStudents();
  }, []);

  return (
    <>
      <div className="contenedor contenedor-admin mb-[80px]">
        <Retroceder text={seteargrado.grado} />

        <div className="my-2">
          <SearchBar
            onChange={handleSearchAlumno}
            placeholder="Buscar un Alumno"
          />
        </div>
        <div className={hidden}>
          <div className="text-start m-5">
            <label className="font-sans text-[16px]">
              Número de alumnos en{" "}
              <label className="font-semibold text-[16px] text-[#4D3483]">
                {seteargrado.grado}:{" "}
                <label className="font-semibold text-[16px]">
                  {seteargrado.total}
                </label>
              </label>{" "}
            </label>
          </div>

          <div className="my-[30px]">
            {myStudents.map((estudiante) => (
            <Alumno
              nombre={estudiante.name_student}
              uid={estudiante.id}
              key={estudiante.id}
            />
          ))}
          </div>
        </div>
        <div className="">
        {allStudents.map((estudiante) => (
            <Alumno
              nombre={estudiante.name_student}
              uid={estudiante.id}
              key={estudiante.id}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default AllAlumnosGrades;
