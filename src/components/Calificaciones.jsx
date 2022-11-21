import GradeAssigned from "./GradeAssigned";
import Spinner from "./Spinner";

export default function Calificaciones({ info }) {
  return (
    <>
      <h1 className="h1-administracion">Calificar a</h1>
      {!!info ? (
        info.map((item, index) => {
          return (
            <GradeAssigned
              grade={item.grade_name}
              alumnos={item.size}
              id={item.id}
              url={index}
              key={item.id}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
}
