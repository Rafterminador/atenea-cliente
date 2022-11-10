import "../css/Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center flex-none self-stretch flex-grow order-1">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="lds-ring">
          <div></div>
          <div></div>
        </div>
        <p className="sml-title text-[#8981F9]">
          Cargando <span className="text-[#7064FF]">...</span>
        </p>
      </div>
    </div>
  );
};

export default Spinner;
