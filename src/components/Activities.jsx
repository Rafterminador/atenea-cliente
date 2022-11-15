import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CursoNote from "./CursoNote";
// import { GetUnityActivities } from "../services/controllerDocentes";

const BoletinCard = (props) => {
  const navigate = useNavigate();
  const unidad = props.unidad
  // const [myUnity, setMyUnitys] = useState([]);
  // const [myUnityOne, setMyUnityOne] = useState([]);
  // const [myUnityTwo, setMyUnityTwo] = useState([]);
  // const [myUnityTrhee, setMyUnityThree] = useState([]);
  // const [myUnityFour, setMyUnityFour] = useState([]);
  // setMyUnitys(props.data)
  // console.log("ver estos datos", props.data)

  function handleClick(e) {
    const activityInfoJSON = JSON.stringify(props);
    localStorage.setItem("activityInfo", activityInfoJSON);
    navigate("/grades/teacher/courses/activity/edit");
  }

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   let areaUnityJSON = localStorage.getItem("areainfo");
  //   let useUnity = JSON.parse(areaUnityJSON);

  //   const handleMyGrades = async () => {
  //     let response = await GetUnityActivities(useUnity.uid);
  //     if (response.status === 200) {
  //       console.log(response.body);
  //       setMyUnitys(response.body.activities.unit1);
  //       setMyUnityOne(response.body.activities.unit1);
  //       setMyUnityTwo(response.body.activities.unit2);
  //       setMyUnityThree(response.body.activities.unit3);
  //       setMyUnityFour(response.body.activities.unit4);

  //       console.log(myUnityOne);
  //       console.log(myUnityTwo);
  //       console.log(myUnityTrhee);
  //       console.log(myUnityFour);
  //     } else {
  //       console.log(response);
  //           }
  //   };
  //   handleMyGrades();
  // }, []);

  return (
    <div>
      <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
        <div className="grid grid-cols-2 text-center">
          <p className="text-[#FFB55F] font-sans text-[12px] .sml-title">
            Actividad
          </p>
          <p className="text-[#FFB55F] font-sans text-[12px] .sml-title ml-[75px]">
            Pts.
          </p>
        </div>

        <div>
          {props.data.map((actividad) => (
            <CursoNote
              name={actividad.activity_name}
              note={actividad.activity_value}
              idactivity={actividad.id}
              unidad={unidad}
              key={actividad.id}
              // onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoletinCard;
