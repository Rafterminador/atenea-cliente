import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../utils/Firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

// assets imports
import ImageLoginDefault from "../assets/images/img-login-default.svg";
import ImageLoginError from "../assets/images/img-login-error.svg";
import IconWarning from "../assets/images/icon-warning.svg";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";
import Image from "../components/Image";
import Button from "../components/Button";
import Input from "../components/Input";

//backend 
import { login } from "../services/controllerUser"
import { getAllGrades, getAllTeachers } from "../services/controllerDirector";
import { GetMyStudents } from "../services/controllerDocentes";

const Login = () => {
  const firebase = new Firebase();
  const app = firebase.appInitialize();
  const auth = getAuth(app);
  const navigate = useNavigate();
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
  const [cargando, setCargando] = useState(false);
  const [badEmailMessage, setBadEmailMessage] = useState("Cuenta no encontrada, porfavor intentelo de nuevo");

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
    if (iconPassword === IconShowPassword) {
      setIconPassword(IconHidePassword);
    } else {
      setIconPassword(IconShowPassword);
    }
  };
  async function handleSubmit(e) {
    setTextBadEmail("hidden");
    setTextBadPassword("hidden");
    e.preventDefault();
    setCargando(true);
    let response = {}
    response = await login(auth, email, password)
    if (response?.errorCode != null) {
      setInvalid("invalid");
      setInvalidText("invalid-text");
      setImageLogin(ImageLoginError);
      setTitleLoginH1("hidden");
      setTitleLoginH2("");
      if (response.errorCode !== null && response.errorCode === "auth/user-not-found") {
        setTextBadEmail("");
      } else if (response.errorCode !== null && response.errorCode === "auth/wrong-password") {
        setTextBadPassword("");
      }
      setCargando(false);
    } else {
      const userJSON = JSON.stringify(response)
      localStorage.setItem('usuario', userJSON)
      if (response?.role === "director" || response?.role === "admin") {
        const getAllGradesBackend = async () => {
          let response = await getAllGrades();
          if (response.status === 200) {
            console.log(response.body);
            const userJSON = JSON.stringify(response.body)
            localStorage.setItem('grades', userJSON)
          } else {
            console.log(response.body);
          }
        };
        const handlegetAllTeacher = async () => {
          try {
            let response = await getAllTeachers();

            if (response.status === 200) {
              console.log(response.body);
              const teacherJSON = JSON.stringify(response.body)
              localStorage.setItem('docentes', teacherJSON)
            } else {
              console.log(response.body);
            }

          } catch (error) {
            console.log(error)
          }
        };
        await getAllGradesBackend();
        await handlegetAllTeacher();
        setCargando(false);
        navigate("/home");
      } else if (response?.role === "docente") {

        const usuarioJSON = localStorage.getItem('usuario')
        const usuario = JSON.parse(usuarioJSON)
        const getMystudents = async () => {
          try {
            let response = await GetMyStudents(usuario.uid);
            console.log(response)
            const mystudentsJSON = JSON.stringify(response.body)
            localStorage.setItem('grados', mystudentsJSON)
          } catch (error) {
            console.log(error);
          }
        };

        await getMystudents();



        setCargando(false);
        navigate("/home/docente")
      } else {
        setCargando(false);
        setBadEmailMessage("El docente no a sido confirmado")
        setInvalid("invalid");
        setTextBadEmail("");
        setInvalidText("invalid-text");
        setImageLogin(ImageLoginError);
        setTitleLoginH1("hidden");
        setTitleLoginH2("");
      }
    }
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
      {cargando ? (
        <Spinner />
      ) : (
        <>
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
                      {badEmailMessage}
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
        </>
      )}
    </div>
  );
};

export { Login };
