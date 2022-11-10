import { useRef, useState } from "react";
import { ReactComponent as Grade } from "../assets/images/grade.svg";
import { ReactComponent as Grades } from "../assets/images/grades.svg";
import { ReactComponent as Attendance } from "../assets/images/students.svg";
import { ReactComponent as MenuImage } from "../assets/images/menu.svg";
import Menu from "../components/Menu";
import { useEffect } from "react";
import GradeAssigned from "../components/GradeAssigned";

export default function GradesAssigned() {
  const [hidden, setHidden] = useState("hidden");
  const [animation, setAnimation] = useState("");
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

  return (
    <div className="relative">
      <div className="contenedor contenedor-admin">
        <h1 className="h1-administracion">Mis Grados</h1>
        <GradeAssigned
          grade="Primero Primaria"
          alumnos={2}
          id={1}
          url="courses"
        />
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
