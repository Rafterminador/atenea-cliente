import { useState } from "react";
import ArrowLeft from "../assets/images/arrow_left.svg";
import EditProfile from "../components/EditProfile";
// import EditProfile from "../components/EditProfile";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

export default function Account() {
  const [change, setChange] = useState(true);
  function handleChange(e) {
    setChange(!change);
  }
  return (
    <div className="h-screen">
      <div className="w-full h-16 grid grid-cols-3 place-items-center border-b-2">
        <div
          className={`${
            change ? "block" : "hidden"
          } col-start-1 justify-self-start text-[#7064FF]`}
        >
          <Link to="/home">
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center">
                <img src={ArrowLeft} alt="Arrow Left" />
              </div>
              Atras
            </div>
          </Link>
        </div>
        <div className="col-start-2 justify-self-center">
          <h1 className="font-semibold text-2xl">Cuenta</h1>
        </div>
      </div>
      {change ? (
        <Profile handle={handleChange} />
      ) : (
        <EditProfile handle={handleChange} />
      )}
    </div>
  );
}
