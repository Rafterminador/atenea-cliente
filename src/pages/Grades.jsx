import React from 'react'
import SearchBar from '../components/SearchBar'
import Grade from '../components/Grade'
import AddGrade from '../components/AddGrade'

const Grades = () => {

  return (
    <div className='contenedor contenedor-admin'>
      <SearchBar />
      <h1 className='h1-administracion'>Nivel Pre-primario</h1>
      <Grade curso={"Pre-kínder"} encargado={"A cargo de: Rubén	Argüero	Sánchez Juanajatoja"} />
      <Grade curso={"Kínder"} encargado={"A cargo de: Anastasia Madeline Orellana Álvarez"} />
      <Grade curso={"Párvulos"} encargado={"A cargo de: Sara Josthyn Gutiérrez Lagos"} />
      <h1 className='h1-administracion'>Nivel Primario</h1>
      <Grade curso={"Primero primaria"} encargado={"A cargo de: Rubén	Argüero	Sánchez Juanajatoja"} />
      <Grade curso={"Segundo primaria"} encargado={"A cargo de: Anastasia Madeline Orellana Álvarez"} />
      <Grade curso={"Tercero primaria"} encargado={"A cargo de: Sara Josthyn Gutiérrez Lagos"} />
      <Grade curso={"Cuarto primaria"} encargado={"A cargo de: Nadie"} />
      <Grade curso={"Quinto primaria"} encargado={"A cargo de: Nadie"} />
      <Grade curso={"Sexto primaria"} encargado={"A cargo de: Cain Nehemias Orellana Valenzuela"} />
      <h1 className='h1-administracion'>Otros</h1>
      <Grade curso={"Educación física"} encargado={"A cargo de: Yonathan Fabio Aguilera Poblete"} />
      <AddGrade />
    </div>
  )
}

export default Grades