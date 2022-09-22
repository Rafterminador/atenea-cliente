import React, { useState } from "react";
import ImageRegistro from "../assets/images/img-register-register.svg";
import { Link } from "react-router-dom";
import Endpoint from "../services/api/index";
import axios from "axios";

const RegistroUsuario = () => {
  const [displayName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("+502 55899630");
  const [disable, setdisable] = useState(false);
  const [emailVerified, setemailVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const { data } = await axios.post(Endpoint.endpoint.auth.register.postRegister, {
    //     email,
    //     emailVerified,
    //     phoneNumber,
    //     password,
    //     displayName,
    //     disable
    //   });
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }

    let headersList = {
      "Accept": "/",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
         "email": email,
         "emailVerified": false,
         "password": password,
         "displayName": displayName,
         "disable": false
     });
     
     let response = await fetch("https://atenea-servicio.onrender.com/api/v1/user/create-user/", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
    
    alert(displayName + " " + password);
  };

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
    <div className="mx-5 min-h-screen flex flex-col justify-between gap-10 md:hidden">
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
      <form onSubmit={handleSubmit} id="register-form">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="username">
              Nombre
            </label>
            <input
              id="username"
              type="text"
              value={displayName}
              name="username"
              onChange={handleChangeUsername}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar nombre completo"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="useremail">
              Correo
            </label>
            <input
              id="useremail"
              type="text"
              value={email}
              name="useremail"
              onChange={handleChangeEmail}
              className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
              placeholder="Ingresar correo"
              required
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
              required
            />
          </div>
        </div>
      </form>

      {/* div de los botones */}
      <div className="flex flex-col gap-4 mb-5">
        <button
          type="submit"
          form="register-form"
          className="bg-[#7064FF] text-white nrm-button"
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
