import React, { useState, useEffect } from "react";
import Alumno from "../components/Alumno";
import Grado from "../components/Grado";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";

import { getAllStudents } from "../services/controllerDirector";
import { searchByStudentName } from "../utils/FunctionUtils";

const VerAlumno = () => {
  localStorage.removeItem("alumno");
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/cuenta/alumno");
  }

  const [prePrimariaPreKinder, setPrePrimariaPreKinder] = useState([]);
  const [prePrimariaKinder, setPrePrimariaKinder] = useState([]);
  const [prePrimariaParvulos, setPrePrimariaParvulos] = useState([]);
  const [primariaPrimero, setPrimariaPrimero] = useState([]);
  const [primariaSegundo, setPrimariaSegundo] = useState([]);
  const [primariaTercero, setPrimariaTerecero] = useState([]);
  const [primariaCuarto, setPrimariaCuarto] = useState([]);
  const [primariaQuinto, setPrimariaQuinto] = useState([]);
  const [primariaSexto, setPrimariaSexto] = useState([]);
  const [hidden, setHidden] = useState("my-[10px]");
  let [allStudents, setAllStudents] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    const handleGetAllStudents = async () => {
      let response = await getAllStudents();
      if (response.status === 200) {
        console.log(response.body);

        setPrePrimariaPreKinder(response.body.prePrimaria.preKinder.data);
        setPrePrimariaKinder(response.body.prePrimaria.kinder.data);
        setPrePrimariaParvulos(response.body.prePrimaria.parvulos.data);
        setPrimariaPrimero(response.body.primaria.primero.data);
        setPrimariaSegundo(response.body.primaria.segundo.data);
        setPrimariaTerecero(response.body.primaria.tercero.data);
        setPrimariaCuarto(response.body.primaria.cuarto.data);
        setPrimariaQuinto(response.body.primaria.quinto.data);
        setPrimariaSexto(response.body.primaria.sexto.data);
      } else {
        console.log(response.body);
      }
    };

    handleGetAllStudents();
  }, []);

  const handleSearchAlumno = (e) => {
    if (e.target.value === "") {
      setHidden("my-[10px]");
    } else {
      setHidden("my-[10px] hidden");
      let arrayAux = prePrimariaPreKinder
        .concat(prePrimariaKinder)
        .concat(prePrimariaParvulos)
        .concat(primariaPrimero)
        .concat(primariaSegundo)
        .concat(primariaTercero)
        .concat(primariaCuarto)
        .concat(primariaQuinto)
        .concat(primariaSexto);
      setAllStudents(arrayAux);
      // console.log("Concatenados", arrayAux);
      console.log("AllStudents", allStudents);
      allStudents = searchByStudentName(arrayAux, e.target.value);
      setAllStudents(allStudents);
      console.log("AllStudents", allStudents);
    }
  };

  return (
    <>
      <div className="contenedor contenedor-admin mb-[80px]">
        <SearchBar
          onChange={handleSearchAlumno}
          placeholder="Buscar un Alumno"
        />
        <div className={hidden}>
          <Grado grado={"PreKinder"} total={prePrimariaPreKinder.length} />

          {prePrimariaPreKinder.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}

          <Grado grado={"Kinder"} total={prePrimariaKinder.length} />
          {prePrimariaKinder.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}

          <Grado grado={"Parvulos"} total={prePrimariaParvulos.length} />
          {prePrimariaParvulos.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}

          <Grado grado={"Primero primaria"} total={primariaPrimero.length} />
          {primariaPrimero.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
          <Grado grado={"Segundo primaria"} total={primariaSegundo.length} />
          {primariaSegundo.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
          <Grado grado={"Tercero primaria"} total={primariaTercero.length} />
          {primariaTercero.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
          <Grado grado={"Cuarto primaria"} total={primariaCuarto.length} />
          {primariaCuarto.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
          <Grado grado={"Quinto primaria"} total={primariaQuinto.length} />
          {primariaQuinto.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}

          <Grado grado={"Sexto primaria"} total={primariaSexto.length} />
          {primariaSexto.slice(0, 4).map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
        </div>
        <div className="my-[10px]">
          {allStudents.map((estudiante) => (
            <Alumno
              nombre={estudiante.name}
              uid={estudiante.uid}
              key={estudiante.uid}
            />
          ))}
        </div>
        <AddButton function={handleAdd} />
      </div>
    </>
  );
};

export default VerAlumno;
