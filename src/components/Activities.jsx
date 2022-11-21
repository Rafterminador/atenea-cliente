import CursoNote from "./CursoNote";

const BoletinCard = (props) => {
  const unidad = props.unidad;

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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoletinCard;
