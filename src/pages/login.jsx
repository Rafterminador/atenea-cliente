import React, { useState } from "react";
import ImageLogin from "../assets/images/login-mobile.svg";
import ImageLoginDesktop from "../assets/images/login-desktop.svg";
import ImageLoginError from "../assets/images/login-error.svg"
import ImageWarning from "../assets/images/warning.svg"
import ImageShowPassword from "../assets/images/icon-showpassword.svg"
import ImageHiddePassword from "../assets/images/icon-hidepassword.svg"
import Logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom'
import { Firebase } from "../utils/Firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState("")
  const [invalidText, setInvalidText] = useState("")
  const [imageLogin, setImageLogin] = useState(ImageLogin)
  const [titleLoginH1, setTitleLoginH1] = useState("")
  const [titleLoginH2, setTitleLoginH2] = useState("hidden")
  const [textBadEmail, setTextBadEmail] = useState("hidden")
  const [textBadPassword, setTextBadPassword] = useState("hidden")
  const [passwordShow, setPasswordShow] = useState(false);
  const [imagePassword, setImagePassword] = useState(ImageShowPassword)
  const firebase = new Firebase()
  const app = firebase.appInitialize()
  const auth = getAuth(app)
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
    if (imagePassword === ImageShowPassword) {
      setImagePassword(ImageHiddePassword)
    } else {
      setImagePassword(ImageShowPassword)
    }
  };
  function handleSubmit(e) {
    setTextBadEmail("hidden")
    setTextBadPassword("hidden")
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      alert("login success")
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        setInvalid("invalid")
        setInvalidText("invalid-text")
        setImageLogin(ImageLoginError)
        setTitleLoginH1("hidden")
        setTitleLoginH2("")
        if (errorCode !== null && errorCode === "auth/user-not-found") {
          setTextBadEmail("")
        } else if (errorCode !== null && errorCode === "auth/wrong-password") {
          setTextBadPassword("")
        }
      });
    // alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="contenedor flex flex-row justify-between md:px-16">
      <div className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="bg-[#FCFBFF] bordeblur w-full flex justify-center md:col-span-6 md:rounded-[20px]">
          <img src={imageLogin} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h1 className={titleLoginH1}>¡Hola de nuevo!</h1>
            <h2 className={`mt-10 ${titleLoginH2}`}>Parece que algo salio mal</h2>
            <p className={`text-center mt-4 ${titleLoginH1}`}>
              ¿Como ha estado?, es un gusto volver a tenerlo por aca en Atenea
            </p>
          </div>
          <div className="w-full mt-10 px-1 ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
                <label htmlFor="username" className={invalidText}>Correo</label>
                <input
                  id="username"
                  type="email"
                  value={username}
                  name="username"
                  onChange={handleChangeUsername}
                  className={`font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] mb-2 ${invalid}`}
                  placeholder="Ingresar correo"
                  required
                />
                <div className={`flex flex-row items-center mb-4 ${textBadEmail}`}>
                  <img src={ImageWarning} alt="warning information" />
                  <p className="invalid-text-small ">Cuenta no encontrada, porfavor intentelo de nuevo</p>
                </div>
                <label htmlFor="password" className={invalidText}>Contraseña</label>
                <div className='w-full login-wrapper'>
                  <input
                    id="password"
                    type={passwordShow ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={handleChangePassword}
                    className={`font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] w-full ${invalid}`}
                    placeholder="Ingresar contraseña"
                    required
                  />
                  <img src={imagePassword} id="togglePassword" onClick={togglePassword} alt="Show password" />
                </div>
                <div className={`flex flex-row items-center mt-2 ${textBadPassword}`}>
                  <img src={ImageWarning} alt="warning information" />
                  <p className="invalid-text-small ">Contraseña incorrecta, por favor intentelo de nuevo o recupere su contraseña</p>
                </div>
                <Link to='/reset-password' className="self-end text-xs text-[#776694]">
                  Recuperar contraseña
                </Link>
                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5 mt-8"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>

          <div className="mt-3">
            <button className="text-[12.8px]">
              ¿No tiene una cuenta?{" "}
              <Link to='/register'>
                <span className="text-[#7064FF]">Registrarse ahora</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };