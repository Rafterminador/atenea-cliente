import React, { useState } from "react";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";
import IconWarning from "../assets/images/icon-warning.svg";
import ImageForgotPassword from "../assets/images/img-restore-forgotpassword.svg";
import { Firebase } from "../utils/Firebase";
import Input from "../components/Input";
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AlertButton } from "../utils/AlertButton";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [invalid, setInvalid] = useState("");
  const [textBadPassword, setTextBadPassword] = useState("hidden");
  const [invalidText, setInvalidText] = useState("");
  const [textResponse, setTextResponse] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);
  const [iconPassword, setIconPassword] = useState(IconShowPassword);
  const [iconPassword2, setIconPassword2] = useState(IconShowPassword);

  const Swal = require('sweetalert2')
  const firebase = new Firebase();
  const app = firebase.appInitialize();
  const auth = getAuth(app);

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
    if (iconPassword === IconShowPassword) {
      setIconPassword(IconHidePassword);
    } else {
      setIconPassword(IconShowPassword);
    }
  };

  const togglePassword2 = () => {
    setPasswordVisibility2(!passwordVisibility2);
    if (iconPassword2 === IconShowPassword) {
      setIconPassword2(IconHidePassword);
    } else {
      setIconPassword2(IconShowPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidText("");
    if (newPassword !== confirmPassword) {
      setInvalid("invalid");
      setInvalidText("invalid-text");
      setTextBadPassword("");
      setTextResponse("Las contraseñas no coinciden");
      return;
    }
    if (newPassword === "" || confirmPassword === "") {
      setInvalid("invalid");
      //setInvalidText("invalid-text");
      setTextBadPassword("");
      setTextResponse("Todos los campos son obligatorios");
      return;
    }
    if (newPassword.length < 8 && confirmPassword.length < 8) {
      setInvalid("invalid");
      setInvalidText("invalid-text");
      setTextBadPassword("");
      setTextResponse(
        "Ingrese una contraseña de al menos 8 caracteres. Esta debe contener al menos una Mayúscula, Minúscula y un número"
      );
      return;
    }


    let params = new URLSearchParams(document.location.search);

      // TODO: Implement getParameterByName()

      // Get the action to complete.
      let mode = params.get("mode");
      // Get the one-time code from the query parameter.
      const actionCode = params.get("oobCode");
      // (Optional) Get the continue URL from the query parameter if available.
      const continueUrl = params.get("");
      // (Optional) Get the language code if available.
      const lang = params.get("lang") || "en";

      // Handle the user management action.
      switch (mode) {
        case "resetPassword":
          // Display reset password handler and UI.
          handleResetPassword(auth, actionCode, continueUrl, lang);
          break;
        default:
        // Error: invalid mode.
      }

    //validar letra
    // if (
    //   newPassword.match(/^[a-zA-Z0-9]$/) &&
    //   confirmPassword.match(/^[a-zA-Z0-9]$/)
    // ) {
      
    // } else {
    //   setInvalid("invalid");
    //   setInvalidText("invalid-text");
    //   setTextBadPassword("");
    //   setTextResponse(
    //     "Ingrese una contraseña de al menos 8 caracteres. Esta debe contener al menos una Mayúscula, Minúscula y un número"
    //   );
    //   return;
    // }

    // //validar letra mayúscula
    // if (newPassword.match(/[A-Z]/) && confirmPassword.match(/[A-Z]/) ) {
    //   setInvalid("invalid");
    //   setInvalidText("invalid-text");
    //   setTextBadPassword("");
    //   setTextResponse(
    //     "Ingrese una contraseña de al menos 8 caracteres. Esta debe contener al menos una Mayúscula, Minúscula y un número"
    //   );
    //   return;
    // }

    // //validar numero
    // if (newPassword.match(/\d/) && confirmPassword.match(/\d/)) {
    //   setInvalid("invalid");
    //   setInvalidText("invalid-text");
    //   setTextBadPassword("");
    //   setTextResponse(
    //     "Ingrese una contraseña de al menos 8 caracteres. Esta debe contener al menos una Mayúscula, Minúscula y un número"
    //   );
    //   return;
    // }
  };

  function handleResetPassword(auth, actionCode, continueUrl, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.

    // Verify the password reset code is valid.
    verifyPasswordResetCode(auth, actionCode)
      .then((email) => {
        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.

        // Save the new password.
        confirmPasswordReset(auth, actionCode, newPassword)
          .then((resp) => {
            Swal.fire(
              AlertButton.dataAlertSuccess('Contraseña cambiada correctamente')
          ).then(() => {
              navigate('/login')
          })

            // Password reset has been confirmed and new password updated.

            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);

            // TODO: If a continue URL is available, display a button which on
            // click redirects the user back to the app via continueUrl with
            // additional state determined from that URL's parameters.
          })
          .catch((error) => {
            console.log(error);
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
          });
      })
      .catch((error) => {
        console.log(error);
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
      });
  }

  function handleNewPassword(e) {
    setNewPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between md:hidden">
      {/* div de la imagen */}
      <div className="bg-[#FCFBFF] bordeblur">
        <img
          className="mx-auto"
          src={ImageForgotPassword}
          alt="ImageForgotPassword"
        />
      </div>

      {/* div del contenido */}
      <div className="flex flex-col gap-10">
        {/* div del copy web */}
        <div className="text-center flex flex-col items-center gap-10">
          <h1 className="m-0 med-title">Restablecer contraseña</h1>
        </div>
        <form onSubmit={handleSubmit} id="resetpassword-form">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                className={`text-[#4D3483] sml-title ${invalidText}`}
                htmlFor="email"
              >
                Nueva contraseña
              </label>

              <div className="relative">
                <Input
                  id="password"
                  type={passwordVisibility ? "text" : "password"}
                  name="password"
                  onChange={handleNewPassword}
                  placeholder="Ingresar contraseña"
                  className={`w-full ${invalid}`}
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
            <div className="flex flex-col gap-2">
              <label
                className={`text-[#4D3483] sml-title ${invalidText}`}
                htmlFor="email"
              >
                Repetir contraseña
              </label>

              <div className="relative">
                <Input
                  id="newPassword"
                  type={passwordVisibility2 ? "text" : "password"}
                  name="password2"
                  onChange={handleConfirmPassword}
                  placeholder="Ingresar contraseña"
                  className={`w-full ${invalid}`}
                  required={1}
                />

                <img
                  className="shw-pass bg-white"
                  src={iconPassword2}
                  onClick={togglePassword2}
                  alt="icon"
                />
                <div className={`flex flex-row ${textBadPassword}`}>
                  <img src={IconWarning} alt="warning information" />
                  <p className="invalid-text-small">{textResponse}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* div de los botones */}
      <div className="flex flex-col mb-5">
        <button
          type="submit"
          form="resetpassword-form"
          className="bg-[#7064FF] text-white nrm-button"
          onClick={handleSubmit}
        >
          Confirmar contraseña
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
