import React from "react";
import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import ImageLoginDesktop from "../assets/images/check.svg";
const Check = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="contenedor md:px-16">
      <div className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="bg-[#FCFBFF]  w-full flex justify-center md:col-span-6 ">
          <img src={ImageLoginDesktop} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-10">Verificación</h1>
            <p className="text-center mt-4">
              Hemos enviado un código de verificación a su correo, por favor
              revíselo e ingréselo
            </p>
          </div>
          <div className="w-full mt-10 px-1 ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
                <div className="flex justify-center md:justify-center sm:justify-center lg:justify-center">
                <div className="space-x-6  ">
                  <input placeholder="?" className="text-center font-normal border-solid border-[1px] w-[52px] h-[52px] py-2.5 px-2 focus:outline-[#A954FF] focus:outline-2 border-[#DBD8FF] rounded-[10px]" />
                  <input placeholder="?" className="text-center font-normal border-solid border-[1px] w-[52px] h-[52px] py-2.5 px-2 focus:outline-[#A954FF] focus:outline-2 border-[#DBD8FF] rounded-[10px]" />
                  <input placeholder="?" className="text-center font-normal border-solid border-[1px] w-[52px] h-[52px] py-2.5 px-2 focus:outline-[#A954FF] focus:outline-2 border-[#DBD8FF] rounded-[10px]" />
                  <input placeholder="?" className="text-center font-normal border-solid border-[1px] w-[52px] h-[52px] py-2.5 px-2 focus:outline-[#A954FF] focus:outline-2 border-[#DBD8FF] rounded-[10px]" />
                </div>
               
                </div>
               
                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5 mt-14"
                >
                  Verificar Código
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
