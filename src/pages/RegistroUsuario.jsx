import React, { useState } from "react";
import ImageRegistro from "../assets/images/img-register-register.svg";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";
import { AlertButton } from "../utils/AlertButton";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

//backend 
import { registrarUsuario } from "../services/controllerUser"

const RegistroUsuario = () => {
  const [displayName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [iconPassword, setIconPassword] = useState(IconShowPassword);
  const navigate = useNavigate();
  const Swal = require('sweetalert2')

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await registrarUsuario(email, password, displayName)
    console.log(response)
    if (response.status === 200) {
      console.log(response.body)
      Swal.fire(
        AlertButton.dataAlertSuccess('Usuario guardado correctamente')
      ).then(() => {
        navigate("/login");
      })
    } else {
      console.log(response.body)
      alert(response.body)
    }
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

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
    if (iconPassword === IconShowPassword) {
      setIconPassword(IconHidePassword);
    } else {
      setIconPassword(IconShowPassword);
    }
  };

  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between gap-10 md:hidden">
      {/* div de la imagen */}
      <div>
        <Image
          image={ImageRegistro}
          alt="Registros"
          className="mx-auto"
          type={1}
        />
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
            <Input
              id="username"
              type="text"
              name="username"
              onChange={handleChangeUsername}
              placeholder="Ingresar nombre completo"
              required={1}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="useremail">
              Correo
            </label>
            <Input
              id="useremail"
              type="text"
              name="useremail"
              onChange={handleChangeEmail}
              placeholder="Ingresar correo"
              required={1}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4D3483] sml-title" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="password"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                onChange={handleChangePassword}
                placeholder="Ingresar contraseña"
                className="w-full"
                required={1}
              />
              <img
                className="shw-pass bg-white"
                src={iconPassword}
                onClick={togglePassword}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </form>

      {/* div de los botones */}
      <div className="flex flex-col gap-4 mb-5">
        <Button
          text="Registrarse"
          typeButton={"button-type-2"}
          className=""
          type="submit"
          form="register-form"
        />
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
