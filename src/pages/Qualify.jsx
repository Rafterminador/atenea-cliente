import Retroceder from "../components/Retroceder";
import ComboBox from "../components/ComboBox";
import Button from "../components/Button";
import Input from "../components/Input";
import Swal from "sweetalert2";
import { AlertButton } from "../utils/AlertButton";
import { useNavigate, useParams } from "react-router-dom";
import Sign from "../assets/images/sign.svg";
import { useState } from "react";
import { useEffect } from "react";
import { postScores } from "../services/controllerDocentes";
import uuid from "react-uuid";

const unidades = [
  "Primera unidad",
  "Segunda unidad",
  "Tercera unidad",
  "Cuarta unidad",
];

let actividades = [];

export default function Qualify() {
  const [estudiantes, setEstudiantes] = useState([{}]);
  const [areas, setAreas] = useState([]);
  const [indice, setIndice] = useState("");
  const [calificados, setCalificados] = useState([]);
  const [grado, setGrado] = useState({});
  const [seleccionados, setSeleccionados] = useState({
    curso: "",
    unidad: "",
    actividad: "",
  });
  const navigate = useNavigate();
  const { student } = useParams();

  useEffect(() => {
    const getGrados = localStorage.getItem("grados");
    const getArea = localStorage.getItem("areas");
    const getActividad = localStorage.getItem("actividades");
    const area = JSON.parse(getArea)[student];
    const actividad = JSON.parse(getActividad)[student];
    const informacion = JSON.parse(getGrados)[student];
    setGrado(informacion);
    setEstudiantes(informacion.students);
    setAreas(area);
    setCalificados(
      informacion.students.map(({ id }) => ({ studentRef: id, score: "" }))
    );
    actividades = actividad;
  }, []);

  function handleChange(e, key) {
    const nota = e.target.value;
    const calificado = calificados.map((item) => {
      if (item.studentRef === key) {
        item.score = nota;
      }
      return item;
    });
    setCalificados([...calificado]);
  }

  function unidadSeleccionada(data) {
    const id = unidades.indexOf(data);
    setIndice(`unit${id + 1}`);
    setSeleccionados({ ...seleccionados, unidad: data });
  }

  function cursoSeleccionado(data) {
    setSeleccionados({ ...seleccionados, curso: data });
  }

  function actividadSeleccionada(data) {
    setSeleccionados({ ...seleccionados, actividad: data });
  }

  async function handleClick(e) {
    e.preventDefault();
    const sinCalificar = calificados.some((item) => item.score === "");
    if (
      sinCalificar ||
      seleccionados.curso === "" ||
      seleccionados.unidad === "" ||
      seleccionados.actividad === ""
    ) {
      Swal.fire(
        AlertButton.dataAlertSuccessOneButton(
          "¡Cuidado!",
          "Aún quedan alumnos por chequear",
          Sign
        )
      );
    } else {
      const idActivity = actividades[indice].find(
        (item) => item.activity_name === seleccionados.actividad
      );
      const post = {
        activityRef: idActivity.id,
        scores: calificados,
      };
      const response = await postScores(post);
      if (response.status === 200) {
        Swal.fire(AlertButton.dataAlertSuccess("Datos actualizados")).then(
          () => {
            navigate(-1);
          }
        );
      } else {
        Swal.fire(
          AlertButton.dataAlertSuccessOneButton(
            "Algo salio mal!",
            "Intente de nuevo",
            Sign
          )
        );
      }
    }
  }

  const displayStudents = estudiantes.map((item) => (
    <div key={uuid()} className="flex justify-between text-start">
      <p key={uuid()}>{item.name_student}</p>
      <Input
        className={
          "font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 w-1/3"
        }
        onChange={(e) => handleChange(e, item.id)}
        id={"qualify"}
        type={"number"}
        name={"qualify"}
        disabled={false}
        required={true}
        key={uuid()}
      />
    </div>
  ));

  return (
    <div>
      <Retroceder text="Calificar actividad" />
      <div className="contenedor-admin text-center">
        <p>
          Calificaciones de:{" "}
          <span className="font-bold">{grado.grade_name}</span>
        </p>
        <div className="flex flex-col gap-3 text-start mt-5">
          <label htmlFor="teacher">Curso</label>
          <ComboBox
            teachers={!!areas ? areas.map((item) => item?.activity_name) : [""]}
            valueByDefault={"Seleccionar curso"}
            function={cursoSeleccionado}
          />
          <label htmlFor="name">Unidad</label>
          <ComboBox
            teachers={unidades}
            valueByDefault={"Seleccionar unidad"}
            function={unidadSeleccionada}
          />
          <label htmlFor="score">Actividad</label>
          <ComboBox
            teachers={
              !!actividades[0]
                ? actividades.map((item) => item?.activity_name)
                : [""]
            }
            valueByDefault={"Seleccionar actividad"}
            function={actividadSeleccionada}
          />
        </div>
        <div className="flex flex-col gap-5 mt-10">{displayStudents}</div>
      </div>
      <div className="contenedor-admin w-screen mb-5 fixed bottom-0 flex flex-col gap-5">
        <Button
          typeButton={"button-type-2"}
          type={"submit"}
          text={"Confirmar calificaciones"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
