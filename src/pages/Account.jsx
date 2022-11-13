import { useState } from "react";
import EditProfile from "../components/EditProfile";
// import EditProfile from "../components/EditProfile";
import Profile from "../components/Profile";
import Retroceder from "../components/Retroceder";

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
          <Retroceder text={"Cuenta"} />
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
