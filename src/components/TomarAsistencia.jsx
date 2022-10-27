import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../src/assets/images/arrow_left.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
import Retroceder from "./Retroceder";
import { AlertButton } from "../utils/AlertButton";
import DeleteConfirmation from "../assets/images/confirmarAlumno.svg";
import { motion } from "framer-motion";
import NameAsistencia from "./NameAsistencia";
const TomarAsistencia = () => {
  const [x, setX] = useState(0);
  const Swal = require("sweetalert2");
  const handleConfirmarAllPresente = (e) => {
    e.preventDefault();
    // const navigate = useNavigate()

    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Confirmar todos los alumnos presentes?",
        "Sí hacerlo",
        "No",
        DeleteConfirmation
      )
    ).then((result) => {
      if (result.isConfirmed) {
        // navigate('/grades')
        // Swal.fire('Saved!', '', 'success')
      }
    });
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    Swal.fire(AlertButton.dataAlertSuccess("Asistencia confirmada")).then(
      () => {
        //  navigate('/grades')
      }
    );
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (x > 570.133333) {
        setX(570.133333);
      }
      if (x < -570.133333) {
        setX(-570.133333);
      }
    } else {
      if (x > 1140.26667) {
        setX(1140.26667);
      }
      if (x < -1140.26667) {
        setX(-1140.26667);
      }
    }
  }, [x]);
  return (
    <>
      <section className="h-screen">
        <Retroceder text="Toma de asistencia" />

        <div className=" flex items-center justify-center mt-6">
          <p className="mr-2 text-[16px]">Asistencia de: </p>
          <p className="text-[16px] font-bold">Primero Primaria</p>
        </div>

        <div className=" flex items-center justify-center">
          <p className="mr-2 text-[16px]">Del día:</p>
          <p className="text-[16px] font-bold">24 de Septiembre</p>
        </div>

        <div className="mt-14">
          <p className="text-center ">Esta presente</p>


        
          <NameAsistencia />
          {/* <motion.div
            animate={{ x }}
            drag="x"
            dragConstraints={{ left: -855.2, right: 855.2 }}
          >
            <div className="flex">
            <NameAsistencia />
            <NameAsistencia />
            <NameAsistencia />
            <NameAsistencia />

            </div>
           
          </motion.div> */}

          <div className="flex justify-center mt-4">
            <p className="mr-2 font-bold">1</p>
            <p className="">de 3</p>
          </div>
        </div>

        <div className="absolute w-calc(100% - 40px) top-[650px] left-5 right-5">
          <Button
            onClick={handleConfirmarAllPresente}
            text="Todos Presentes"
            typeButton={"button-type-1"}
            className="my-5"
            type="button"
          />

          <Button
            onClick={handleConfirmar}
            text="Confirmar asistencia"
            typeButton={"button-type-2"}
            className="my-5"
            type="button"
          />
        </div>
      </section>
    </>
  );
};

export default TomarAsistencia;
