import "../css/Spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 top-[232px]">
      <div className="lds-ring">
        <div></div>
        <div></div>
      </div>
      <p className="sml-title text-[#8981F9]">
        Cargando <span className="text-[#7064FF]">...</span>
      </p>
    </div>
  );
};

export default Spinner;
