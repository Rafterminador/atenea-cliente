import Eye from "../assets/images/eye.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "../components/Image";

export default function EditProfile({ handle }) {
  function handleEye(e) {
    e.preventDefault();
    let type = e.currentTarget.parentNode.previousElementSibling.type;
    if (type === "password") {
      e.currentTarget.parentNode.previousElementSibling.type = "text";
    } else {
      e.currentTarget.parentNode.previousElementSibling.type = "password";
    }
  }
  return (
    <div className={`account mx-5 pt-6 flex flex-col justify-between`}>
      <div>
        <form>
          <div className="flex flex-col gap-5">
            <label
              htmlFor="user"
              className="text-[#4D3483] font-semibold text-base"
            >
              Usuario
            </label>
            <Input
              className={
                "flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2"
              }
              id={"user"}
              type={"text"}
              name={"user"}
              disabled={false}
              required={true}
            />
            <label
              htmlFor="email"
              className="text-[#4D3483] font-semibold text-base"
            >
              Correo
            </label>
            <Input
              className={
                "flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2"
              }
              id={"email"}
              type={"email"}
              name={"email"}
              disabled={false}
              required={true}
            />
            <label
              htmlFor="password"
              className="text-[#4D3483] font-semibold text-base"
            >
              Contraseña
            </label>
            <div className="relative h-12">
              <Input
                className={
                  "w-full flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2"
                }
                id={"password"}
                type={"password"}
                name={"password"}
                disabled={false}
                required={true}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button onClick={handleEye}>
                  <Image type={0} image={Eye} alt={"Eye"} />
                </button>
              </div>
            </div>
            <label
              htmlFor="password"
              className="text-[#4D3483] font-semibold text-base"
            >
              Repetir contraseña
            </label>
            <div className="h-12">
              <Input
                className={
                  "w-full flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2"
                }
                id={"repeatPassword"}
                type={"password"}
                name={"repeatPassword"}
                disabled={false}
                required={true}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mb-5">
        <Button
          typeButton={"button-type-1"}
          className={
            "box-border border-2 border-solid border-[#7064FF] rounded-[20px] text-[#7064FF] font-semibold text-xl mb-5 h-[49px]"
          }
          type={"button"}
          onClick={handle}
          text={"Cancelar"}
        />
        <Button
          typeButton={"button-type-2"}
          className={
            "box-border border-2 border-solid border-[#7064FF] rounded-[20px] text-[#7064FF] font-semibold text-xl mb-5 h-[49px]"
          }
          type={"button"}
          text={"Actualizar datos"}
        />
      </div>
    </div>
  );
}
