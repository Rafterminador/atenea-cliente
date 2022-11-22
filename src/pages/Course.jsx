import { useEffect, useState } from "react";
import Button from "../components/Button";
import Units from "../components/Units";
import Retroceder from "../components/Retroceder";
import { useNavigate } from "react-router-dom";
import { GetUnityActivities } from "../services/controllerDocentes";
import usePdfExport from "../hook/usePdfExport";
import Spinner from "../components/Spinner";
export default function Course() {
  localStorage.removeItem("activityInfo");
  const [myUnityOne, setMyUnityOne] = useState([]);
  const [myUnityTwo, setMyUnityTwo] = useState([]);
  const [myUnityTrhee, setMyUnityThree] = useState([]);
  const [myUnityFour, setMyUnityFour] = useState([]);
  let infoareaJSON = localStorage.getItem("areainfo");
  let useAreaInfo = JSON.parse(infoareaJSON);

  const { getAreaDownloadNotes, cargando } = usePdfExport();

  const navigate = useNavigate();
  function handleClick() {
    navigate("/grades/teacher/courses/new/activity");
  }

  const handleExportarPdf = async () => {

    await getAreaDownloadNotes(useAreaInfo.uid, useAreaInfo.value);


 }

  useEffect(() => {
    // Update the document title using the browser API
    let areaUnityJSON = localStorage.getItem("areainfo");
    let useUnity = JSON.parse(areaUnityJSON);

    const handleMyGrades = async () => {
      let response = await GetUnityActivities(useUnity.uid);
      if (response.status === 200) {
        console.log(response.body);
        setMyUnityOne(response.body.activities.unit1);
        setMyUnityTwo(response.body.activities.unit2);
        setMyUnityThree(response.body.activities.unit3);
        setMyUnityFour(response.body.activities.unit4);

        // console.log(myUnityOne);
        // console.log(myUnityTwo);
        // console.log("ver numero", myUnityTrhee.length);
        // console.log(myUnityFour);
      } else {
        console.log(response);
      }
    };
    setTimeout(() => {
      handleMyGrades();
    }, 2000);
  }, []);

  return (
    <div>
      <Retroceder text={useAreaInfo.value} count="2" />

      <div className="m-5">
        <Units unidad={"Primera unidad"} data={myUnityOne} count={myUnityOne.length}/>
        <Units unidad={"Segunda unidad"} data={myUnityTwo} count={myUnityTwo.length}/>
        <Units unidad={"Tercera unidad"} data={myUnityTrhee} count={myUnityTrhee.length}/>
        <Units unidad={"Cuarta unidad"} data={myUnityFour} count={myUnityFour.length}/>
      </div>

      {cargando ? (
        <div className=" top-[720px] left-5 right-5 mt-[100px] m-5">
        <Button
          text="Añadir actividad"
          typeButton={"button-type-2"}
          onClick={handleClick}
        />
        <Button
        className="mt-4"
          text="Exportar notas"
          typeButton={"button-type-2"}
          onClick={handleExportarPdf}
        />
      </div>
      ) : (
        <>
        <Spinner  className="contenedor-admin w-full mb-5 fixed bottom-0" />
        <p className="contenedor-admin w-full text-center justify-center font-extrabold">Exportando Notas</p>
        </>
      )}

      
    </div>
  );
}
