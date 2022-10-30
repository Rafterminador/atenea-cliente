import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Grade from '../components/Grade'
import AddButton from '../components/AddButton'
import { useNavigate } from 'react-router-dom'
import BottomNavbar from "../components/BottomNavbar";
const Grades = () => {
  localStorage.removeItem("grade")
  const navigate = useNavigate()
  const [grades, setGrades] = useState([]);
  const handleClick = () => {
    navigate('/grades/create')
  }
  useEffect(() => {
    const gradeJSON = localStorage.getItem('grades')
    const grade = JSON.parse(gradeJSON)
    setGrades(grade)
  }, []);
  const getGrades = grades.map((levelGrade) =>
    levelGrade.grades.map((grade) =>
      <>
        {grade.position === 0 ? <h1 className='h1-administracion' key={levelGrade.id}>{levelGrade.level_name}</h1> : ""}
        <Grade key={grade.id} curso={grade.grade_name} encargado={grade.teacherRef.displayName} id={grade.id} alumnos={grade.totalStudents} />
      </>
    )
  )
  return (
    <>
      <div className='contenedor contenedor-admin mb-[80px]'>
        <SearchBar />
        {getGrades}
        <AddButton function={handleClick} />
      </div>
      <BottomNavbar />
    </>
  )
}

export default Grades