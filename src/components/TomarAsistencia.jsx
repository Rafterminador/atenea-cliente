import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import Button from "./Button";
import Retroceder from "./Retroceder";
import { AlertButton } from "../utils/AlertButton";
import DeleteConfirmation from "../assets/images/confirmarAlumno.svg";
import { newAttendence } from "../services/controllerDocentes";
// import { Pagination, Scrollbar, A11y } from "swiper";
import ComboBox from "./ComboBox";

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
  const [levelGrade, setLevelGrade] = useState(0);
  const [levelUnit] = useState(() => {
    let levelNamesAux = [
      "Primera unidad",
      "Segunda unidad",
      "Tercera unidad",
      "Cuarta unidad",
    ];

    return levelNamesAux;
  });

  const handleGetLevelName = (e) => {
    if (e === "Primera unidad") {
      setLevelGrade(1);
    } else if (e === "Segunda unidad") {
      setLevelGrade(2);
    } else if (e === "Tercera unidad") {
      setLevelGrade(3);
    } else if (e === "Cuarta unidad") {
      setLevelGrade(4);
    }
  };

  const [day, setDay] = useState("");
  const [month, Setmonth] = useState("");
  const Swal = require("sweetalert2");
  const handleConfirmarAllPresente = (e) => {
    e.preventDefault();

    if (levelGrade === 0) {
      Swal.fire(
        AlertButton.dataAlertWarning("debe seleccionar una unidad", "ok")
      );
      return;
    }

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
      unit: levelGrade,
      students: asistencia,
    };
    await newAttendence(newAttendences);
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

    if (levelGrade === 0) {
      Swal.fire(
        AlertButton.dataAlertWarning("debe seleccionar una unidad", "ok")
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
      unit: levelGrade,
      students: asistencia,
    };

    console.log(newAttendences)
    await newAttendence(newAttendences);
  };

  useEffect(() => {
    let studentsJSON = localStorage.getItem("students");
    let setstudents = JSON.parse(studentsJSON);
    setStudents(setstudents);
    setEstudiantes(setstudents.students);
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

        <div className="">
          <div className="contenedor-admin">
            <p className="mb-2 font-bold text-[#4D3483]">Unidad</p>
            <ComboBox
              teachers={levelUnit}
              placeholder="Seleccionar unidad "
              function={handleGetLevelName}
            />
          </div>

          {/* <ComboBox teachers={levelNames} placeholder='Seleccionar docente' function={handleGetLevelName} /> */}
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center">
            <p className="mr-2 font-bold">1</p>
            <p className="">{`de ${students.lengtAlumnos}`}</p>
          </div>
        </div>
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
