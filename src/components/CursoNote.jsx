import React from "react";

const CursoNote = (props) => {
  return (
    <>
      {props.link ? (
        <a
          href={props.link}
          className="flex flex-row justify-between mr-4 my-2 items-center"
        >
          <p className="text-[12.8px] text-[#4D3483] .sml-title">
            {props.name}
          </p>
          <p className="text-[16px] text-[#000000] .sml-text-2">{props.note}</p>
        </a>
      ) : (
        <div className="flex flex-row justify-between mr-4 my-2 items-center">
          <p className="text-[12.8px] text-[#4D3483] .sml-title">
            {props.name}
          </p>
          <p className="text-[16px] text-[#000000] .sml-text-2">{props.note}</p>
        </div>
      )}
    </>
  );
};

export default CursoNote;
