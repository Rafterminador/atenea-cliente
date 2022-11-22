import { useState } from "react";
import EditProfile from "../components/EditProfile";
// import EditProfile from "../components/EditProfile";
import Profile from "../components/Profile";
import Retroceder from "../components/Retroceder";
import Regresar from "../assets/images/regresar.svg";

export default function Account() {
  const [change, setChange] = useState(true);
  function handleChange(e) {
    setChange(!change);
  }
  return (
    <div className="h-screen">
      {change ? (
        <Retroceder text={"Cuenta"} />
      ) : (
        <>
          <div className="flex ml-5 mt-[21px] mb-[13px] items-cente" onClick={handleChange}>
            <img src={Regresar} alt="backleft" />
            <p className="text-[13px] ml-[5px] mt-[2px] font-sans text-[#7064FF]"> Atrás</p>
            <p className="ml-[16px] p-bold-administracion ">Cuenta</p>
          </div >
          <hr className='administracion' />
        </>
      )}
      {change ? (
        <Profile handle={handleChange} />
      ) : (
        <EditProfile handle={handleChange} />
      )}
    </div>
  );
}
