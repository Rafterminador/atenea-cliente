import { Link } from "react-router-dom";
import ArrowRight from "../assets/images/arrow_right.svg";
import Download from "../assets/images/download.svg";
import Logout from "../assets/images/logout.svg";
import { useNavigate } from "react-router-dom";

export default function Menu({ hidden, keyValue, animation }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/")
  }
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
                className="col-start-11"
                src={ArrowRight}
                alt="Arrow Right"
              />
            </div>
          </Link>
          <Link to="/tutoriales">
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-4">
                Videotutoriales
              </p>
              <img
                className="col-start-11"
                src={ArrowRight}
                alt="Arrow Right"
              />
            </div>
          </Link>
          <button>
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-5">
                Descargar manual
              </p>
              <img className="col-start-11" src={Download} alt="Download" />
            </div>
          </button>
          <button onClick={handleLogOut}>
            <div className="flex justify-between items-center shadow h-12 px-8">
              <p className="text-base font-semibold col-start-2 col-span-4 text-[#FF54B0]">
                Cerrar sesion
              </p>
              <img className="col-start-11" src={Logout} alt="Logout" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
