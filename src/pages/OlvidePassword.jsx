import React from "react";
import { useState } from "react";
import ImageLoginDesktop from "../assets/images/recuperarPassword.svg";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "../components/Image";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleValidarCodigo = (e) => {
    e.preventDefault();
    console.log("el email es ", email)
    navigate("/restore/check/email");
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between md:hidden">
      {/* div de la imagen */}
      <div>
        <Image image={ImageLoginDesktop} alt="Registros" className="mx-auto" type={1} />
      </div>

      {/* div del contenido */}
      <div className="flex flex-col gap-6">
        {/* div del copy web */}
        <div className="text-center flex flex-col items-center gap-10">
          <h1 className="m-0 med-title">¿Olvido su contraseña?</h1>
          <p className="nrm-text">
            No se preocupe, suele pasar. Por favor, ingrese su correo
            electrónico asociado
          </p>
        </div>
        <form onSubmit={handleValidarCodigo} id="resetpassword-form">
          <div className="flex flex-col gap-2 min-w-full">
            {/* <label className="text-[#4D3483] sml-title" htmlFor="email">
              Correo
            </label> */}
            <Input
              id="email"
              type="text"
              name="email"
              onChange={handleChangeEmail}
              placeholder="Ingresar correo"
              className="w-full"
              required={1}
            />
          </div>
        </form>
      </div>

      {/* div de los botones */}
      <div className="flex flex-col mb-5">
        <Button text="Ingresar" typeButton={"button-type-2"} className="" type="submit" form="resetpassword-form" />
      </div>
    </div>
  );
};

export default OlvidePassword;
