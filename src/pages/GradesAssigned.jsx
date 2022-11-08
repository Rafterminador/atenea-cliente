import { useRef, useState } from "react";
import GradeAssigned from "../components/GradeAssigned";
import { ReactComponent as Grade } from "../assets/images/grade.svg";
import { ReactComponent as Grades } from "../assets/images/grades.svg";
import { ReactComponent as Attendance } from "../assets/images/students.svg";
import { ReactComponent as MenuImage } from "../assets/images/menu.svg";
import Menu from "../components/Menu";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { getAreas, getGrades } from "../services/controllerDocentes";

export default function GradesAssigned() {
  const [hidden, setHidden] = useState("hidden");
  const [animation, setAnimation] = useState("");
  const [info, setInfo] = useState({ grados: "", estudiantes: "" });
  const ref = useRef(null);

  function handleClick(e) {
    setHidden("");
    setAnimation("animation1");
  }

  function handleBtns(e) {
    ["#grade", "#students", "#teachers"].forEach((item) => {
      document.querySelector(item).children[0].classList.remove("bg-[#A954FF]");
      document
        .querySelector(item)
        .children[0].children[0].classList.remove("fill-white");
    });
    e.currentTarget.children[0].classList.toggle("bg-[#A954FF]");
    e.currentTarget.children[0].children[0].classList.toggle("fill-white");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id === "menu") {
        setHidden("hidden");
        setAnimation("animation2");
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    grades();
  }, []);

  const grades = async () => {
    const getLocalInfo = localStorage.getItem("grados");
    if (!getLocalInfo) {
      const getItem = localStorage.getItem("usuario");
      const { uid } = JSON.parse(getItem);
      const response = await getGrades(uid);
      if (response.status === 201) {
        const infoGrados = response.body.map(({ grade_name, id }) => [
          grade_name,
          id,
        ]);
        const response2 = await Promise.all(
          infoGrados.map(async (item) => await getAreas(item[1]))
        );
        const areas = response2.map((item) => item.body.areas[0]?.area_name);
        localStorage.setItem("areas", JSON.stringify(areas));
        const actividades = response2.map(
          (item) => item.body.areas[0]?.activities
        );
        localStorage.setItem("actividades", JSON.stringify(actividades));
        const estudiantes = response.body.map(({ students }) => students);
        localStorage.setItem("grados", JSON.stringify(infoGrados));
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        setInfo({ ...info, grados: infoGrados, estudiantes: estudiantes });
      } else {
        console.log("error", response.body);
      }
    } else {
      const getGrados = localStorage.getItem("grados");
      const getEstudiantes = localStorage.getItem("estudiantes");
      const grados = JSON.parse(getGrados);
      const estudiantes = JSON.parse(getEstudiantes);
      setInfo({ ...info, grados: grados, estudiantes: estudiantes });
    }
  };

  return (
    <div className="relative">
      {/* <div className="contenedor contenedor-admin">
        <h1 className="h1-administracion">Mis Grados</h1>
        <GradeAssigned grade="Primero Primaria" alumnos={2} id={1} url=''courses'/>
      </div> */}
      <div className="contenedor contenedor-admin">
        <h1 className="h1-administracion">Calificar a</h1>
        {!!info.grados ? (
          info.grados.map((item, index) => {
            return (
              <GradeAssigned
                grade={item[0]}
                alumnos={info.estudiantes[index].length}
                id={item[1]}
                url={`qualify/${index}`}
                key={item[1]}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <div className="fixed z-0 bottom-0 h-[70px] w-full flex justify-around items-center text-centers shadow">
        <div className="w-[90px] h-full">
          <button
            id="grade"
            onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <Grade />
            </div>
            <p className="text-[12.8px] font-semibold">Mis Grados</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            id="students"
            onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <Grades />
            </div>
            <p className="text-[12.8px] font-semibold">Calificar</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            id="teachers"
            onClick={handleBtns}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
              <Attendance />
            </div>
            <p className="text-[12.8px] font-semibold">Asistencia</p>
          </button>
        </div>
        <div className="w-[90px] h-full">
          <button
            onClick={handleClick}
            className="h-full rounded-none flex flex-col justify-center items-center gap-1"
          >
            <div className="w-6 h-6 flex justify-center items-center">
              <MenuImage className="" />
            </div>
            <p className="text-[12.8px] font-semibold">Más</p>
          </button>
        </div>
      </div>
      <div
        className={`${hidden} animation3 absolute h-screen w-full bg-black opacity-30 top-0 flex items-end`}
      ></div>
      <Menu hidden={hidden} keyValue={ref} animation={animation} />
    </div>
  );
}
