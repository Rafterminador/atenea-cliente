import React, { useState } from "react";
import ImageForgotPassword from "../assets/images/img-restore-forgotpassword.svg";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(newPassword + " " + confirmPassword);
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
                onChange={setNewPassword}
                className="nrm-text placeholder:text-[#7B7B7B] nrm-txtfld-border px-3 box-border h-[42px] focus:outline-2 focus:outline-[#A954FF]"
                placeholder="Ingresar contraseña"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#4D3483] sml-title" htmlFor="email">
                Nueva contraseña
              </label>
              <input
                id="email"
                type="text"
                value={confirmPassword}
                name="email"
                onChange={setConfirmPassword}
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
