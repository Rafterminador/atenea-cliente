import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../src/assets/images/chevron_left.svg";
import Email from "../../src/assets/images/mail.svg";
import Tel from "../../src/assets/images/tel.svg";
import GradoIcon from "../../src/assets/images/classes.svg";

const AccountPage = ({id, name, tel, grados}) => {
  return (
    <section className="h-screen">
      <div className="p-4 flex justify-between border-b  border-b-[#DBD8FF]">
        <Link to='/docentes'>
          <div className="flex space-x-2">
            <img src={arrowLeft} alt = "arrowleft"/>
            <p className="text-[#7064FF]">Atrás</p>
          </div>
        </Link>

        <p className="font-bold text-sm">Baltazar Anais Bustamante Espinoza</p>
      </div>

      <div className="m-6 rounded-xl bordeblurd">
        <div className="p-8">
          <p className="font-bold text-[#4D3483] text-lg mb-2">Contacto</p>
          <div className="flex space-x-5 mb-2">
            <img src={Email}  alt = "correo" />
            <p>rubenasj43@gmail.com</p>
          </div>

          <div className="flex space-x-5">
            <img src={Tel} alt = "telefono" />
            <p>5898 2548</p>
          </div>
        </div>
      </div>

      <div className="m-6 rounded-xl bordeblurd">
        <div className="p-8">
          <p className="font-bold text-[#4D3483] text-lg mb-2">
            Grados a Cargo
          </p>
          <div className="flex space-x-5 mb-2">
            <img src={GradoIcon} alt = "cuarto"/>
            <p>Cuato Primaria</p>
          </div>
          <div className="flex space-x-5 mb-2">
            <img src={GradoIcon} alt = "quinto"/>
            <p>quinto primaria</p>
          </div>
          <div className="flex space-x-5 mb-2">
            <img src={GradoIcon} alt = "sexto"/>
            <p>sexto Primaria</p>
          </div>
        </div>
      </div>

      <div className="border-2  rounded-full border-[#FF54B0] absolute bottom-10 w-full z-50">
        <button className="text-[#FF54B0] cursor-pointer">
          Deshabilitar Docente
        </button>
      </div>
    </section>
  );
};

export default AccountPage;
