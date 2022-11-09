import React from "react";
import TopBar from "../components/TopBar";

const TestComponents = () => {
  return (
    <>
      <div>
        <TopBar
          variant="primary"
          text="Cuenta"
        />
      </div>
      <div>
        <TopBar
          variant="secondary"
          text="Toma de asistencia abcdefghijklmnopqrasdasdasdasdadsadss"
        />
         <TopBar    
          text="Toma de  abcdefghijklmnopqrasdasdasdasdadsadss"
        />
      </div>
      
    </>
  );
};

export default TestComponents;
