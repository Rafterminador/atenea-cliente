import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../utils/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// assets imports
import ImageLoginDefault from "../assets/images/img-login-default.svg";
import ImageLoginError from "../assets/images/img-login-error.svg";
import IconWarning from "../assets/images/icon-warning.svg";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";

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
      <div className="bg-[#FCFBFF] bordeblur">
        <img className="mx-auto" src={imageLogin} alt="ImgLogin" />
      </div>

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
              <input
                id="email"
                type="email"
                value={email}
                name="email"
                onChange={handleChangeUsername}
                className={`nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF] ${invalid}`}
                placeholder="Ingresar correo"
                required
              />
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
                <input
                  id="password"
                  type={passwordVisibility ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={handleChangePassword}
                  className={`nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF] w-full ${invalid}`}
                  placeholder="Ingresar contraseña"
                  required
                />
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
        <button
          type="submit"
          form="login-form"
          className="bg-[#7064FF] text-white nrm-button"
        >
          Ingresar
        </button>
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
