import React from 'react'
import HomeImg from "../assets/images/home.svg";
import ArrowDown from "../assets/images/arrow-down.svg";
import Image from "../components/Image";
import BottomNavbar from "../components/BottomNavbar";

export default function Home() {

  return (
    <div className="relative">
      <div className="home mx-5 text-center flex flex-col gap-32">
        <Image
          className={"bordeblur overflow-hidden flex justify-center"}
          type={1}
          image={HomeImg}
          alt={"Home"}
        />
        <div className=" flex flex-col gap-32 mb-4">
          <div className="flex flex-col gap-4">
            <h1>Bienvenido Director</h1>
            <p>
              Selecciona una de las opciones de abajo para empezar a utilizar
              Atenea
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src={ArrowDown} alt="Arrow Down" width={48} height={48} />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}
