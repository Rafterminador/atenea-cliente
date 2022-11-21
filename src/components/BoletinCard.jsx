import CursoNote from "./CursoNote";

const BoletinCard = ({ firstUnit, areas }) => {
  // console.log("desde boletein",props.firstUnit.areas

  return (
    <div className="">
      <div className="bg-[#FFFFFF] bordercard my-6 mt-5 mb-5 ml-5 mr-5 pb-4 pt-4 pl-4 pr-4">
        <div className="">
          <div className="grid grid-cols-2 text-center">
            <p className="text-[#FFB55F] font-sans text-[12px] .sml-title">
              Curso
            </p>
            <p className="text-[#FFB55F] font-sans text-[12px] .sml-title ml-[75px]">
              Nota
            </p>
          </div>

          <div className="">
            {areas.map((area) => (
              <CursoNote
                key={area.area_name}
                name={area.area_name}
                note={area.score}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 ml-[80px]">
            <p className="text-[16px] opensansbold">Promedio</p>

            <p className="ml-[40px]">{`${firstUnit.average} pts`}</p>

            <p className="text-[16px] opensansbold">Inasistencias</p>

            <p className="ml-[50px]">{firstUnit.absences}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoletinCard;
