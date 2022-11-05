import React, { useState } from "react";
import { useEffect } from "react";
import NewTeachers from "../components/NuevoTeachers";
import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { getAllTeachers } from "../services/controllerDirector";
import { searchByTeacherName } from '../utils/FunctionUtils';
const NuevosDocentes = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtrado, setFiltrado] = useState([]);
  const [ocultar, setOcultar] = useState("");
  const [mostrar, setMostrar] = useState("hidden");

  const handleSearchTeacher = (e) => {

    const array = newUsers
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
    const getAllUser = async () => {
      try {
        let response = await getAllTeachers();
        setNewUsers(response.body.newUsers.data);
        setCargando(false)

      } catch (error) {
        console.log(error)
      }
    };

    getAllUser();
  }, []);
  return (
    <>
      <Retroceder text={"Nuevos docentes"} />

      <div className="contenedor-admin">
        <SearchBar onChange={handleSearchTeacher} placeholder="Buscar a un docente" />

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
          {
            !cargando ? (
              <>
                <div className="flex space-x-2 mt-4 mb-4">
                  <p>Número de docentes</p>

                  <p className="text-[#A954FF] font-bold">nuevos:</p>

                  <p className="font-extrabold">{newUsers.length}</p>
                </div>

                {newUsers.map((docente) => (
                  <NewTeachers
                    id={docente.uid}
                    key={docente.uid}
                    name={docente.displayName}
                    date={docente.date}
                  />
                ))}
              </>
            ) : <Spinner />}

        </section>

      </div>
    </>
  );
};

export default NuevosDocentes;
