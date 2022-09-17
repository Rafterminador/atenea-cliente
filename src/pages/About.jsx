import React from "react";

import Profile from "../assets/images/profile.svg";
import AboutProfile from "../components/AboutProfile";

const About = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col w-[880px] h-[880px] ml-[144px] ">
          <div className="grid grid-cols-2">
            <h1 className="text-[51px] font-bold mt-[260px]">
              ¿Qué es Atenea?
            </h1>
            <div className="bg-[#DBD8FF] h-[4px] mt-[300px]  w-[257px]"></div>
          </div>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[190px]">
            Atenea es un proyecto social pensado y desarrollado para apoyar y
            facilitar las actividades cotidianas que se realizan dentro de un
            centro educativo.
          </p>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[190px]">
            Es una plataforma web cuyo fin es lograr la automatización en las
            tareas realizadas por las personas que utilizan Atenea para que las
            mismas puedan tener un mejor control de toda la información
            educativa que manejen.
          </p>
        </div>
        <div className="w-[880px] h-[880px] mt-[110px] bordeblurd">
          <img src={FirstImage} alt="firstimage" />
        </div>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className="w-[880px] h-[880px] mt-[110px] bordeblurd ml-[64px]">
          <img src={SecundImage} alt="firstimage" />
        </div>

        <div className="flex flex-col w-[800px] h-[880px] ml-[120px] ">
          <div className="grid grid-cols-2">
            <div className="bg-[#DBD8FF] h-[4px] mt-[300px]  w-[230px]"></div>
            <h1 className="text-[51px] font-bold mt-[260px] ml-[-160px]">
              ¿Para quiénes?
            </h1>
          </div>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[180px]">
            Atenea nació gracias a la colaboración entre Equipo Xapps y las
            personas de la Escuela Oficial Rural Mixta cantón el Llano, aldea
            Ocubilá, en Huehuetenango.
          </p>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[180px]">
            Por ello, Atenea fue concebida para apoyarles y solucionar problemas
            puntuales que presentaban al momento de llevar a cabo tareas
            educativas comunes como la toma y registro de notas y asistencias,
            la consulta de los boletines y el control en general de la
            información de los estudiantes y docentes que conforman la escuela.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col w-[880px] h-[880px] ml-[144px] ">
          <div className="grid grid-cols-2">
            <h1 className="text-[51px] font-bold mt-[260px]">¿Por quiénes?</h1>
            <div className="bg-[#DBD8FF] h-[4px] mt-[300px]  w-[312px] ml-[-60px]"></div>
          </div>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[190px]">
            Atenea fue desarrollado por Equipo Xapps, un equipo conformado por
            ocho estudiantes, de 5to año en Ingeniería en Informática y
            Sistemas, de la Universidad Rafel Landívar, Campus San Alberto
            Hurtado S. J., de Quetzaltenango.
          </p>
          <p className="text-[22px] font-sans text-justify mt-[28px] mr-[190px]">
            Para todos nosotros fue una experiencia importante y gratificante el
            poder haber tenido la oportunidad de colaborar en el desarrollo de
            este proyecto con las personas de la Escuela a lo largo de 5 meses,
            los cuales dieron fruto a esta plataforma web.
          </p>
        </div>
        <div className="w-[880px] h-[880px] mt-[110px] bordeblurd">
          <img src={SecundImage} alt="firstimage" />
        </div>
      </div> */}

      {/* <div className="items-center">
        <div className="grid grid-cols-3">
          <div className="bg-[#DBD8FF]  h-[4px] w-[720px] mt-[115px] ml-[70px]"></div>
          <h1 className="text-center font-bold text-[51px] my-[80px]">
            El Equipo
          </h1>
          <div className="bg-[#DBD8FF] h-[4px] w-[720px] mt-[116px] ml-[-175px]"></div>
        </div>

        <AboutProfile
          ruta={Profile}
          nombre={"Josué Méndez"}
          rol={"Product Owner & Backend Developer"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Fernando Juárez"}
          rol={"Frontend Manager"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Daniel Tistoj"}
          rol={"Backend Manager"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Luis Rodríguez"}
          rol={"Frontend Developer"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Manuel Villagrán"}
          rol={"Frontend Developer"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Fredy Mateo"}
          rol={"Frontend Developer"}
        />
        <AboutProfile
          ruta={Profile}
          nombre={"Jonathan Martínez"}
          rol={"Backend Developer"}
        />
      </div> */}
      <div>
        
      </div>
      <AboutProfile
        img={Profile}
        nombre={"Kelvin Cano"}
        rol={"Scrum Master & UI / UX Designer"}
      />
    </div>
  );
};

export { About };
