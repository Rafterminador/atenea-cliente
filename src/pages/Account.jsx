import { useState } from "react";
import EditProfile from "../components/EditProfile";
// import EditProfile from "../components/EditProfile";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";

export default function Account() {
  const [change, setChange] = useState(true);
  function handleChange(e) {
    setChange(!change);
  }
  return (
    <div className="h-screen">
      {change ? (
        <TopBar variant="primary" text={"Cuenta"} />
      ) : (
        <>
          <div className="flex ml-5 mt-[21px] mb-[13px] items-center">
            <h1 className="font-semibold text-2xl">Cuenta</h1>
          </div>
          <hr className="administracion" />
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
