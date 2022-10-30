import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Grade from '../components/Grade'
import AddButton from '../components/AddButton'
import { useNavigate } from 'react-router-dom'
import BottomNavbar from "../components/BottomNavbar";
import { getAllGrades } from "../services/controllerDirector";
const Grades = () => {
  localStorage.removeItem("grade")
  const navigate = useNavigate()
  const [grades, setGrades] = useState([]);
  const handleClick = () => {
    navigate('/grades/create')
  }
  useEffect(() => {
    const getAllGradesBackend = async () => {
      let response = await getAllGrades();
      if (response.status === 200) {
        console.log(response.body);
        setGrades(response.body)
      } else {
        console.log(response.body);
      }
    };

    getAllGradesBackend();
  }, []);
  const getGrades = grades.map((grade) =>
    <div key={grade.id}><Grade curso={grade.grade_name} encargado={grade.teacherRef.displayName} id={grade.id} alumnos={0} /></div>
  )
  return (
    <>
      <div className='contenedor contenedor-admin mb-[80px]'>
        <SearchBar />
        <h1 className='h1-administracion'>Nivel Pre-primario</h1>
        {getGrades}
        {/* <Grade curso={"Pre-kínder"} encargado={"Rubén	Argüero	Sánchez Juanajatoja"} id={"1"} alumnos={0} />
        <Grade curso={"Kínder"} encargado={"Anastasia Madeline Orellana Álvarez"} id={"2"} alumnos={0} />
        <Grade curso={"Párvulos"} encargado={"Sara Josthyn Gutiérrez Lagos"} id={"3"} alumnos={0} /> */}
        {/* <h1 className='h1-administracion'>Nivel Primario</h1> */}
        {/* <Grade curso={"Primero primaria"} encargado={"Rubén	Argüero	Sánchez Juanajatoja"} id={"4"} alumnos={0} />
        <Grade curso={"Segundo primaria"} encargado={"Anastasia Madeline Orellana Álvarez"} id={"5"} alumnos={0} />
        <Grade curso={"Tercero primaria"} encargado={"Sara Josthyn Gutiérrez Lagos"} id={"6"} alumnos={0} />
        <Grade curso={"Cuarto primaria"} encargado={"Nadie"} id={"7"} alumnos={0} />
        <Grade curso={"Quinto primaria"} encargado={"Nadie"} id={"8"} alumnos={0} />
        <Grade curso={"Sexto primaria"} encargado={"Cain Nehemias Orellana Valenzuela"} id={"9"} alumnos={0} /> */}
        {/* <h1 className='h1-administracion'>Otros</h1> */}
        {/* <Grade curso={"Educación física"} encargado={"Yonathan Fabio Aguilera Poblete"} id={"10"} alumnos={0} /> */}
        <AddButton function={handleClick} />
      </div>
      <BottomNavbar />
    </>
  )
}

export default Grades