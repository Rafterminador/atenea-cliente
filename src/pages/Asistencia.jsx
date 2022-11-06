import React, { useEffect, useState } from "react";
import ViewGrados from "../components/ViewGrados";
import BottomNavbar from "../components/BottomNavbar";
import { GetMyStudents } from "../services/controllerDocentes";
const Asistencia = () => {
  const [idDocente, setIdDocente] = useState({});

  const [grades, setGrades] = useState([]);

  useEffect(() => {

    const usuarioJSON = localStorage.getItem('usuario')
    const usuario = JSON.parse(usuarioJSON)

    setIdDocente(usuario.uid)

    console.log("xdxd")

    const getOneTeacherByID = async () => {
      try {
        let response = await GetMyStudents(usuario.uid);
        console.log(response)
        setGrades(response.body);
      } catch (error) {
        console.log(error);
      }
    };

    getOneTeacherByID();
  }, [idDocente])

 

  return (
    <>
      <div className="m-6">
        <p className="text-[21.33px] text-[#4D3483] font-extrabold	 mb-2">
          Tomar asistencia de
        </p>


        {grades.map((grade) => (
          <ViewGrados key={grade.id} name={grade.grade_name} lengtAlumnos={grade.size} />

        ))} 
      </div>

      {/* NabBAR initial */}
      <BottomNavbar />
    </>
  );
};

export default Asistencia;
