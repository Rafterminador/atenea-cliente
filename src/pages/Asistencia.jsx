import React, { useEffect, useState } from "react";
import ViewGrados from "../components/ViewGrados";
import BottomNavbar from "../components/BottomNavbar";
const Asistencia = () => {

  const [grades, setGrades] = useState([]);
  const [vacio, setVacio] = useState(false);

  useEffect(() => {

    const gradosJSON = localStorage.getItem('grados')
    const grados = JSON.parse(gradosJSON)


    setGrades(grados)
    if (grados === "No hay grados a cargo del docente por el momento") {
      setVacio(false)

    } else {
      setVacio(true)
    }
    
  }, [])



  return (
    <>
      <div className="m-6">
        <p className="text-[21.33px] text-[#4D3483] font-extrabold	 mb-2">
          Tomar asistencia de
        </p>

        {vacio ? (
          grades.map((grade) => (
            <ViewGrados key={grade.id} id={grade.id} name={grade.grade_name} lengtAlumnos={grade.size} students={grade.students} />

          ))
        ) : (<p>{grades}</p>)}


      </div>

      {/* NabBAR initial */}
      <BottomNavbar />
    </>
  );
};

export default Asistencia;
