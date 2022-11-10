import { Link } from "react-router-dom";
import ArrowRight from "../assets/images/icon-arrow-right.svg";
import Download from "../assets/images/icon-download.svg";
import Logout from "../assets/images/icon-logout.svg";

export default function Menu({ hidden, keyValue, animation }) {
  return (
    <div
      ref={keyValue}
      id="menu"
      className={`${animation} ${hidden} h-screen w-screen absolute top-0 flex items-end`}
    >
      <div className="w-full flex flex-col items-center rounded-t-[20px] bg-[#FCFBFF] px-5 pt-0 pb-4 gap-4">
        <div className="flex flex-col justify-center py-[13px] items-center">
          <div className="w-20 h-[6px] bg-[#776694] rounded-[10px]"></div>
        </div>
        <div className="flex flex-col items-center p-0 gap-6 self-stretch">
          <Link
            to="/cuenta"
            className="flex flex-row justify-between items-center py-3 px-4 bg-white rounded-[10px] drop-shadow self-stretch"
          >
            <p className="sml-title">Datos de la cuenta</p>
            <img className="" src={ArrowRight} alt="Arrow Right" />
          </Link>
          <Link
            to="/tutoriales"
            className="flex flex-row justify-between items-center py-3 px-4 bg-white rounded-[10px] drop-shadow self-stretch"
          >
            <p className="sml-title">Videotutoriales</p>
            <img className="" src={ArrowRight} alt="Arrow Right" />
          </Link>
          <Link
            to="/home/docente"
            className="flex flex-row justify-between items-center py-3 px-4 bg-white rounded-[10px] drop-shadow self-stretch"
          >
            <p className="sml-title">Descargar manual</p>
            <img className="" src={Download} alt="Arrow Right" />
          </Link>
          <Link
            to="/"
            className="flex flex-row justify-between items-center py-3 px-4 bg-white rounded-[10px] drop-shadow self-stretch"
          >
            <p className="sml-title">Cerrar sesión</p>
            <img className="" src={Logout} alt="Arrow Right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
