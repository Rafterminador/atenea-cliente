import Button from "../components/Button";
import Input from "../components/Input";

export default function Profile({ handle }) {
  const userJSON = localStorage.getItem('usuario')
  const usuario = JSON.parse(userJSON)
  return (
    <div className={`account px-5 pt-6 flex flex-col justify-between`}>
      <div className="flex flex-col gap-5">
        <h2 className="text-[#4D3483] text-start font-semibold text-base">
          Correo
        </h2>
        <Input className={``} defaultValue={usuario.name} disabled={1} />
        <div className="flex flex-col gap-5">
          <h2 className="text-[#4D3483] text-start font-semibold text-base">
            Correo no registrado
          </h2>
        </div>
        <h2 className="text-[#4D3483] text-start font-semibold text-base">
          <Input className={`w-full`} defaultValue={usuario.number} disabled={1} />
        </h2>
      </div>
      <div className="mb-5">
        <Button
          typeButton={2}
          className={
            "bg-[#7064FF] rounded-[20px] text-white font-semibold text-xl"
          }
          onClick={handle}
          text={"Editar datos"}
        />
      </div>
    </div>
  );
}
