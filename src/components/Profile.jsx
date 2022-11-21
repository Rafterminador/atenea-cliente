import Button from "../components/Button";
import Input from "../components/Input";

export default function Profile({ handle }) {
  const userJSON = localStorage.getItem('usuario')
  const usuario = JSON.parse(userJSON)
  return (
    <div className={`account px-5 pt-6 flex flex-col justify-between`}>
      <div>
        <div className="mb-[16px]">
          <h2 className="text-[#696262] text-start font-semibold text-[16px] mb-[8px]">
            Correo
          </h2>
          <Input className={"w-full"} defaultValue={usuario.email} disabled={1} />
        </div>
        <div className="mb-[16px]">
          <h2 className="text-[#696262] text-start font-semibold text-[16px] mb-[8px]">
            Número telefónico
          </h2>
          <Input className={`w-full`} defaultValue={usuario.number} disabled={1} />
        </div>
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
