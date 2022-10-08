import React, { useState } from "react";
import ImageForgotPassword from "../assets/images/img-restore-forgotpassword.svg";
import { Firebase } from "../utils/Firebase";
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const firebase = new Firebase();
  const app = firebase.appInitialize();
  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword != confirmPassword) {
      alert("Las constraseñas deben ser iguales");
      return;
    }

    document.addEventListener(
      "DOMContentLoaded",
      () => {
        // TODO: Implement getParameterByName()

        // Get the action to complete.
        // const mode = getParameterByName("mode");
        // Get the one-time code from the query parameter.
        // const actionCode = getParameterByName("oobCode");
        // (Optional) Get the continue URL from the query parameter if available.
        // const continueUrl = getParameterByName("continueUrl");
        // (Optional) Get the language code if available.
        // const lang = getParameterByName("lang") || "en";

        // Configure the Firebase SDK.
        // This is the minimum configuration required for the API to be used.
        // const config = {
        //   apiKey: "YOU_API_KEY", // Copy this key from the web initialization
        //   // snippet found in the Firebase console.
        // };
        // const app = initializeApp(config);
        // const auth = getAuth(app);

        // Handle the user management action.
        switch (mode) {
          case "resetPassword":
            // Display reset password handler and UI.
            handleResetPassword(auth, actionCode, continueUrl, lang);
            break;
          default:
          // Error: invalid mode.
        }
      },
      false
    );
  };

  function handleResetPassword(auth, actionCode, continueUrl, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.

    // Verify the password reset code is valid.
    verifyPasswordResetCode(auth, actionCode)
      .then((email) => {
        const accountEmail = email;

        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.

        // Save the new password.
        confirmPasswordReset(auth, actionCode, newPassword)
          .then((resp) => {
            console.log(resp);
            alert("cambiado correctamente")
            navigate(`/login`);


            


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
              <label className="text-[#4D3483] sml-title" htmlFor="email">
                Nueva contraseña
              </label>
              <input
                id="email"
                type="text"
                value={newPassword}
                name="email"
                onChange={handleNewPassword}
                className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
                placeholder="Ingresar contraseña"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#4D3483] sml-title" htmlFor="email">
                Repetir contraseña
              </label>
              <input
                id="email"
                type="text"
                value={confirmPassword}
                name="email"
                onChange={handleConfirmPassword}
                className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
                placeholder="Ingresar contraseña"
              />
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
