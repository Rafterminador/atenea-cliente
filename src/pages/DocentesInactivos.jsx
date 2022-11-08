import React, { useEffect, useState } from "react";

import InactiveTeachers from "../components/InactiveTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { getAllTeachers } from "../services/controllerDirector";
import { searchByTeacherName } from '../utils/FunctionUtils';

const DocentesInactivos = () => {
  const [disabledTeacher, setdisabledTeacher] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtrado, setFiltrado] = useState([]);
  const [ocultar, setOcultar] = useState("");
  const [mostrar, setMostrar] = useState("hidden");

  const handleSearchTeacher = (e) => {

    const array = disabledTeacher
    console.log(e.target.value)
    // console.log(searchGrades(grades, e.target.value))
    setFiltrado(searchByTeacherName(array, e.target.value))

    console.log("esto es el filtrado", filtrado)

    if (e.target.value === '') {
      setOcultar("")
      setMostrar("hidden")
    } else {
      setOcultar("hidden")
      setMostrar("")
    }
  }

  useEffect(() => {
    const getdisabledTeacher = async () => {
      try {
        let response = await getAllTeachers();
        console.log(response);
        setdisabledTeacher(response.body.inactiveUsers.data);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    getdisabledTeacher();
  }, []);
  return (
    <>
      <Retroceder text={"Docentes inactivos"} />

      <div className="contenedor-admin">
        <SearchBar onChange={handleSearchTeacher} placeholder="Buscar a un docente" />


        <section className={`${mostrar} mt-4 mb-[80px]`}>
          <div className="flex space-x-5 text-center font-bold ">
            <p className="text-xl text-[#A954FF]">Búsqueda</p>
            <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
              {filtrado.length}
            </p>
          </div>
          {filtrado.map((docente) => (
            <InactiveTeachers
              key={docente.uid}
              uid={docente.uid}
              name={docente.displayName}
              grado={docente?.grade.grade_name}
            />
          ))}

        </section>


        <section className={`${ocultar}`}>
          {!cargando ? (
            <>
              <div className="flex  space-x-2 mt-4 mb-4">
                <p>Número de docentes</p>

                <p className="text-[#A954FF] font-bold">inactivos:</p>

                <p className="font-extrabold">{disabledTeacher.length}</p>
              </div>

              {disabledTeacher.map((docente) => (
                <InactiveTeachers
                  key={docente.uid}
                  uid={docente.uid}
                  name={docente.displayName}
                  grado={docente?.grade.grade_name}
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

export default DocentesInactivos;
