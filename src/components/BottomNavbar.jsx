import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Grade } from "../assets/images/grade.svg";
import { ReactComponent as Students } from "../assets/images/students.svg";
import { ReactComponent as Teachers } from "../assets/images/teachers.svg";
import { ReactComponent as MenuImage } from "../assets/images/menu.svg";
import Menu from "../components/Menu";

const BottomNavbar = () => {
    const [hidden, setHidden] = useState("hidden");
    const [animation, setAnimation] = useState("");
    const navigate = useNavigate();
    const ref = useRef(null);

    function handleClick(e) {
        setHidden("");
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setAnimation("animation1");
        document.body.classList.add("stop-scrolling");
    }

    const handleBtnGrade = (e) => {
        StyleItemClicked(e)
        navigate("/grades");
    }

    const handleBtnStudents = (e) => {
        StyleItemClicked(e)
        navigate("/ver/alumno");
    }

    const handleBtnTeachers = (e) => {
        StyleItemClicked(e)
        navigate("/docentes");
    }

    const StyleItemClicked = (e) => {
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
                document.body.classList.remove("stop-scrolling");
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            <div className="fixed z-0 bottom-0 h-[70px] w-full flex justify-around items-center text-centers shadow bg-white">
                <div className="w-[90px] h-full">
                    <button
                        id="grade"
                        onClick={handleBtnGrade}
                        className="h-full rounded-none flex flex-col justify-center items-center gap-1"
                    >
                        <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
                            <Grade />
                        </div>
                        <p className="text-[12.8px] font-semibold">Grados</p>
                    </button>
                </div>
                <div className="w-[90px] h-full">
                    <button
                        id="students"
                        onClick={handleBtnStudents}
                        className="h-full rounded-none flex flex-col justify-center items-center gap-1"
                    >
                        <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
                            <Students />
                        </div>
                        <p className="text-[12.8px] font-semibold">Estudiantes</p>
                    </button>
                </div>
                <div className="w-[90px] h-full">
                    <button
                        id="teachers"
                        onClick={handleBtnTeachers}
                        className="h-full rounded-none flex flex-col justify-center items-center gap-1"
                    >
                        <div className="w-16 h-8 flex justify-center items-center rounded-[20px] py-2">
                            <Teachers />
                        </div>
                        <p className="text-[12.8px] font-semibold">Docentes</p>
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
                        <p className="text-[12.8px] font-semibold">Menu</p>
                    </button>
                </div>
            </div>
            <div
                className={`${hidden} animation3 absolute h-screen w-full bg-black opacity-30 top-0 flex items-end`}
            ></div>
            <Menu hidden={hidden} keyValue={ref} animation={animation} />
        </>
    )
}

export default BottomNavbar