import React from "react";
import ImageLoginDesktop from "../assets/images/check.svg";
const Check = () => {
  return (
    <div className="mx-5 min-h-screen flex flex-col justify-between md:hidden">
      {/* div de la imagen */}
      <div className="bg-[#FCFBFF] bordeblur">
        <img className="mx-auto" src={ImageLoginDesktop} alt="Registros" />
      </div>

      <div className="text-center flex flex-col items-center gap-10">
        <h1 className="m-0 med-title">Revise su correo electrónico</h1>
        <p className="nrm-text">
          Hemos enviado un enlace a su correo para que pueda restablecer su
          contraseña, por favor abra su aplicación de correo preferida e ingrese
          al enlace
        </p>
      </div>

      <div>
        <p className="sml-text text-center mb-5">
          ¿No recibió un correo electrónico? Si es asi, por favor revise el
          apartado de Spam de su correo
        </p>
      </div>
    </div>
  );
};

export default Check;
