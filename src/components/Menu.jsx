import { Link } from "react-router-dom";
import ArrowRight from "../assets/images/arrow_right.svg";
import Download from "../assets/images/download.svg";
import Logout from "../assets/images/logout.svg";

export default function Menu({ hidden, keyValue, animation }) {
  return (
    <div
      ref={keyValue}
      id="menu"
      className={`${animation} ${hidden} h-screen w-screen absolute top-0 flex items-end`}
    >
      <div className="w-full flex flex-col items-center rounded-t-[20px] bg-white pb-4">
        <div className="border-2 border-[#776694] rounded-[10px] w-24 mt-3"></div>
        <div className="w-full mt-4 flex flex-col gap-3 px-5">
          <Link to="/cuenta">
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold">Datos de la Cuenta</p>
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="col-start-11"
              />
            </div>
          </Link>
          <Link to="/videotutoriales">
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-4">
                Videotutoriales
              </p>
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="col-start-11"
              />
            </div>
          </Link>
          <button>
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-5">
                Descargar manuel
              </p>
              <img src={Download} alt="Download" className="col-start-11" />
            </div>
          </button>
          <button>
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-4 text-[#FF54B0]">
                Cerrar sesion
              </p>
              <img src={Logout} alt="Logout" className="col-start-11" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
