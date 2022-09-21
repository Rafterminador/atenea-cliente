import React, { useState } from "react";
import ImageRegistro from "../assets/images/img-register-register.svg";
import { Link } from "react-router-dom";

const RegistroUsuario = () => {
  const [username, setUsername] = useState("");
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between gap-8 md:hidden">
      {/* div de la imagen */}
      <div className="bg-[#FCFBFF] bordeblur">
        <img className="mx-auto" src={ImageRegistro} alt="Registros" />
      </div>

      {/* div del copy web */}
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="m-0 big-title">Empezemos</h1>
        <p className="nrm-text">
          Está a unos pasos de descubrir una nueva forma de llevar sus labores
          académicas
        </p>
      </div>

      {/* div del formulario */}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="username">
              Nombre
            </label>
            <input
              id="username"
              type="text"
              value={username}
              name="username"
              onChange={handleChangeUsername}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar nombre completo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="useremail">
              Correo
            </label>
            <input
              id="useremail"
              type="text"
              value={useremail}
              name="useremail"
              onChange={handleChangeEmail}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar correo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              name="password"
              onChange={handleChangePassword}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar contraseña"
            />
          </div>
        </div>
      </form>

      {/* div de los botones */}
      <div className="flex flex-col gap-4 mb-5">
        <button
          type="submit"
          className=" min-w-full bg-[#7064FF] text-white nrm-button "
        >
          Registrarse
        </button>
        <button className="sml-button p-0">
          <span className="sml-text-2">¿Ya tiene una cuenta?</span>{" "}
          <Link to="/login">
            <span className="text-[#7064FF]">Ingresar ahora</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { RegistroUsuario };
