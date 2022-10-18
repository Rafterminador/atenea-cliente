import React from "react";
import CardAlumno from "../components/CardAlumno";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Retroceder from '../components/Retroceder';

const AlumnoProfile = () => {

  let alumnJSON = localStorage.getItem('alumno')
  let alumn = (JSON.parse(alumnJSON))

  const navigate = useNavigate();

  function handleEliminar() {
    alert("eliminandoo")
  }

  function handleEdit() {
    navigate("/editar/alumno");
  }

  return (
    <div className="flex flex-col justify-between">
      <Retroceder text={alumn.nombre} />
      <div className="bg-[#DBD8FF] h-[1px] my-0"></div>

      <div className="">
        <CardAlumno
          nombre={alumn.nombre}
          cumpleanios={"08 / 04 / 2008 - 14 años"}
          direccion={"Aldea Buenos Aires, Chiantla"}
          grado={"Sexto primaria"}
          nombre_encargado={"Priscilla Regina Aparicio Rabanales "}
          telefono={"5486 7889"}
        />
      </div>


      <div className="fixed top-[620px] left-5 right-5">
        <Button
          onClick={handleEliminar}
          text="Eliminar alumno"
          typeButton={"button-type-3"}
          className="my-5"
          type="button"
        />
        <Button
          onClick={handleEdit}
          text="Editar datos"
          typeButton={"button-type-2"}
          className="my-5"
          type="click"
          form="register-form"
        />
      </div>
    </div>
  );
};

export default AlumnoProfile;
