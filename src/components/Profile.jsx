import Eye from "../assets/images/eye.svg";

export default function Profile({ handle }) {
  return (
    <div className={`account px-5 pt-6 flex flex-col justify-between`}>
      <div className="flex flex-col gap-5">
        <h2 className="text-[#4D3483] font-semibold text-base">Usuario</h2>
        <p className="text-[#7B7B7B] font-normal text-base">pepito45</p>
        <h2 className="text-[#4D3483] font-semibold text-base">Correo</h2>
        <p className="text-[#7B7B7B] font-normal text-base">
          Correo no registrado
        </p>
        <h2 className="text-[#4D3483] font-semibold text-base">Contraseña</h2>
        <div className="flex justify-between">
          <p className="text-[#7B7B7B] font-normal text-base">
            • • • • • • • •
          </p>
          <img src={Eye} alt="Eye" />
        </div>
      </div>
      <div className="mb-5">
        <button
          onClick={handle}
          className="bg-[#7064FF] rounded-[20px] text-white font-semibold text-xl"
        >
          Editar datos
        </button>
      </div>
    </div>
  );
}
