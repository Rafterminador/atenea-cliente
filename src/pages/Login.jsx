import React, { useState } from "react";
<<<<<<< HEAD:src/pages/Login.jsx
import ImageLogin from "../assets/images/login-mobile.svg";
import ImageLoginDesktop from "../assets/images/login-desktop.svg";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import { Firebase } from "../utils/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// assets imports
import ImageLoginDefault from "../assets/images/img-login-default.svg";
import ImageLoginError from "../assets/images/img-login-error.svg";
import IconWarning from "../assets/images/icon-warning.svg";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";
import Image from "../components/Image";
import Button from "../components/Button";
import Input from "../components/Input";
>>>>>>> develop:src/pages/login.jsx

const Login = () => {
  const firebase = new Firebase();
  const app = firebase.appInitialize();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState("");
  const [invalidText, setInvalidText] = useState("");
  const [imageLogin, setImageLogin] = useState(ImageLoginDefault);
  const [titleLoginH1, setTitleLoginH1] = useState("");
  const [titleLoginH2, setTitleLoginH2] = useState("hidden");
  const [textBadEmail, setTextBadEmail] = useState("hidden");
  const [textBadPassword, setTextBadPassword] = useState("hidden");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [iconPassword, setIconPassword] = useState(IconShowPassword);
  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
    if (iconPassword === IconShowPassword) {
      setIconPassword(IconHidePassword);
    } else {
      setIconPassword(IconShowPassword);
    }
  };
  function handleSubmit(e) {
    setTextBadEmail("hidden");
    setTextBadPassword("hidden");
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("login success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setInvalid("invalid");
        setInvalidText("invalid-text");
        setImageLogin(ImageLoginError);
        setTitleLoginH1("hidden");
        setTitleLoginH2("");
        if (errorCode !== null && errorCode === "auth/user-not-found") {
          setTextBadEmail("");
        } else if (errorCode !== null && errorCode === "auth/wrong-password") {
          setTextBadPassword("");
        }
      });
    // alert(email + " " + password);
  }
  function handleChangeUsername(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between gap-10 md:hidden">
      {/* div de la imagen */}
      <div>
        <Image image={imageLogin} alt="ImgLogin" className="mx-auto" type={1} />
      </div>
<<<<<<< HEAD:src/pages/Login.jsx
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="bg-[#FCFBFF] bordeblur w-full flex justify-center md:col-span-6 md:rounded-[20px]">
          <img src={ImageLogin} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-10">¡Hola de nuevo!</h1>
            <p className="text-center mt-4">
              ¿Como ha estado?, es un gusto volver a tenerlo por aca en Atenea
            </p>
          </div>
          <div className="w-full mt-10 px-1 ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
                <label htmlFor="username">Correo</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  name="username"
                  onChange={handleChangeUsername}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar correo"
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChangePassword}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar contraseña"
                />
                <Link
                  to="/olvide-password"
                  className="self-end text-xs text-[#776694]"
                >
                  Recuperar contraseña
                </Link>
                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
=======
>>>>>>> develop:src/pages/login.jsx

      {/* div del copy web */}
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className={`m-0 big-title ${titleLoginH1}`}>¡Hola de nuevo!</h1>
        <h2 className={`m-0 med-title ${titleLoginH2}`}>
          Parece que algo salio mal
        </h2>
        <p className={`nrm-text ${titleLoginH1}`}>
          ¿Como ha estado?, es un gusto volver a tenerlo por aca en Atenea
        </p>
      </div>

      {/* div del formulario */}
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} id="login-form">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                className={`text-[#4D3483] sml-title ${invalidText}`}
                htmlFor="email"
              >
                Correo
              </label>
              <Input id="email" type="email" name="email" onChange={handleChangeUsername} placeholder="Ingresar correo" className={`${invalid}`} required={1} />
              <div className={`flex flex-row ${textBadEmail}`}>
                <img src={IconWarning} alt="warning information" />
                <p className="invalid-text-small">
                  Cuenta no encontrada, porfavor intentelo de nuevo
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className={`text-[#4D3483] sml-title ${invalidText}`}
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <Input id="password" type={passwordVisibility ? "text" : "password"} name="password" onChange={handleChangePassword} placeholder="Ingresar contraseña" className={`w-full ${invalid}`} required={1} />
                <img
                  className="shw-pass bg-white"
                  src={iconPassword}
                  onClick={togglePassword}
                  alt="icon"
                />
              </div>
              <div className={`flex flex-row ${textBadPassword}`}>
                <img src={IconWarning} alt="warning information" />
                <p className="invalid-text-small">
                  Contraseña incorrecta, por favor intentelo de nuevo o recupere
                  su contraseña
                </p>
              </div>
            </div>
          </div>
        </form>
        <Link
          to="/restore/password"
          className="sml-button self-end text-[#776694]"
        >
          Recuperar contraseña
        </Link>
      </div>

      {/* div de los botones */}
      <div className="flex flex-col gap-4 mb-5">
        <Button text="Ingresar" typeButton={"button-type-2"} className="" type="submit" form="login-form" />
        <button className="sml-button p-0">
          <span className="sml-text-2">¿No tiene una cuenta?</span>{" "}
          <Link to="/register">
            <span className="text-[#7064FF]">Registrarse ahora</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Login };
