import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import Button from "./Button";
import Retroceder from "./Retroceder";
import { AlertButton } from "../utils/AlertButton";
import DeleteConfirmation from "../assets/images/confirmarAlumno.svg";
import { newAttendence } from "../services/controllerDocentes";
// import { Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import NameAsistencia from "./NameAsistencia";

const TomarAsistencia = () => {
  const [students, setStudents] = useState({});
  const [estudiantes, setEstudiantes] = useState([]);
  const [Datee, setDatee] = useState("");

  const navigate = useNavigate();

  const [day, setDay] = useState("");
  const [month, Setmonth] = useState("");
  const Swal = require("sweetalert2");
  const handleConfirmarAllPresente = (e) => {
    e.preventDefault();

    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Confirmar todos los alumnos presentes?",
        "Sí hacerlo",
        "No",
        DeleteConfirmation
      )
    ).then((result) => {
      if (result.isConfirmed) {
        confirmarTodoAsistencia();
        Swal.fire(AlertButton.dataAlertSuccess("Asistencia confirmada"));
        setTimeout(() => {
          navigate("/asistencia");
        }, 2000);
      }
    });
  };

  const confirmarTodoAsistencia = async () => {
    let asistencia = [];

    estudiantes.map((estudiante) =>
      asistencia.push({ student: estudiante.id, attendence: true })
    );

    const newAttendences = {
      date: Datee,
      gradeRef: students.id,
      unit: 1,
      students: asistencia,
    };

    const response = await newAttendence(newAttendences);
    console.log("sdsdsd", response.body);
  };

  const handleConfirmar = (e) => {
    e.preventDefault();
    let asistenciaJSON = localStorage.getItem("asistencia");
    let asistencia = JSON.parse(asistenciaJSON);

    if (asistencia.length !== estudiantes.length) {
      Swal.fire(
        AlertButton.dataAlertWarning("Aun quedan alumnos por chequear", "ok")
      );

      return;
    }

    confirmarAsistencia();
    Swal.fire(AlertButton.dataAlertSuccess("Asistencia confirmada"));
    setTimeout(() => {
      navigate("/asistencia");
    }, 2000);
  };

  const confirmarAsistencia = async () => {
    let asistenciaJSON = localStorage.getItem("asistencia");
    let asistencia = JSON.parse(asistenciaJSON);

    const newAttendences = {
      date: Datee,
      gradeRef: students.id,
      unit: 1,
      students: asistencia,
    };

    const response = await newAttendence(newAttendences);
    console.log("sdsdsd", response.body);
  };

  useEffect(() => {
    let studentsJSON = localStorage.getItem("students");
    let setstudents = JSON.parse(studentsJSON);
    console.log(setstudents.students);

    setStudents(setstudents);

    setEstudiantes(setstudents.students);

    // const fecha = new Date("YYYY-MM-DD");
    // setDate(fecha)

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      setDatee(`${day}/0${month}/${year}`);
    } else {
      setDatee(`${day}/${month}/${year}`);
    }

    let mesActual = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
      new Date()
    );
    console.log(mesActual);

    setDay(day);
    Setmonth(mesActual);

    let asistencia = [];
    const asistenciaJSON = JSON.stringify(asistencia);
    localStorage.setItem("asistencia", asistenciaJSON);
  }, [students.id]);

  return (
    <>
      <section className="h-screen">
        <Retroceder text="Toma de asistencia" />

        <div className=" flex items-center justify-center mt-6">
          <p className="mr-2 text-[16px]">Asistencia de: </p>
          <p className="text-[16px] font-bold">{students.name}</p>
        </div>

        <div className=" flex items-center justify-center">
          <p className="mr-2 text-[16px]">Del día:</p>
          <p className="text-[16px] font-bold">{`${day} de ${month}`}</p>
        </div>

        <div className="mt-14">
          <p className="text-center ">Esta presente</p>

          <Swiper
            // install Swiper modules
            // modules={[Pagination, Scrollbar, A11y]}
            // pagination
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {estudiantes.map((estudiante) => (
              <SwiperSlide key={estudiante.id}>
                <NameAsistencia
                  key={estudiante.id}
                  id={estudiante.id}
                  name_student={estudiante.name_student}
                />

                {/* <div className="contenedor-admin ">
                  <div className="container-asistencia">
                    <div className="grid grid-cols-3">
                      <p className="text-[28px] font-[1100]">¿</p>
                      <p className="text-center ">{estudiante.name_student}</p>
                      <p className="text-[28px] text-end  font-[1100]">?</p>
                    </div>

                    <div className={`flex justify-between mt-10 ${presente}`}>
                      <div>
                        <Button
                          onClick={hladleHidden}
                          text="Presente"
                          typeButton={"button-type-2"}
                          className="my-5"
                          type="button"
                        />
                      </div>

                      <div>
                        <Button
                          // onClick={handleEliminar}
                          text="No"
                          typeButton={"button-type-1"}
                          className="my-5"
                          type="button"
                        />
                      </div>
                    </div>

                    <div className={`${hidden}`}>
                      <Button
                        // onClick={handleEliminar}
                        text="Presente"
                        typeButton={"button-type-4"}
                        className="my-5"
                        type="button"
                      />
                    </div>
                  </div>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center">
            <p className="mr-2 font-bold">1</p>
            <p className="">{`de ${students.lengtAlumnos}`}</p>
          </div>
        </div>

        {/* <div className="absolute w-calc(100% - 40px) top-[650px] left-5 right-5">
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
        </div> */}

        <div>
          <button
            className="confirmar-button"
            style={{
              position: "absolute",
              left: "0px",
              marginLeft: "20px",
              width: "calc(100% - 40px)",
              bottom: "90px",
            }}
            onClick={handleConfirmarAllPresente}
          >
            Todos presentes
          </button>
          <button
            className="button-purple"
            style={{
              position: "absolute",
              left: "0px",
              marginLeft: "20px",
              width: "calc(100% - 40px)",
              bottom: "20px",
            }}
            onClick={handleConfirmar}
          >
            confirmar asistencia
          </button>
        </div>
      </section>
    </>
  );
};

export default TomarAsistencia;
