import React, { useState } from "react";
import Spinner from "../components/Spinner";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getAllTeachers } from "../services/controllerDirector";
import { searchByTeacherName } from "../utils/FunctionUtils";
import RowComponent from "../components/RowComponent";

const DocentesActivos = () => {
  const [enableTeacher, setenableTeacher] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtrado, setFiltrado] = useState([]);
  const [ocultar, setOcultar] = useState("");
  const [mostrar, setMostrar] = useState("hidden");

  const handleSearchTeacher = (e) => {
    const array = enableTeacher;
    console.log(e.target.value);
    // console.log(searchGrades(grades, e.target.value))
    setFiltrado(searchByTeacherName(array, e.target.value));

    console.log("esto es el filtrado", filtrado);

    if (e.target.value === "") {
      setOcultar("");
      setMostrar("hidden");
    } else {
      setOcultar("hidden");
      setMostrar("");
    }
  };

  useEffect(() => {
    const getEnableTeacher = async () => {
      try {
        let response = await getAllTeachers();
        console.log(response);
        setenableTeacher(response.body.activeUsers.data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    getEnableTeacher();
  }, []);

  return (
    <>
      <TopBar text={"Docentes activos"} />
      <div className="contenedor-admin">
        <SearchBar
          onChange={handleSearchTeacher}
          placeholder="Buscar a un docente"
        />
        <section className={`${mostrar} mt-4 mb-[80px]`}>
          <div className="flex space-x-5 text-center font-bold ">
            <p className="text-xl text-[#A954FF]">Búsqueda</p>
            <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
              {filtrado.length}
            </p>
          </div>
          {filtrado.map((docente) => (
            <RowComponent
              key={docente.uid}
              title={docente.displayName}
              subtitle="Docente de"
              content={
                docente?.grade.grade_name
                  ? docente?.grade.grade_name
                  : "Ningún grado"
              }
              id={docente.uid}
              for="Teachers"
            />
          ))}
        </section>

        <section className={`${ocultar}`}>
          {!cargando ? (
            <>
              <div className="flex space-x-2 mt-4 mb-4">
                <p>Número de docentes</p>

                <p className="text-[#A954FF] font-bold">activos:</p>

                <p className="font-extrabold">{enableTeacher.length}</p>
              </div>

              {enableTeacher.map((docente) => (
                <RowComponent
                  key={docente.uid}
                  title={docente.displayName}
                  subtitle="Docente de"
                  content={
                    docente?.grade.grade_name
                      ? docente?.grade.grade_name
                      : "Ningún grado"
                  }
                  id={docente.uid}
                  for="Teachers"
                />
              ))}
            </>
          ) : (
            <Spinner />
          )}
        </section>
      </div>
    </>
  );
};

export default DocentesActivos;
