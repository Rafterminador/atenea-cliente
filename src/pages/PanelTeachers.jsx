import React from "react";
import { Link } from "react-router-dom";
import NewTeachers from "../components/NuevoTeachers";
import ActiveTeachers from "../components/ActiveTeachers";
import InactiveTeachers from "../components/InactiveTeachers";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { searchByTeacherName } from "../utils/FunctionUtils";
const Teachers = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [enableTeacher, setenableTeacher] = useState([]);
  const [disabledTeacher, setdisabledTeacher] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [ocultar, setOcultar] = useState("");
  const [mostrar, setMostrar] = useState("hidden");

  const [cargando, setCargando] = useState(true);

  const handleSearchTeacher = (e) => {
    // const gradeJSON = localStorage.getItem('grades')
    // const grade = JSON.parse(gradeJSON)
    console.log(e.target.value);
    console.log(e.target.value);
    const array = newUsers.concat(enableTeacher).concat(disabledTeacher);
    console.log(array);
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
    // const handlegetAllTeacher = async () => {
    //   try {
    //     let response = await getAllTeachers();
    //     console.log(response);
    //     setNewUsers(response.body.newUsers.data);
    //     setenableTeacher(response.body.activeUsers.data);
    //     setdisabledTeacher(response.body.inactiveUsers.data);
    //     setCargando(false);
    //   } catch (error) { }
    // };

    //handlegetAllTeacher();
    const teacherJSON = localStorage.getItem('docentes');
    const docente = JSON.parse(teacherJSON);
    console.log(docente);
    setNewUsers(docente.newUsers.data);
    setenableTeacher(docente.activeUsers.data);
    setdisabledTeacher(docente.inactiveUsers.data);
    setCargando(false);
  }, []);

  console.log(enableTeacher);

  return (
    <>
      <div className="contenedor contenedor-admin mb-[50px]">
        <SearchBar
          onChange={handleSearchTeacher}
          placeholder="Buscar a un docente"
        />

        <section className={`${mostrar} my-[10px] mb-[80px]`}>
          <div className="flex space-x-5 text-center font-bold ">
            <p className="text-xl text-[#A954FF]">Búsqueda</p>
            <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
              {filtrado.length}
            </p>
          </div>
          {filtrado.map((docente) => (
            <NewTeachers
              id={docente.uid}
              key={docente.uid}
              name={docente.displayName}
              date={docente.date}
            />
          ))}
        </section>

        <section className={`${ocultar}`}>
          {/* NUEVOS DOCENTES */}
          <section className="my-[10px]">
            <div className="flex justify-between">
              <div className="flex space-x-5 text-center font-bold ">
                <p className="text-xl text-[#A954FF]">Nuevos docentes</p>
                <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
                  {newUsers.length}
                </p>
              </div>

              <div>
                <Link to="/nuevos-docentes">
                  <p className="text-[#776694] text-xs font-bold cursor-pointer">
                    Ver mas
                  </p>
                </Link>
              </div>
            </div>
            {!cargando ? (
              newUsers
                .slice(0, 4)
                .map((user) => (
                  <NewTeachers
                    id={user.uid}
                    key={user.uid}
                    name={user.displayName}
                    date={user.date}
                  />
                ))
            ) : (
              <Spinner />
            )}
          </section>

          {/* DOCENTES ACTIVOS */}
          <section className="my-[10px]">
            <div className="flex justify-between">
              <div className="flex space-x-5 text-center font-bold ">
                <p className="text-xl text-[#4D3483]">Docentes activos</p>
                <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
                  {enableTeacher.length}
                </p>
              </div>
              <div>
                <Link to="/docentes-activos">
                  <p className="text-[#776694] text-xs font-bold cursor-pointer">
                    Ver mas
                  </p>
                </Link>
              </div>
            </div>
            {!cargando ? (
              enableTeacher
                .slice(0, 4)
                .map((docente) => (
                  <ActiveTeachers
                    key={docente.uid}
                    name={docente.displayName}
                    uid={docente.uid}
                    grado={docente?.grade.grade_name}
                  />
                ))
            ) : (
              <Spinner />
            )}
          </section>

          {/* DOCENTES INACTIVOS */}
          <section className="my-[10px]">
            <div className="flex justify-between">
              <div className="flex space-x-5 text-center font-bold ">
                <p className="text-xl text-[#4D3483]">Docentes Inactivos</p>
                <p className="bg-[#DBD8FF] rounded-xl px-3 py-1 text-sm">
                  {disabledTeacher.length}
                </p>
              </div>
              <div>
                <Link to="/docentes-inactivos">
                  <p className="text-[#776694] text-xs font-bold cursor-pointer">
                    Ver mas
                  </p>
                </Link>
              </div>
            </div>

            {!cargando ? (
              disabledTeacher
                .slice(0, 4)
                .map((docente) => (
                  <InactiveTeachers
                    key={docente.uid}
                    uid={docente.uid}
                    name={docente.displayName}
                    grado={docente?.grade.grade_name}
                  />
                ))
            ) : (
              <Spinner />
            )}
          </section>
        </section>
      </div>

    </>
  );
};

export default Teachers;
