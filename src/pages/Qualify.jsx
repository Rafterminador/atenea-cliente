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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const unidades = [
  "Primera unidad",
  "Segunda unidad",
  "Tercera unidad",
  "Cuarta unidad",
];

// let actividades = [];

export default function Qualify() {
  const [estudiantes, setEstudiantes] = useState([{}]);
  const [areas, setAreas] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [indiceUnidad, setIndiceUnidad] = useState();
  const [indiceCurso, setIndiceCurso] = useState();
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
      informacion.students.map(({ id }) => ({ studentRef: id, score: "1" }))
    );
    setActividades(actividad);
  }, [student]);

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
    setIndiceUnidad(`unit${id + 1}`);
    setSeleccionados({ ...seleccionados, unidad: data });
  }

  function cursoSeleccionado(data) {
    const id = areas.indexOf(data);
    setIndiceCurso(id);
    setSeleccionados({ ...seleccionados, curso: data });
  }

  function actividadSeleccionada(data) {
    setSeleccionados({ ...seleccionados, actividad: data });
  }

  async function handleClick(e) {
    e.preventDefault();
    const sinCalificar = calificados.some((item) => item.score === "");
    console.log("calificados", calificados);
    if (
      sinCalificar ||
      seleccionados.curso === "" ||
      seleccionados.unidad === "" ||
      seleccionados.actividad === ""
    ) {
      Swal.fire(
        AlertButton.dataAlertSuccessOneButton(
          "¡Cuidado!",
          "Aún quedan campos vacios",
          Sign
        )
      );
    } else {
      const idActivity = actividades[indiceCurso][indiceUnidad].find(
        (item) => item.activity_name === seleccionados.actividad
      );
      const post = {
        activityRef: idActivity.id,
        scores: calificados,
      };
      const response = await postScores(post);
      console.log("post", post);
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

  return (
    <div>
      {/* {actividades[0]["unit1"].map((item) => console.log(item.activity_name))} */}
      <Retroceder text="Calificar actividad" />
      <div className="contenedor-admin text-center">
        <p>
          Calificaciones de:{" "}
          <span className="font-bold">{grado.grade_name}</span>
        </p>
        <div className="flex flex-col gap-3 text-start mt-5">
          <label htmlFor="teacher">Curso</label>
          <ComboBox
            teachers={areas}
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
            // teachers={[]}
            teachers={
              indiceCurso !== undefined && indiceUnidad
                ? actividades[indiceCurso][indiceUnidad].map(
                  (item) => item.activity_name
                )
                : []
            }
            valueByDefault={"Seleccionar actividad"}
            function={actividadSeleccionada}
          />
        </div>
        <Swiper
          // install Swiper modules
          // modules={[Pagination, Scrollbar, A11y]}
          // pagination
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          pagination={{
            type: "fraction",
            clickable: true,
          }}
          //navigation={true}
          modules={[Pagination, Navigation]}
        >
          {estudiantes.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center gap-10 border-2 border-grey border-solid py-8 px-5 mt-10 mb-14 rounded-xl">
                <p className=" font-normal text-2xl">{item.name_student}</p>
                <Input
                  className={"w-full"}
                  onChange={(e) => handleChange(e, item.id)}
                  id={"qualify"}
                  type={"number"}
                  name={"qualify"}
                  disabled={false}
                  required={true}
                  placeholder="Ingresar calificación"
                  key={item.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
